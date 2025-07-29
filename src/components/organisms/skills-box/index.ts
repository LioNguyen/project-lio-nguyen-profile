import { Utils } from "react-minimist-utils";

export const SkillsBox = Utils.React.lazyLoad(
  () => import("./SkillsBox"),
  (module) => module.SkillsBox
);

export type { SkillsBoxProps } from "./SkillsBox";
