import { Hooks, Utils } from "react-minimist-utils";

export const SocialWidget = Utils.lazyLoad(
  () => import("./SocialWidget"),
  (module) => module.SocialWidget
);

export type { SocialWidgetProps } from "./SocialWidget";
