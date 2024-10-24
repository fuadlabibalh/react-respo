import { ScreenType } from '../device_screen';
import React from 'react';
export interface ResponsiveScreenStyle {
    default: React.CSSProperties;
    sm?: React.CSSProperties;
    md?: React.CSSProperties;
    hd?: React.CSSProperties;
    fullhd?: React.CSSProperties;
    u2K?: React.CSSProperties;
    u4K?: React.CSSProperties;
}
export interface OrientationResponsiveStyle {
    lanscape?: ResponsiveScreenStyle;
    potret?: ResponsiveScreenStyle;
}
export interface DeviceStyleConfig {
    current: ResponsiveScreenStyle;
    mobile?: OrientationResponsiveStyle;
    pc?: OrientationResponsiveStyle;
}
export declare const concateWithOrientation: (result: any, confOrientation: ResponsiveScreenStyle, screenType: ScreenType) => any;
export interface Current<T> {
    default: T;
    sm?: T;
    md?: T;
    hd?: T;
    fullhd?: T;
    u2k?: T;
    u4k?: T;
}
export interface Orientation<T> {
    lanscape?: Current<T>;
    potret?: Current<T>;
}
export interface ConfigValue<V> {
    current: Current<V>;
    mobile?: Orientation<V>;
    pc?: Orientation<V>;
}
export declare function switcherValue<T>(configValue: Current<T>, screenType: ScreenType): T;
