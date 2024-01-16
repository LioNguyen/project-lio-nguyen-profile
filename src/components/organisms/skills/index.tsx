import { Utils } from "react-minimist-utils";

export const Skills = Utils.React.lazyLoad(
  () => import("./Skills"),
  (module) => module.Skills
);
