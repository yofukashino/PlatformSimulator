import { PluginInjector, SettingValues } from "../index";
import { GatewayConnectionStore } from "../lib/requiredModules";
import { GatewayRequestTypes, defaultSettings } from "../lib/consts";
import * as Types from "../types";

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
  }
};

export const patchGatewayConnectionStore = (): void => {
  PluginInjector.before(
    GatewayConnectionStore.getSocket(),
    "send",
    (args: [number, Types.IdentityProps]) => {
      const [EventType, IdentityProps] = args;
      if (EventType !== GatewayRequestTypes.IDENTIFY) return args;
      IdentityProps.properties = getCurrentPlatformWebsocket();
      return args;
    },
  );
  GatewayConnectionStore.getSocket().close();
};
