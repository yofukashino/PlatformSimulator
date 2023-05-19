import { webpack } from "replugged";
import * as Types from "../types";
export const PlatformChecks = webpack.getBySource(
  "/^win/.test(s)",
) as unknown as Types.GenericModule;
export const TitleBarClasses = webpack.getByProps(
  "macButton",
  "titleBar",
  "winButton",
  "wordmark",
) as unknown as Types.TitleBarClasses;
export const GatewayConnectionStore = webpack.getBySource(
  "GatewayConnectionStore",
) as unknown as Types.GatewayConnectionStore;
export const DiscordNative = webpack.getByProps(
  "clipboard",
  "process",
) as unknown as Types.DiscordNative;
