import { Injector, Logger, settings } from "replugged";

import { defaultSettings } from "./lib/consts";

export const PluginLogger = Logger.plugin("PlatformSimulator");

export const SettingValues = await settings.init("dev.tharki.PlatformSimulator", defaultSettings);

export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";

import Injections from "./patches/";

export const start = (): void => {
  registerSettings();
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
