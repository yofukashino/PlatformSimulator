import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.PlatformCheckUtils ??= await webpack
    .waitForProps<Types.PlatformCheckUtils>(["PlatformTypes", "getNativePlatform"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find PlatformCheckUtils Module");
    });

  Modules.GatewayConnectionStore =
    webpack.getByStoreName<Types.GatewayConnectionStore>("GatewayConnectionStore");
};

export default Modules;
