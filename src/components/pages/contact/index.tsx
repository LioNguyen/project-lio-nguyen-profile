import { Utils } from "react-minimist-utils";

export const ContactPage = Utils.React.lazyLoad(
  () => import("./ContactPage"),
  (module) => module.ContactPage
);

export type { ContactPageProps } from "./ContactPage";
