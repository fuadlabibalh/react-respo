"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsive = exports.switcherValue = exports.concateWithOrientation = exports.useCssGenerator = exports.useDeviceScreen = exports.getScreenRasio = exports.getOrientation = exports.getOsDevice = exports.getScreenDimension = exports.getRootFontSize = exports.getDPSize = exports.getPortSize = void 0;
const device_screen = __importStar(require("./device_screen"));
const style_sheet = __importStar(require("./style_sheet"));
exports.getPortSize = device_screen.getPortSize, exports.getDPSize = device_screen.getDPSize, exports.getRootFontSize = device_screen.getRootFontSize, exports.getScreenDimension = device_screen.getScreenDimension, exports.getOsDevice = device_screen.getOsDevice, exports.getOrientation = device_screen.getOrientation, exports.getScreenRasio = device_screen.getScreenRasio, exports.useDeviceScreen = device_screen.useDeviceScreen;
exports.useCssGenerator = style_sheet.useCssGenerator, exports.concateWithOrientation = style_sheet.concateWithOrientation, exports.switcherValue = style_sheet.switcherValue, exports.useResponsive = style_sheet.useResponsive;
const cssrr = {
    ...style_sheet,
    ...device_screen,
};
exports.default = cssrr;
