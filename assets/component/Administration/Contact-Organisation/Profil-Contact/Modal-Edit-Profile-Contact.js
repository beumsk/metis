import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputTypeList from "../../../Input-Type-List";
function ModalEditProfileContact(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);

  const [type, setType] = useState(null);
  const [description, setDescription] = useState(null);
  const [url, setURL] = useState(null);
  const [name, setName] = useState(null);
  const [firstName, setFirstName] = useState(null);

  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("firstName", firstName);
    formGetInfos.append("url", url);
    formGetInfos.append("name", name);
    formGetInfos.append("type", type);
    formGetInfos.append("description", description);
    formGetInfos.append("idCont", id.toString());

    axios({
      method: "post",
      url: "/api/updateContactProfile",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setIsSentRepport(true);
      props.onChange(true);
      setShow(false);
    });
  };

  console.log(props);

  return (
    <>
      <button onClick={handleShow} className="editCont">
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <select
              onChange={(e) => setType(e.target.value)}
              className="uk-select"
              value={
                props.contactInfo && props.contactInfo.type !== null
                  ? props.contactInfo.type
                  : ""
              }
            >
              <option value={0}>Choissisez un type</option>
              <option value={1}>Morale</option>
              <option value={2}>Physique</option>
            </select>

            <Form.Label htmlFor="inputValue">Prénom</Form.Label>

            <input
              type="text"
              className="uk-input"
              id="inputValueSpécifique"
              onChange={(e) => setFirstName(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.firstname !== null
                  ? props.contactInfo.firstname
                  : ""
              }
            />

            <Form.Label htmlFor="inputValue">Nom</Form.Label>

            <input
              type="text"
              className="uk-input"
              id="inputValueSpécifique"
              onChange={(e) => setName(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.lastname !== null
                  ? props.contactInfo.lastname
                  : ""
              }
            />

            <Form.Label htmlFor="inputValue">URL</Form.Label>

            <input
              type="text"
              className="uk-input"
              id="url"
              onChange={(e) => setURL(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.url !== null
                  ? props.contactInfo.url
                  : ""
              }
            />

            <Form.Label htmlFor="inputValue">Description</Form.Label>

            <textarea
              className="uk-input"
              id="inputValueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.description !== null
                  ? props.contactInfo.description
                  : ""
              }
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditProfileContact;
