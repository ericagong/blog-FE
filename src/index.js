import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./assets/globalStyle";

import { Provider } from "react-redux";
import store from "./modules/store/ConfigStore";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
