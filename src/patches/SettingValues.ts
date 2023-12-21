import { PluginInjector, SettingValues } from "../index";
import { GatewayConnectionStore, TitleBarClasses } from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  PluginInjector.after(SettingValues, "set", ([SettingIdentifier]) => {
    if (SettingIdentifier === "UI") void Utils.forceRerenderElement(`.${TitleBarClasses.titleBar}`);
    if (SettingIdentifier === "WebSocket") GatewayConnectionStore.getSocket().close();
  });
};
