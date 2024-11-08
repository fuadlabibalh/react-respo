import { useDeviceScreen } from "../device_screen";
/**
 * param length is not identification
 * use can passing callback more.
 * css will be generate and replace with condition you can be device like conditional in react with state etc.
 * @param styleDef @callback @type {func (device: DeviceScreens): React.CSSProperties}
 * @param setConds @callback @type {setCondision}
 * @returns
 */
function gerResp(styleDef, ...setConds) {
    const device = useDeviceScreen();
    let result = { ...styleDef(device), transition: "all 150ms easy-in-out" };
    for (let i = 0; i < setConds.length; i++) {
        let func = setConds[i];
        let temp = func(device);
        if (temp.condition)
            result = { ...result, ...temp.style, transition: "all 150ms easy-out-in" };
    }
    return result;
}
export const useResponsive = () => gerResp;
