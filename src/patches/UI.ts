import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { PlatformChecks, TitleBarClasses } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
import * as Types from "../types";

export const patchUI = (): void => {
  const PlatformTypes = webpack.getExportsForProps<Types.PlatformTypes>(PlatformChecks, [
    "WINDOWS",
    "OSX",
    "LINUX",
    "WEB",
  ]);
  const isWindows = webpack.getFunctionKeyBySource<string>(
    PlatformChecks as string,
    /\/\^win\/\.test\(\w+\)/,
  );
  PluginInjector.instead(
    PlatformChecks as Types.GenericModule,
    isWindows,
    () => SettingValues.get("UI", defaultSettings.UI) === "win32",
  );
  const isLinux = webpack.getFunctionKeyBySource<string>(PlatformChecks as string, '"linux"');
  PluginInjector.instead(
    PlatformChecks as Types.GenericModule,
    isLinux,
    () => SettingValues.get("UI", defaultSettings.UI) === "linux",
  );
  const UserAgent = webpack.getFunctionKeyBySource<string>(
    PlatformChecks as string,
    "/Android/.test(",
  );
  PluginInjector.instead(PlatformChecks as Types.GenericModule, UserAgent, () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? "linux"
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? "windows"
      : "macos",
  );
  const PlatformType = webpack.getFunctionKeyBySource<string>(
    PlatformChecks as string,
    ".WINDOWS:",
  );
  PluginInjector.instead(PlatformChecks as Types.GenericModule, PlatformType, () =>
    SettingValues.get("UI", defaultSettings.UI) === "linux"
      ? PlatformTypes.LINUX
      : SettingValues.get("UI", defaultSettings.UI) === "win32"
      ? PlatformTypes.WINDOWS
      : PlatformTypes.OSX,
  );
  const isMac = webpack.getFunctionKeyBySource<string>(PlatformChecks as string, '"darwin"');
  PluginInjector.instead(
    PlatformChecks as Types.GenericModule,
    isMac,
    () => SettingValues.get("UI", defaultSettings.UI) === "darwin",
  );
  const CurrentPlatform = webpack.getFunctionKeyBySource<string>(
    PlatformChecks as string,
    /return \w+}/,
  );
  PluginInjector.instead(PlatformChecks as Types.GenericModule, CurrentPlatform, () =>
    SettingValues.get("UI", defaultSettings.UI),
  );
  const TitleBarElement = document.querySelector(`.${TitleBarClasses.titleBar}`);
  Utils.forceUpdate(TitleBarElement as HTMLElement);
};
