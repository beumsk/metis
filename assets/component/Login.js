// ./assets/js/components/Home.js

import React, { Component } from "react";
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
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  console.log(props);
  const login = () => {
    axios
      .post("http://127.0.0.1:8000/login", {
        email: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "https://127.0.0.1:8000/home";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container-login d-flex" style={{ height: "100vh" }}>
      <div className="col-sm-6 d-flex justify-content-center align-items-center column-title">
        <h1>Metis</h1>
      </div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="login-box">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
