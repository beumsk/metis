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
  const [start, setStartDate] = useState(new Date());
  const [end, setEndDate] = useState(new Date());
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
    //
    setStartDate(e.target.value);
    setEndDate(e.target.value);
  };
  //   new Date(1254088800 *1000)
  handleInputChange;
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
            <Form.Select size="lg">
              {elementsOpt?.map((el, id) => (
                <option
                  key={el.id}
                  selected={props.infosPatient.sugg.value === el?.value}
                >
                  {el?.value}
                </option>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>
            <input
              type="text"
              id="inputValueSpécifique"
              defaultValue={props?.infosPatient?.value}
              aria-describedby="valueSpécifique"
            />
            <p>
              Les suggestions marquées d'une étoile (*) dans la liste ci-dessus
              demandent obligatoirement une valeur spécifique.
            </p>
            <Form.Label htmlFor="inputValue">Début</Form.Label>

            {start ? (
              <Form.Control
                type="date"
                defaultValue={new Date(start).toJSON().slice(0, 10)}
                placeholder="Here edit the release date"
                onChange={(e) => handleInputChange(e)}
                id="inputValueSpécifique"
              />
            ) : (
              <Form.Control
                type="date"
                placeholder="Here edit the release date"
                onChange={(e) => handleInputChange(e)}
                id="inputValueSpécifique"
              />
            )}

            <Form.Label htmlFor="inputValue">Fin</Form.Label>

            {end ? (
              <Form.Control
                type="date"
                defaultValue={new Date(end).toJSON().slice(0, 10)}
                id="inputValueSpécifique"
              />
            ) : (
              <Form.Control type="date" id="inputValueSpécifique" />
            )}

            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={props?.infosPatient?.comment}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditInfos;
