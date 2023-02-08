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

      // let formData = new FormData();
      // formData.append("id", auth.id);
      // const saveLoginTime = await axios({
      //   method: "post",
      //   url: "/api/saveTimeLogin",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${auth.auth.accessToken}`,
      //   },
      // }).then(function (response) {
      //
      // });
      // const saveLoginTime = await axios.post(
      //   LOGIN_URL,
      //   JSON.stringify({ email, password }),
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      const accessToken = response.data.token;
      const token = await axios.get("/api/token/refresh", {
        withCredentials: true,
      });

      const roles_used = await axios.get("/api/getUser", {
        headers: { Authorization: `Bearer ${token.data.token}` },
      });

      const roles = roles_used?.data?.roleNames;
      setPersist((prev) => !prev);
      if (roles.length > 0) {
        setAuth({ email, password, roles, accessToken });
        setUser("");
        setPwd("");
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Erreur de serveur.");
      } else if (err.response?.status === 400) {
        setErrMsg("E-mail et mot de passe manquant.");
      } else if (err.response.data.message === "Invalid credentials.") {
        setErrMsg("Mauvais identifiants.");
      } else if (err.response.data.message === "Account disabled.") {
        setErrMsg("Compte désactivé.");
      } else {
        setErrMsg("Mauvais identifiants.");
      }
      errRef.current.focus();
    }
  };

  // Account disabled.

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };

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
            className="uk-input mb-4"
            // className="my-4"
            ref={userRef}
            placeholder="Tapez votre utilisateur"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={email}
            required
          />

          <input
            type="password"
            className="uk-input mb-4"
            id="password"
            placeholder="Tapez votre mot de passe"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
          />
          <button className="btn-metis">Se connecter</button>
          {/* <div className="persistCheck  d-flex justify-content-start align-items-center mt-4">
            <input
              type="checkbox"
              id="persist"
              onChange={togglePersist}
              checked={persist}
            />
            <label htmlFor="persist">Se souvenir de moi</label>
          </div> */}
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
