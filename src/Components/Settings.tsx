import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";

const { SelectItem } = components;

export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SelectItem
        {...{
          note: "Change your UI to match another platform.",
          disabled: false,
          options: [
            { label: "Windows", value: "win32" },
            { label: "OSX", value: "darwin" },
            { label: "Linux", value: "linux" },
          ],
          ...util.useSetting(SettingValues, "UI", defaultSettings.UI),
        }}>
        UI
      </SelectItem>
      <SelectItem
        {...{
          note: "Change your websocket to match another platform. (This will change platfrom for platform indicator plugin)",
          disabled: false,
          options: [
            { label: "Windows", value: "win32" },
            { label: "OSX", value: "darwin" },
            { label: "Linux", value: "linux" },
            { label: "TempleOS", value: "temple" },
            { label: "Web", value: "web" },
            { label: "Android", value: "android" },
            { label: "iOS", value: "ios" },
          ],
          ...util.useSetting(SettingValues, "WebSocket", defaultSettings.WebSocket),
        }}>
        Websocket
      </SelectItem>
    </div>
  );
};
