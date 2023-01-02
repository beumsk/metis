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
  const [value, setValueTypeForm] = useState(props.formCaresEdit.type);
  const [contact, setValueContactForm] = useState(
    props.formCaresEdit && props.formCaresEdit.contact
      ? props.formCaresEdit.contact
      : null
  );
  const [place, setValuePlaceForm] = useState(
    props.formCaresEdit && props.formCaresEdit.place
      ? props.formCaresEdit.place
      : null
  );
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(props.typeValue);

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

  function handleChangeType(e) {
    // ObjForm.type = newValue;
    // props.onChange(ObjForm);

    setValueTypeForm(e.target.value);
  }

  function handleChangeContacts(e) {
    // ObjForm.contact = newValue;
    // props.onChange(ObjForm);
    setValueContactForm(e);
  }

  function handleChangePlaces(e) {
    // ObjForm.place = newValue;
    // props.onChange(ObjForm);
    setValuePlaceForm(e);
  }

  const onChangeDescription = (e) => {
    // ObjForm.description = newValue;

    setValueDescription(e.target.value);
  };
  console.log(props);
  props.onChange([
    {
      act_id: idEditFormSoins[0] !== undefined ? idEditFormSoins[0] : null,
      id: props.id,
      value: value ? value : props.typeValue,
      contact: contact ? contact : props.formCaresEdit?.contact,
      place: place ? place : props.formCaresEdit?.place,
      description: description ? description : props.formCaresEdit?.description,
    },
  ]);

  return (
    <>
      <div className="addSoins-form" id={props.id}>
        <Form.Label htmlFor="inputValue" className="uk-form-label">
          Type
        </Form.Label>
        {/* <InputTypeList
          type={type}
          onChange={handleChangeType}
          defaultValue={props.formCaresEdit?.value}
        /> {/* <InputTypeList
          type={type}
          onChange={handleChangeType}
          defaultValue={props.formCaresEdit?.value}
        /> */}
        {/* <InputTypeList
          type={type}
          onChange={handleChangeType}
          defaultValue={props.formCaresEdit?.value}
        /> */}

        <select
          size="lg"
          className="uk-select"
          required={true}
          onChange={(e) => handleChangeType(e)}
          value={props.formCaresEdit?.type}
        >
          <option>Choissisez le type</option>
          {type?.data?.map((el, id) => (
            <>
              {el.value && (
                <option
                  selected={el?.id === props.formCaresEdit.value}
                  value={el?.id}
                >
                  {el?.value}
                </option>
              )}
            </>
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
          onChange={(e) => onChangeDescription(e)}
          defaultValue={props.formCaresEdit?.description}
        />

        {/* <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
          defaultValue={props.formCaresEdit?.contacts}
        ></InputContactList> */}

        <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
          defaultValue={
            props.formCaresEdit?.contact && props.formCaresEdit?.contact
              ? props.formCaresEdit?.contact
              : null
          }
        ></InputContactList>
        {/* <select
          size="lg"
          className="uk-select"
          onChange={(e) => handleChangeContacts(e)}
          value={props.formCaresEdit?.contact?.id}
        >
          <option>Choissisez le contact</option>
          {props?.contacts?.data?.map((el, id) => (
            <>
              <option
                value={el?.value}
                selected={el?.id === parseInt(props.formCaresEdit?.contact?.id)}
              >
                {el?.label}
              </option>
            </>
          ))}
        </select> */}

        <InputPlaceList
          contacts={props?.places}
          onChange={handleChangePlaces}
          defaultValue={
            props.formCaresEdit?.place && props.formCaresEdit?.place
              ? props.formCaresEdit?.place
              : null
          }
        ></InputPlaceList>

        {/* <select
          size="lg"
          className="mb-4 uk-select"
          value={props.formCaresEdit?.place}
          onChange={(e) => handleChangePlaces(e)}
        >
          <option>Choissisez le lieu</option>
          {props?.places?.data?.map((el, id) => (
            <>
              <option
                value={el.id}
                selected={el?.id === props.formCaresEdit?.place}
              >
                {el?.lastname}
              </option>
            </>
          ))}
        </select> */}
      </div>
    </>
  );
}

export default AddSoinsByReport;
