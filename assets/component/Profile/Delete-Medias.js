import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlusCircle,
  faTrash,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function ModalDeleteMedias(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSentRepport, setIsSentRepport] = useState(false);
  useEffect(() => {}, []);

  const deleteMedias = (id) => {
    //
    var formData = new FormData();

    formData.append("id", props.idMedias);
    axios({
      method: "post",
      url: "/api/removeMedias",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        props.onChange(true);
      })
      .catch(function (response) {
        //
      });
  };

  return (
    <>
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Effacer une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>Êtes-vous sur ?</p>
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={deleteMedias} className="btn-metis-red">
            Effacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalDeleteMedias;
