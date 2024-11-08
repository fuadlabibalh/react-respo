/**
 * @typedef {PortSize}
 *
 * xxs: number;
 * xs: number;
 * sm: number;
 * md: number;
 * lg: number;
 * xl: number;
 * xxl: number;
 * getRem(number: number): string;
 * getPx(number: number): string;
 */
export interface PortSize {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    getRem(number: number): string;
    getPx(number: number): string;
}
/**
 *  Port Size
 * this func get value with standar font size in css with standar value for all device
 * per step value add 0.25rem size
 * @return {PortSize} Return fontSize.
 */
export declare const getPortSize: () => PortSize;
/**
 * Dynamic Port Size
 
 * this func get value with standar font size in css with dinamic pixel rasio for all device

 * @return {PortSize} Return fontSize.
 */
export declare const getDPSize: () => PortSize;
/**
 * @typedef {ScreenType}
 *
 * - STANDAR = 1000,
 * - HD = 1200,
 * - FULLHD = 1800,
 * - U2K = 2400,
 * - U4K = 3500,
 */
export declare enum ScreenType {
    STANDAR = 1000,
    HD = 1200,
    FULLHD = 1800,
    U2K = 2400,
    U4K = 3500
}
/**
 * @typedef {ScreenDimension}
 */
export type ScreenDimension = {
    width: number;
    height: number;
};
/**
 * @typedef @enum {ScreenOrientation}
 */
export declare enum ScreenOrientation {
    POTRET = "POTRET",
    LANDSCAPE = "LANDSCAPE"
}
/**
 * innerDimension: inner window;
 * currentDimension: screen you use;
 * avlDimension: avail value;
 * orientation: Orientation;
 * pxRasio: pixel Device rasio;
 * os: Os detect;
 * type: ScreenType as FullHD or 2K atc;
 * rootFontSize: get font size use root with dynamic with screen width or screen type;
 * rootDpFontSize: get font size use root with dynamic with screen width  and pixel deep screen or screen type;
 * fontSize: PortSize type;
 * dpFontSize: PortSize type;
 * deviceType: DeviceType type of Mobile or PC/DESKTOP for responsive media query;
 * @typedef {DeviceScreens}
 */
export interface DeviceScreens {
    innerDimension: ScreenDimension;
    currentDimension: ScreenDimension;
    avlDimension: ScreenDimension;
    orientation: Orientation;
    pxRasio: number;
    os: Os;
    type: ScreenType;
    rootFontSize: number;
    rootDpFontSize: number;
    fontSize: PortSize;
    dpFontSize: PortSize;
    deviceType: DeviceType;
}
/**
 *  value font Size
 * U4K = 22
 * U2K = 20
 * FULLHD = 18
 * HD = 16
 * Default = 14
 * @returns {number}
 */
export declare const getRootFontSize: () => number;
/**
 *  value font Size
 * U4K = 22 * px Of Screen
 * U2K = 20 * px Of Screen
 * FULLHD = 18 * px Of Screen
 * HD = 16 * px Of Screen
 * Default = 14 * px Of Screen
 * @returns {number}
 */
export declare const getRootDpFontSize: () => number;
/**
 * get type off screen with orientation
 * @returns {ScreenType}
 */
export declare const getScreenTypes: () => ScreenType;
/**
 * get inner value off window
 * @returns {ScreenDimension}
 */
export declare const getInnerDimension: () => ScreenDimension;
/**
 * @typedef @enum {Os}
 *
 * WIN = "windows",
 * LINUX = "linux",
 * DARWIN = "darwin",
 * MAC = "macOS",
 * ANDROID = "android",
 * IOS = "iOS",
 * NOT_IDENTIFICATION = "not_identification",
 */
export declare enum Os {
    WIN = "windows",
    LINUX = "linux",
    DARWIN = "darwin",
    MAC = "macOS",
    ANDROID = "android",
    IOS = "iOS",
    NOT_IDENTIFICATION = "not_identification"
}
/**
 * identification Operating System
 * @returns {Os}
 */
export declare const getOs: () => Os;
/**
 * get orientation screen
 * @returns {ScreenOrientation}
 */
export declare const getOrientation: () => ScreenOrientation;
/**
 * @typedef @enum {DeviceType}
 */
export declare enum DeviceType {
    MOBILE = "MOBILE",
    PC_OR_DESKTOP = "PC/DESKTOP"
}
export declare function getDeviceType(): DeviceType;
/**
 * @typedef {Orientation}
 */
export interface Orientation {
    current: ScreenOrientation;
    windowOrientation: globalThis.ScreenOrientation;
}
/**
 * hooks can be use useDeviceScreen
 * @returns {DeviceScreens}
 */
export declare function useDeviceScreen(): DeviceScreens;
/**
 * hooks can be use useInnerDimension
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export declare const useInnerDimension: () => ScreenDimension;
/**
 * hooks can be use useCurrentDimension
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export declare const useCurrentDimension: () => ScreenDimension;
/**
 * hooks
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export declare const useAvlDimension: () => ScreenDimension;
