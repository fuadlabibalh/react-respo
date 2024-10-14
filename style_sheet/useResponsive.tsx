import { DeviceScreens } from "../device_screen/deviceScreen"
import useDeviceScreen from "../device_screen/useDeviceScreen"
import React from "react"
interface CondsCss {
  condition: boolean,
  style: React.CSSProperties
}

interface setCondision { (device: DeviceScreens): CondsCss }

function gerResp(styleDef: React.CSSProperties, ...setConds: setCondision[]) {
  const device = useDeviceScreen()
  let result = {...styleDef}
  for(let i: number = 0; i < setConds.length; i++){
    let func = setConds[i]
    let temp = func(device)
    if(temp.condition) result = {...result, ...temp.style}
  }
  return result;
}

export const useResponsive = () => gerResp

