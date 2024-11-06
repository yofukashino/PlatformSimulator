import Types from "./types";

export default [
  {
    find: "this.handleWatchStream",
    replacements: [
      {
        match: /=\w+\.\w+\.has\(null\!=.\?.\:""\)/,
        replace: `=""`,
      },
    ],
  },
  {
    replacements: [
      {
        match: /([\w_$]+\.[\w_$]+)\.window\.USE_OSX_NATIVE_TRAFFIC_LIGHTS/,
        replace: (prefix: string, DiscordNative: string) =>
          `${prefix}&&${DiscordNative}.process.platform=="darwin"`,
      },
      {
        match: /\w+\.clientInfo\.os/,
        replace: `'windows'`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
