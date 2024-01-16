import { Link, Stack, StackProps } from "@chakra-ui/react";
import { FC } from "react";

import { socialItems } from "@/constants";
import { useDevice } from "@/hooks";

interface SocialWidgetProps extends StackProps {}

export const SocialWidget: FC<SocialWidgetProps> = (props) => {
  const { isMobile } = useDevice();

  return (
    <Stack
      id="social-widget"
      justifyContent="center"
      gap="30px"
      position="absolute"
      left={0}
      top={0}
      bottom={{ base: "70%", sm: 0 }}
      {...props}
    >
      {socialItems.map((item) => {
        const Icon = item.icon;

        if (!item.showHome) return;
        return (
          <Link
            key={item.name}
            className="social-widget__item"
            href={item.href}
            isExternal
            aria-label={item.name}
          >
            <Icon size={isMobile ? 20 : 25} />
          </Link>
        );
      })}
    </Stack>
  );
};
