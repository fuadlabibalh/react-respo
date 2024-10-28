import * as device_screen from "./device_screen";
import * as style_sheet from "./style_sheet";
export const { getPortSize, getDPSize, getRootFontSize, getScreenDimension, getOsDevice, getOrientation, getScreenRasio, useDeviceScreen, } = device_screen;
export const { useCssGenerator, concateWithOrientation, switcherValue, useResponsive, } = style_sheet;
const cssrr = {
    ...style_sheet,
    ...device_screen,
};
export default cssrr;
