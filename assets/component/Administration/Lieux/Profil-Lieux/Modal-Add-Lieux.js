import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../hooks/useAuth";
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
import InputTypeList from "../../../../component/Input-Type-List";
function ModalAddLieux(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idLieux;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);

  const [specificValueInput, setSpecificValueInput] = useState(null);

  const [commentaireInput, setCommentaire] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg
    // $idCont = $request->request->get('idCont');
    // $idBlock = $request->request->get('idBlock');
    // $idSugg = $request->request->get('idSugg');

    formGetInfos.append("type", type);
    formGetInfos.append("value", specificValueInput);
    formGetInfos.append("idCont", id.toString());
    formGetInfos.append("commentaire", commentaireInput);

    formGetInfos.append("idSugg", props?.infosAppels?.id);

    axios({
      method: "post",
      url: "/api/saveItem",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      props.onChange(true);
      setShow(false);
    });
  };
  function handleTags(e) {
    setType(e[0]?.id);
  }
  return (
    <>
      <button onClick={handleShow} className="ml-4">
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            {props?.infosAppels?.value === "Tags" && (
              <InputTypeList
                data={props?.selectListTags?.data}
                onChange={handleTags}
                multiple={false}
                id="single"
                label="Type"
              ></InputTypeList>
            )}

            {props?.infosAppels?.value === "Type de Collaborateur" && (
              <InputTypeList
                data={props?.selectListTags?.data}
                onChange={handleTags}
                multiple={false}
                id="single"
                label="Type"
              ></InputTypeList>
            )}

            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>

            {props.infosAppels.value === "Date de naissance" ? (
              <input
                type="date"
                id="inputValueSpécifique"
                className="uk-input"
                onChange={(e) => setSpecificValueInput(e.target.value)}
                aria-describedby="valueSpécifique"
              />
            ) : (
              <input
                type="text"
                id="inputValueSpécifique"
                className="uk-input"
                onChange={(e) => setSpecificValueInput(e.target.value)}
                aria-describedby="valueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              className="uk-textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={2}
              id="comment-value"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalAddLieux;
