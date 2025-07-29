import { Utils } from "react-minimist-utils";

export const Timeline = Utils.React.lazyLoad(
  () => import("./Timeline"),
  (module) => module.Timeline
);

export type { TimelineProps } from "./Timeline";
