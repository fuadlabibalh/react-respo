import * as device_screen from "./device_screen";
import * as style_sheet from "./style_sheet";

export const {
  getPortSize,
  getDPSize,
  getRootFontSize,
  getRootDpFontSize,
  getScreenTypes,
  getInnerDimension,
  useAvlDimension,
  useCurrentDimension,
  getOs,
  getOrientation,
  useDeviceScreen,
} = device_screen;

export const {
  useResponsive,
} = style_sheet;

const cssrr = {
  ...style_sheet,
  ...device_screen,
};

export default cssrr;
