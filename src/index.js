import {
  ChakraProvider,
  ColorModeScript,
  Container,
} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="system" />
      <Container
        size="container.sm"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
