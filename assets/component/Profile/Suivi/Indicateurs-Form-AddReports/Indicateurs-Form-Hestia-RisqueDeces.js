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

  const [idSecuritee, setidSecuritee] = useState();
  const [idSantee, setidSantee] = useState();

  const [idConsommation, setidConsommation] = useState();

  const [valueSecuritee, setChoiceSecuriteeSelected] = useState();
  const [descriptionSecuritee, setDescriptionSecuriteeSelected] = useState();

  const [valueSantee, setChoiceSanteeSelected] = useState();
  const [descriptionSantee, setDescriptionSanteeSelected] = useState();

  const [valueConsommation, setChoiceConsommationSelected] = useState();
  const [descriptionConsommation, setDescriptionConsommationSelected] =
    useState();

  const choiceSecuritee = (valueSecuritee) => {
    setChoiceSecuriteeSelected(valueSecuritee);
  };

  const onChangeDescriptionSecuritee = (e) => {
    setDescriptionSecuriteeSelected(e.target.value);
  };

  const choiceSantee = (valueSantee) => {
    setChoiceSanteeSelected(valueSantee);
  };

  const onChangeDescriptionSantee = (e) => {
    setDescriptionSanteeSelected(e);
  };

  const choiceConsommation = (valueConsommation) => {
    setChoiceConsommationSelected(valueConsommation);
  };

  const onChangeDescriptionConsommation = (e) => {
    setDescriptionConsommationSelected(e.target.value);
  };

  const onSend = (e) => {
    console.log(e);

    let formData = new FormData();
    formData.append("valueSecuritee", valueSecuritee);
    formData.append("descriptionSecuritee", descriptionSecuritee);
    formData.append("valueSantee", valueSantee);
    formData.append("descriptionSantee", descriptionSantee);
    formData.append("valueConsommation", valueConsommation);
    formData.append("descriptionConsommation", descriptionConsommation);
    formData.append("idRepport", props.report.id);
    axios({
      method: "post",
      url: "/api/addIndicatorsHestiaDeces",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        props.onChangeIndicators(true);
        setShow(false);
      })
      .catch(function (response) {});
  };
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
            name="group7"
            type={"radio"}
            id={`inline-radio-25`}
          />
          <Form.Check
            inline
            label="Le logement est insalubre OU mal utilisé par la personne (1)"
            name="group7"
            onClick={(e) => choiceSecuritee("1")}
            type={"radio"}
            id={`inline-radio-26`}
          />
          <Form.Check
            inline
            label="Le logement est bien utilisé par la personne mais seulement partiellement sain et fonctionnel (2)"
            name="group7"
            onClick={(e) => choiceSecuritee("2")}
            type={"radio"}
            id={`inline-radio-27`}
          />
          <Form.Check
            inline
            label="Le logement est sain et totalement fonctionnel et la personne l'utilise correctement (3)"
            name="group7"
            onClick={(e) => choiceSecuritee("3")}
            type={"radio"}
            id={`inline-radio-28`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
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
            name="group8"
            type={"radio"}
            id={`inline-radio-29`}
          />
          <Form.Check
            inline
            label="La personne accepte le contact mais refuse les soins et ne prend pas son traitement (1)"
            name="group8"
            onClick={(e) => choiceSantee("1")}
            type={"radio"}
            id={`inline-radio-30`}
          />
          <Form.Check
            inline
            label="La personne accepte le contact, accepte certains soins ou prend son traitement mais pas suffisamment régulièrement pour se maintenir en bonne santé (2)"
            name="group8"
            onClick={(e) => choiceSantee("2")}
            type={"radio"}
            id={`inline-radio-31`}
          />
          <Form.Check
            inline
            label="La personne a un bon lien avec son médecin traitant et/ou infirmière à domicile ou est autonome dans sa prise de traitement (3)"
            name="group8"
            onClick={(e) => choiceSantee("3")}
            type={"radio"}
            id={`inline-radio-32`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
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
            name="group9"
            type={"radio"}
            id={`inline-radio-33`}
          />
          <Form.Check
            inline
            label="La personne a une ou plusieurs dépendances, en a conscience mais n'est pas prête ou n'a pas envie d'envisager un changement (1)"
            name="group9"
            onClick={(e) => choiceConsommation("1")}
            type={"radio"}
            id={`inline-radio-34`}
          />
          <Form.Check
            inline
            label="La personne a une ou plusieurs dépendances mais elle la/les gère et cela ne pose pas de problème majeur d'un point de vue de sa santé/sécurité ou ne les gère pas mais est prête à modifier sa consommation (2)"
            name="group9"
            onClick={(e) => choiceConsommation("2")}
            type={"radio"}
            id={`inline-radio-35`}
          />
          <Form.Check
            inline
            label="Absence totale de consommation(s) - Abstinence (3)"
            name="group9"
            onClick={(e) => choiceConsommation("3")}
            type={"radio"}
            id={`inline-radio-36`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            rows={3}
            onChange={(e) => onChangeDescriptionConsommation(e)}
          />
          <button onClick={(e) => onSend(e)}>Envoyer</button>
        </div>
      </div>
    </>
  );
}

export default IndicateursFormHestiaRisqueDeces;
