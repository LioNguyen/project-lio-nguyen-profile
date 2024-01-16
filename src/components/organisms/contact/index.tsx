import { Utils } from "react-minimist-utils";

export const Contact = Utils.React.lazyLoad(
  () => import("./Contact"),
  (module) => module.Contact
);
