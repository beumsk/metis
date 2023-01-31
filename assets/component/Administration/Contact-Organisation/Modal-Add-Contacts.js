import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputTypeList from "../../Input-Type-List";

function ModalAddContact(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [validationType, setValidationType] = useState(false);
  const [validationName, setValidationName] = useState(false);
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [url, setUrl] = useState(null);
  const [orga, setOrganisation] = useState(null);
  const [description, setDescription] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const [typeValueOrganisation, setTypeValueOrganisation] = useState(null);
  const [isErrorType, setIsErrorType] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setIsErrorType(false);
    setShow(true);
  };

  const handleSave = (e) => {
    let formData = new FormData();
    // value-sugg
    // if (type) {
    //   formData.append("type", typeValue);
    // } else {
    //   setValidationType(true);
    // }

    // if (name) {
    //   formData.append("name", name);
    // } else {
    //   setValidationName(true);
    // }

    formData.append("type", typeValue);
    formData.append("name", name);
    formData.append("firstname", lastName);
    formData.append("organisation", typeValueOrganisation);
    formData.append("url", url);
    formData.append("description", description);
    // formData.append("description", description);

    if (typeValue === null || typeValue === "defaultValue") {
      setIsErrorType(true);
    } else {
      setIsErrorType(false);
    }

    if (typeValue && typeValue !== 0) {
      axios({
        method: "post",
        url: "/api/addContact",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          props.onChangeContacts(response);
          setShow(false);
        })
        .catch(function (response) {});
    }
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="ml-4 btn-metis"
        style={{ float: "right" }}
      >
        Ajouter un contact
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputValue">Type</Form.Label>
          <select
            onChange={(e) => setTypeValue(e.target.value)}
            className="uk-select"
            required
            value={typeValue}
          >
            <option value={0}>Choisissez un type</option>
            <option value={1}>Morale</option>
            <option value={2}>Physique</option>
          </select>

          <Form.Label htmlFor="inputValue">Nom</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            onChange={(e) => setName(e.target.value)}
            aria-describedby="valueSpécifique"
            className="uk-input"
          />

          <Form.Label htmlFor="inputValue">Prénom</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            onChange={(e) => setLastName(e.target.value)}
            aria-describedby="valueSpécifique"
            className="uk-input"
          />
          <Form.Label htmlFor="inputValue">Organisation</Form.Label>
          <select
            size="lg"
            value={typeValueOrganisation}
            className="uk-select"
            onChange={(e) => setTypeValueOrganisation(e.target.value)}
          >
            {/* <option>Choisissez le tags</option> */}
            {props?.listOrganisation?.data?.map((el, id) => (
              <>
                {el?.typeLabel === "Morale" && (
                  <option value={el?.id}>
                    {el?.lastname} {el?.firstname}
                  </option>
                )}
              </>
            ))}
          </select>

          <Form.Label htmlFor="inputValue">URL</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            className="uk-input"
            onChange={(e) => setUrl(e.target.value)}
            aria-describedby="valueSpécifique"
          />

          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="uk-textarea"
            id="comment-value"
          />
          {isErrorType && <p>Type Obligatoire</p>}
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} type="submit" className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddContact;
