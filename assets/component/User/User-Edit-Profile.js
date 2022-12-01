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
  const [idUser, setIdUser] = useState(null);
  const [responseBack, setResponseBack] = useState(null);
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
        setIdUser(response.data.user.id);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);
  const setFormCreation = (e) => {
    var formData = new FormData();
    console.log(idUser);
    formData.append("id", idUser);
    formData.append("username", username);
    formData.append("email", email);
    axios({
      method: "post",
      url: "/api/editUser",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setResponseBack(response.data.response);
        // setUsername(response.data.user.username);
        // setEmail(response.data.user.email);
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Adresse e-mail"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group> */}

        <Button
          variant="primary"
          onClick={(e) => setFormCreation(e)}
          className="btn-metis mt-3"
        >
          Submit
        </Button>
        {responseBack && responseBack !== null && responseBack}
      </Form>
    </>
  );
};

export default EditProfile;
