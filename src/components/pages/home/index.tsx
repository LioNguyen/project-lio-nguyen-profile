import { Utils } from "react-minimist-utils";

export const HomePage = Utils.React.lazyLoad(
  () => import("./HomePage"),
  (module) => module.HomePage
);
