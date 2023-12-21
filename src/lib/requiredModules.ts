import { webpack } from "replugged";
import Types from "../types";
export const PlatformChecks = webpack.getByProps<Types.PlatformChecks>(
  "PlatformTypes",
  "getNativePlatform",
);
export const TitleBarClasses = webpack.getByProps<Types.TitleBarClasses>(
  "macButton",
  "titleBar",
  "winButton",
  "wordmark",
);
export const GatewayConnectionStore =
  webpack.getBySource<Types.GatewayConnectionStore>("GatewayConnectionStore");
export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");
