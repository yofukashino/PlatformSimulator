import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { PlatformChecks, TitleBarClasses } from "../lib/requiredModules";
import * as Utils from "../lib/utils";

export const patchUI = (): void => {
  const PlatformTypes = webpack.getExportsForProps(PlatformChecks, [
    "WINDOWS",
    "OSX",
    "LINUX",
    "WEB",
  ]);
  const isWindows = webpack.getFunctionKeyBySource<string>(PlatformChecks, "/^win/.test(s)");
  PluginInjector.instead(
    PlatformChecks,
    isWindows,
    () => SettingValues.get("UI", defaultSettings.UI) === "win32",
  );
  const isLinux = webpack.getFunctionKeyBySource<string>(PlatformChecks, '"linux"');
  PluginInjector.instead(
    PlatformChecks,
    isLinux,
    () => SettingValues.get("UI", defaultSettings.UI) === "linux",
  );
  const UserAgent = webpack.getFunctionKeyBySource<string>(PlatformChecks, "/Android/.test(");
  PluginInjector.instead(PlatformChecks, UserAgent, () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? "linux"
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? "windows"
      : "macos",
  );
  const PlatformType = webpack.getFunctionKeyBySource<string>(PlatformChecks, ".WINDOWS:");
  PluginInjector.instead(PlatformChecks, PlatformType, () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? PlatformTypes.LINUX
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? PlatformTypes.WINDOWS
      : PlatformTypes.OSX,
  );
  const isMac = webpack.getFunctionKeyBySource<string>(PlatformChecks, '"darwin"');
  PluginInjector.instead(
    PlatformChecks,
    isMac,
    () => SettingValues.get("UI", defaultSettings.UI) === "darwin",
  );
  const CurrentPlatform = webpack.getFunctionKeyBySource<string>(PlatformChecks, /return \w+}/);
  PluginInjector.instead(PlatformChecks, CurrentPlatform, () =>
    SettingValues.get("UI", defaultSettings.UI),
  );
  const TitleBarElement = document.querySelector(`.${TitleBarClasses.titleBar}`);
  Utils.forceUpdate(TitleBarElement as HTMLElement);
};
