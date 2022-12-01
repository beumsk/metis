import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import axios from "axios";
import Button from "react-bootstrap/Button";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import Form from "react-bootstrap/Form";
const EditPassword = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const [auth, setAuth] = useState(useAuth());
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [passwordNew, setPasswordNew] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [userId, setUserId] = useState(null);
  const [responseBack, setResponseBack] = useState(null);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/getUser",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setUserId(response.data.user.id);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);
  const setFormReset = (e) => {
    var formData = new FormData();
    formData.append("id", userId);
    formData.append("password", passwordNew);
    formData.append("currentPassword", currentPassword);

    axios({
      method: "post",
      url: "/api/editPassword",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setResponseBack(response.data.response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  return (
    <>
      <Menu></Menu>

      <Form className="container">
        <Form.Group
          className="mb-3 container-password"
          controlId="formBasicEmail"
        >
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Mot de passe actuel"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <div className="eye-icon">
            <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
          </div>
        </Form.Group>

        <Form.Group
          className="mb-3 container-password"
          controlId="formBasicPassword"
        >
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Nouveau mot de passe"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <div className="eye-icon">
            <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
          </div>
        </Form.Group>

        <Form.Group
          className="mb-3 container-password"
          controlId="formBasicPassword"
        >
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Répéter le nouveau mot de passe"
            onChange={(e) => setPasswordVerified(e.target.value)}
          />
          <div className="eye-icon">
            <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
          </div>
        </Form.Group>
        <Button
          variant="primary"
          disabled={
            passwordNew !== passwordVerified ||
            passwordNew === null ||
            passwordVerified === null ||
            currentPassword === null
          }
          onClick={(e) => setFormReset(e)}
          className="btn-metis mt-3"
        >
          Submit
        </Button>
        {responseBack && responseBack !== null && responseBack}
      </Form>
    </>
  );
};

export default EditPassword;
