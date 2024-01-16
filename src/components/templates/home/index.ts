import { Utils } from "react-minimist-utils";

export const Home = Utils.React.lazyLoad(
  () => import("./Home"),
  (module) => module.Home
);
