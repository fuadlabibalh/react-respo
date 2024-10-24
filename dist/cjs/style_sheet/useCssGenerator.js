"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssGenerator = void 0;
const _1 = require(".");
const useDeviceScreen_1 = __importDefault(require("../device_screen/useDeviceScreen"));
const device_screen_1 = require("../device_screen");
const useCss = (configStyle) => {
    let result = { ...configStyle?.current?.default, transition: "all 0.25s" };
    const { orientation, type, os } = (0, useDeviceScreen_1.default)();
    result = (0, _1.concateWithOrientation)(result, configStyle?.current, type);
    if (configStyle?.pc &&
        (os === device_screen_1.OSDevice.WIN ||
            os === device_screen_1.OSDevice.DARWIN ||
            os === device_screen_1.OSDevice.LINUX ||
            os === device_screen_1.OSDevice.MAC ||
            os === device_screen_1.OSDevice.NOT_IDENTIFICATION)) {
        if (orientation === device_screen_1.ScreenOrientation.LANDSCAPE) {
            result = { ...result, ...configStyle.pc.lanscape };
            result =
                configStyle.pc.lanscape &&
                    (0, _1.concateWithOrientation)(result, configStyle.pc.lanscape, type);
        }
        if (orientation === device_screen_1.ScreenOrientation.POTRET) {
            result = { ...result, ...configStyle.pc.potret };
            result =
                configStyle.pc.potret &&
                    (0, _1.concateWithOrientation)(result, configStyle.pc.potret, type);
        }
    }
    if (configStyle?.mobile &&
        (os === device_screen_1.OSDevice.ANDROID || os === device_screen_1.OSDevice.IOS)) {
        if (orientation === device_screen_1.ScreenOrientation.LANDSCAPE) {
            result = { ...result, ...configStyle.mobile.lanscape };
            result =
                configStyle.mobile.lanscape &&
                    (0, _1.concateWithOrientation)(result, configStyle.mobile.lanscape, type);
        }
        if (orientation === device_screen_1.ScreenOrientation.POTRET) {
            result = { ...result, ...configStyle.mobile.potret };
            result =
                configStyle.mobile.potret &&
                    (0, _1.concateWithOrientation)(result, configStyle.mobile.potret, type);
        }
    }
    return result;
};
const useCssGenerator = () => useCss;
exports.useCssGenerator = useCssGenerator;
