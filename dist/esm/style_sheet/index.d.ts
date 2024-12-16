import React from 'react';
import { DeviceScreens } from "../device_screen";
/**
 * @typedef {CondsCss}
 */
export interface CondsCss {
    condition: boolean;
    style: React.CSSProperties;
}
/**
 * @callback
 * @typedef {setCondision}
 */
export interface setCondision {
    (device: DeviceScreens): CondsCss;
}
/**
 * param length is not identification
 * use can passing callback more.
 * css will be generate and replace with condition you can be device like conditional in react with state etc.
 * @param styleDef @callback @type {func (device: DeviceScreens): React.CSSProperties}
 * @param setConds @callback @type {setCondision}
 * @returns {React.CSSProperties}
 */
export interface CssEvent {
    hover: boolean;
    click: boolean;
}
export interface CssElementContext extends DeviceScreens {
    event: CssEvent;
}
declare function gerResp(styleDef: (device: CssElementContext) => React.CSSProperties, ...setConds: setCondision[]): React.CSSProperties;
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
export declare const useResponsive: () => typeof gerResp;
export {};
