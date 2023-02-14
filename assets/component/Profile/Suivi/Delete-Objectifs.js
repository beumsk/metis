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
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function DeleteRapports(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [start, setStartDate] = useState(
    props?.infosPatient?.start !== null ? props?.infosPatient?.start : null
  );
  const [end, setEndDate] = useState(
    props?.infosPatient?.end !== null ? props?.infosPatient?.end : null
  );

  const [valueSelect, setValueSelect] = useState(
    props?.infosPatient?.sugg?.id !== null
      ? props?.infosPatient?.sugg?.id
      : null
  );
  const [specificValueInput, setSpecificValueInput] = useState(
    props?.infosPatient?.value !== null ? props?.infosPatient?.value : null
  );

  const [commentaireInput, setCommentaire] = useState(
    props?.infosPatient?.comment !== null ? props?.infosPatient?.comment : null
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, []);
  //

  const handleSave = (e) => {
    let formData = new FormData();
    // value-sugg

    formData.append("idRapport", props.goalsItem);
    axios({
      method: "post",
      url: "/api/deleteGoals",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      // location.replace(window.location.origin + "/" + idPatient);
      // document.querySelectorAll(".btn-close")[0].click();
      var formGetInfos = new FormData();
      formGetInfos.append("id", props.goalsItem.toString());

      props.onChange(true);
      setShow(false);
    });
  };
  //   new Date(1254088800 *1000)
  // handleInputChange;

  return (
    <>
      <button onClick={handleShow} style={{ margin: "0 0.2rem 0 0.2rem" }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Effacer objectif</Modal.Title>
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

export default DeleteRapports;