import { Utils } from "minimist-react-library";

export const SkillsBox = Utils.React.lazyLoad(
  () => import("./SkillsBox"),
  (module) => module.SkillsBox
);
