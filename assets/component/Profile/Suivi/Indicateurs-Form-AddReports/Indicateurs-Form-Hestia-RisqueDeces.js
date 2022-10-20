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

function IndicateursFormHestiaRisqueDeces(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [idPatient, setIdPatient] = useState(id);
  const [valueSecuritee, setChoiceSecuriteeSelected] = useState(null);
  const [descriptionSecuritee, setDescriptionSecuriteeSelected] =
    useState(null);

  const [valueSantee, setChoiceSanteeSelected] = useState(null);
  const [descriptionSantee, setDescriptionSanteeSelected] = useState(null);

  const [valueConsommation, setChoiceConsommationSelected] = useState(null);
  const [descriptionConsommation, setDescriptionConsommationSelected] =
    useState(null);

  const choiceSecuritee = (e) => {
    setChoiceSecuriteeSelected(e);
  };

  const onChangeDescriptionSecuritee = (e) => {
    setDescriptionSecuriteeSelected(e.target.value);
  };

  const choiceSantee = (e) => {
    setChoiceSanteeSelected(e);
  };

  const onChangeDescriptionSantee = (e) => {
    setDescriptionSanteeSelected(e);
  };

  const choiceConsommation = (e) => {
    setChoiceConsommationSelected(e);
  };

  const onChangeDescriptionConsommation = (e) => {
    setDescriptionConsommationSelected(e.target.value);
  };
  //   /api/getContacts

  props.onChange([
    {
      id: props.id,
      valueSecuritee: valueSecuritee,
      descriptionSecuritee: descriptionSecuritee,
      valueSantee: valueSantee,
      descriptionSantee: descriptionSantee,
      valueConsommation: valueConsommation,
      descriptionConsommation: descriptionConsommation,
    },
  ]);
  return (
    <>
      <div className="addSoins-form">
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Sécurité
          </Form.Label>
          <Form.Check
            inline
            label="Le logement est insalubre ET mal utilisé par la personne (0)"
            onClick={(e) => choiceSecuritee("0")}
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Le logement est insalubre OU mal utilisé par la personne (1)"
            name="group1"
            onClick={(e) => choiceSecuritee("1")}
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Le logement est bien utilisé par la personne mais seulement partiellement sain et fonctionnel (2)"
            name="group1"
            onClick={(e) => choiceSecuritee("2")}
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Le logement est sain et totalement fonctionnel et la personne l'utilise correctement (3)"
            name="group1"
            onClick={(e) => choiceSecuritee("3")}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionSecuritee(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Santé
          </Form.Label>
          <Form.Check
            inline
            label="La personne refuse les soins, ne prend pas son traitement et n’a aucun contact extérieur (porte fermée) (0)"
            onClick={(e) => choiceSantee("0")}
            name="group2"
            type={"radio"}
            id={`inline-radio-5`}
          />
          <Form.Check
            inline
            label="La personne accepte le contact mais refuse les soins et ne prend pas son traitement (1)"
            name="group2"
            onClick={(e) => choiceSantee("1")}
            type={"radio"}
            id={`inline-radio-6`}
          />
          <Form.Check
            inline
            label="La personne accepte le contact, accepte certains soins ou prend son traitement mais pas suffisamment régulièrement pour se maintenir en bonne santé (2)"
            name="group2"
            onClick={(e) => choiceSantee("2")}
            type={"radio"}
            id={`inline-radio-7`}
          />
          <Form.Check
            inline
            label="La personne a un bon lien avec son médecin traitant et/ou infirmière à domicile ou est autonome dans sa prise de traitement (3)"
            name="group2"
            onClick={(e) => choiceSantee("3")}
            type={"radio"}
            id={`inline-radio-8`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionSantee(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Consommation
          </Form.Label>
          <Form.Check
            inline
            label="La personne a une ou plusieurs dépendances et ne gère pas du tout : elle consomme massivement et se met en danger (ne se rend pas compte du problème) (0)"
            onClick={(e) => choiceConsommation("0")}
            name="group3"
            type={"radio"}
            id={`inline-radio-9`}
          />
          <Form.Check
            inline
            label="La personne a une ou plusieurs dépendances, en a conscience mais n'est pas prête ou n'a pas envie d'envisager un changement (1)"
            name="group3"
            onClick={(e) => choiceConsommation("1")}
            type={"radio"}
            id={`inline-radio-10`}
          />
          <Form.Check
            inline
            label="La personne a une ou plusieurs dépendances mais elle la/les gère et cela ne pose pas de problème majeur d'un point de vue de sa santé/sécurité ou ne les gère pas mais est prête à modifier sa consommation (2)"
            name="group3"
            onClick={(e) => choiceConsommation("2")}
            type={"radio"}
            id={`inline-radio-11`}
          />
          <Form.Check
            inline
            label="Absence totale de consommation(s) - Abstinence (3)"
            name="group3"
            onClick={(e) => choiceConsommation("3")}
            type={"radio"}
            id={`inline-radio-12`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionConsommation(e)}
          />
        </div>
      </div>
    </>
  );
}

export default IndicateursFormHestiaRisqueDeces;
