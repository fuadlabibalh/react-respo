import { concateWithOrientation } from "./responsive";
import useDeviceScreen from "../device_screen/useDeviceScreen";
import { DeviceStyleConfig } from "./responsive";
import { OSDevice, ScreenOrientation } from "../device_screen/deviceScreen";

const useCss = (configStyle: DeviceStyleConfig | null) => {
  let result = { ...configStyle?.current?.default!, transition: "all 0.25s" };
  const { orientation, type, os } = useDeviceScreen();
  result = concateWithOrientation(result, configStyle?.current!, type);
  // switch (os) {
  //   case OSDevice.MAC.valueOf():
  //   case OSDevice.DARWIN.valueOf():
  //   case OSDevice.WIN.valueOf():
  //   case OSDevice.LINUX.valueOf():
  //   case OSDevice.NOT_IDENTIFICATION.valueOf():
  //     if (configStyle?.pc!) {
  //       if (orientation === ScreenOrientation.LANDSCAPE) {
  //         result =
  //           configStyle?.pc?.lanscape! &&
  //           concateWithOrientation(result, configStyle?.pc?.lanscape!, type)
  //       }
  //       if (orientation === ScreenOrientation.POTRET) {
  //         result =
  //           configStyle?.pc?.potret! &&
  //           concateWithOrientation(result, configStyle?.pc?.potret!, type)
  //       }
  //       break
  //     }
  //   case OSDevice.ANDROID.valueOf():
  //   case OSDevice.IOS.valueOf():
  //     if (configStyle?.mobile!) {
  //       if (orientation === ScreenOrientation.LANDSCAPE) {
  //         result =
  //           configStyle?.mobile?.lanscape! &&
  //           concateWithOrientation(result, configStyle.mobile!.lanscape!, type)
  //       }
  //       if (orientation === ScreenOrientation.POTRET) {
  //         result =
  //           configStyle?.mobile?.potret! &&
  //           concateWithOrientation(result, configStyle?.mobile?.potret!, type)
  //       }
  //       break
  //     }
  //   default:
  //     result = concateWithOrientation(result, configStyle?.current!, type)
  // }
  // return result
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
