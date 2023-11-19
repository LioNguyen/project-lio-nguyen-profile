import { DefaultTheme, Fonts } from "@/styles";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const theme = extendTheme({
  breakpoints: DefaultTheme.breakpoints,
  shadows: DefaultTheme.shadows,
  colors: DefaultTheme.colors,
  components: DefaultTheme.components,
  styles: {
    global: DefaultTheme.styles.global,
  },
});

console.log("🚀 @log ~ file: index.tsx:18 ~ theme:", theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
