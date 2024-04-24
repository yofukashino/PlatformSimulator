import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("PlatformSimulator");
export const SettingValues = await settings.init("dev.tharki.PlatformSimulator", defaultSettings);
export const PluginInjector = new Injector();
import Settings from "./Components/Settings";
import Injections from "./injections";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  Injections.removeInjections();
};

export { Settings } from "./Components/Settings";
