import { ScreenType } from '../device_screen';
export const concateWithOrientation = (result, confOrientation, screenType) => {
    result = { ...result, ...confOrientation.default };
    if (screenType <= ScreenType.SMALL) {
        result = { ...result, ...confOrientation.sm };
    }
    if (screenType >= ScreenType.STANDAR) {
        result = { ...result, ...confOrientation.md };
    }
    if (screenType >= ScreenType.HD) {
        result = { ...result, ...confOrientation.hd };
    }
    if (screenType >= ScreenType.FULLHD) {
        result = { ...result, ...confOrientation.fullhd };
    }
    if (screenType >= ScreenType.U2K) {
        result = { ...result, ...confOrientation.u2K };
    }
    if (screenType >= ScreenType.U4K) {
        result = { ...result, ...confOrientation.u4K };
    }
    return result;
};
export function switcherValue(configValue, screenType) {
    let result = configValue.default;
    if (screenType >= ScreenType.STANDAR) {
        result = configValue.md;
    }
    if (screenType >= ScreenType.HD) {
        result = configValue.hd;
    }
    if (screenType >= ScreenType.FULLHD) {
        result = configValue.fullhd;
    }
    if (screenType >= ScreenType.U2K) {
        result = configValue.u2k;
    }
    if (screenType >= ScreenType.U4K) {
        result = configValue.u4k;
    }
    return result;
}
