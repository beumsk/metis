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
import { isNull } from "lodash";

function AddSoinsByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 108);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [typeForm, setTypeForm] = useState(null);
  const [type, setType] = useState(null);
  const [descriptionForm, setDescriptionForm] = useState(null);
  const handleClose = () => setShow(false);
  const [editFormActivities, setEditFormActivities] = useState([
    props.formActivitiesEdit,
  ]);

  const [idEditFormActivities, setIdEditFormActivities] = useState([
    props?.formActivitiesEdit?.act_id,
  ]);

  const [value, setValueForm] = useState();
  const [contact, setValueContactForm] = useState(null);
  const [place, setValuePlaceForm] = useState(null);
  const [description, setValueDescription] = useState();
  const [isErrorType, setIsErrorType] = useState();
  // const [isErrorDescription, setIsErrorDescription] = useState();

  const handleShow = () => setShow(true);

  function handleChangeContacts(e) {
    setValueContactForm(e);
  }

  function handleChangePlaces(e) {
    setValuePlaceForm(e);
  }

  const onSend = (e) => {
    let formData = new FormData();
    formData.append("contact", JSON.stringify(contact));
    formData.append("place", JSON.stringify(place));
    formData.append("description", descriptionForm);
    formData.append("type", typeForm);

    formData.append("idRepport", props.report.id);
    // formData.append("descriptionSantee", descriptionSantee);
    // formData.append("valueConsommation", valueConsommation);
    // formData.append("descriptionConsommation", descriptionConsommation);

    if (typeForm === null) {
      setIsErrorType(true);
    } else {
      setIsErrorType(false);
    }

    // if (descriptionForm === null) {
    //   setIsErrorDescription(true);
    // } else {
    //   setIsErrorDescription(false);
    // }

    // if (typeForm !== null && descriptionForm !== null) {
    if (typeForm !== null) {
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
            {/* selectActivities={selectActivities}
                        selectSoins={selectSoins} */}
            <select
              size="lg"
              className="uk-select"
              required={true}
              onChange={(e) => setTypeForm(e.target.value)}
              // value={props.formActivitiesEdit?.type}
            >
              <option>Choisissez le type</option>
              {props?.selectSoins?.data?.map((el, id) => (
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
              onChange={handleChangeContacts}
              data={props?.contacts?.data}
              defaultValue={null}
              multiple
              id="multiple"
              label="Contacts"
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
          <button onClick={(e) => onSend()} className="btn-metis">
            Envoyer
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSoinsByReport;
