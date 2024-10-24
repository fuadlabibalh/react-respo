"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimension = void 0;
const react_1 = require("react");
const _1 = require(".");
function useDeviceScreen() {
    const dimension = (0, exports.useDimension)();
    let result = {
        dimension: dimension,
        orientation: (0, _1.getOrientation)(),
        rasio: (0, _1.getScreenRasio)(),
        os: (0, _1.getOsDevice)(),
        type: (0, _1.getScreenTypes)(),
        rootFontSize: (0, _1.getRootFontSize)(),
        fontSize: (0, _1.getPortSize)(),
        dpFontSize: (0, _1.getDPSize)()
    };
    return result;
}
const useDimension = () => {
    const [screen, setScreen] = (0, react_1.useState)((0, _1.getScreenDimension)());
    const handleResize = () => {
        return setScreen((0, _1.getScreenDimension)());
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
