import { useEffect, useState } from "react";
/**
 *  Port Size
 * this func get value with standar font size in css with standar value for all device
 * per step value add 0.25rem size
 * @return {PortSize} Return fontSize.
 */
export const getPortSize = () => {
    let result;
    const root = getRootFontSize();
    result = {
        xxs: root * 0.25,
        xs: root * 0.5,
        sm: root * 0.75,
        md: root,
        lg: root * 1.25,
        xl: root * 1.5,
        xxl: root * 1.75,
        getRem(number) {
            return number + "rem";
        },
        getPx(number) {
            return number + "px";
        },
    };
    return result;
};
/**
 * Dynamic Port Size
 
 * this func get value with standar font size in css with dinamic pixel rasio for all device

 * @return {PortSize} Return fontSize.
 */
export const getDPSize = () => {
    let result;
    const rasio = window.devicePixelRatio;
    const root = getRootFontSize();
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
            return number * rasio + "rem";
        },
        getPx(number) {
            return number * rasio + "px";
        },
    };
    return result;
};
/**
 * @typedef {ScreenType}
 *
 * - STANDAR = 1000,
 * - HD = 1200,
 * - FULLHD = 1800,
 * - U2K = 2400,
 * - U4K = 3500,
 */
export var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["STANDAR"] = 1000] = "STANDAR";
    ScreenType[ScreenType["HD"] = 1200] = "HD";
    ScreenType[ScreenType["FULLHD"] = 1800] = "FULLHD";
    ScreenType[ScreenType["U2K"] = 2400] = "U2K";
    ScreenType[ScreenType["U4K"] = 3500] = "U4K";
})(ScreenType || (ScreenType = {}));
/**
 * @typedef @enum {ScreenOrientation}
 */
export var ScreenOrientation;
(function (ScreenOrientation) {
    ScreenOrientation["POTRET"] = "POTRET";
    ScreenOrientation["LANDSCAPE"] = "LANDSCAPE";
})(ScreenOrientation || (ScreenOrientation = {}));
/**
 *  value font Size
 * U4K = 22
 * U2K = 20
 * FULLHD = 18
 * HD = 16
 * Default = 14
 * @returns {number}
 */
export const getRootFontSize = () => {
    const screen = getScreenTypes();
    switch (screen) {
        case ScreenType.U4K:
            return 22;
        case ScreenType.U2K:
            return 20;
        case ScreenType.FULLHD:
            return 18;
        case ScreenType.HD:
            return 16;
        default:
            return 14;
    }
};
/**
 *  value font Size
 * U4K = 22 * px Of Screen
 * U2K = 20 * px Of Screen
 * FULLHD = 18 * px Of Screen
 * HD = 16 * px Of Screen
 * Default = 14 * px Of Screen
 * @returns {number}
 */
export const getRootDpFontSize = () => {
    const screen = getScreenTypes();
    const rasio = window.devicePixelRatio;
    switch (screen) {
        case ScreenType.U4K:
            return 22 * rasio;
        case ScreenType.U2K:
            return 20 * rasio;
        case ScreenType.FULLHD:
            return 18 * rasio;
        case ScreenType.HD:
            return 16 * rasio;
        default:
            return 14 * rasio;
    }
};
/**
 * Get Screen type with checking minimum value of screen resolution
 * @param value {number}
 * @returns {ScreenType}
 */
const getScreenType = (value) => {
    let result = ScreenType.STANDAR;
    // check with minimum value resolution
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
/**
 * get type off screen with orientation
 * @returns {ScreenType}
 */
export const getScreenTypes = () => {
    let { width, height } = useCurrentDimension();
    let result = ScreenType.STANDAR;
    if (getOrientation() === ScreenOrientation.LANDSCAPE) {
        result = getScreenType(width);
    }
    else {
        result = getScreenType(height);
    }
    return result;
};
/**
 * get inner value off window
 * @returns {ScreenDimension}
 */
export const getInnerDimension = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};
/**
 * @typedef @enum {Os}
 *
 * WIN = "windows",
 * LINUX = "linux",
 * DARWIN = "darwin",
 * MAC = "macOS",
 * ANDROID = "android",
 * IOS = "iOS",
 * NOT_IDENTIFICATION = "not_identification",
 */
