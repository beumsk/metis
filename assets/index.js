// ./assets/js/components/Home.js

import React, { createContext, useContext, useState } from "react";

import ReactCookie from "react-cookie";
import {
  Routes,
  Route,
  Switch,
  Navigate,
  Link,
  withRouter,
} from "react-router-dom";
import Users from "./component/Users";
import Posts from "./component/Posts";
import Home from "./component/Home";
import { useCookies, CookiesProvider } from "react-cookie";
import Login from "./component/Login";
import App from "./app";
import axios from "axios";
import { AuthProvider, RequireAuth } from "./context/auth";

const Index = () => {
  console.log(AuthProvider);
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />

          <Route path="/Index" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Index;
