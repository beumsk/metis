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

function ModalEditInfos(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [error, setError] = useState(null);
  const [responseDatas, setResponseDatas] = useState(null);
  const [start, setStartDate] = useState(null);
  const [end, setEndDate] = useState(null);

  const [valueSelect, setValueSelect] = useState(null);
  const [specificValueInput, setSpecificValueInput] = useState(null);

  const [commentaireInput, setCommentaire] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setElementsOpt(...props?.infos?.suggestionsByBlock);
  }, []);
  //

  const handleInputChange = (e) => {
    //new Date(start).toJSON().slice(0, 10)
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
    setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
  };

  const handleSave = (e) => {
    let formData = new FormData();

    if (valueSelect !== null && elementsOpt.length > 0) {
      formData.append("valueSelect", valueSelect);
      setError(null);
    }

    if (valueSelect === null) {
      setError("Valeur obligatoire");
    }

    if (specificValueInput) {
      formData.append("specificValueInput", specificValueInput);
    }

    if (commentaireInput) {
      formData.append("commentaireInput", commentaireInput);
    }

    formData.append("start", start);
    formData.append("end", end);
    formData.append("idInfo", props?.infosPatient?.id);
    formData.append("idPatient", idPatient);
    formData.append("infosPatient", props?.infosPatient);
    formData.append("itel", props?.infos?.id);

    var formGetInfos = new FormData();
    formGetInfos.append("id", id.toString());

    console.log(elementsOpt);

    if (valueSelect !== null) {
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

  return (
    <>
      <button onClick={handleShow} className="ml-4">
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter une information</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            {elementsOpt?.length > 0 && (
              <>
                <Form.Label htmlFor="inputValue">Valeur</Form.Label>
                <Form.Select
                  size="lg"
                  className="uk-select"
                  onChange={(e) => {
                    if (e.target.value !== "Choissisez une valeur") {
                      setValueSelect(e.target.value);
                    } else {
                      setValueSelect(null);
                    }
                  }}
                  id="value-sugg"
                >
                  <option>Choissisez une valeur</option>
                  {elementsOpt?.map((el, id) => (
                    <option key={el.id} value={el.id}>
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
              aria-describedby="valueSpécifique"
            />
            <p>
              Les suggestions marquées d'une étoile (*) dans la liste ci-dessus
              demandent obligatoirement une valeur spécifique.
            </p>
            <Form.Label htmlFor="inputValue">Début</Form.Label>

            {start ? (
              <>
                <Form.Control
                  type="date"
                  className="uk-select"
                  placeholder="Here edit the release date"
                  onChange={handleInputChange}
                  id="inputValueSpécifique"
                />
              </>
            ) : (
              <Form.Control
                type="date"
                className="uk-select"
                placeholder="Here edit the release date"
                onChange={handleInputChange}
                id="inputValueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Fin</Form.Label>

            {end ? (
              <Form.Control
                type="date"
                className="uk-select"
                onChange={handleInputChange}
                id="inputValueSpécifique"
              />
            ) : (
              <Form.Control
                type="date"
                onChange={handleInputChange}
                id="inputValueSpécifique"
                className="uk-select"
              />
            )}

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={3}
              className="uk-input"
              id="comment-value"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {error && <p>{error}</p>}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditInfos;
