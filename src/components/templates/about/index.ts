import { Utils } from "react-minimist-utils";

export const About = Utils.React.lazyLoad(
  () => import("./About"),
  (module) => module.About
);
