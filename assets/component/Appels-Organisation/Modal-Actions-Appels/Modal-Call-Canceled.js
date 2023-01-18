import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
function ModalCallCanceled(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    formGetInfos.append("goal", props.goal.id);
    formGetInfos.append("contact", props.contact.id);

    formGetInfos.append("patientId", props.goal.pati_id);
    formGetInfos.append("user_id", auth.auth.idUser);

    axios({
      method: "post",
      url: "/api/setCallsCanceledByContacts",
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
      <a onClick={handleShow}>Signaler appel Annulé</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attention !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous certain de vouloir annuler cette action ?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis-red">
            Signaler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCallCanceled;
