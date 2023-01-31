import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputTypeList from "./Input-Type-List";

function AddActivitiesByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 106);
  //   formData.append("pathString", props.link);

  const [typeForm, setTypeForm] = useState(null);
  const [descriptionForm, setDescriptionForm] = useState(null);
  const handleClose = () => setShow(false);

  const [value, setValueForm] = useState();
  const [contact, setValueContactForm] = useState(null);
  const [place, setValuePlaceForm] = useState(null);
  const [description, setValueDescription] = useState();
  const [isErrorType, setIsErrorType] = useState();
  // const [isErrorDescription, setIsErrorDescription] = useState();

  const handleShow = () => {
    setIsErrorType(false);
    // setIsErrorDescription(false);
    setShow(true);
  };

  function handleChangeContacts(e) {
    setValueContactForm(e);
  }

  function handleChangePlaces(e) {
    setValuePlaceForm(e);
  }

  const onSend = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("contact", JSON.stringify(contact));
    formData.append("place", JSON.stringify(place));
    formData.append("description", descriptionForm);
    formData.append("type", typeForm);
    formData.append("idRepport", props.report.id);

    if (typeForm === null || typeForm === "defaultValue") {
      setIsErrorType(true);
    } else {
      setIsErrorType(false);
    }

    // if (descriptionForm === null || descriptionForm === "") {
    //   setIsErrorDescription(true);
    // } else {
    //   setIsErrorDescription(false);
    // }

    let validationType =
      typeForm === null || typeForm === "defaultValue" ? true : false;
    // let validationDescription =
    //   descriptionForm === null || descriptionForm === "" ? true : false;

    // if (validationType === false && validationDescription === false) {
    if (validationType === false) {
      axios({
        method: "post",
        url: "/api/addActivitiesToReport",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          props.onChangeActivities(true);
          setShow(false);
        })
        .catch(function (response) {});
    }
  };

  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une activité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Form.Label htmlFor="inputValue" className="uk-form-label">
              Type
            </Form.Label>
            <select
              size="lg"
              className="uk-select"
              required={true}
              onChange={(e) => setTypeForm(e.target.value)}
              // value={props.formActivitiesEdit?.type}
            >
              <option>Choisissez le type</option>
              {props?.selectActivities?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </select>

            <Form.Label htmlFor="inputValue" className="uk-form-label">
              Description
            </Form.Label>
            <Form.Control
              type="text"
              id="inputValueSpécifique"
              className="uk-input"
              aria-describedby="valueSpécifique"
              // defaultValue={props.formActivitiesEdit?.description}
              onChange={(e) => setDescriptionForm(e.target.value)}
            />

            <InputContactList
              contacts={props?.contacts}
              // contacts={props?.contacts}
              onChange={handleChangeContacts}
              defaultValue={null}
            ></InputContactList>

            <InputPlaceList
              onChange={handleChangePlaces}
              data={props?.places}
              id="single"
              placeholder="Lieux"
            ></InputPlaceList>
          </div>
          {isErrorType && <p>Type Obligatoire</p>}
          {/* {isErrorDescription && <p>Description Obligatoire</p>} */}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e) => onSend(e)} className="btn-metis">
            Envoyer
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddActivitiesByReport;
