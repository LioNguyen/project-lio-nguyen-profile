import { FC, HTMLAttributes } from "react";

import { ShortDescription } from "@/components";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export const About: FC<AboutProps> = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      <ShortDescription />
    </div>
  );
};
