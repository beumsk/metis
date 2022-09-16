import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import Index from "./index";
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Index />
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
