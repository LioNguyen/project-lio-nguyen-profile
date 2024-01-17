import { FC, HTMLAttributes } from "react";

import { About } from "@/components";

interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutPage: FC<AboutPageProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <About />
    </div>
  );
};
