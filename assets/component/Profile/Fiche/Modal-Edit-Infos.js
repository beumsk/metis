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
  const [elementsOpt, setElementsOpt] = useState(null);
  const [error, setError] = useState(null);
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
    // setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
    // setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
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

    if (valueSelect !== null && elementsOpt.length > 0) {
      formData.append("valueSelect", valueSelect);
      setError(null);
    }

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());

    if (valueSelect !== null && elementsOpt?.length > 0) {
      axios({
        method: "post",
        url: "/api/editPatientInformation",
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
              setResponseDatas(response.data);
              setIsSentRepport(true);
              document.querySelectorAll(".btn-close")[0].click();
            })
            .catch(function (response) {});
          // document.querySelectorAll(".btn-close")[0].click();
          // location.replace(window.location.origin + "/" + idPatient);
        }
      });
    }
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
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            {elementsOpt?.length > 0 && (
              <>
                <Form.Label htmlFor="inputValue">Valeur</Form.Label>
                <Form.Select
                  size="lg"
                  onChange={(e) => {
                    if (e.target.value !== "Choissisez une valeur") {
                      setValueSelect(e.target.value);
                    } else {
                      setValueSelect(null);
                    }
                  }}
                  id="value-sugg"
                  className="uk-select"
                >
                  <option value={null}>Choissisez votre valeur</option>
                  {elementsOpt?.map((el, id) => (
                    <option
                      key={el.id}
                      value={el.id}
                      selected={props?.infosPatient?.sugg?.value === el?.value}
                    >
                      {el?.value}
                    </option>
                  ))}
                </Form.Select>
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
              defaultValue={
                props?.infosPatient?.start !== null
                  ? moment(props?.infosPatient?.start)
                      .utc("UTC+01:00")
                      .format("YYYY-MM-DD")
                  : ""
              }
              placeholder="Here edit the release date"
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
              rows={3}
              className="uk-input"
              id="comment-value"
              defaultValue={props?.infosPatient?.comment}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {error && <p>{error}</p>}
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          {elementsOpt?.length > 0 && (
            <Button onClick={handleSave} className="btn-metis">
              Sauver
            </Button>
          )}

          {elementsOpt && elementsOpt[0] === [] && (
            <Button onClick={handleSave} className="btn-metis">
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
