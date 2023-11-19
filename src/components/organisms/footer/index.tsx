import { Utils } from "react-minimist-utils";

export const Footer = Utils.lazyLoad(
  () => import("./Footer"),
  (module) => module.Footer
);
