import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  const {
    PlatformCheckUtils,
    PlatformCheckUtils: { PlatformTypes },
    TitleBarClasses,
  } = Modules;
  PluginInjector.instead(
    PlatformCheckUtils,
    "isWindows",
    () => SettingValues.get("UI", defaultSettings.UI) === "win32",
  );
  PluginInjector.instead(
    PlatformCheckUtils,
    "isLinux",
    () => SettingValues.get("UI", defaultSettings.UI) === "linux",
  );
  PluginInjector.instead(PlatformCheckUtils, "getOS", () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? "linux"
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? "windows"
      : "macos",
  );
  PluginInjector.instead(PlatformCheckUtils, "getPlatform", () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? PlatformTypes.LINUX
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? PlatformTypes.WINDOWS
      : PlatformTypes.OSX,
  );
  PluginInjector.instead(
    PlatformCheckUtils,
    "isMac",
    () => SettingValues.get("UI", defaultSettings.UI) === "darwin",
  );
  PluginInjector.instead(PlatformCheckUtils, "getPlatformName", () =>
    SettingValues.get("UI", defaultSettings.UI),
  );
  void Utils.forceRerenderElement(`.${TitleBarClasses.titleBar}`);
};
