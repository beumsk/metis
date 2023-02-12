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
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import SuggestionAutocomplete from "./Suggestion-Autocomplete";
function ModalEditInfos(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  //
  const [elementsOpt, setElementsOpt] = useState(
    props?.infos?.suggestionsByBlock &&
      props?.infos?.suggestionsByBlock.length > 0
      ? props?.infos?.suggestionsByBlock
      : null
  );
  const [idPatient, setIdPatient] = useState(id);
  const [error, setError] = useState(null);
  const [responseDatas, setResponseDatas] = useState(null);
  const [start, setStartDate] = useState(null);
  const [end, setEndDate] = useState(null);

  const [valueSelect, setValueSelect] = useState(null);
  const [specificValueInput, setSpecificValueInput] = useState(null);
  const [errorWithStar, setErrorWithStar] = useState(null);

  const [commentaireInput, setCommentaire] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveWithoutValue = (e) => {
    let formData = new FormData();

    if (specificValueInput !== null) {
      formData.append("specificValueInput", specificValueInput);
      setError(null);
    }

    if (specificValueInput === null) {
      setError("Valeur obligatoire");
    }

    if (valueSelect) {
      formData.append("valueSelect", valueSelect);
    }

    if (commentaireInput) {
      formData.append("commentaireInput", commentaireInput);
    }

    formData.append("start", start ? start : null);
    formData.append("end", end ? end : null);
    formData.append("idInfo", props?.infosPatient?.id);
    formData.append("idPatient", idPatient);
    formData.append("infosPatient", props?.infosPatient);
    formData.append("itel", props?.infos?.id);

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());

    if (specificValueInput !== null) {
      axios({
        method: "post",
        url: "/api/setPatientInformation",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      }).then(function (response) {
        setValueSelect(null);
        setSpecificValueInput(null);
        setCommentaire(null);
        setStartDate(null);
        setEndDate(null);
        props.onChange(response);
      });
    }
  };

  const handleSave = (e) => {
    let formData = new FormData();

    let isValueStarAndValueSpécific =
      valueSelect &&
      valueSelect.length > 0 &&
      valueSelect[0].value &&
      valueSelect[0].value.indexOf("*") > -1 &&
      specificValueInput !== null &&
      specificValueInput !== ""
        ? true
        : false;

    let isNotValueStarAndValueSpécific =
      (valueSelect &&
        valueSelect.length > 0 &&
        valueSelect[0].value.indexOf("*") > -1 &&
        specificValueInput === null) ||
      specificValueInput === ""
        ? true
        : false;

    let isValueNotStarAndNotValue =
      valueSelect &&
      valueSelect.length === 0 &&
      (specificValueInput === null || specificValueInput === "")
        ? true
        : false;

    let isValueStarValue =
      valueSelect &&
      valueSelect.length > 0 &&
      valueSelect[0].value &&
      valueSelect[0].value.indexOf("*") === -1
        ? true
        : false;

    if (isNotValueStarAndValueSpécific === true) {
      setError(null);
      setErrorWithStar("Veuillez rajouter cette valeur !");
    }

    if (isValueNotStarAndNotValue === true) {
      setErrorWithStar(null);
      setError("Veuillez sélectionner la valeur !");
    }

    if (isValueStarAndValueSpécific === true) {
      setErrorWithStar(null);
      setError(null);
    }

    if (isValueStarValue === true) {
      setError(null);
      setErrorWithStar(null);
    }

    if (commentaireInput) {
      formData.append("commentaireInput", commentaireInput);
    }

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());

    formData.append("start", start);
    formData.append("end", end);
    formData.append("idInfo", props?.infosPatient?.id);
    formData.append("idPatient", idPatient);
    formData.append("infosPatient", props?.infosPatient);
    formData.append("itel", props?.infos?.id);
    formData.append(
      "valueSelect",
      valueSelect && valueSelect.length > 0 ? valueSelect[0].id : null
    );
    formData.append("specificValueInput", specificValueInput);

    if (isValueStarAndValueSpécific === true || isValueStarValue === true) {
      axios({
        method: "post",
        url: "/api/setPatientInformation",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      }).then(function (response) {
        setValueSelect(null);
        setSpecificValueInput(null);
        setCommentaire(null);
        setStartDate(null);
        setEndDate(null);
        setErrorWithStar(null);
        setError(null);
        props.onChange(response);
      });
    }
  };

  function onChangeSuggestion(e) {
    if (e !== null) {
      setValueSelect(e);
    } else {
      setValueSelect(null);
    }
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
          <>
            {elementsOpt && elementsOpt?.length > 0 && (
              <>
                <SuggestionAutocomplete
                  data={elementsOpt}
                  onChange={onChangeSuggestion}
                  multiple={false}
                  id="single"
                  label={"Type"}
                />
              </>
            )}

            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>
            <input
              type="text"
              id="inputValueSpécifique"
              className="uk-input"
              onChange={(e) => setSpecificValueInput(e.target.value)}
              aria-describedby="valueSpécifique"
            />

            {errorWithStar && <p className="error-danger">{errorWithStar}</p>}
            {elementsOpt?.length > 0 && (
              <>
                <p>
                  Les suggestions marquées d'une étoile (*) dans la liste
                  ci-dessus demandent obligatoirement une valeur spécifique.
                </p>
              </>
            )}
            <Form.Label htmlFor="inputValue">Début</Form.Label>

            <Form.Control
              type="date"
              className="uk-select"
              onChange={(e) => {
                setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
              }}
              id="inputValueSpécifique"
            />

            <Form.Label htmlFor="inputValue">Fin</Form.Label>

            <Form.Control
              type="date"
              onChange={(e) => {
                setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
              }}
              id="inputValueSpécifique"
              className="uk-select"
            />

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={2}
              className="uk-textarea"
              id="comment-value"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {error && <p className="error-danger">{error}</p>}
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>

          {elementsOpt && elementsOpt?.length > 0 && (
            <Button onClick={handleSave} className="btn-metis">
              Sauver
            </Button>
          )}

          {elementsOpt && elementsOpt.length === 0 && (
            <Button onClick={handleSaveWithoutValue} className="btn-metis">
              Sauver
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditInfos;
