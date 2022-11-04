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
import Editor from "./Editor-Reports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputTypeList from "./Input-Type-List";

function AddActivitiesByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const [editFormActivities, setEditFormActivities] = useState([
    props.formActivitiesEdit,
  ]);

  const [idEditFormActivities, setIdEditFormActivities] = useState([
    props.formActivitiesEdit.act_id,
  ]);

  const [value, setValueForm] = useState(null);
  const [contact, setValueContactForm] = useState(null);
  const [place, setValuePlaceForm] = useState(null);
  const [description, setValueDescription] = useState(null);

  const handleShow = () => setShow(true);
  useEffect(() => {}, [idPatient]);

  function handleChangeValue(newValue) {
    setValueForm(newValue);
  }

  function handleChangeContacts(newValue) {
    setValueContactForm(newValue);
  }

  function handleChangePlaces(newValue) {
    setValuePlaceForm(newValue);
  }

  const onChangeDescription = (e) => {
    setValueDescription(e.target.value);
  };

  props.onChange([
    {
      act_id:
        idEditFormActivities[0] !== undefined ? idEditFormActivities[0] : null,
      id: props.id,
      value: value ? value : props.formActivitiesEdit?.value,
      contact: contact ? contact : props.formActivitiesEdit?.contact,
      place: place ? place : props.formActivitiesEdit?.place,
      description: description
        ? description
        : props.formActivitiesEdit?.description,
    },
  ]);
  //

  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <InputTypeList
          type={props?.type}
          onChange={handleChangeValue}
          defaultValue={props.formActivitiesEdit?.value}
        />
        <Form.Label htmlFor="inputValue">Description</Form.Label>
        <Form.Control
          type="text"
          id="inputValueSpécifique"
          aria-describedby="valueSpécifique"
          defaultValue={props.formActivitiesEdit?.description}
          onChange={(e) => onChangeDescription(e)}
        />
        <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
          defaultValue={
            props.formActivitiesEdit?.contacts &&
            props.formActivitiesEdit?.contacts[0]
              ? props.formActivitiesEdit?.contacts[0]?.orga?.id
              : ""
          }
        ></InputContactList>
        <InputPlaceList
          places={props?.places}
          onChange={handleChangePlaces}
          defaultValue={
            props.formActivitiesEdit?.places &&
            props.formActivitiesEdit?.places[0]
              ? props.formActivitiesEdit?.places[0]?.id
              : ""
          }
        ></InputPlaceList>
      </div>
    </>
  );
}

export default AddActivitiesByReport;
