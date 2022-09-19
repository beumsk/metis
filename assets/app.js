import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import Index from "./index";
import { CookiesProvider } from "react-cookie";
import { AuthProvider, RequireAuth } from "./context/auth";
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
