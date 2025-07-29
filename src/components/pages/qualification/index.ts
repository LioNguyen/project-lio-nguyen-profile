import { Utils } from "react-minimist-utils";

export const QualificationPage = Utils.React.lazyLoad(
  () => import("./QualificationPage"),
  (module) => module.QualificationPage
);

export type { QualificationPageProps } from "./QualificationPage";
