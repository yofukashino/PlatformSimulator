import { util } from "replugged";
import { PluginInjector } from "../index";

export const forceUpdate = (element: HTMLElement): void => {
  if (!element) return;
  const toForceUpdate = util.getOwnerInstance(element);
  const forceRerender = PluginInjector.instead(toForceUpdate, "render", () => {
    forceRerender();
    return null;
  });
  toForceUpdate.forceUpdate(() => toForceUpdate.forceUpdate(() => {}));
};
