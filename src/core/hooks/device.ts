import { Hooks } from "react-minimist-utils";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = Hooks.Window.useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 750);
    setIsTablet(width > 750 && width <= 900);
  }, [width]);

  return { isMobile, isTablet };
};
