import { ScreenType } from '../device_screen'
import React from 'react'
import { DeviceScreens } from "../device_screen"
import { useDeviceScreen } from "../device_screen";
import { OSDevice, ScreenOrientation } from "../device_screen"

export interface ResponsiveScreenStyle {
  default: React.CSSProperties
  sm?: React.CSSProperties
  md?: React.CSSProperties
  hd?: React.CSSProperties
  fullhd?: React.CSSProperties
  u2K?: React.CSSProperties
  u4K?: React.CSSProperties
}

export interface OrientationResponsiveStyle {
  lanscape?: ResponsiveScreenStyle
  potret?: ResponsiveScreenStyle
}

export interface DeviceStyleConfig {
  current: ResponsiveScreenStyle
  mobile?: OrientationResponsiveStyle
  pc?: OrientationResponsiveStyle
}

export const concateWithOrientation = (
  result: any,
  confOrientation: ResponsiveScreenStyle,
  screenType: ScreenType
) => {
  result = { ...result, ...confOrientation.default }
  if (screenType <= ScreenType.SMALL) {
    result = { ...result, ...confOrientation!.sm! }
  }
  if (screenType >= ScreenType.STANDAR) {
    result = { ...result, ...confOrientation!.md! }
  }
  if (screenType >= ScreenType.HD) {
    result = { ...result, ...confOrientation!.hd! }
  }
  if (screenType >= ScreenType.FULLHD) {
    result = { ...result, ...confOrientation!.fullhd! }
  }
  if (screenType >= ScreenType.U2K) {
    result = { ...result, ...confOrientation!.u2K! }
  }
  if (screenType >= ScreenType.U4K) {
    result = { ...result, ...confOrientation!.u4K! }
  }
  return result
}



export interface Current<T> {
  default: T,
  sm?: T,
  md?: T,
  hd?: T,
  fullhd?: T,
  u2k?: T,
  u4k?: T
}
export interface Orientation<T>{
  lanscape?: Current<T>,
  potret?: Current<T>
}
export interface ConfigValue <V> {
  current: Current<V>,
  mobile?: Orientation<V>,
  pc?: Orientation<V>
}


export function switcherValue<T>(configValue: Current<T>, screenType: ScreenType){
  let result = configValue.default
  if(screenType >= ScreenType.STANDAR){
    result = configValue.md!
  }
  if(screenType >= ScreenType.HD){
    result = configValue.hd!
  }
  if(screenType >= ScreenType.FULLHD){
    result = configValue.fullhd!
  }
  if(screenType >= ScreenType.U2K){
    result = configValue.u2k!
  }
  if(screenType >= ScreenType.U4K){
    result = configValue.u4k!
  }
  return result
}


export interface CondsCss {
  condition: boolean,
  style: React.CSSProperties
}

export interface setCondision { (device: DeviceScreens): CondsCss }

function gerResp(styleDef: (device: DeviceScreens)=> React.CSSProperties, ...setConds: setCondision[]) {
  const device = useDeviceScreen()
  let result = {...styleDef(device)}
  for(let i: number = 0; i < setConds.length; i++){
    let func = setConds[i]
    let temp = func(device)
    if(temp.condition) result = {...result, ...temp.style}
  }
  return result;
}

export const useResponsive = () => gerResp

const useCss = (configStyle: DeviceStyleConfig | null) => {
  let result = { ...configStyle?.current?.default!, transition: "all 0.25s" };
  const { orientation, type, os } = useDeviceScreen();
  result = concateWithOrientation(result, configStyle?.current!, type);
  if (
    configStyle?.pc!! &&
    (os === OSDevice.WIN ||
      os === OSDevice.DARWIN ||
      os === OSDevice.LINUX ||
      os === OSDevice.MAC ||
      os === OSDevice.NOT_IDENTIFICATION)
  ) {
    if (orientation === ScreenOrientation.LANDSCAPE) {
      result = { ...result, ...configStyle.pc.lanscape };
      result =
        configStyle.pc!.lanscape! &&
        concateWithOrientation(result, configStyle.pc!.lanscape!, type);
    }
    if (orientation === ScreenOrientation.POTRET) {
      result = { ...result, ...configStyle.pc.potret };
      result =
        configStyle.pc!.potret! &&
        concateWithOrientation(result, configStyle.pc!.potret!, type);
    }
  }
  if (
    configStyle?.mobile!! &&
    (os === OSDevice.ANDROID || os === OSDevice.IOS)
  ) {
    if (orientation === ScreenOrientation.LANDSCAPE) {
      result = { ...result, ...configStyle.mobile.lanscape };
      result =
        configStyle.mobile!.lanscape! &&
        concateWithOrientation(result, configStyle.mobile!.lanscape!, type);
    }
    if (orientation === ScreenOrientation.POTRET) {
      result = { ...result, ...configStyle.mobile.potret };
      result =
        configStyle.mobile!.potret! &&
        concateWithOrientation(result, configStyle.mobile!.potret!, type);
    }
  }
  return result;
};

export const useCssGenerator = () => useCss;