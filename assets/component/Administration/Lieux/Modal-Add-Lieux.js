import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
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

function ModalAddLieux(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [name, setName] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, []);
  //

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("name", name);
    formGetInfos.append("url", url);
    formGetInfos.append("description", description);

    axios({
      method: "post",
      url: "/api/addPlace",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      handleClose(false);
      props.onChange(true);
    });
  };

  return (
    <>
      <button onClick={handleShow} className="ml-4 btn-metis">
        Ajouter un lieu
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un lieu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputValue">Nom</Form.Label>
            <input
              type="text"
              id="inputValueSpécifique"
              className="uk-input"
              onChange={(e) => setName(e.target.value)}
              aria-describedby="valueSpécifique"
            />
            {!name && (
              <Form.Control.Feedback type="invalid">
                Veuillez entrer un nom.
              </Form.Control.Feedback>
            )}

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
              style={{ width: "100%" }}
              rows={2}
              id="comment-value"
              className="uk-textarea"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis" disabled={!name}>
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddLieux;
