import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.PlatformCheckUtils ??= await webpack.waitForProps<Types.PlatformCheckUtils>(
    "PlatformTypes",
    "getNativePlatform",
  );
  Modules.TitleBarClasses ??= await webpack.waitForProps<Types.TitleBarClasses>(
    "macButton",
    "titleBar",
    "winButton",
    "wordmark",
  );
  Modules.GatewayConnectionStore =
    webpack.getByStoreName<Types.GatewayConnectionStore>("GatewayConnectionStore");
};

export default Modules;
