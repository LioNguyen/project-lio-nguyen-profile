import { Utils } from "minimist-react-library";

export const ContactPage = Utils.React.lazyLoad(
  () => import("./ContactPage"),
  (module) => module.ContactPage
);
