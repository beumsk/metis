import React, { useContext, useDebugValue, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";

import Modal from "react-bootstrap/Modal";
const Form_AddPatients = () => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const navigate = useNavigate();
  const logout = useLogout();
  const [show, setShow] = useState(false);

  const [lastname, setLastName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [nicknames, setNickNames] = useState(null);
  const [antenna, setAntenna] = useState(localStorage.getItem("antenna"));

  var formData = new FormData();
  formData.append("lastname", lastname);
  formData.append("firstname", firstname);
  formData.append("nicknames", nicknames);
  formData.append("antenna", antenna);
  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  const setFormCreation = (e) => {
    axios({
      method: "post",
      url: "/api/setCreationPatient",
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="addPatients-btn" onClick={handleShow}>
        <FontAwesomeIcon icon={faUserPlus} />
        {/* Ajouter un patient */}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4 className="mb-4">Ajouter un patient</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Tapez le nom"
                className="uk-input"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Tapez le prénom"
                className="uk-input"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Tapez le surnom"
                className="uk-input"
                onChange={(e) => setNickNames(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              defaultValue={localStorage.getItem("antenna")}
              className="uk-select"
              onChange={(e) => setAntenna(e.target.value)}
            >
              <option>Choissisez votre antenne</option>
              <option value="Liège">Liège</option>
              <option value="Bruxelles">Bruxelles</option>
            </Form.Select>

            <Button
              variant="primary"
              onClick={(e) => setFormCreation(e)}
              className="btn-metis mt-3"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Form_AddPatients;
