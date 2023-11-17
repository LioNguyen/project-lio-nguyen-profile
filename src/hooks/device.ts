import { Hooks } from "minimist-react-library";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = Hooks.Window.useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 650);
    setIsTablet(width > 650 && width <= 900);
  }, [width]);

  return { isMobile, isTablet };
};
