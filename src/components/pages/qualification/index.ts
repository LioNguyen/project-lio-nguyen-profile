import { Utils } from "minimist-react-library";

export const QualificationPage = Utils.React.lazyLoad(
  () => import("./QualificationPage"),
  (module) => module.QualificationPage
);
