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
      const {
        release_channel,
        client_version,
        app_arch,
        system_locale,
        client_build_number,
        native_build_number,
      } = IdentityProps.properties;
      IdentityProps.properties = {
        release_channel,
        client_version,
        app_arch,
        system_locale,
        client_build_number,
        native_build_number,
        ...Utils.getCurrentPlatformWebsocket(),
      };
      return originalSend(...args);
    };
  });
};
