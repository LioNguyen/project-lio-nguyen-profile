import { Utils } from "minimist-react-library";

export const AboutPage = Utils.React.lazyLoad(
  () => import("./AboutPage"),
  (module) => module.AboutPage
);
