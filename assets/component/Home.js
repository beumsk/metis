// ./assets/js/components/Home.js

import React, { Component, useState } from "react";
import {
  Routes,
  Route,
  Switch,
  Navigate,
  Link,
  withRouter,
} from "react-router-dom";
import Users from "./Users.js";
import Posts from "./Posts";
import Index from "../index.js";

function Home(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  console.log("home");

  return (
    <div className="container-login d-flex" style={{ height: "100vh" }}>
      <p>test</p>
    </div>
  );
}

export default Home;
