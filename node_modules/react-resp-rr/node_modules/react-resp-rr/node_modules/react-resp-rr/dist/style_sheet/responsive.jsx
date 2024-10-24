"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concateWithOrientation = void 0;
exports.switcherValue = switcherValue;
const deviceScreen_1 = require("../device_screen/deviceScreen");
const concateWithOrientation = (result, confOrientation, screenType) => {
    result = Object.assign(Object.assign({}, result), confOrientation.default);
    if (screenType <= deviceScreen_1.ScreenType.SMALL) {
        result = Object.assign(Object.assign({}, result), confOrientation.sm);
    }
    if (screenType >= deviceScreen_1.ScreenType.STANDAR) {
        result = Object.assign(Object.assign({}, result), confOrientation.md);
    }
    if (screenType >= deviceScreen_1.ScreenType.HD) {
        result = Object.assign(Object.assign({}, result), confOrientation.hd);
    }
    if (screenType >= deviceScreen_1.ScreenType.FULLHD) {
        result = Object.assign(Object.assign({}, result), confOrientation.fullhd);
    }
    if (screenType >= deviceScreen_1.ScreenType.U2K) {
        result = Object.assign(Object.assign({}, result), confOrientation.u2K);
    }
    if (screenType >= deviceScreen_1.ScreenType.U4K) {
        result = Object.assign(Object.assign({}, result), confOrientation.u4K);
    }
    return result;
};
exports.concateWithOrientation = concateWithOrientation;
function switcherValue(configValue, screenType) {
    let result = configValue.default;
    if (screenType >= deviceScreen_1.ScreenType.STANDAR) {
        result = configValue.md;
    }
    if (screenType >= deviceScreen_1.ScreenType.HD) {
        result = configValue.hd;
    }
    if (screenType >= deviceScreen_1.ScreenType.FULLHD) {
        result = configValue.fullhd;
    }
    if (screenType >= deviceScreen_1.ScreenType.U2K) {
        result = configValue.u2k;
    }
    if (screenType >= deviceScreen_1.ScreenType.U4K) {
        result = configValue.u4k;
    }
    return result;
}
