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
import InputTypeList from "./Input-Type-List";

function ModalAddObjectifs(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  const [userId, setUserId] = useState(null);
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 174);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const [fonction, setFonction] = useState(null);
  const [callsFunctionValue, setCallsFunction] = useState(null);
  const [isCallsPatients, setIsCallsPatients] = useState(false);
  const [isPriority, setPriority] = useState(false);
  const [contact, setonChangeContact] = useState(null);
  const [description, setDescription] = useState(null);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [valueType, setValueType] = useState(null);
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
    setUserId(auth.auth.idUser);
  }, [idPatient]);

  function onSent() {
    // isCall is true appel entrant

    let formData = new FormData();

    formData.append("typeValue", typeValue);

    formData.append("isPriority", isPriority);

    formData.append("description", description);
    formData.append("valueType", valueType);
    formData.append("patientId", idPatient);
    formData.append("userId", userId);

    axios({
      method: "post",
      url: "/api/setGoals",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      var formDataGetGoals = new FormData();
      formDataGetGoals.append("id", id.toString());
      axios({
        method: "post",
        url: "/api/getFollowUpReportsGoals",
        data: formDataGetGoals,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          props.onChange(response);
        })
        .catch(function (response) {});
      document.querySelectorAll(".btn-close")[0].click();
    });
  }
  //
  //   /api/getContacts
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Ajouter Objectifs
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un objectif</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <InputTypeList type={type} onChange={(e) => setTypeValue(e)} />

            <Form.Control
              type="text"
              onChange={(e) => setValueType(e.target.value)}
              id="inputText"
              className="mt-4 uk-input"
            />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Prioritaire ?" />
            </Form.Group>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              type="text"
              className="uk-input"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={onSent}>Sauver</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddObjectifs;
