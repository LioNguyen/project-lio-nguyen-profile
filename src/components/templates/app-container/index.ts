import { Utils } from "react-minimist-utils";

export const AppContainer = Utils.React.lazyLoad(
  () => import("./AppContainer"),
  (module) => module.AppContainer
);
