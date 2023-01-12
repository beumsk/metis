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
  useEffect(() => {
    setElementsOpt(...props?.infos?.suggestionsByBlock);
    setStartDate(
      new Date(props?.infosPatient?.start?.timestamp * 1000).toJSON()
    );

    setEndDate(new Date(props?.infosPatient?.end?.timestamp * 1000).toJSON());
  }, []);
  //

  const handleInputChange = (e) => {
    //new Date(start).toJSON().slice(0, 10)
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
    setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
  };

  const handleSave = (e) => {
    let formData = new FormData();
    // value-sugg

    formData.append("valueSelect", valueSelect);
    formData.append("specificValueInput", specificValueInput);
    formData.append("commentaireInput", commentaireInput);
    formData.append("start", start);
    formData.append("end", end);
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
      // location.replace(window.location.origin + "/" + idPatient);
      // document.querySelectorAll(".btn-close")[0].click();
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
            setResponseDatas(response.data);
            setIsSentRepport(true);
            document.querySelectorAll(".btn-close")[0].click();
          })
          .catch(function (response) {});
        // document.querySelectorAll(".btn-close")[0].click();
        // location.replace(window.location.origin + "/" + idPatient);
      }
    });
  };
  //   new Date(1254088800 *1000)
  // handleInputChange;

  if (responseDatas !== null) {
    props.onChange({
      response: responseDatas,
    });

    // document.querySelectorAll(".btn-close")[0].click();
  }
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
          {" "}
          <>
            <p>êtes-vous sur ?</p>
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
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
