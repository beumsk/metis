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
  // const sendGetRequest = async () => {
  //   try {
  //     const resp = await axios.get(`/api/getUser`, {
  //       withCredentials: true,
  //     });
  //     console.log(resp.data);
  //     return resp.data;
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  // const AuthContext = createContext({
  //   user: {
  //     email:
  //       sendGetRequest() && sendGetRequest().user
  //         ? sendGetRequest().user.email
  //         : null,
  //     password:
  //       sendGetRequest() && sendGetRequest().password
  //         ? sendGetRequest().user.password
  //         : null,
  //   },
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route element={<RequireAuth />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Index;
