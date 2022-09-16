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
  const [cookies, setCookie] = useCookies();

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  console.log(getCookie("BEARER"));
  const getCustomersData = () => {
    axios
      .get("http://127.0.0.1:8000/api/home")
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  };
  getCustomersData();
  console.log(document.cookie);
  return (
    <div className="App">
      {cookies.user && <p>{cookies.user}</p>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Index;
