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

function IndicateursFormCVC(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [idPatient, setIdPatient] = useState(id);

  const [idCorps, setidCorps] = useState();
  const [idVetements, setidVetements] = useState();

  const [idComportement, setidComportement] = useState();

  const [corpsScore, setCorpsScore] = useState();
  const [corpsDescription, setDescriptionCorps] = useState();

  const [vetementsScore, setVetementsScore] = useState();
  const [vetementsDescription, setDescriptionVetements] = useState();

  const [comportementScore, setComportementScore] = useState();
  const [comportementDescription, setDescriptionComportement] = useState();

  useEffect(() => {
    setCorpsScore(corpsScore);
  }, [idPatient, corpsScore]);

  function choiceCorps(corpsScore) {
    setCorpsScore(corpsScore);
  }

  const onChangeDescriptionCorps = (e) => {
    setDescriptionCorps(e.target.value);
  };

  const choiceVetements = (e) => {
    setVetementsScore(e);
  };

  const onChangeDescriptionVetements = (e) => {
    setDescriptionVetements(e.target.value);
  };

  const choiceComportement = (e) => {
    setComportementScore(e);
  };

  const onChangeDescriptionComportement = (e) => {
    setDescriptionComportement(e.target.value);
  };

  const onSend = (e) => {
    console.log(e);

    let formData = new FormData();
    formData.append("corpsScore", corpsScore);
    formData.append("corpsDescription", corpsDescription);
    formData.append("vetementsScore", vetementsScore);
    formData.append("vetementsDescription", vetementsDescription);
    formData.append("comportementScore", comportementScore);
    formData.append("comportementDescription", comportementDescription);
    formData.append("idRepport", props.report.id);
    axios({
      method: "post",
      url: "/api/addIndicatorsCVC",
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
    console.log(
      corpsScore,
      corpsDescription,
      vetementsScore,
      vetementsDescription,
      comportementScore,
      comportementDescription
    );
  };

  return (
    <>
      <div className="addSoins-form">
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Corps
          </Form.Label>
          <Form.Check
            inline
            label="Saleté apparente avec parasites OU saleté apparente avec odeurs (0)"
            onClick={(e) => choiceCorps("0")}
            name="group1"
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 0 ? true : false
            }
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Saleté apparente OU parasites OU odeurs OU plaie non soignée (1)"
            name="group1"
            onClick={(e) => choiceCorps("1")}
            type={"radio"}
            defaultChecked={
              props.editForm && props?.editForm[0]?.value === 1 ? true : false
            }
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Négligence (2)"
            name="group1"
            onClick={(e) => choiceCorps("2")}
            defaultChecked={
              props.editForm && props.editForm[0]?.value === 2 ? true : false
            }
            type={"radio"}
            id={`inline-radio-3`}
          />
          <Form.Check
            inline
            label="Propre et soigné (3)"
            name="group1"
            defaultChecked={
              props.editForm && props.editForm[0]?.value === 3 ? true : false
            }
            onClick={(e) => choiceCorps("3")}
            type={"radio"}
            id={`inline-radio-4`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            rows={3}
            className="uk-textarea"
            defaultValue={
              props?.editForm && props?.editForm[0]?.comment
                ? props?.editForm[0]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionCorps(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Vêtements
          </Form.Label>
          <Form.Check
            inline
            label="Sales, abîmés et malodorants (0)"
            onClick={(e) => choiceVetements("0")}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 0 ? true : false
            }
            name="group2"
            type={"radio"}
            id={`inline-radio-5`}
          />
          <Form.Check
            inline
            label="Sales et malodorants OU sales et abîmés OU inadaptés (1)"
            name="group2"
            onClick={(e) => choiceVetements("1")}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 1 ? true : false
            }
            type={"radio"}
            id={`inline-radio-6`}
          />
          <Form.Check
            inline
            label="Sales OU abîmés OU malodorants (2)"
            name="group2"
            onClick={(e) => choiceVetements("2")}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 2 ? true : false
            }
            type={"radio"}
            id={`inline-radio-7`}
          />
          <Form.Check
            inline
            label="Cohérents, propres et en bon état (3)"
            name="group2"
            onClick={(e) => choiceVetements("3")}
            defaultChecked={
              props.editForm && props.editForm[1]?.value === 3 ? true : false
            }
            type={"radio"}
            id={`inline-radio-8`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            defaultValue={
              props.editForm && props.editForm[1]?.comment
                ? props.editForm[1]?.comment
                : ""
            }
            rows={3}
            onChange={(e) => onChangeDescriptionVetements(e)}
          />
        </div>
        <div key={`inline-radio`} className="mb-3">
          <Form.Label htmlFor="inputValue" style={{ display: "block" }}>
            Comportement
          </Form.Label>
          <Form.Check
            inline
            label="Anormal et dangereux (0)"
            onClick={(e) => choiceComportement("0")}
            name="group3"
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 0 ? true : false
            }
            type={"radio"}
            id={`inline-radio-9`}
          />
          <Form.Check
            inline
            label="Anormal OU dangereux (1)"
            name="group3"
            onClick={(e) => choiceComportement("1")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 1 ? true : false
            }
            type={"radio"}
            id={`inline-radio-10`}
          />
          <Form.Check
            inline
            label="Suscite un questionnement (2)"
            name="group3"
            onClick={(e) => choiceComportement("2")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 2 ? true : false
            }
            type={"radio"}
            id={`inline-radio-11`}
          />
          <Form.Check
            inline
            label="Normal (3)"
            name="group3"
            onClick={(e) => choiceComportement("3")}
            defaultChecked={
              props.editForm && props.editForm[2]?.value === 3 ? true : false
            }
            type={"radio"}
            id={`inline-radio-12`}
          />
          <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
          <textarea
            as="textarea"
            className="uk-textarea"
            rows={3}
            defaultValue={
              props?.editForm && props?.editForm?.length > 0
                ? props?.editForm[2]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionComportement(e)}
          />
        </div>
        <button onClick={(e) => onSend(e)}>Envoyer</button>
      </div>
    </>
  );
}

export default IndicateursFormCVC;
