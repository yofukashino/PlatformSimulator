import { webpack } from "replugged";
import * as Types from "../types";
export const PlatformChecks = webpack.getBySource<Types.GenericModule | string>("/^win/.test(s)");
export const TitleBarClasses = webpack.getByProps<Types.TitleBarClasses>(
  "macButton",
  "titleBar",
  "winButton",
  "wordmark",
);
export const GatewayConnectionStore =
  webpack.getBySource<Types.GatewayConnectionStore>("GatewayConnectionStore");
export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");
