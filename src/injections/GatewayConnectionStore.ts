import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import { GatewayRequestTypes } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";

export default (): void => {
  PluginInjector.after(Modules.GatewayConnectionStore, "getSocket", (_args, res) => {
    const originalSend = res.send.bind(res);
    res.send = (...args: [number, Types.IdentityProps]) => {
      const [EventType, IdentityProps] = args;
      if (EventType !== GatewayRequestTypes.IDENTIFY) return originalSend(...args);
      IdentityProps.properties = Utils.getCurrentPlatformWebsocket();
      return originalSend(...args);
    };
  });
};
