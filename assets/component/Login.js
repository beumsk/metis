// ./assets/js/components/Home.js

import React, { Component } from "react";
import { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = useCallback((e) => {
    e.preventDefault();

    let user = {
      email: username,
      password: password,
    };

    setUser({ user });
    setPassword({ password });

    console.log(user);
    axios
      .post("/login", {
        email: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/index");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div className="container-login d-flex" style={{ height: "100vh" }}>
      <div className="col-sm-6 d-flex justify-content-center align-items-center column-title">
        <h1>Metis</h1>
      </div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="login-box">
          <form onSubmit={login}>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
