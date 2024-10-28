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
export declare const getPortSize: () => PortSize;
export declare const getDPSize: () => PortSize;
export declare enum ScreenType {
    SMALL = 700,
    STANDAR = 1000,
    HD = 1300,
    FULLHD = 1900,
    U2K = 2500,
    U4K = 3600
}
export type ScreenDimension = {
    width: number;
    height: number;
};
export declare enum ScreenOrientation {
    POTRET = "potret",
    LANDSCAPE = "landscape"
}
export interface DeviceScreens {
    dimension: ScreenDimension;
    orientation: ScreenOrientation;
    rasio: number;
    os: OSDevice;
    type: ScreenType;
    rootFontSize: number;
    fontSize: PortSize;
    dpFontSize: PortSize;
}
export declare const getRootFontSize: () => number;
export declare const getScreenTypes: () => ScreenType;
export declare const getScreenDimension: () => ScreenDimension;
export declare enum OSDevice {
    WIN = "windows",
    LINUX = "linux",
    DARWIN = "darwin",
    MAC = "macOS",
    ANDROID = "android",
    IOS = "iOS",
    NOT_IDENTIFICATION = "not_identification"
}
export declare const getOsDevice: () => OSDevice;
export declare const getOrientation: () => ScreenOrientation;
export declare const getScreenRasio: () => number;
export declare function useDeviceScreen(): DeviceScreens;
export declare const useDimension: () => ScreenDimension;
