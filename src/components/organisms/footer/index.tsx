import { Utils } from "react-minimist-utils";

export const Footer = Utils.lazyLoad(
  () => import("./Footer"),
  (module) => module.Footer
);

export type { FooterProps } from "./Footer";
