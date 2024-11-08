import { useEffect, useState } from "react";

/**
 * @typedef {PortSize}
 *
 * xxs: number;
 * xs: number;
 * sm: number;
 * md: number;
 * lg: number;
 * xl: number;
 * xxl: number;
 * getRem(number: number): string;
 * getPx(number: number): string;
 */

export interface PortSize {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  getRem(number: number): string;
  getPx(number: number): string;
}

/**
 *  Port Size
 * this func get value with standar font size in css with standar value for all device
 * per step value add 0.25rem size
 * @return {PortSize} Return fontSize.
 */

export const getPortSize = (): PortSize => {
  let result: PortSize;
  const root = getRootFontSize();
  result = {
    xxs: root * 0.25,
    xs: root * 0.5,
    sm: root * 0.75,
    md: root,
    lg: root * 1.25,
    xl: root * 1.5,
    xxl: root * 1.75,
    getRem(number: number) {
      return number + "rem";
    },
    getPx(number: number) {
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

export const getDPSize = (): PortSize => {
  let result: PortSize;
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
    getRem(number: number) {
      return number * rasio + "rem";
    },
    getPx(number: number) {
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

export enum ScreenType {
  STANDAR = 1000,
  HD = 1200,
  FULLHD = 1800,
  U2K = 2400,
  U4K = 3500,
}

/**
 * @typedef {ScreenDimension}
 */
export type ScreenDimension = {
  width: number;
  height: number;
};

/**
 * @typedef @enum {ScreenOrientation}
 */

export enum ScreenOrientation {
  POTRET = "POTRET",
  LANDSCAPE = "LANDSCAPE",
}

/**
 * innerDimension: inner window;
 * currentDimension: screen you use;
 * avlDimension: avail value;
 * orientation: Orientation;
 * pxRasio: pixel Device rasio;
 * os: Os detect;
 * type: ScreenType as FullHD or 2K atc;
 * rootFontSize: get font size use root with dynamic with screen width or screen type;
 * rootDpFontSize: get font size use root with dynamic with screen width  and pixel deep screen or screen type;
 * fontSize: PortSize type;
 * dpFontSize: PortSize type;
 * deviceType: DeviceType type of Mobile or PC/DESKTOP for responsive media query;
 * @typedef {DeviceScreens}
 */

export interface DeviceScreens {
  innerDimension: ScreenDimension;
  currentDimension: ScreenDimension;
  avlDimension: ScreenDimension;
  orientation: Orientation;
  pxRasio: number;
  os: Os;
  type: ScreenType;
  rootFontSize: number;
  rootDpFontSize: number;
  fontSize: PortSize;
  dpFontSize: PortSize;
  deviceType: DeviceType;
}

/**
 *  value font Size
 * U4K = 22
 * U2K = 20
 * FULLHD = 18
 * HD = 16
 * Default = 14
 * @returns {number}
 */

export const getRootFontSize = (): number => {
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
export const getRootDpFontSize = (): number => {
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
const getScreenType = (value: number): ScreenType => {
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

export const getScreenTypes = (): ScreenType => {
  let { width, height } = useCurrentDimension();

  let result: ScreenType = ScreenType.STANDAR;

  if (getOrientation() === ScreenOrientation.LANDSCAPE) {
    result = getScreenType(width);
  } else {
    result = getScreenType(height);
  }
  return result;
};

/**
 * get inner value off window
 * @returns {ScreenDimension}
 */

export const getInnerDimension = (): ScreenDimension => {
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

export enum Os {
  WIN = "windows",
  LINUX = "linux",
  DARWIN = "darwin",
  MAC = "macOS",
  ANDROID = "android",
  IOS = "iOS",
  NOT_IDENTIFICATION = "not_identification",
}

/**
 * identification Operating System
 * @returns {Os}
 */

export const getOs = (): Os => {
  let result: Os = Os.NOT_IDENTIFICATION;
  let agent = window.navigator.userAgent;
  if (agent.includes("Win")) result = Os.WIN;
  if (agent.includes("Linux")) result = Os.LINUX;
  if (agent.includes("Darwin")) result = Os.DARWIN;
  if (agent.includes("macOs")) result = Os.MAC;
  if (agent.includes("Android")) result = Os.ANDROID;
  if (agent.includes("iOS")) result = Os.IOS;
  return result;
};

/**
 * get orientation screen
 * @returns {ScreenOrientation}
 */

export const getOrientation = (): ScreenOrientation => {
  const screen = getInnerDimension();
  if (screen.height > screen.width) {
    return ScreenOrientation.POTRET;
  }
  return ScreenOrientation.LANDSCAPE;
};

/**
 * @typedef @enum {DeviceType}
 */
export enum DeviceType {
  MOBILE = "MOBILE",
  PC_OR_DESKTOP = "PC/DESKTOP",
}

export function getDeviceType(): DeviceType {
  let result: DeviceType = DeviceType.PC_OR_DESKTOP;
  const os: Os = getOs();
  if (os === Os.ANDROID || os === Os.IOS) {
    result = DeviceType.MOBILE;
  }
  return result;
}

/**
 * @typedef {Orientation}
 */
export interface Orientation {
  current: ScreenOrientation;
  windowOrientation: globalThis.ScreenOrientation;
}

/**
 * hooks can be use useDeviceScreen
 * @returns {DeviceScreens}
 */

export function useDeviceScreen(): DeviceScreens {
  const dimension = useInnerDimension();
  const currentDms = useCurrentDimension();
  const avlDms = useAvlDimension();

  let result: DeviceScreens = {
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

export const useInnerDimension = (): ScreenDimension => {
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

const getCurrDms = (): ScreenDimension => {
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
export const useCurrentDimension = (): ScreenDimension => {
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
const getAvlDms = (): ScreenDimension => {
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
export const useAvlDimension = () : ScreenDimension=> {
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
