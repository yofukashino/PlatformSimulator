import * as Types from "./types";

export default [
  {
    replacements: [
      {
        match: /(([\w_$]+\.[\w_$]+)\.window\.USE_OSX_NATIVE_TRAFFIC_LIGHTS)/,
        replace: `$1 && $2.process.platform == "darwin"`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
