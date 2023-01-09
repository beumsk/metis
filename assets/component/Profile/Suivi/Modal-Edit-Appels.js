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
import moment from "moment";

function ModalEditAppels(props) {
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

  const [idPatient, setIdPatient] = useState(id);

  // FormwhatDoinFunction
  const [callsFunctionValue, setCallsFunction] = useState(null);
  const [isCallsPatients, setIsCallsPatients] = useState(false);
  const [isPriority, setPriority] = useState(false);
  const [contact, setonChangeContact] = useState(props?.calls?.cont?.id);
  const [valueType, setValueType] = useState(props?.calls?.title);
  const [description, setDescription] = useState(props?.calls?.description);
  const [type, setType] = useState(null);
  const [fonction, setFonction] = useState(null);

  const [whatDoinFunction, setWhatDoinFunction] = useState(
    props?.calls?.func?.id
  );
  const [valueWhatDoinFunction, setValueWhatDoinFunction] = useState(
    props?.calls?.sugg?.id
  );
  const [valueStatus, setValueStatus] = useState(props?.calls?.status);
  const [valueDate, setDateValue] = useState(props?.calls?.creationDate);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {}, [idPatient]);
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
    setValueWhatDoinFunction(e.target.value);
  };
  function onSentCalls() {
    // isCall is true appel entrant

    let formData = new FormData();

    formData.append("callsFunctionValue", callsFunctionValue);
    formData.append("isCallsPatients", isCallsPatients);
    formData.append("isPriority", isPriority);
    formData.append("contact", contact ? contact : null);
    formData.append("description", description);
    formData.append("valueWhatDoinFunction", valueWhatDoinFunction);
    formData.append("patientId", idPatient);
    formData.append("valueType", valueType);
    formData.append("userId", userId);
    formData.append("goalsId", props?.calls?.id);
    formData.append("valueDate", valueDate);
    formData.append("valueStatus", valueStatus);

    //
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

  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} style={{ marginRight: "1rem" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un appel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Date de creation</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setDateValue(e.target.value)}
              id="inputText"
              defaultValue={
                props?.calls && props?.calls?.creationDate
                  ? moment(props?.calls?.creationDate)
                      .utc("UTC+01:00")
                      .format("YYYY-MM-DD")
                  : ""
              }
              className="uk-input"
            />
            <Form.Label htmlFor="inputValue">Fonction du référent</Form.Label>
            <Form.Select
              size="lg"
              onChange={(e) => onChangeFunction(e)}
              className="uk-select"
              defaultValue={props?.calls?.func?.id}
            >
              <option>Rajoutez la fonction du référent</option>
              {props?.fonction?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Value</Form.Label>
            <Form.Select
              size="lg"
              onChange={(e) => onChangeWhatDoinFunction(e)}
              className="uk-select"
              defaultValue={props?.calls?.sugg?.id}
            >
              <option>Rajoutez sa valeur</option>
              {props?.whatDoinFunction?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>

            <Form.Label htmlFor="inputValue">Titre</Form.Label>
            <Form.Control
              type="text"
              id="inputText"
              className="uk-input"
              onChange={(e) => setValueType(e.target.value)}
              defaultValue={props?.calls?.title}
            />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Prioritaire ?"
                onClick={(e) => setPriority(e.target.checked)}
                defaultChecked={props?.calls?.isHightlight}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Appeler ce patient ?"
                defaultValue={
                  props?.calls?.cont && props?.calls?.cont?.id ? false : true
                }
                onClick={(e) => setIsCallsPatients(!isCallsPatients)}
              />
            </Form.Group>

            <Form.Label htmlFor="inputValue">Status</Form.Label>
            <Form.Select
              type="select"
              defaultValue={props?.calls?.status}
              className="uk-select"
              onChange={(e) => setValueStatus(e.target.value)}
            >
              <option value={0}>Nouveau</option>
              <option value={1}>En cours</option>
              <option value={2}>Accompli</option>
              <option value={3}>Annulée</option>
            </Form.Select>
            {isCallsPatients === false && (
              <>
                <Form.Label htmlFor="inputValue">Contact</Form.Label>
                <Form.Select
                  size="lg"
                  // value={contactValue}
                  className="uk-select"
                  defaultValue={props?.calls?.cont?.id}
                  onChange={(e) => onChangeContacts(e.target.value)}
                >
                  <option>Choissisez le contact</option>
                  {props?.contacts?.data?.map((el, id) => (
                    <>
                      <option value={el?.value}>{el?.label}</option>
                    </>
                  ))}
                </Form.Select>
              </>
            )}

            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={props?.calls?.description}
              className="uk-input"
              onChange={(e) => onChangeDescription(e)}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={onSentCalls} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditAppels;
