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

  // const [options, setOptions] = useState([
  //   "Sélectionnez le type d'indicateurs",
  //   "HESTIA - Risque perte logement",
  //   "CVC",
  //   "HESTIA - Risque décès",
  // ]);
  const [indicateursEstLeLogement, setIndicateursLogement] = useState(null);

  const [idPatient, setIdPatient] = useState(id);
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);

  const [
    indicateursFormHestiaRisqueDeces,
    setIndicateursFormHestiaRisqueDeces,
  ] = useState(null);
  const [indicateursFormCVC, setIndicateursFormCVC] = useState(null);

  let obj = {};

  useEffect(() => {
    setIndicateursLogement(indicateursEstLeLogement);
    setIndicateursFormHestiaRisqueDeces(indicateursFormHestiaRisqueDeces);
    setIndicateursFormCVC(indicateursFormCVC);
  }, [
    indicateursEstLeLogement,
    indicateursFormHestiaRisqueDeces,
    indicateursFormCVC,
  ]);

  function choiceTypeCVC(e) {
    setTypeCVCSelected(e.target.value);
  }

  const onChangeIndicateursEstiaLogement = (e) => {
    setIndicateursLogement(e);
  };

  const onChangeIndicateursFormHestiaRisqueDeces = (e) => {
    setIndicateursFormHestiaRisqueDeces(e);
  };

  const onChangeIndicateursFormCVC = (e) => {
    setIndicateursFormCVC(e);
  };
  console.log({
    id: props.id,
    indicateursEstLeLogement: indicateursEstLeLogement,
    indicateursFormHestiaRisqueDeces: indicateursFormHestiaRisqueDeces,
    indicateursFormCVC: indicateursFormCVC,
  });
  props.onChange([
    {
      id: props.id,
      indicateursEstLeLogement: indicateursEstLeLogement,
      indicateursFormHestiaRisqueDeces: indicateursFormHestiaRisqueDeces,
      indicateursFormCVC: indicateursFormCVC,
    },
  ]);
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type {props.form.type}</Form.Label>

        <Form.Select
          size="lg"
          value={typeCVCSelected}
          onChange={(e) => choiceTypeCVC(e)}
        >
          {props.options?.map((el, id) => (
            <>
              {el && (
                <option selected={props.form.type === el} value={el}>
                  {el}
                </option>
              )}
            </>
          ))}
        </Form.Select>

        {typeCVCSelected?.includes("HESTIA - Risque perte logement") && (
          <IndicateursFormHestiaPerteLogement
            id={props.id}
            onChange={onChangeIndicateursEstiaLogement}
          />
        )}
        {typeCVCSelected?.includes("CVC") && (
          <IndicateursFormCVC
            id={props.id}
            onChange={onChangeIndicateursFormCVC}
          />
        )}
        {typeCVCSelected?.includes("HESTIA - Risque décès") && (
          <IndicateursFormHestiaRisqueDeces
            id={props.id}
            onChange={onChangeIndicateursFormHestiaRisqueDeces}
          />
        )}
      </div>
    </>
  );
}

export default AddIndicateursByReport;
