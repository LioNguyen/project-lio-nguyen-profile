import { Utils } from "react-minimist-utils";

export const Qualification = Utils.React.lazyLoad(
  () => import("./Qualification"),
  (module) => module.Qualification
);
