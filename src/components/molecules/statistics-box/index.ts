import { Utils } from "react-minimist-utils";

export const StatisticsBox = Utils.React.lazyLoad(
  () => import("./StatisticsBox"),
  (module) => module.StatisticsBox
);
