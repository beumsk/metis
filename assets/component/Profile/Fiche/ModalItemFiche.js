import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

function ModalItemFiche(props) {
  const [show, setShow] = useState(false);

  const [elementsOpt, setElementsOpt] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setElementsOpt(props.props);
  });
  console.log(elementsOpt);
  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </Button>

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
                <>
                  <option>{el.elements.value}</option>
                </>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Valeur Spécifique</Form.Label>
            <Form.Control
              type="text"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <p>
              Les suggestions marquées d'une étoile (*) dans la liste ci-dessus
              demandent obligatoirement une valeur spécifique.
            </p>
            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control as="textarea" rows={3} />
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

export default ModalItemFiche;
