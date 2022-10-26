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

  const [typeValue, setValueTypeForm] = useState(null);
  const [contactValue, setValueContactForm] = useState(null);
  const [placeForm, setValuePlaceForm] = useState(null);
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
  const [valueDescription, setValueDescription] = useState(null);
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

  // MUST TO HAVE: return multiples objects values to add report meet
  // setArrValues((prevFormSoins) => [
  //   ...prevFormSoins,
  //   [
  //     {
  //       id: props.id,
  //       type: typeValue,
  //       contact: contactValue,
  //       place: placeForm,
  //       description: valueDescription,
  //     },
  //   ],
  // ]);
  props.onChange([
    {
      id: props.id,
      type: typeValue,
      contact: contactValue,
      place: placeForm,
      description: valueDescription,
    },
  ]);
  // props.onChange(
  //   props.key,
  //   typeValue,
  //   contactValue,
  //   placeForm,
  //   valueDescription
  // );

  // console.log(props.key, typeValue, contactValue, placeForm, valueDescription);
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <InputTypeList type={type} onChange={handleChangeType} />
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
          places={props.places}
          onChange={handleChangePlaces}
        ></InputPlaceList>
      </div>
    </>
  );
}

export default AddSoinsByReport;
