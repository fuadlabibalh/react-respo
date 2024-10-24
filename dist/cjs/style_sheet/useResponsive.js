"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsive = void 0;
const useDeviceScreen_1 = __importDefault(require("../device_screen/useDeviceScreen"));
function gerResp(styleDef, ...setConds) {
    const device = (0, useDeviceScreen_1.default)();
    let result = { ...styleDef(device) };
    for (let i = 0; i < setConds.length; i++) {
        let func = setConds[i];
        let temp = func(device);
        if (temp.condition)
            result = { ...result, ...temp.style };
    }
    return result;
}
const useResponsive = () => gerResp;
exports.useResponsive = useResponsive;
