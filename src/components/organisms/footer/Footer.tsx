import * as S from "./Footer.styles";

import {
  Container,
  ContainerProps,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { navItems, socialItems } from "@/constants";
import { useDevice } from "@/hooks";

interface FooterProps extends ContainerProps {}

export const Footer: FC<FooterProps> = (props) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  return (
    <S.Wrapper id="footer" variant="footer" {...props}>
      <S.FooterContainer alignItems="center" gap="20px">
        <Text variant="title">Lio</Text>
        <S.FooterRow>
          {navItems.map((item) => (
            <Text
              key={item.name}
              as="a"
              onClick={() => navigate(`/${item.name}`)}
              cursor={"pointer"}
            >
              {item.title}
            </Text>
          ))}
        </S.FooterRow>
        <S.FooterRow>
          {socialItems.map((item) => {
            const Icon = item.icon;

            if (!item.showFooter) return;
            return (
              <Link
                key={item.name}
                as="a"
                href={item.href}
                isExternal
                aria-label={item.name}
              >
                <Icon size={isMobile ? 20 : 25} />
              </Link>
            );
          })}
        </S.FooterRow>
        <Text
          marginTop="30px"
          textAlign="center"
          fontSize={{ base: "sm", sm: "md" }}
          width={{ base: "50%", sm: "100%" }}
        >
          Copyright © {new Date().getFullYear()} by Lio Nguyen. All rights
          reserved.
        </Text>
      </S.FooterContainer>
    </S.Wrapper>
  );
};