export var Os;
(function (Os) {
    Os["WIN"] = "windows";
    Os["LINUX"] = "linux";
    Os["DARWIN"] = "darwin";
    Os["MAC"] = "macOS";
    Os["ANDROID"] = "android";
    Os["IOS"] = "iOS";
    Os["NOT_IDENTIFICATION"] = "not_identification";
})(Os || (Os = {}));
/**
 * identification Operating System
 * @returns {Os}
 */
export const getOs = () => {
    let result = Os.NOT_IDENTIFICATION;
    let agent = window.navigator.userAgent;
    if (agent.includes("Win"))
        result = Os.WIN;
    if (agent.includes("Linux"))
        result = Os.LINUX;
    if (agent.includes("Darwin"))
        result = Os.DARWIN;
    if (agent.includes("macOs"))
        result = Os.MAC;
    if (agent.includes("Android"))
        result = Os.ANDROID;
    if (agent.includes("iOS"))
        result = Os.IOS;
    return result;
};
/**
 * get orientation screen
 * @returns {ScreenOrientation}
 */
export const getOrientation = () => {
    const screen = getInnerDimension();
    if (screen.height > screen.width) {
        return ScreenOrientation.POTRET;
    }
    return ScreenOrientation.LANDSCAPE;
};
/**
 * @typedef @enum {DeviceType}
 */
export var DeviceType;
(function (DeviceType) {
    DeviceType["MOBILE"] = "MOBILE";
    DeviceType["PC_OR_DESKTOP"] = "PC/DESKTOP";
})(DeviceType || (DeviceType = {}));
export function getDeviceType() {
    let result = DeviceType.PC_OR_DESKTOP;
    const os = getOs();
    if (os === Os.ANDROID || os === Os.IOS) {
        result = DeviceType.MOBILE;
    }
    return result;
}
/**
 * hooks can be use useDeviceScreen
 * @returns {DeviceScreens}
 */
export function useDeviceScreen() {
    const dimension = useInnerDimension();
    const currentDms = useCurrentDimension();
    const avlDms = useAvlDimension();
    let result = {
        innerDimension: dimension,
        avlDimension: avlDms,
        currentDimension: currentDms,
        orientation: {
            current: getOrientation(),
            windowOrientation: window.screen.orientation,
        },
        pxRasio: window.devicePixelRatio,
        os: getOs(),
        type: getScreenTypes(),
        rootFontSize: getRootFontSize(),
        rootDpFontSize: getRootDpFontSize(),
        fontSize: getPortSize(),
        dpFontSize: getDPSize(),
        deviceType: getDeviceType(),
    };
    return result;
}
/**
 * hooks can be use useInnerDimension
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export const useInnerDimension = () => {
    const [screen, setScreen] = useState(getInnerDimension());
    const handleResize = () => {
        return setScreen(getInnerDimension());
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screen]);
    return screen;
};
/**
 * get window screen
 * @returns {ScreenDimension}
 */
const getCurrDms = () => {
    return {
        width: window.screen.width,
        height: window.screen.height,
    };
};
/**
 * hooks can be use useCurrentDimension
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export const useCurrentDimension = () => {
    const [currentDimension, setCurrentDimension] = useState(getCurrDms());
    const handleResize = () => {
        setCurrentDimension(getCurrDms());
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return currentDimension;
};
/**
 * get window screen avail value
 * @returns {ScreenDimension}
 */
const getAvlDms = () => {
    return {
        width: window.screen.availWidth,
        height: window.screen.availHeight,
    };
};
/**
 * hooks
 * event resize auto resize dimension
 * @returns {ScreenDimension}
 */
export const useAvlDimension = () => {
    const [avlDimension, setAvlDimension] = useState(getAvlDms());
    const handleResize = () => {
        setAvlDimension(getAvlDms());
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [avlDimension]);
    return avlDimension;
};
