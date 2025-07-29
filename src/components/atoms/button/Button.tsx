import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export interface CustomButtonProps extends ButtonProps {
  href?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({
  className,
  children,
  href,
  ...props
}) => {
  return (
    <Button
      as="a"
      href={href}
      marginTop={{ base: 5, sm: 10 }}
      transform={{ base: "scale(0.8)", sm: "none" }}
      transformOrigin="left"
      {...props}
    >
      {children}
    </Button>
  );
};
