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
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const setFormReset = (e) => {
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
            onChange={(e) => setLastName(e.target.value)}
          />
          <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
        </Form.Group>

        <Form.Group
          className="mb-3 container-password"
          controlId="formBasicPassword"
        >
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Nouveau mot de passe"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
        </Form.Group>

        <Form.Group
          className="mb-3 container-password"
          controlId="formBasicPassword"
        >
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="Répéter le nouveau mot de passe"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
        </Form.Group>

        <Button
          variant="primary"
          onClick={(e) => setFormReset(e)}
          className="btn-metis mt-3"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditPassword;
