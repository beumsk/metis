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
function ModalEditLieux(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idLieux;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [type, setType] = useState(
    props.infosAppels.sugge[0].id !== null
      ? props.infosAppels.sugge[0].id
      : null
  );
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [specificValueInput, setSpecificValueInput] = useState(
    props?.infosAppels?.valueInformations !== null
      ? props?.infosAppels?.valueInformations
      : null
  );

  const [commentaireInput, setCommentaire] = useState(
    props?.infosAppels?.valueDescription !== null
      ? props?.infosAppels?.valueDescription
      : null
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("type", type);
    formGetInfos.append("value", specificValueInput);
    formGetInfos.append("idCont", id.toString());
    formGetInfos.append("commentaire", commentaireInput);
    formGetInfos.append("idInfo", props?.infosAppels?.id);
    formGetInfos.append("idSugg", props?.contInfo?.id);

    axios({
      method: "post",
      url: "/api/editItem",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      var formData = new FormData();
      formData.append("id", response.data.data.id);

      props.onChange(true);
      setShow(false);
    });
  };

  return (
    <>
      <button onClick={handleShow} className="ml-4">
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Modifier une information</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            {props?.infosAppels?.sugge[0].parentSugg === "Tags" && (
              <InputTypeList
                onChangeType={(e) => setType(e)}
                type={props.selectListTags}
                defaultValue={
                  props.infosAppels.sugge[0].id !== null
                    ? props.infosAppels.sugge[0].id
                    : null
                }
              ></InputTypeList>
            )}

            {props?.infosAppels?.sugge[0].parentSugg ===
              "Type de Collaborateur" && (
              <InputTypeList
                onChangeType={(e) => setType(e)}
                type={props.selectListCollab}
                defaultValue={
                  props.infosAppels.sugge[0].id !== null
                    ? props.infosAppels.sugge[0].id
                    : null
                }
              ></InputTypeList>
            )}

            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>

            {props.infosAppels.value === "Date de naissance" ? (
              <input
                type="date"
                id="inputValueSpécifique"
                onChange={(e) => setSpecificValueInput(e.target.value)}
                aria-describedby="valueSpécifique"
                defaultValue={
                  props?.infosAppels?.valueInformations !== null
                    ? props?.infosAppels?.valueInformations
                    : ""
                }
              />
            ) : (
              <input
                type="text"
                id="inputValueSpécifique"
                onChange={(e) => setSpecificValueInput(e.target.value)}
                defaultValue={
                  props?.infosAppels?.valueInformations !== null
                    ? props?.infosAppels?.valueInformations
                    : ""
                }
                aria-describedby="valueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={2}
              className="uk-textarea"
              id="comment-value"
              defaultValue={
                props?.infosAppels?.valueDescription !== null
                  ? props?.infosAppels?.valueDescription
                  : ""
              }
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

export default ModalEditLieux;
