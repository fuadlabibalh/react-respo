"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScreenRasio = exports.getOrientation = exports.getOsDevice = exports.OSDevice = exports.getScreenDimension = exports.getScreenTypes = exports.getRootFontSize = exports.ScreenOrientation = exports.ScreenType = exports.getDPSize = exports.getPortSize = void 0;
const getPortSize = () => {
    let result;
    const root = (0, exports.getRootFontSize)();
    result = {
        xxs: root * 0.25,
        xs: root * 0.5,
        sm: root * 0.75,
        md: root,
        lg: root * 1.25,
        xl: root * 1.5,
        xxl: root * 1.75,
        getRem(number) {
            return number + 'rem';
        },
        getPx(number) {
            return number + 'px';
        }
    };
    return result;
};
exports.getPortSize = getPortSize;
const getDPSize = () => {
    let result;
    const rasio = (0, exports.getScreenRasio)();
    const root = (0, exports.getRootFontSize)();
    const size = rasio * root;
    result = {
        xxs: size * 0.25,
        xs: size * 0.5,
        sm: size * 0.75,
        md: size,
        lg: size * 1.25,
        xl: size * 1.5,
        xxl: size * 1.75,
        getRem(number) {
            return (number * rasio) + 'rem';
        },
        getPx(number) {
            return (number * rasio) + 'px';
        }
    };
    return result;
};
exports.getDPSize = getDPSize;
var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["SMALL"] = 700] = "SMALL";
    ScreenType[ScreenType["STANDAR"] = 1000] = "STANDAR";
    ScreenType[ScreenType["HD"] = 1300] = "HD";
    ScreenType[ScreenType["FULLHD"] = 1900] = "FULLHD";
    ScreenType[ScreenType["U2K"] = 2500] = "U2K";
    ScreenType[ScreenType["U4K"] = 3600] = "U4K";
})(ScreenType || (exports.ScreenType = ScreenType = {}));
var ScreenOrientation;
(function (ScreenOrientation) {
    ScreenOrientation["POTRET"] = "potret";
    ScreenOrientation["LANDSCAPE"] = "landscape";
})(ScreenOrientation || (exports.ScreenOrientation = ScreenOrientation = {}));
const getRootFontSize = () => {
    const screen = (0, exports.getScreenTypes)();
    switch (screen) {
        case ScreenType.U4K:
            return 20;
        case ScreenType.U2K:
            return 18;
        case ScreenType.FULLHD:
            return 16;
        case ScreenType.HD:
            return 14;
        case ScreenType.STANDAR:
            return 12;
        default:
            return 10;
    }
};
exports.getRootFontSize = getRootFontSize;
const getScreenType = (value) => {
    let result = ScreenType.SMALL;
    if (value > ScreenType.STANDAR) {
        result = ScreenType.STANDAR;
    }
    if (value > ScreenType.HD) {
        result = ScreenType.HD;
    }
    if (value > ScreenType.FULLHD) {
        result = ScreenType.FULLHD;
    }
    if (value > ScreenType.U2K) {
        result = ScreenType.U2K;
    }
    if (value > ScreenType.U4K) {
        result = ScreenType.U4K;
    }
    return result;
};
const getScreenTypes = () => {
    let { width, height } = (0, exports.getScreenDimension)();
    let result = ScreenType.SMALL;
    if ((0, exports.getOrientation)() === ScreenOrientation.LANDSCAPE)
        result = getScreenType(width);
    else
        result = getScreenType(height);
    return result;
};
exports.getScreenTypes = getScreenTypes;
const getScreenDimension = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};
exports.getScreenDimension = getScreenDimension;
var OSDevice;
(function (OSDevice) {
    OSDevice["WIN"] = "windows";
    OSDevice["LINUX"] = "linux";
    OSDevice["DARWIN"] = "darwin";
    OSDevice["MAC"] = "macOS";
    OSDevice["ANDROID"] = "android";
    OSDevice["IOS"] = "iOS";
    OSDevice["NOT_IDENTIFICATION"] = "not_identification";
})(OSDevice || (exports.OSDevice = OSDevice = {}));
const getOsDevice = () => {
    let result = OSDevice.NOT_IDENTIFICATION;
    let agent = window.navigator.userAgent;
    if (agent.includes('Win'))
        result = OSDevice.WIN;
    if (agent.includes('Linux'))
        result = OSDevice.LINUX;
    if (agent.includes('Darwin'))
        result = OSDevice.DARWIN;
    if (agent.includes('macOs'))
        result = OSDevice.MAC;
    if (agent.includes('Android'))
        result = OSDevice.ANDROID;
    if (agent.includes('iOS'))
        result = OSDevice.IOS;
    return result;
};
exports.getOsDevice = getOsDevice;
const getOrientation = () => {
    const screen = (0, exports.getScreenDimension)();
    if (screen.height > screen.width) {
        return ScreenOrientation.POTRET;
    }
    return ScreenOrientation.LANDSCAPE;
};
exports.getOrientation = getOrientation;
const getScreenRasio = () => {
    const orientation = (0, exports.getOrientation)();
    const screen = (0, exports.getScreenDimension)();
    if (orientation === ScreenOrientation.LANDSCAPE) {
        return screen.width / screen.height;
    }
    return screen.height / screen.width;
};
exports.getScreenRasio = getScreenRasio;
