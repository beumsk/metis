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
import InputContactList from "./Input-Contact-List";

function ModalAddAppels(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var getPatientFormData = new FormData();
  getPatientFormData.append("id", id);

  var typeFormData = new FormData();
  typeFormData.append("id", 57);
  var funcAppelFormData = new FormData();
  funcAppelFormData.append("id", 658);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [fonction, setFonction] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: funcAppelFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setFonction(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: typeFormData,
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
  console.log(contacts);

  //   /api/getContacts
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Ajouter appels
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un appel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Fonction</Form.Label>
            <Form.Select size="lg">
              {fonction?.data?.map((el, id) => (
                <>{el.value && <option>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Control type="text" id="inputText" className="mt-4" />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Prioritaire ?" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Appeler ce patient ?" />
            </Form.Group>

            <InputContactList contacts={props.contacts} />

            <Form.Label htmlFor="inputValue">
              Appel sortant (Création d'un rapport d'appel pour chaque contact)
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddAppels;
