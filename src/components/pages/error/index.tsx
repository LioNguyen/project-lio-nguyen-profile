import { Utils } from "react-minimist-utils";

export const ErrorPage = Utils.React.lazyLoad(
  () => import("./ErrorPage"),
  (module) => module.ErrorPage
);
