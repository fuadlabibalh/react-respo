import { useEffect, useState } from "react";
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
            return number + 'rem';
        },
        getPx(number) {
            return number + 'px';
        }
    };
    return result;
};
export const getDPSize = () => {
    let result;
    const rasio = getScreenRasio();
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
            return (number * rasio) + 'rem';
        },
        getPx(number) {
            return (number * rasio) + 'px';
        }
    };
    return result;
};
export var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["SMALL"] = 700] = "SMALL";
    ScreenType[ScreenType["STANDAR"] = 1000] = "STANDAR";
    ScreenType[ScreenType["HD"] = 1300] = "HD";
    ScreenType[ScreenType["FULLHD"] = 1900] = "FULLHD";
    ScreenType[ScreenType["U2K"] = 2500] = "U2K";
    ScreenType[ScreenType["U4K"] = 3600] = "U4K";
})(ScreenType || (ScreenType = {}));
export var ScreenOrientation;
(function (ScreenOrientation) {
    ScreenOrientation["POTRET"] = "potret";
    ScreenOrientation["LANDSCAPE"] = "landscape";
})(ScreenOrientation || (ScreenOrientation = {}));
export const getRootFontSize = () => {
    const screen = getScreenTypes();
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
export const getScreenTypes = () => {
    let { width, height } = getScreenDimension();
    let result = ScreenType.SMALL;
    if (getOrientation() === ScreenOrientation.LANDSCAPE)
        result = getScreenType(width);
    else
        result = getScreenType(height);
    return result;
};
export const getScreenDimension = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
};
export var OSDevice;
(function (OSDevice) {
    OSDevice["WIN"] = "windows";
    OSDevice["LINUX"] = "linux";
    OSDevice["DARWIN"] = "darwin";
    OSDevice["MAC"] = "macOS";
    OSDevice["ANDROID"] = "android";
    OSDevice["IOS"] = "iOS";
    OSDevice["NOT_IDENTIFICATION"] = "not_identification";
})(OSDevice || (OSDevice = {}));
export const getOsDevice = () => {
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
export const getOrientation = () => {
    const screen = getScreenDimension();
    if (screen.height > screen.width) {
        return ScreenOrientation.POTRET;
    }
    return ScreenOrientation.LANDSCAPE;
};
export const getScreenRasio = () => {
    const orientation = getOrientation();
    const screen = getScreenDimension();
    if (orientation === ScreenOrientation.LANDSCAPE) {
        return screen.width / screen.height;
    }
    return screen.height / screen.width;
};
export function useDeviceScreen() {
    const dimension = useDimension();
    let result = {
        dimension: dimension,
        orientation: getOrientation(),
        rasio: getScreenRasio(),
        os: getOsDevice(),
        type: getScreenTypes(),
        rootFontSize: getRootFontSize(),
        fontSize: getPortSize(),
        dpFontSize: getDPSize()
    };
    return result;
}
export const useDimension = () => {
    const [screen, setScreen] = useState(getScreenDimension());
    const handleResize = () => {
        return setScreen(getScreenDimension());
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screen]);
    return screen;
};
