import { Utils } from "minimist-react-library";

export const BottomNavbar = Utils.React.lazyLoad(
  () => import("./BottomNavbar"),
  (module) => module.BottomNavbar
);
