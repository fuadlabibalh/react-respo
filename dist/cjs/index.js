"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useDeviceScreen_1 = __importDefault(require("./device_screen/useDeviceScreen"));
const useCssGenerator_1 = require("./style_sheet/useCssGenerator");
const useResponsive_1 = require("./style_sheet/useResponsive");
const cssrr = {
    useResponsive: useResponsive_1.useResponsive,
    useCssGenerator: useCssGenerator_1.useCssGenerator,
    useDeviceScreen: useDeviceScreen_1.default
};
exports.default = cssrr;
