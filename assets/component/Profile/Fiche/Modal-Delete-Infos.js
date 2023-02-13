import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
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

function ModalDeleteInfos(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [idPatient, setIdPatient] = useState(id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formData = new FormData();
    // value-sugg

    formData.append("idInfo", props?.infosPatient?.id);
    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());
    axios({
      method: "post",
      url: "/api/deletePatientInformation",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      if (response) {
        axios({
          method: "post",
          url: "/api/patientsInformationByPatients",
          data: formGetInfos,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            props.onChange(true);
            setIsSentRepport(true);
            setShow(false);
          })
          .catch(function (response) {});
      }
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
            <p>Êtes-vous sûr.e de vouloir effacer cette information ? ?</p>
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={handleSave} className="btn-metis-red">
            Effacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalDeleteInfos;
