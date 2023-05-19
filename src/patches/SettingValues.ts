import { PluginInjector, SettingValues } from "../index";
import { GatewayConnectionStore, TitleBarClasses } from "../lib/requiredModules";
import * as Utils from "../lib/utils";

export const patchSettingSetter = (): void => {
  PluginInjector.after(SettingValues, "set", ([SettingIdentifier]) => {
    const TitleBarElement = document.querySelector(`.${TitleBarClasses.titleBar}`);
    if (SettingIdentifier === "UI") Utils.forceUpdate(TitleBarElement as HTMLElement);
    if (SettingIdentifier === "WebSocket") GatewayConnectionStore.getSocket().close();
  });
};
