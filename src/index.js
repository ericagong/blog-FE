import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./assets/font.css";
import { lightTheme } from "./assets/globalStyle";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
