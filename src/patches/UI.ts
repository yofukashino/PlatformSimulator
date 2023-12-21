import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { PlatformChecks, TitleBarClasses } from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  const { PlatformTypes } = PlatformChecks;
  PluginInjector.instead(
    PlatformChecks,
    "isWindows",
    () => SettingValues.get("UI", defaultSettings.UI) === "win32",
  );
  PluginInjector.instead(
    PlatformChecks,
    "isLinux",
    () => SettingValues.get("UI", defaultSettings.UI) === "linux",
  );
  PluginInjector.instead(PlatformChecks, "getOS", () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? "linux"
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? "windows"
      : "macos",
  );
  PluginInjector.instead(PlatformChecks, "getPlatform", () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? PlatformTypes.LINUX
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? PlatformTypes.WINDOWS
      : PlatformTypes.OSX,
  );
  PluginInjector.instead(
    PlatformChecks,
    "isMac",
    () => SettingValues.get("UI", defaultSettings.UI) === "darwin",
  );
  PluginInjector.instead(PlatformChecks, "getPlatformName", () =>
    SettingValues.get("UI", defaultSettings.UI),
  );
  void Utils.forceRerenderElement(`.${TitleBarClasses.titleBar}`);
};
