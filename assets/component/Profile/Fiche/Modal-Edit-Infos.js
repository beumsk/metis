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

  // console.log({new Date(g.creationDate).toLocaleString("fr-BE", {
  //   dateStyle: "short",
  // })});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setElementsOpt(...props?.infos?.suggestionsByBlock);
    // console.log(props?.infosPatient);
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
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Select
              size="lg"
              onChange={(e) => setValueSelect(e.target.value)}
              id="value-sugg"
            >
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
            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>
            <input
              type="text"
              id="inputValueSpécifique"
              onChange={(e) => setSpecificValueInput(e.target.value)}
              defaultValue={props?.infosPatient?.value}
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
                  defaultValue={new Date(props?.infosPatient?.start)
                    .toISOString()
                    .substring(0, 10)}
                  placeholder="Here edit the release date"
                  onChange={handleInputChange}
                  id="inputValueSpécifique"
                />
              </>
            ) : (
              <Form.Control
                type="date"
                defaultValue={new Date(props?.infosPatient?.start)
                  .toISOString()
                  .substring(0, 10)}
                placeholder="Here edit the release date"
                onChange={handleInputChange}
                id="inputValueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Fin</Form.Label>

            {end ? (
              <Form.Control
                type="date"
                defaultValue={new Date(end).toISOString().substring(0, 10)}
                onChange={handleInputChange}
                id="inputValueSpécifique"
              />
            ) : (
              <Form.Control
                type="date"
                defaultValue={new Date(end).toISOString().substring(0, 10)}
                onChange={handleInputChange}
                id="inputValueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCommentaire(e.target.value)}
              rows={3}
              id="comment-value"
              defaultValue={props?.infosPatient?.comment}
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

export default ModalEditInfos;
