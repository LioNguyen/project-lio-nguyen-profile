import { Utils } from "minimist-react-library";

export const Navbar = Utils.React.lazyLoad(
  () => import("./Navbar"),
  (module) => module.Navbar
);
