import { Utils } from "minimist-react-library";

export const SkillsPage = Utils.React.lazyLoad(
  () => import("./SkillsPage"),
  (module) => module.SkillsPage
);
