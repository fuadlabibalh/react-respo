import React, { useEffect, useState } from 'react'
import { DeviceScreens } from "../device_screen"
import { useDeviceScreen } from "../device_screen";

/**
 * @typedef {CondsCss}
 */
export interface CondsCss {
  condition: boolean,
  style: React.CSSProperties
}
/**
 * @callback 
 * @typedef {setCondision}
 */

export interface setCondision { (context: CssElementContext): CondsCss }

/**
 * param length is not identification
 * use can passing callback more.
 * css will be generate and replace with condition you can be device like conditional in react with state etc.
 * @param styleDef @callback @type {func (context: CssElementContext): React.CSSProperties}
 * @param setConds @callback @type {setCondision}
 * @returns {React.CSSProperties}
 */

export interface CssEvent {
  hover: boolean,
  click: boolean
}
export interface CssElementContext extends DeviceScreens {
  event: CssEvent
}

function gerResp(styleDef: (context: CssElementContext) => React.CSSProperties, ...setConds: setCondision[]): React.CSSProperties {
  const [event, setEvent] = useState<CssEvent>({
    hover: false,
    click: false
  })

  const device = useDeviceScreen();

  const handleMouseEnter = () => {
    setEvent({ ...event, hover: true })
  }
  const handleMouseLeave = () => {
    setEvent({ ...event, hover: false })
  }
  const handleMouseClick = () => {
    setEvent({ ...event, click: true })
    setTimeout(() => setEvent({ ...event, click: false }), 300)
  }

  useEffect(() => {
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleMouseClick)

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleMouseClick)

    }
  }, [])
  let result: React.CSSProperties = { ...styleDef({ ...device, event }), transition: "all 300ms easy-in-out" }
  for (let i: number = 0; i < setConds.length; i++) {
    let func = setConds[i]
    let temp = func({...device, event})
    if (temp.condition) result = { ...result, ...temp.style, transition: "all 300ms easy-out-in" }
  }
  return result;
}
/**
 * get function to generate CSS @function gerResp
 * param length is not identification
 * use can passing callback more.
 * css will be generate and replace with condition you can be device like conditional in react with state etc.
 * @param styleDef @callback @type {func (device: DeviceScreens): React.CSSProperties}
 * @param setConds @callback @type {setCondision}
 * @returns {React.CSSProperties}
 * @returns @function gerResp
 */
export const useResponsive = () => gerResp

