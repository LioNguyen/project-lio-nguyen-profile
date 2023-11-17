import { Utils } from "minimist-react-library";

export const AppContainer = Utils.React.lazyLoad(
  () => import("./AppContainer"),
  (module) => module.AppContainer
);
