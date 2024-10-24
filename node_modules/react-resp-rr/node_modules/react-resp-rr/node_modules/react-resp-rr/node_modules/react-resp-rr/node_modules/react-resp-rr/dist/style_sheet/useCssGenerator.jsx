"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssGenerator = void 0;
const responsive_1 = require("./responsive");
const useDeviceScreen_1 = __importDefault(require("../device_screen/useDeviceScreen"));
const deviceScreen_1 = require("../device_screen/deviceScreen");
const useCss = (configStyle) => {
    var _a;
    let result = Object.assign(Object.assign({}, (_a = configStyle === null || configStyle === void 0 ? void 0 : configStyle.current) === null || _a === void 0 ? void 0 : _a.default), { transition: "all 0.25s" });
    const { orientation, type, os } = (0, useDeviceScreen_1.default)();
    result = (0, responsive_1.concateWithOrientation)(result, configStyle === null || configStyle === void 0 ? void 0 : configStyle.current, type);
    if ((configStyle === null || configStyle === void 0 ? void 0 : configStyle.pc) &&
        (os === deviceScreen_1.OSDevice.WIN ||
            os === deviceScreen_1.OSDevice.DARWIN ||
            os === deviceScreen_1.OSDevice.LINUX ||
            os === deviceScreen_1.OSDevice.MAC ||
            os === deviceScreen_1.OSDevice.NOT_IDENTIFICATION)) {
        if (orientation === deviceScreen_1.ScreenOrientation.LANDSCAPE) {
            result = Object.assign(Object.assign({}, result), configStyle.pc.lanscape);
            result =
                configStyle.pc.lanscape &&
                    (0, responsive_1.concateWithOrientation)(result, configStyle.pc.lanscape, type);
        }
        if (orientation === deviceScreen_1.ScreenOrientation.POTRET) {
            result = Object.assign(Object.assign({}, result), configStyle.pc.potret);
            result =
                configStyle.pc.potret &&
                    (0, responsive_1.concateWithOrientation)(result, configStyle.pc.potret, type);
        }
    }
    if ((configStyle === null || configStyle === void 0 ? void 0 : configStyle.mobile) &&
        (os === deviceScreen_1.OSDevice.ANDROID || os === deviceScreen_1.OSDevice.IOS)) {
        if (orientation === deviceScreen_1.ScreenOrientation.LANDSCAPE) {
            result = Object.assign(Object.assign({}, result), configStyle.mobile.lanscape);
            result =
                configStyle.mobile.lanscape &&
                    (0, responsive_1.concateWithOrientation)(result, configStyle.mobile.lanscape, type);
        }
        if (orientation === deviceScreen_1.ScreenOrientation.POTRET) {
            result = Object.assign(Object.assign({}, result), configStyle.mobile.potret);
            result =
                configStyle.mobile.potret &&
                    (0, responsive_1.concateWithOrientation)(result, configStyle.mobile.potret, type);
        }
    }
    return result;
};
const useCssGenerator = () => useCss;
exports.useCssGenerator = useCssGenerator;
