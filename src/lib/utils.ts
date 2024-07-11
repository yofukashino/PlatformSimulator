import { util } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "./consts";
import Modules from "./requiredModules";
import Types from "../types";

export const forceRerenderElement = async (selector: string): Promise<void> => {
  const element = await util.waitFor(selector);
  if (!element) return;
  const ownerInstance = util.getOwnerInstance(element);
  const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
    unpatchRender();
    return null;
  });
  ownerInstance.forceUpdate(() => ownerInstance.forceUpdate(() => {}));
};

export const getCurrentPlatformWebsocket = (): Types.PlatformWebsocket => {
  switch (SettingValues.get("WebSocket", defaultSettings.WebSocket)) {
    case "win32":
      return { browser: "Discord Client", os: "Windows" };
    case "darwin":
      return { browser: "Discord Client", os: "Mac OS X" };
    case "linux":
      return { browser: "Discord Client", os: "Linux" };
    case "temple":
      return { browser: "Discord Client", os: "TempleOS" };
    case "web":
      return { browser: "Discord Web", os: "Other" };
    case "android":
      return { browser: "Discord Android", os: "Android" };
    case "ios":
      return { browser: "Discord iOS", os: "iOS" };
    case "embedded":
      return { browser: "Discord Embedded", os: "unknown" };
  }
};

export const closeWebsocket = (): void =>
  Modules.GatewayConnectionStore?.getSocket().close() as void;

export default { ...util, forceRerenderElement, getCurrentPlatformWebsocket, closeWebsocket };
