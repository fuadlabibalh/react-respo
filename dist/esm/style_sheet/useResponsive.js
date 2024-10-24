import useDeviceScreen from "../device_screen/useDeviceScreen";
function gerResp(styleDef, ...setConds) {
    const device = useDeviceScreen();
    let result = { ...styleDef(device) };
    for (let i = 0; i < setConds.length; i++) {
        let func = setConds[i];
        let temp = func(device);
        if (temp.condition)
            result = { ...result, ...temp.style };
    }
    return result;
}
export const useResponsive = () => gerResp;
