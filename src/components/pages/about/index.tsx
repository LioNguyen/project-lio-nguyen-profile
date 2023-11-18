import { Utils } from "react-minimist-utils";

export const AboutPage = Utils.React.lazyLoad(
  () => import("./AboutPage"),
  (module) => module.AboutPage
);
