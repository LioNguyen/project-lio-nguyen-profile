import { DefaultTheme, Fonts } from "@/styles";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { ErrorPage } from "@/components/pages/error";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <div>About Page</div>,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <div>About Page</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
