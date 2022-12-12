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

  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [vetementsDescription, setDescriptionVetements] = useState(
  //   props?.editForm && props.editForm[2]?.comment
  //     ? props.form[2]?.comment
  //     : null
  // );
  useEffect(() => {}, [idPatient]);

  const [idBailleur, setidBailleur] = useState(
    props?.editForm && props?.editForm[0]?.id ? props?.editForm[0]?.id : null
  );
  const [idVoisinage, setidVoisinage] = useState(
    props?.editForm && props?.editForm[1]?.id ? props?.editForm[1]?.id : null
  );

  const [idHygiene, setidHygiene] = useState(
    props?.editForm && props?.editForm[2]?.id ? props?.editForm[2]?.id : null
  );

  const [voisinageSelected, setVoisinageSelected] = useState(
    props?.editForm && props?.editForm[0]?.value
      ? props?.editForm[0]?.value
      : null
  );
  const [descriptionVoisinage, setDescriptionVoisinage] = useState(
    props?.editForm && props?.editForm[0]?.comment
      ? props?.editForm[0]?.comment
      : null
  );

  const [hygieneSelected, setHygieneSelected] = useState(
    props?.editForm && props.editForm[1]?.value
      ? props.editForm[1]?.value
      : null
  );
  const [descriptionHygiene, setDescriptionHygiene] = useState(
    props?.editForm && props.editForm[1]?.comment
      ? props.editForm[1]?.comment
      : null
  );

  const [bailleurSelected, setBailleurSelected] = useState(
    props?.editForm && props.editForm[2]?.value
      ? Number(props.editForm[2]?.value)
      : null
  );
  const [descriptionBailleur, setDescriptionBailleur] = useState(
    props?.editForm && props?.editForm[2]?.comment
      ? props?.editForm[2]?.comment
      : null
  );

  const onChangeDescriptionHygiene = (e) => {
    setDescriptionHygiene(e.target.value);
  };
  const onChangeDescriptionVoisinage = (e) => {
    setDescriptionVoisinage(e.target.value);
  };
  const choiceBailleur = (e) => {
    setBailleurSelected(e);
  };

  const choiceTypeCVC = (e) => {
    setTypeCVCSelected(e.target.value);
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
      id_bailleur: idBailleur,
      id_voisinage: idVoisinage,
      id_hygiene: idHygiene,
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
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Voisinage
          </Form.Label>
          <Form.Check
            inline
            label="Conflits de voisinage (0)"
            onClick={(e) => choiceVoisinage("0")}
            name="group4"
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 0 ? true : false
            }
            type={"radio"}
            id={`inline-radio-13`}
          />
          <Form.Check
            inline
            label="Conflits de voisinage mais gérés (1)"
            name="group4"
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 1 ? true : false
            }
            onClick={(e) => choiceVoisinage("1")}
            type={"radio"}
            id={`inline-radio-14`}
          />
          <Form.Check
            inline
            label="Absence de conflits de voisinage (2)"
            name="group4"
            onClick={(e) => choiceVoisinage("2")}
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 2 ? true : false
            }
            type={"radio"}
            id={`inline-radio-15`}
          />
          <Form.Check
            inline
            label="Bonne entente avec le voisinage (3)"
            name="group4"
            onClick={(e) => choiceVoisinage("3")}
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 3 ? true : false
            }
            type={"radio"}
            id={`inline-radio-16`}
          />
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Commentaire
          </Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            rows={3}
            defaultValue={
              props?.editForm && props?.editForm[0]?.comment
                ? props?.editForm[0]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionVoisinage(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Hygiène logement
          </Form.Label>
          <Form.Check
            inline
            label="Si cumule au moins 2 éléments : Présence d’odeurs nauséabondes, nuisibles, altération du matériel, accumulation (0)"
            onClick={(e) => choiceHygiene("0")}
            name="group5"
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 0 ? true : false
            }
            type={"radio"}
            id={`inline-radio-17`}
          />
          <Form.Check
            inline
            label="Présence d’odeurs nauséabondes OU nuisibles OU altération du matériel OU accumulation (1)"
            name="group5"
            onClick={(e) => choiceHygiene("1")}
            type={"radio"}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 1 ? true : false
            }
            id={`inline-radio-18`}
          />
          <Form.Check
            inline
            label="Logement relativement propre et entretenu mais pas impeccable ou aides familiales limitées (2)"
            name="group5"
            onClick={(e) => choiceHygiene("2")}
            type={"radio"}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 2 ? true : false
            }
            id={`inline-radio-19`}
          />
          <Form.Check
            inline
            label="Logement impeccable et/ou aides familiales régulières et fonctionnelles (3)"
            name="group5"
            onClick={(e) => choiceHygiene("3")}
            type={"radio"}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 3 ? true : false
            }
            id={`inline-radio-20`}
          />
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Commentaire
          </Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            rows={3}
            defaultValue={
              props.editForm && props.editForm[1]?.comment
                ? props.editForm[1]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionHygiene(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Bailleur
          </Form.Label>
          <Form.Check
            inline
            label="Absence de paiement du loyer (0)"
            onClick={(e) => choiceBailleur("0")}
            name="group6"
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 0 ? true : false
            }
            type={"radio"}
            id={`inline-radio-21`}
          />
          <Form.Check
            inline
            label="La personne paie son loyer mais aucune garantie de régularité ou de manière erronée (1)"
            name="group6"
            onClick={(e) => choiceBailleur("1")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 1 ? true : false
            }
            type={"radio"}
            id={`inline-radio-22`}
          />
          <Form.Check
            inline
            label="Quelqu’un est garant du paiement du loyer mais personne n’est garant de la signature des baux (2)"
            name="group6"
            onClick={(e) => choiceBailleur("2")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 2 ? true : false
            }
            type={"radio"}
            id={`inline-radio-23`}
          />
          <Form.Check
            inline
            label="Garantie du paiement du loyer et de la signature des baux (3)"
            name="group6"
            onClick={(e) => choiceBailleur("3")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 3 ? true : false
            }
            type={"radio"}
            id={`inline-radio-24`}
          />
          <Form.Label
            htmlFor="inputValue"
            defaultValue={
              props?.editForm && props?.editForm?.length > 0
                ? props?.editForm[2]?.comment
                : ""
            }
            className="uk-form-label"
            onChange={(e) => onChangeDescriptionBailleur(e)}
          >
            Commentaire
          </Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            rows={3}
            defaultValue={
              props.editForm && props.editForm[2]?.comment
                ? props.editForm[2]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionBailleur(e)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default IndicateursFormHestiaPerteLogement;
