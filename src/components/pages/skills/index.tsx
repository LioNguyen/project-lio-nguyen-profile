import { Utils } from "react-minimist-utils";

export const SkillsPage = Utils.React.lazyLoad(
  () => import("./SkillsPage"),
  (module) => module.SkillsPage
);

export type { SkillsPageProps } from "./SkillsPage";
