import * as device_screen from "./device_screen";
import * as style_sheet from "./style_sheet";
export declare const getPortSize: () => device_screen.PortSize, getDPSize: () => device_screen.PortSize, getRootFontSize: () => number, getRootDpFontSize: () => number, getScreenTypes: () => device_screen.ScreenType, getInnerDimension: () => device_screen.ScreenDimension, useAvlDimension: () => device_screen.ScreenDimension, useCurrentDimension: () => device_screen.ScreenDimension, getOs: () => device_screen.Os, getOrientation: () => device_screen.ScreenOrientation, useDeviceScreen: typeof device_screen.useDeviceScreen;
export declare const useResponsive: () => (styleDef: (device: style_sheet.CssElementContext) => React.CSSProperties, ...setConds: style_sheet.setCondision[]) => React.CSSProperties;
declare const cssrr: {
    getDeviceType(): device_screen.DeviceType;
    useDeviceScreen(): device_screen.DeviceScreens;
    getPortSize: () => device_screen.PortSize;
    getDPSize: () => device_screen.PortSize;
    ScreenType: typeof device_screen.ScreenType;
    ScreenOrientation: typeof device_screen.ScreenOrientation;
    getRootFontSize: () => number;
    getRootDpFontSize: () => number;
    getScreenTypes: () => device_screen.ScreenType;
    getInnerDimension: () => device_screen.ScreenDimension;
    Os: typeof device_screen.Os;
    getOs: () => device_screen.Os;
    getOrientation: () => device_screen.ScreenOrientation;
    DeviceType: typeof device_screen.DeviceType;
    useInnerDimension: () => device_screen.ScreenDimension;
    useCurrentDimension: () => device_screen.ScreenDimension;
    useAvlDimension: () => device_screen.ScreenDimension;
    useResponsive: () => (styleDef: (device: style_sheet.CssElementContext) => React.CSSProperties, ...setConds: style_sheet.setCondision[]) => React.CSSProperties;
};
export default cssrr;
