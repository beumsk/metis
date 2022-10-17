import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";

function AddIndicateursByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [idPatient]);

  //   /api/getContacts
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <Form.Select size="lg">
          <option>HESTIA - Risque perte logement</option>
          <option>CVC</option>
          <option>HESTIA - Risque décès </option>
        </Form.Select>

        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Voisinage
          </Form.Label>
          <Form.Check
            inline
            label="Conflits de voisinage (0)"
            // onClick={(e) => choiceActivities(true)}
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Conflits de voisinage mais gérés (1)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Absence de conflits de voisinage (2)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Bonne entente avec le voisinage (3)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Hygiène logement
          </Form.Label>
          <Form.Check
            inline
            label="Si cumule au moins 2 éléments : Présence d’odeurs nauséabondes, nuisibles, altération du matériel, accumulation (0)"
            // onClick={(e) => choiceActivities(true)}
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Présence d’odeurs nauséabondes OU nuisibles OU altération du matériel OU accumulation (1)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Logement relativement propre et entretenu mais pas impeccable ou aides familiales limitées (2)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Logement impeccable et/ou aides familiales régulières et fonctionnelles (3)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Bailleur
          </Form.Label>
          <Form.Check
            inline
            label="Absence de paiement du loyer (0)"
            // onClick={(e) => choiceActivities(true)}
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="La personne paie son loyer mais aucune garantie de régularité ou de manière erronée (1)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Quelqu’un est garant du paiement du loyer mais personne n’est garant de la signature des baux (2)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Garantie du paiement du loyer et de la signature des baux (3)"
            name="group1"
            // onClick={(e) => choiceActivities(false)}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </div>
      </div>
    </>
  );
}

export default AddIndicateursByReport;
