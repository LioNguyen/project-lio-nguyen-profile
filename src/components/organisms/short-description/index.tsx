import { Utils } from "react-minimist-utils";

export const ShortDescription = Utils.React.lazyLoad(
  () => import("./ShortDescription"),
  (module) => module.ShortDescription
);
