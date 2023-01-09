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
  formData.append("id", 106);
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
    props?.formActivitiesEdit?.act_id,
  ]);

  const [value, setValueForm] = useState(props.formActivitiesEdit.type);
  const [contact, setValueContactForm] = useState(
    props.formActivitiesEdit.contact
  );
  const [place, setValuePlaceForm] = useState(props.formActivitiesEdit.place);
  const [description, setValueDescription] = useState(
    props.formActivitiesEdit.description
  );

  const handleShow = () => setShow(true);
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

  function handleChangeValue(e) {
    setValueForm(e.target.value);
  }

  function handleChangeContacts(e) {
    setValueContactForm(e);
  }

  function handleChangePlaces(e) {
    setValuePlaceForm(e);
  }

  const onChangeDescription = (e) => {
    if (e) {
      setValueDescription(e.target.value);
    } else {
      setValueDescription(null);
    }
  };

  props.onChange([
    {
      act_id:
        idEditFormActivities[0] !== undefined ? idEditFormActivities[0] : null,
      id: props.id,
      value: value ? value : props.formActivitiesEdit?.type,
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
        <Form.Label htmlFor="inputValue" className="uk-form-label">
          Type
        </Form.Label>
        <select
          size="lg"
          className="uk-select"
          required={true}
          onChange={(e) => handleChangeValue(e)}
          value={props.formActivitiesEdit?.type}
        >
          <option>Choissisez le type</option>
          {type?.data?.map((el, id) => (
            <>
              {el.value && (
                <option
                  selected={
                    el?.id === props.formActivitiesEdit?.type ||
                    el?.id === props.formActivitiesEdit?.value
                  }
                  value={el?.id}
                >
                  {el?.value}
                </option>
              )}
            </>
          ))}
        </select>
        {/* <InputTypeList
          type={props?.type}
          onChange={handleChangeValue}
          defaultValue={props.formActivitiesEdit?.value}
        /> */}
        <Form.Label htmlFor="inputValue" className="uk-form-label">
          Description
        </Form.Label>
        <Form.Control
          type="text"
          id="inputValueSpécifique"
          className="uk-input"
          aria-describedby="valueSpécifique"
          defaultValue={props.formActivitiesEdit?.description}
          onChange={(e) => onChangeDescription(e)}
        />

        {/* <Form.Label htmlFor="inputValue" className="uk-form-label">
          Contacts
        </Form.Label> */}
        {/* <select
          size="lg"
          className="uk-select"
          required={true}
          onChange={(e) => handleChangeContacts(e)}
          value={props.formActivitiesEdit?.contact?.id}
        >
          <option>Choissisez le contact</option>
          {props?.contacts?.data?.map((el, id) => (
            <>
              <option
                value={el?.value}
                // selected={el?.id === props.formActivitiesEdit?.contact}
              >
                {el?.label}
              </option>
            </>
          ))}
        </select> */}
        <InputContactList
          contacts={props?.contacts}
          onChange={handleChangeContacts}
          defaultValue={
            props.formActivitiesEdit?.contact &&
            props.formActivitiesEdit?.contact
              ? props.formActivitiesEdit?.contact
              : null
          }
        ></InputContactList>
        {/* <InputPlaceList
          places={props?.places}
          onChange={handleChangePlaces}
          defaultValue={
            props.formActivitiesEdit?.places &&
            props.formActivitiesEdit?.places[0]
              ? props.formActivitiesEdit?.places[0]?.id
              : ""
          }
        ></InputPlaceList> */}
        {/* <Form.Label htmlFor="inputValue" className="uk-form-label">
          Lieux
        </Form.Label> */}
        <InputPlaceList
          contacts={props?.places}
          onChange={handleChangePlaces}
          defaultValue={
            props.formActivitiesEdit?.place && props.formActivitiesEdit?.place
              ? props.formActivitiesEdit?.place
              : null
          }
        ></InputPlaceList>

        {/* <select
          size="lg"
          className="mb-4 uk-select"
          value={props.formActivitiesEdit?.place}
          onChange={(e) => handleChangePlaces(e)}
        >
          <option>Choissisez le lieu</option>
          {props?.places?.data?.map((el, id) => (
            <>
              <option
                selected={el?.id === props.formActivitiesEdit?.place}
                value={el?.id}
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

export default AddActivitiesByReport;
