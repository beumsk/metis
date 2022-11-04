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

function AddSoinsByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 108);
  const [idEditFormSoins, setIdEditFormSoins] = useState([
    props.formCaresEdit && props.formCaresEdit.care_id
      ? props.formCaresEdit.care_id
      : null,
  ]);
  const [value, setValueTypeForm] = useState(null);
  const [contact, setValueContactForm] = useState(null);
  const [place, setValuePlaceForm] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  // const [arrValues, setArrValues] = useState(
  //   useState([
  //     {
  //       id: props.id,
  //       type: null,
  //       contact: null,
  //       place: null,
  //       description: null,
  //     },
  //   ])
  // );
  const [description, setValueDescription] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let ObjForm = {};

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

  function handleChangeType(newValue) {
    // ObjForm.type = newValue;
    // props.onChange(ObjForm);
    setValueTypeForm(newValue);
  }

  function handleChangeContacts(newValue) {
    // ObjForm.contact = newValue;
    // props.onChange(ObjForm);
    setValueContactForm(newValue);
  }

  function handleChangePlaces(newValue) {
    // ObjForm.place = newValue;
    // props.onChange(ObjForm);
    setValuePlaceForm(newValue);
  }

  const onChangeDescription = (e) => {
    // ObjForm.description = newValue;

    setValueDescription(e.target.value);
  };

  props.onChange([
    {
      care_id: idEditFormSoins[0] !== undefined ? idEditFormSoins[0] : null,
      id: props.id,
      value: value ? value : props.formCaresEdit?.value,
      contact: contact ? contact : props.formCaresEdit?.contact,
      place: place ? place : props.formCaresEdit?.place,
      description: description ? description : props.formCaresEdit?.description,
    },
  ]);

  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <InputTypeList
          type={type}
          onChange={handleChangeType}
          defaultValue={props.formCaresEdit?.value}
        />
        <Form.Label htmlFor="inputValue">Description</Form.Label>
        <Form.Control
          type="text"
          id="inputValueSpécifique"
          aria-describedby="valueSpécifique"
          onChange={(e) => onChangeDescription(e)}
          defaultValue={props.formCaresEdit?.description}
        />

        <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
          defaultValue={
            props.formCaresEdit?.contacts && props.formCaresEdit?.contacts[0]
              ? props.formCaresEdit?.contacts[0]?.orga?.id
              : ""
          }
        ></InputContactList>

        <InputPlaceList
          places={props.places}
          onChange={handleChangePlaces}
          defaultValue={
            props.formCaresEdit?.places && props.formCaresEdit?.places[0]
              ? props.formCaresEdit?.places[0]?.id
              : ""
          }
        ></InputPlaceList>
      </div>
    </>
  );
}

export default AddSoinsByReport;
