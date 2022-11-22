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
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Menu from "../Menu";
const EditProfile = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

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
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);
  const setFormCreation = (e) => {
    axios({
      method: "get",
      url: "/api/getUser",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  return (
    <>
      <Menu></Menu>

      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nom d'utilisateur"
            defaultValue={username}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Adresse e-mail"
            defaultValue={email}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Mot de passe"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={(e) => setFormCreation(e)}
          className="btn-metis mt-3"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditProfile;
