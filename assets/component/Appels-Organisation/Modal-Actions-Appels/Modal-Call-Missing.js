import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

function ModalCallMissing(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [auth, setAuth] = useState(useAuth());

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    formGetInfos.append("goal", props.goal.id);
    formGetInfos.append("contact", props.contact.id);

    formGetInfos.append("patientId", props.goal.pati_id);
    formGetInfos.append("user_id", auth.auth.idUser);

    axios({
      method: "post",
      url: "/api/setCallsAbsenceByContacts",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      props.onChangeResponse(response.data);

      setShow(false);
    });
  };
  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Signaler Absence
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attention !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous certain que ce contact est absent/pas de réponse ?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSave} className="btn-metis-red">
            Signaler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCallMissing;
