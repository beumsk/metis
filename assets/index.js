// ./assets/js/components/Home.js

import React, { Component } from "react";

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

const Index = () => {
  fetch("/api/getUser", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Index;
