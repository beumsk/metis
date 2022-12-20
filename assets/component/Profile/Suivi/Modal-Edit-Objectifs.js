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

function ModalEditObjectifs(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  const [userId, setUserId] = useState(null);
  const [dateValue, setDateValue] = useState(
    props?.goalsItem && props?.goalsItem?.creationDate
      ? new Date(props?.goalsItem?.creationDate).toJSON().slice(0, 10)
      : ""
  );
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 174);

  var getPatientFormData = new FormData();
  getPatientFormData.append("id", id);

  var typeFormData = new FormData();
  typeFormData.append("id", 57);
  var funcAppelFormData = new FormData();
  funcAppelFormData.append("id", 658);

  var valueFormData = new FormData();
  valueFormData.append("id", 174);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeValue, setTypeValue] = useState(props?.goalsItem?.sugg?.id);
  const [fonction, setFonction] = useState(null);
  const [callsFunctionValue, setCallsFunction] = useState(null);
  const [isCallsPatients, setIsCallsPatients] = useState(false);
  const [isPriority, setPriority] = useState(props?.goalsItem?.isHightlight);
  const [contact, setonChangeContact] = useState(null);
  const [description, setDescription] = useState(props?.goalsItem?.description);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [valueType, setValueType] = useState(props?.goalsItem?.title);
  const [valueStatus, setValueStatus] = useState(props?.goalsItem?.status);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/suggestionsById",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setType(response);
    //   })
    //   .catch(function (response) {});
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
    formData.append("dateCreation", dateValue);
    formData.append("userId", userId);
    formData.append("goalsId", props?.goalsItem?.id);
    formData.append("valueStatus", valueStatus);

    axios({
      method: "post",
      url: "/api/updateCallsAndGoals",
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

  //   /api/getContacts
  return (
    <>
      <Button onClick={handleShow}>
        {" "}
        <FontAwesomeIcon icon={faEdit} style={{ marginRight: "1rem" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h6>Editer objectif</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputValue">Date de creation</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setDateValue(e.target.value)}
              id="inputText"
              defaultValue={
                props?.goalsItem && props?.goalsItem?.creationDate
                  ? new Date(props?.goalsItem?.creationDate)
                      .toJSON()
                      .slice(0, 10)
                  : ""
              }
              className="uk-input"
            />

            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <InputTypeList
              type={props.type}
              onChange={(e) => setTypeValue(e)}
              defaultValue={props?.goalsItem?.sugg?.id}
            />

            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setValueType(e.target.value)}
              id="inputText"
              defaultValue={props?.goalsItem?.title}
              className="uk-input"
            />
            <Form.Label htmlFor="inputValue">Status</Form.Label>
            <Form.Select
              type="select"
              defaultValue={props?.goalsItem?.status}
              className="uk-select"
              onChange={(e) => setValueStatus(e.target.value)}
            >
              <option value={0}>Nouveau</option>
              <option value={1}>En cours</option>
              <option value={2}>Accompli</option>
              <option value={3}>Annulée</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Prioritaire ?"
                defaultChecked={props?.goalsItem?.isHightlight}
              />
            </Form.Group>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              className="uk-input"
              id="inputValueSpécifique"
              defaultValue={props?.goalsItem?.description}
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

export default ModalEditObjectifs;
