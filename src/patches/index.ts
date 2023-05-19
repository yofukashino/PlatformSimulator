import { patchGatewayConnectionStore } from "./GatewayConnectionStore";
import { patchSettingSetter } from "./SettingValues";
import { patchUI } from "./UI";
export const applyInjections = (): void => {
  patchGatewayConnectionStore();
  patchSettingSetter();
  patchUI();
};
