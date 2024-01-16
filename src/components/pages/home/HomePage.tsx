import { Home } from "@/components";
import { FC, HTMLAttributes } from "react";

interface HomePageProps extends HTMLAttributes<HTMLDivElement> {}

export const HomePage: FC<HomePageProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <Home />
    </div>
  );
};
