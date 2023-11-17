import { Utils } from "minimist-react-library";

export const Timeline = Utils.React.lazyLoad(
  () => import("./Timeline"),
  (module) => module.Timeline
);
