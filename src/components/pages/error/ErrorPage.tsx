import { Container } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container
      id="error-page"
      height={"100vh"}
      maxW={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}
