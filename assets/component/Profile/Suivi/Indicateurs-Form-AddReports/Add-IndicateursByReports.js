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
import IndicateursFormHestiaRisqueDeces from "./Indicateurs-Form-Hestia-RisqueDeces";
import IndicateursFormHestiaPerteLogement from "./Indicateurs-Form-Hestia-PerteLogement";
import IndicateursFormCVC from "./Indicateurs-Form-CVC";
function AddIndicateursByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;

  const [idPatient, setIdPatient] = useState(id);
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);

  useEffect(() => {}, [idPatient]);

  const choiceTypeCVC = (e) => {
    console.log(e);
    setTypeCVCSelected(e.target.value);
  };

  console.log(typeCVCSelected);

  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <Form.Select
          size="lg"
          onChange={(e) => choiceTypeCVC(e)}
          value={typeCVCSelected}
        >
          <option>Sélectionnez le type d'indicateurs</option>
          <option>HESTIA - Risque perte logement</option>
          <option>CVC</option>
          <option>HESTIA - Risque décès </option>
        </Form.Select>

        {typeCVCSelected?.includes("HESTIA - Risque perte logement") && (
          <IndicateursFormHestiaPerteLogement />
        )}
        {typeCVCSelected?.includes("CVC") && <IndicateursFormCVC />}
        {typeCVCSelected?.includes("HESTIA - Risque décès") && (
          <IndicateursFormHestiaRisqueDeces />
        )}
      </div>
    </>
  );
}

export default AddIndicateursByReport;
