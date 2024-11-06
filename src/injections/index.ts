import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import injectGatewayConnectionStore from "./GatewayConnectionStore";
import injectSettingSetter from "./SettingValues";
import injectUI from "./UI";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectGatewayConnectionStore();
  injectSettingSetter();
  injectUI(); 
  Utils.closeWebsocket();
  void Utils.forceRerenderElement('#app-mount > [class*="titleBar_"]');
};

export const removeInjections = (): void => {
  PluginInjector.uninjectAll();
  Utils.closeWebsocket();
  void Utils.forceRerenderElement('#app-mount > [class*="titleBar_"]');
};

export default { applyInjections, removeInjections };
