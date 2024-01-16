import { Utils } from "react-minimist-utils";

export const Intro = Utils.React.lazyLoad(
  () => import("./Intro"),
  (module) => module.Intro
);
