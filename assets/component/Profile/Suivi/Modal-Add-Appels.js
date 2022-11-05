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

function ModalAddAppels(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var getPatientFormData = new FormData();
  getPatientFormData.append("id", id);

  var typeFormData = new FormData();
  typeFormData.append("id", 57);
  var funcAppelFormData = new FormData();
  funcAppelFormData.append("id", 658);

  var valueFormData = new FormData();
  valueFormData.append("id", 174);
  //   formData.append("pathString", props.link);
  const [userId, setUserId] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [fonction, setFonction] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);

  // FormwhatDoinFunction
  const [callsFunctionValue, setCallsFunction] = useState(null);
  const [isCallsPatients, setIsCallsPatients] = useState(false);
  const [isPriority, setPriority] = useState(false);
  const [contact, setonChangeContact] = useState(null);
  const [description, setDescription] = useState(null);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [valueWhatDoinFunction, setValueWhatDoinFunction] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: funcAppelFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setFonction(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: typeFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: valueFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setWhatDoinFunction(response);
      })
      .catch(function (response) {});
    setUserId(auth.auth.idUser);
  }, [idPatient]);
  //

  const onChangeFunction = (e) => {
    setCallsFunction(e.target.value);
  };

  const onChangeContacts = (e) => {
    setonChangeContact(e);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeWhatDoinFunction = (e) => {
    // console.log(e);
    // setWhatDoinFunction(e.target.value);
    setValueWhatDoinFunction(e.target.value);
  };
  function onSent() {
    // isCall is true appel entrant

    let formData = new FormData();

    formData.append("callsFunctionValue", callsFunctionValue);
    formData.append("isCallsPatients", isCallsPatients);
    formData.append("isPriority", isPriority);
    formData.append("contact", contact);
    formData.append("description", description);
    formData.append("valueWhatDoinFunction", valueWhatDoinFunction);
    formData.append("patientId", idPatient);
    formData.append("userId", userId);

    axios({
      method: "post",
      url: "/api/setCalls",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      location.replace(window.location.origin + "/" + idPatient);
      document.querySelectorAll(".btn-close")[0].click();
    });
  }

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Ajouter appels
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un appel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Fonction du référent</Form.Label>
            <Form.Select size="lg" onChange={(e) => onChangeFunction(e)}>
              <option>Rajoutez la fonction du référent</option>
              {fonction?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Value</Form.Label>
            <Form.Select
              size="lg"
              onChange={(e) => onChangeWhatDoinFunction(e)}
            >
              <option>Rajoutez sa valeur</option>
              {whatDoinFunction?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>

            <Form.Control type="text" id="inputText" className="mt-4" />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Prioritaire ?"
                onClick={(e) => setPriority(true)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Appeler ce patient ?"
                onClick={(e) => setIsCallsPatients(!isCallsPatients)}
              />
            </Form.Group>
            {isCallsPatients === true && (
              <InputContactList
                contacts={props.contacts}
                onChange={(e) => onChangeContacts(e)}
              />
            )}

            {/* <Form.Label htmlFor="inputValue">
              Appel sortant (Création d'un rapport d'appel pour chaque contact)
            </Form.Label>
            <Form.Control as="textarea" rows={3} /> */}
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => onChangeDescription(e)}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSent}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddAppels;
