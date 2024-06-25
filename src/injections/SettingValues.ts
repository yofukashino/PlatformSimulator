import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  const { GatewayConnectionStore } = Modules;
  PluginInjector.after(SettingValues, "set", ([SettingIdentifier]) => {
    if (SettingIdentifier === "UI")
      void Utils.forceRerenderElement('#app-mount > [class*="titleBar_"]');
    if (SettingIdentifier === "WebSocket") GatewayConnectionStore.getSocket().close();
  });
};
