import { Utils } from "minimist-react-library";

export const HomePage = Utils.React.lazyLoad(
  () => import("./HomePage"),
  (module) => module.HomePage
);
