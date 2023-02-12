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
import SuggestionAutocomplete from "./Suggestion-Autocomplete";
function ModalEditInfos(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(
    props?.infos?.suggestionsByBlock &&
      props?.infos?.suggestionsByBlock.length > 0
      ? props?.infos?.suggestionsByBlock
      : null
  );

  const [error, setError] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [errorWithStar, setErrorWithStar] = useState(null);
  const [start, setStartDate] = useState(
    props?.infosPatient?.start !== null
      ? moment(props?.infosPatient?.start).utc("UTC+01:00").format("YYYY-MM-DD")
      : null
  );

  const [end, setEndDate] = useState(
    props?.infosPatient?.end !== null
      ? moment(props?.infosPatient?.end).utc("UTC+01:00").format("YYYY-MM-DD")
      : null
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
  const handleShow = () => {
    setErrorWithStar(null);
    setError(null);
    setIsSentRepport(false);
    setShow(true);
  };

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

    formData.append("start", !start ? null : start);
    formData.append("end", !end ? null : end);
    formData.append("idInfo", props?.infosPatient?.id);
    formData.append("idPatient", idPatient);
    formData.append("infosPatient", JSON.stringify(props?.infosPatient));
    formData.append("itel", props?.infos?.id);

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());
    console.log(specificValueInput);
    if (specificValueInput !== null) {
      axios({
        method: "post",
        url: "/api/editPatientInformation",
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
        setShow(false);
      });
    }
  };

  const handleSave = (e) => {
    let formData = new FormData();
    console.log(valueSelect);
    let isValueStarAndValueSpécific =
      valueSelect &&
      valueSelect.value &&
      valueSelect.value.indexOf("*") > -1 &&
      specificValueInput !== null &&
      specificValueInput !== ""
        ? true
        : false;

    let isNotValueStarAndValueSpécific =
      (valueSelect &&
        valueSelect.value.indexOf("*") > -1 &&
        specificValueInput === null) ||
      specificValueInput === ""
        ? true
        : false;

    let isValueNotStarAndNotValue =
      valueSelect.length === 0 ||
      (valueSelect &&
        valueSelect.length === 0 &&
        (specificValueInput === null || specificValueInput === ""))
        ? true
        : false;

    let isValueStarValue =
      valueSelect && valueSelect.value && valueSelect.value.indexOf("*") === -1
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

    // value-sugg

    formData.append("specificValueInput", specificValueInput);
    formData.append("commentaireInput", commentaireInput);
    formData.append("start", !start ? null : start);
    formData.append("end", !end ? null : end);
    formData.append("idInfo", props?.infosPatient?.id);
    formData.append("valueSelect", valueSelect ? valueSelect.id : null);
    formData.append("specificValueInput", specificValueInput);

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());
    console.log(isValueStarAndValueSpécific, isValueStarValue, valueSelect);
    if (isValueStarAndValueSpécific === true || isValueStarValue === true) {
      axios({
        method: "post",
        url: "/api/editPatientInformation",
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
      <button onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            {elementsOpt[0]?.length > 0 && (
              <>
                <SuggestionAutocomplete
                  data={elementsOpt[0]}
                  onChange={onChangeSuggestion}
                  multiple={false}
                  defaultValue={
                    props?.infosPatient?.sugg
                      ? {
                          id: props?.infosPatient?.sugg?.id,
                          value: props?.infosPatient?.sugg?.value,
                        }
                      : null
                  }
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
              defaultValue={props?.infosPatient?.value}
              aria-describedby="valueSpécifique"
            />

            {errorWithStar && <p className="error-danger">{errorWithStar}</p>}

            {elementsOpt[0]?.length > 0 && (
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
              defaultValue={
                props?.infosPatient?.start !== null
                  ? moment(props?.infosPatient?.start)
                      .utc("UTC+01:00")
                      .format("YYYY-MM-DD")
                  : ""
              }
              onChange={(e) => setStartDate(e.target.value)}
              id="inputValueSpécifique"
              className="uk-select"
            />

            <Form.Label htmlFor="inputValue">Fin</Form.Label>

            <Form.Control
              type="date"
              defaultValue={
                props?.infosPatient?.end !== null
                  ? moment(props?.infosPatient?.end)
                      .utc("UTC+01:00")
                      .format("YYYY-MM-DD")
                  : ""
              }
              onChange={(e) => setEndDate(e.target.value)}
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
              defaultValue={props?.infosPatient?.comment}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {error && <p className="error-danger"> {error}</p>}
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          {elementsOpt && elementsOpt[0]?.length > 0 && (
            <Button onClick={handleSave} className="btn-metis">
              SauverhandleSave
            </Button>
          )}

          {elementsOpt && elementsOpt[0]?.length === 0 && (
            <Button onClick={handleSaveWithoutValue} className="btn-metis">
              SauverhandleSaveWithoutValue
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditInfos;
