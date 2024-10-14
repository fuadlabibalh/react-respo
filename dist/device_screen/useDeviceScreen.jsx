"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimension = void 0;
const react_1 = require("react");
const deviceScreen_1 = require("./deviceScreen");
function useDeviceScreen() {
    const dimension = (0, exports.useDimension)();
    let result = {
        dimension: dimension,
        orientation: (0, deviceScreen_1.getOrientation)(),
        rasio: (0, deviceScreen_1.getScreenRasio)(),
        os: (0, deviceScreen_1.getOsDevice)(),
        type: (0, deviceScreen_1.getScreenTypes)(),
        rootFontSize: (0, deviceScreen_1.getRootFontSize)(),
        fontSize: (0, deviceScreen_1.getPortSize)()
    };
    return result;
}
const useDimension = () => {
    const [screen, setScreen] = (0, react_1.useState)((0, deviceScreen_1.getScreenDimension)());
    const handleResize = () => {
        return setScreen((0, deviceScreen_1.getScreenDimension)());
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screen]);
    return screen;
};
exports.useDimension = useDimension;
exports.default = useDeviceScreen;
