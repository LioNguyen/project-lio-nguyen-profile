import { Utils } from "react-minimist-utils";

export const CustomButton = Utils.React.lazyLoad(
  () => import("./Button"),
  (module) => module.CustomButton
);

export type { CustomButtonProps } from "./Button";
