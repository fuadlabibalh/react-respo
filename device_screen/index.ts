

export interface PortSize {
    xxs: number
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
    getRem(number: number): string
    getPx(number: number): string
}

export const getPortSize = () => {
    let result: PortSize
    const root = getRootFontSize()
    result = {
        xxs: root * 0.25,
        xs: root * 0.5,
        sm: root * 0.75,
        md: root,
        lg: root * 1.25,
        xl: root * 1.5,
        xxl: root * 1.75,
        getRem(number: number) {
            return number + 'rem'
        },
        getPx(number: number) {
            return number + 'px'
        }
    }
    return result
}

export const getDPSize = () => {
    let result: PortSize
    const rasio = getScreenRasio()
    const root = getRootFontSize()
    const size = rasio * root
    result = {
        xxs: size * 0.25,
        xs: size * 0.5,
        sm: size * 0.75,
        md: size,
        lg: size * 1.25,
        xl: size * 1.5,
        xxl: size * 1.75,
        getRem(number: number) {
            return (number*rasio) + 'rem'
        },
        getPx(number: number) {
            return (number*rasio )+ 'px'
        }
    }
    return result
}

export enum ScreenType {
    SMALL = 700,
    STANDAR = 1000,
    HD = 1300,
    FULLHD = 1900,
    U2K = 2500,
    U4K = 3600
}

export type ScreenDimension = {
    width: number
    height: number
}

export enum ScreenOrientation {
    POTRET = 'potret',
    LANDSCAPE = 'landscape'
}

export interface DeviceScreens {
    dimension: ScreenDimension
    orientation: ScreenOrientation
    rasio: number
    os: OSDevice
    type: ScreenType
    rootFontSize: number
    fontSize: PortSize
    dpFontSize: PortSize
}

export const getRootFontSize = (): number => {
    const screen = getScreenTypes()
    switch (screen) {
        case ScreenType.U4K:
            return 20
        case ScreenType.U2K:
            return 18
        case ScreenType.FULLHD:
            return 16
        case ScreenType.HD:
            return 14
        case ScreenType.STANDAR:
            return 12
        default:
            return 10
    }
}

const getScreenType = (value: number): ScreenType => {
    let result = ScreenType.SMALL

    if (value > ScreenType.STANDAR) {
        result = ScreenType.STANDAR
    }
    if (value > ScreenType.HD) {
        result = ScreenType.HD
    }
    if (value > ScreenType.FULLHD) {
        result = ScreenType.FULLHD
    }
    if (value > ScreenType.U2K) {
        result = ScreenType.U2K
    }
    if (value > ScreenType.U4K) {
        result = ScreenType.U4K
    }
    return result
}

export const getScreenTypes = (): ScreenType => {
    let { width, height } = getScreenDimension()

    let result: ScreenType = ScreenType.SMALL

    if (getOrientation() === ScreenOrientation.LANDSCAPE) result = getScreenType(width)
    else result = getScreenType(height)
    return result
}

export const getScreenDimension = (): ScreenDimension => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export enum OSDevice {
    WIN = 'windows',
    LINUX = 'linux',
    DARWIN = 'darwin',
    MAC = 'macOS',
    ANDROID = 'android',
    IOS = 'iOS',
    NOT_IDENTIFICATION = 'not_identification'
}

export const getOsDevice = (): OSDevice => {
    let result: OSDevice = OSDevice.NOT_IDENTIFICATION
    let agent = window.navigator.userAgent
    if (agent.includes('Win')) result = OSDevice.WIN
    if (agent.includes('Linux')) result = OSDevice.LINUX
    if (agent.includes('Darwin')) result = OSDevice.DARWIN
    if (agent.includes('macOs')) result = OSDevice.MAC
    if (agent.includes('Android')) result = OSDevice.ANDROID
    if (agent.includes('iOS')) result = OSDevice.IOS
    return result
}

export const getOrientation = (): ScreenOrientation => {
    const screen = getScreenDimension()
    if (screen.height > screen.width) {
        return ScreenOrientation.POTRET
    }
    return ScreenOrientation.LANDSCAPE
}

export const getScreenRasio = (): number => {
    const orientation = getOrientation()
    const screen = getScreenDimension()
    if (orientation === ScreenOrientation.LANDSCAPE) {
        return screen.width / screen.height
    }
    return screen.height / screen.width
}

