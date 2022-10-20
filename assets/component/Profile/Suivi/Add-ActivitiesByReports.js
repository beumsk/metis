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

  const [typeValue, setValueTypeForm] = useState(null);
  const [contactValue, setValueContactForm] = useState(null);
  const [placeForm, setValuePlaceForm] = useState(null);
  const [valueDescription, setValueDescription] = useState(null);

  const handleShow = () => setShow(true);
  useEffect(() => {}, [idPatient]);

  function handleChangeType(newValue) {
    setValueTypeForm(newValue);
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
  console.log(props.type);
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <InputTypeList type={props.type} onChange={handleChangeType} />
        <Form.Label htmlFor="inputValue">Description</Form.Label>
        <Form.Control
          type="text"
          id="inputValueSpécifique"
          aria-describedby="valueSpécifique"
          onChange={(e) => onChangeDescription(e)}
        />
        <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
        ></InputContactList>
        <InputPlaceList
          places={props?.places}
          onChange={handleChangePlaces}
        ></InputPlaceList>
      </div>
    </>
  );
}

export default AddActivitiesByReport;
