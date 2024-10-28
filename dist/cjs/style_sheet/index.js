"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssGenerator = exports.useResponsive = exports.concateWithOrientation = void 0;
exports.switcherValue = switcherValue;
const device_screen_1 = require("../device_screen");
const device_screen_2 = require("../device_screen");
const device_screen_3 = require("../device_screen");
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
function gerResp(styleDef, ...setConds) {
    const device = (0, device_screen_2.useDeviceScreen)();
    let result = { ...styleDef(device) };
    for (let i = 0; i < setConds.length; i++) {
        let func = setConds[i];
        let temp = func(device);
        if (temp.condition)
            result = { ...result, ...temp.style };
    }
    return result;
}
const useResponsive = () => gerResp;
exports.useResponsive = useResponsive;
const useCss = (configStyle) => {
    let result = { ...configStyle?.current?.default, transition: "all 0.25s" };
    const { orientation, type, os } = (0, device_screen_2.useDeviceScreen)();
    result = (0, exports.concateWithOrientation)(result, configStyle?.current, type);
    if (configStyle?.pc &&
        (os === device_screen_3.OSDevice.WIN ||
            os === device_screen_3.OSDevice.DARWIN ||
            os === device_screen_3.OSDevice.LINUX ||
            os === device_screen_3.OSDevice.MAC ||
            os === device_screen_3.OSDevice.NOT_IDENTIFICATION)) {
        if (orientation === device_screen_3.ScreenOrientation.LANDSCAPE) {
            result = { ...result, ...configStyle.pc.lanscape };
            result =
                configStyle.pc.lanscape &&
                    (0, exports.concateWithOrientation)(result, configStyle.pc.lanscape, type);
        }
        if (orientation === device_screen_3.ScreenOrientation.POTRET) {
            result = { ...result, ...configStyle.pc.potret };
            result =
                configStyle.pc.potret &&
                    (0, exports.concateWithOrientation)(result, configStyle.pc.potret, type);
        }
    }
    if (configStyle?.mobile &&
        (os === device_screen_3.OSDevice.ANDROID || os === device_screen_3.OSDevice.IOS)) {
        if (orientation === device_screen_3.ScreenOrientation.LANDSCAPE) {
            result = { ...result, ...configStyle.mobile.lanscape };
            result =
                configStyle.mobile.lanscape &&
                    (0, exports.concateWithOrientation)(result, configStyle.mobile.lanscape, type);
        }
        if (orientation === device_screen_3.ScreenOrientation.POTRET) {
            result = { ...result, ...configStyle.mobile.potret };
            result =
                configStyle.mobile.potret &&
                    (0, exports.concateWithOrientation)(result, configStyle.mobile.potret, type);
        }
    }
    return result;
};
const useCssGenerator = () => useCss;
exports.useCssGenerator = useCssGenerator;
