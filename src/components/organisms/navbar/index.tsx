import { Utils } from "react-minimist-utils";

export const Navbar = Utils.React.lazyLoad(
  () => import("./Navbar"),
  (module) => module.Navbar
);
