import { concateWithOrientation } from ".";
import useDeviceScreen from "../device_screen/useDeviceScreen"
import { DeviceStyleConfig } from ".";
import { OSDevice, ScreenOrientation } from "../device_screen"

const useCss = (configStyle: DeviceStyleConfig | null) => {
  let result = { ...configStyle?.current?.default!, transition: "all 0.25s" };
  const { orientation, type, os } = useDeviceScreen();
  result = concateWithOrientation(result, configStyle?.current!, type);
  if (
    configStyle?.pc!! &&
    (os === OSDevice.WIN ||
      os === OSDevice.DARWIN ||
      os === OSDevice.LINUX ||
      os === OSDevice.MAC ||
      os === OSDevice.NOT_IDENTIFICATION)
  ) {
    if (orientation === ScreenOrientation.LANDSCAPE) {
      result = { ...result, ...configStyle.pc.lanscape };
      result =
        configStyle.pc!.lanscape! &&
        concateWithOrientation(result, configStyle.pc!.lanscape!, type);
    }
    if (orientation === ScreenOrientation.POTRET) {
      result = { ...result, ...configStyle.pc.potret };
      result =
        configStyle.pc!.potret! &&
        concateWithOrientation(result, configStyle.pc!.potret!, type);
    }
  }
  if (
    configStyle?.mobile!! &&
    (os === OSDevice.ANDROID || os === OSDevice.IOS)
  ) {
    if (orientation === ScreenOrientation.LANDSCAPE) {
      result = { ...result, ...configStyle.mobile.lanscape };
      result =
        configStyle.mobile!.lanscape! &&
        concateWithOrientation(result, configStyle.mobile!.lanscape!, type);
    }
    if (orientation === ScreenOrientation.POTRET) {
      result = { ...result, ...configStyle.mobile.potret };
      result =
        configStyle.mobile!.potret! &&
        concateWithOrientation(result, configStyle.mobile!.potret!, type);
    }
  }
  return result;
};

export const useCssGenerator = () => useCss;
