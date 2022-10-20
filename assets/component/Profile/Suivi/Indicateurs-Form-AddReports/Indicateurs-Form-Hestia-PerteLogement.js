import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "../Editor-Reports";

function IndicateursFormHestiaPerteLogement(props) {
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
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);
  const [bailleurSelected, setBailleurSelected] = useState(null);
  const [voisinageSelected, setVoisinageSelected] = useState(null);
  const [hygieneSelected, setHygieneSelected] = useState(null);
  const [descriptionVoisinage, setDescriptionVoisinage] = useState(null);
  const [descriptionHygiene, setDescriptionHygiene] = useState(null);
  const [descriptionBailleur, setDescriptionBailleur] = useState(null);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [idPatient]);

  const onChangeDescriptionHygiene = (e) => {
    setDescriptionHygiene(e.target.value);
  };
  const onChangeDescriptionVoisinage = (e) => {
    setDescriptionVoisinage(e.target.value);
  };
  const choiceBailleur = (e) => {
    setTypeCVCSelected(e.target.value);
  };

  const choiceTypeCVC = (e) => {
    setBailleurSelected(e.target.value);
  };

  const choiceVoisinage = (e) => {
    setVoisinageSelected(e);
  };

  const choiceHygiene = (e) => {
    setHygieneSelected(e);
  };

  const onChangeDescriptionBailleur = (e) => {
    setDescriptionBailleur(e.target.value);
  };
  //   /api/getContacts

  props.onChange([
    {
      id: props.id,
      bailleurSelected: bailleurSelected,
      voisinageSelected: voisinageSelected,
      hygieneSelected: hygieneSelected,
      descriptionVoisinage: descriptionVoisinage,
      descriptionHygiene: descriptionHygiene,
      descriptionBailleur: descriptionBailleur,
    },
  ]);
  return (
    <>
      <div className="addSoins-form">
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Voisinage
          </Form.Label>
          <Form.Check
            inline
            label="Conflits de voisinage (0)"
            onClick={(e) => choiceVoisinage("0")}
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Conflits de voisinage mais gérés (1)"
            name="group1"
            onClick={(e) => choiceVoisinage("1")}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Absence de conflits de voisinage (2)"
            name="group1"
            onClick={(e) => choiceVoisinage("2")}
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Bonne entente avec le voisinage (3)"
            name="group1"
            onClick={(e) => choiceVoisinage("3")}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionVoisinage(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Hygiène logement
          </Form.Label>
          <Form.Check
            inline
            label="Si cumule au moins 2 éléments : Présence d’odeurs nauséabondes, nuisibles, altération du matériel, accumulation (0)"
            onClick={(e) => choiceHygiene("0")}
            name="group2"
            type={"radio"}
            id={`inline-radio-5`}
          />
          <Form.Check
            inline
            label="Présence d’odeurs nauséabondes OU nuisibles OU altération du matériel OU accumulation (1)"
            name="group2"
            onClick={(e) => choiceHygiene("1")}
            type={"radio"}
            id={`inline-radio-6`}
          />
          <Form.Check
            inline
            label="Logement relativement propre et entretenu mais pas impeccable ou aides familiales limitées (2)"
            name="group2"
            onClick={(e) => choiceHygiene("2")}
            type={"radio"}
            id={`inline-radio-7`}
          />
          <Form.Check
            inline
            label="Logement impeccable et/ou aides familiales régulières et fonctionnelles (3)"
            name="group2"
            onClick={(e) => choiceHygiene("3")}
            type={"radio"}
            id={`inline-radio-8`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionHygiene(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Bailleur
          </Form.Label>
          <Form.Check
            inline
            label="Absence de paiement du loyer (0)"
            onClick={(e) => choiceBailleur("0")}
            name="group3"
            type={"radio"}
            id={`inline-radio-9`}
          />
          <Form.Check
            inline
            label="La personne paie son loyer mais aucune garantie de régularité ou de manière erronée (1)"
            name="group3"
            onClick={(e) => choiceBailleur("1")}
            type={"radio"}
            id={`inline-radio-10`}
          />
          <Form.Check
            inline
            label="Quelqu’un est garant du paiement du loyer mais personne n’est garant de la signature des baux (2)"
            name="group3"
            onClick={(e) => choiceBailleur("2")}
            type={"radio"}
            id={`inline-radio-11`}
          />
          <Form.Check
            inline
            label="Garantie du paiement du loyer et de la signature des baux (3)"
            name="group3"
            onClick={(e) => choiceBailleur("3")}
            type={"radio"}
            id={`inline-radio-12`}
          />
          <Form.Label
            htmlFor="inputValue"
            onChange={(e) => onChangeDescriptionBailleur(e)}
          >
            Commentaire
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </div>
      </div>
    </>
  );
}

export default IndicateursFormHestiaPerteLogement;
