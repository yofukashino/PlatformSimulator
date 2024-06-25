import Types from "./types";

export default [
  {
    replacements: [
      {
        match: /([\w_$]+\.[\w_$]+)\.window\.USE_OSX_NATIVE_TRAFFIC_LIGHTS/,
        replace: (prefix: string, DiscordNative: string) =>
          `${prefix}&&${DiscordNative}.process.platform=="darwin"`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
