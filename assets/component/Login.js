import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const accessToken = response.data.token;
      const token = await axios.get("/api/token/refresh", {
        withCredentials: true,
      });

      const roles_used = await axios.get("/api/getUser", {
        headers: { Authorization: `Bearer ${token.data.token}` },
      });

      const roles = roles_used?.data?.roleNames;

      if (roles.length > 0) {
        setAuth({ email, password, roles, accessToken });
        setUser("");
        setPwd("");
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <div className="container-login row m-0">
      <div className="col-sm-6 column-title  d-flex justify-content-center align-items-center">
        <h1>Métis</h1>
      </div>

      <div className="col-sm-6 column-content  d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            ref={userRef}
            placeholder="Tapez votre utilisateur"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={email}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Tapez votre mot de passe"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
          />
          <button>Sign In</button>
          <div className="persistCheck  d-flex justify-content-start align-items-center mt-4">
            <input
              type="checkbox"
              id="persist"
              onChange={togglePersist}
              checked={persist}
            />
            <label htmlFor="persist">Trust This Device</label>
          </div>
        </form>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
    </div>
  );
};

export default Login;
