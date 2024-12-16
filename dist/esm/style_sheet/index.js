import { useEffect, useState } from 'react';
import { useDeviceScreen } from "../device_screen";
function gerResp(styleDef, ...setConds) {
    const [event, setEvent] = useState({
        hover: false,
        click: false
    });
    const device = useDeviceScreen();
    const handleMouseEnter = () => {
        setEvent({ ...event, hover: true });
    };
    const handleMouseLeave = () => {
        setEvent({ ...event, hover: false });
    };
    const handleMouseClick = () => {
        setEvent({ ...event, click: false });
        setTimeout(() => setEvent({ ...event, click: false }), 300);
    };
    useEffect(() => {
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('click', handleMouseClick);
        return () => {
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('click', handleMouseClick);
        };
    }, []);
    let result = { ...styleDef({ ...device, event }), transition: "all 300ms easy-in-out" };
    for (let i = 0; i < setConds.length; i++) {
        let func = setConds[i];
        let temp = func({ ...device, event });
        if (temp.condition)
            result = { ...result, ...temp.style, transition: "all 300ms easy-out-in" };
    }
    return result;
}
/**
 * get function to generate CSS @function gerResp
 * param length is not identification
 * use can passing callback more.
 * css will be generate and replace with condition you can be device like conditional in react with state etc.
 * @param styleDef @callback @type {func (device: DeviceScreens): React.CSSProperties}
 * @param setConds @callback @type {setCondision}
 * @returns {React.CSSProperties}
 * @returns @function gerResp
 */
export const useResponsive = () => gerResp;
