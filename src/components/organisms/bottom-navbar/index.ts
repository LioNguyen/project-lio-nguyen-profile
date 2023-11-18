import { Utils } from "react-minimist-utils";

export const BottomNavbar = Utils.React.lazyLoad(
  () => import("./BottomNavbar"),
  (module) => module.BottomNavbar
);
