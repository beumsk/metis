import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faTag,
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
  const [errorType, setErrorType] = useState(null);
  const [errorValue, setErrorValue] = useState(null);
  const [fonction, setFonction] = useState(null);
  const [callsFunctionValue, setCallsFunction] = useState(null);
  const [isCallsPatients, setIsCallsPatients] = useState(false);
  const [isPriority, setPriority] = useState(false);
  const [contact, setonChangeContact] = useState(null);
  const [description, setDescription] = useState(null);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [valueType, setValueType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setTypeValue(null);
    setValueType(null);
  };
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

    if (typeValue === "609" && valueType === null) {
      setErrorType(true);
    } else {
      setErrorType(false);
    }

    if (typeValue !== "609" && typeValue === null && valueType === null) {
      setErrorValue(true);
    } else {
      setErrorValue(false);
    }

    let isOtherValue = typeValue === "609" && valueType === null ? false : true;
    let isValue =
      typeValue !== "609" && typeValue === null && valueType === null
        ? false
        : true;

    console.log(isOtherValue, isValue, typeValue, valueType);
    if (isOtherValue === true && isValue === true) {
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
            setShow(false);
          })
          .catch(function (response) {});
      });
    }
  }
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        <FontAwesomeIcon icon={faTag} /> Objectifs
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter un objectif</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <InputTypeList
              type={type}
              onChange={(e) => {
                setTypeValue(e);
                if (
                  valueType !== null &&
                  typeValue !== null &&
                  typeValue === "609"
                ) {
                  setValueType(valueType);
                } else {
                  setValueType(null);
                }
              }}
            />
            {typeValue === "609" && (
              <>
                <Form.Control
                  type="text"
                  placeholder="Valeur personnalisée"
                  id="inputText"
                  onChange={(e) => setValueType(e.target.value)}
                  className="uk-input mt-3"
                />
              </>
            )}

            <Form.Group className="my-3" controlId="formBasicCheckbox">
              <Form.Check>
                <Form.Check.Input type="checkbox" className="uk-checkbox" />
                <Form.Check.Label>Prioritaire ?</Form.Check.Label>
              </Form.Check>
            </Form.Group>

            <Form.Label htmlFor="inputVinputValueSpécifiquealue">
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              className="uk-input"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
              row={3}
            />
          </>
        </Modal.Body>
        {errorType && (
          <p className="error-danger">
            Veuillez choisir une valeur personnalisée.
          </p>
        )}
        {errorValue && (
          <p className="error-danger">Veuillez choisir le type d'objectif.</p>
        )}
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={onSent} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddObjectifs;
