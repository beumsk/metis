import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputContactList from "./Input-Contact-List";
import InputTypeList from "./Input-Type-List";

function ModalAddReports(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
  //

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Ajouter rapport de rencontre
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <InputContactList contacts={props?.contacts} />
            <InputTypeList type={type} />

            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              type="text"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control className="uk-textarea" as="textarea" rows={2} />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleClose} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddReports;
