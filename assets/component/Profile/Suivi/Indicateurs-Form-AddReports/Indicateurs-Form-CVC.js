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

  const [idCorps, setidCorps] = useState(
    props?.editForm && props?.editForm[0]?.id ? props?.editForm[0]?.id : null
  );
  const [idVetements, setidVetements] = useState(
    props?.editForm && props?.editForm[1]?.id ? props?.editForm[1]?.id : null
  );

  const [idComportement, setidComportement] = useState(
    props?.editForm && props?.editForm[2]?.id ? props?.editForm[2]?.id : null
  );

  const [corpsScore, setCorpsScore] = useState(
    props?.editForm && props?.editForm[0]?.value
      ? props?.editForm[0]?.value
      : null
  );
  const [corpsDescription, setDescriptionCorps] = useState(
    props?.editForm && props?.editForm[0]?.comment
      ? props?.editForm[0]?.comment
      : null
  );

  const [vetementsScore, setVetementsScore] = useState(
    props?.editForm && props.editForm[1]?.value
      ? props.editForm[1]?.value
      : null
  );
  const [vetementsDescription, setDescriptionVetements] = useState(
    props?.editForm && props.editForm[2]?.comment
      ? props.editForm[2]?.comment
      : null
  );

  const [comportementScore, setComportementScore] = useState(
    props?.editForm && props.editForm[2]?.value
      ? Number(props.editForm[2]?.value)
      : null
  );
  const [comportementDescription, setDescriptionComportement] = useState(
    props?.editForm && props?.editForm[2]?.comment
      ? props?.editForm[2]?.comment
      : null
  );

  let obj = {
    id: props.id,
    id_corps: idCorps,
    id_vetements: idVetements,
    id_comportement: idComportement,
    corpsScore: corpsScore,
    corpsDescription: corpsDescription,
    vetementsScore: vetementsScore,
    vetementsDescription: vetementsDescription,
    comportementScore: comportementScore,
    comportementDescription: comportementDescription,
  };
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
  //   /api/getContacts

  props.onChange([
    {
      id: props.id,
      id_corps: idCorps ? idCorps : null,
      corpsScore: corpsScore ? corpsScore : null,
      // id_indi:
      corpsDescription: corpsDescription ? corpsDescription : null,
      id_vetements: idVetements ? idVetements : null,
      vetementsScore: vetementsScore ? vetementsScore : null,
      vetementsDescription: vetementsDescription ? vetementsDescription : null,
      id_comportement: idComportement ? idComportement : null,
      comportementScore: comportementScore ? comportementScore : null,
      comportementDescription: comportementDescription
        ? comportementDescription
        : null,
    },
  ]);

  // console.log({
  //   id: props.id,
  //   corpsScore: corpsScore ? corpsScore : props?.editForm[0]?.value,
  //   // corpsDescription: corpsDescription
  //   //   ? corpsDescription
  //   //   : props?.editForm[0]?.comment,
  //   // vetementsScore: vetementsScore ? vetementsScore : props.editForm[1]?.value,
  //   // vetementsDescription: vetementsDescription
  //   //   ? vetementsDescription
  //   //   : props.editForm[1]?.comment,
  //   // comportementScore: comportementScore
  //   //   ? comportementScore
  //   //   : props.editForm[2]?.value,
  //   // comportementDescription: comportementDescription
  //   //   ? comportementDescription
  //   //   : props?.editForm[2]?.comment,
  // });

  console.log(props?.editForm);

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
              props.editForm && props?.editForm[0]?.value
                ? props?.editForm[0]?.value
                : null
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
          <Form.Control
            as="textarea"
            rows={3}
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
          <Form.Control
            as="textarea"
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
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={
              props?.editForm && props?.editForm?.length > 0
                ? props?.editForm[2]?.comment
                : ""
            }
            onChange={(e) => onChangeDescriptionComportement(e)}
          />
        </div>
      </div>
    </>
  );
}

export default IndicateursFormCVC;
