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

function ModalAddInfos(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [specificValueInput, setSpecificValueInput] = useState(null);

  const [commentaireInput, setCommentaire] = useState(null);

  console.log(props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, []);
  //

  const handleInputChange = (e) => {
    //new Date(start).toJSON().slice(0, 10)
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
    setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
  };

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("value", specificValueInput);
    formGetInfos.append("idCont", id.toString());
    formGetInfos.append("commentaire", commentaireInput);
    formGetInfos.append("idInfo", props?.infosAppels?.id);

    axios({
      method: "post",
      url: "/api/saveItemAppels",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      console.log(response);
      var formData = new FormData();
      formData.append("id", response.data.data.id);
      if (response) {
        axios({
          method: "post",
          url: "/api/getCallsAndOrganisationById",
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        }).then(function (response) {
          if (response) {
            console.log("RESPONSE1", response);
            setResponseDatas(response.data);
            setIsSentRepport(true);
            document.querySelectorAll(".btn-close")[0].click();
          }
        });
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
      <button onClick={handleShow} className="ml-4">
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>
            <input
              type="text"
              id="inputValueSpécifique"
              onChange={(e) => setSpecificValueInput(e.target.value)}
              aria-describedby="valueSpécifique"
            />

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={3}
              id="comment-value"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddInfos;
