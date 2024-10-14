import { ScreenType } from '../device_screen/deviceScreen'
import React from 'react'

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

