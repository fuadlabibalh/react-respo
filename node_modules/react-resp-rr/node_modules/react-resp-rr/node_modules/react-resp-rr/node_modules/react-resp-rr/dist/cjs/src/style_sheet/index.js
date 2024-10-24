"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concateWithOrientation = void 0;
exports.switcherValue = switcherValue;
const device_screen_1 = require("../device_screen");
const concateWithOrientation = (result, confOrientation, screenType) => {
    result = { ...result, ...confOrientation.default };
    if (screenType <= device_screen_1.ScreenType.SMALL) {
        result = { ...result, ...confOrientation.sm };
    }
    if (screenType >= device_screen_1.ScreenType.STANDAR) {
        result = { ...result, ...confOrientation.md };
    }
    if (screenType >= device_screen_1.ScreenType.HD) {
        result = { ...result, ...confOrientation.hd };
    }
    if (screenType >= device_screen_1.ScreenType.FULLHD) {
        result = { ...result, ...confOrientation.fullhd };
    }
    if (screenType >= device_screen_1.ScreenType.U2K) {
        result = { ...result, ...confOrientation.u2K };
    }
    if (screenType >= device_screen_1.ScreenType.U4K) {
        result = { ...result, ...confOrientation.u4K };
    }
    return result;
};
exports.concateWithOrientation = concateWithOrientation;
function switcherValue(configValue, screenType) {
    let result = configValue.default;
    if (screenType >= device_screen_1.ScreenType.STANDAR) {
        result = configValue.md;
    }
    if (screenType >= device_screen_1.ScreenType.HD) {
        result = configValue.hd;
    }
    if (screenType >= device_screen_1.ScreenType.FULLHD) {
        result = configValue.fullhd;
    }
    if (screenType >= device_screen_1.ScreenType.U2K) {
        result = configValue.u2k;
    }
    if (screenType >= device_screen_1.ScreenType.U4K) {
        result = configValue.u4k;
    }
    return result;
}
