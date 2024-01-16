import { FC, HTMLAttributes } from "react";

import { Intro, Qualification, Skills } from "@/components";

interface HomeProps extends HTMLAttributes<HTMLDivElement> {}

export const Home: FC<HomeProps> = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      <Intro />
      <Skills />
      <Qualification />
    </div>
  );
};
