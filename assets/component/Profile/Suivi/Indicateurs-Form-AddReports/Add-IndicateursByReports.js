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
  const [CSVAlreadyAsked, setAlreadyAsked] = useState(
    props.form.indicateursFormCVC
  );

  const [
    indicateursFormHestiaRisqueDeces,
    setIndicateursFormHestiaRisqueDeces,
  ] = useState(null);
  const [indicateursFormCVC, setIndicateursFormCVC] = useState(
    props?.form?.indicateursFormCVC ? props?.form?.indicateursFormCVC : null
  );

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
    if (e.target.value) {
      setTypeCVCSelected(e.target.value);
    } else {
      setTypeCVCSelected(null);
    }
  }

  const onChangeIndicateursEstiaLogement = (e) => {
    setIndicateursLogement(e);
    setIndicateursFormHestiaRisqueDeces(null);
    setIndicateursFormCVC(null);
  };

  const onChangeIndicateursFormHestiaRisqueDeces = (e) => {
    setIndicateursFormHestiaRisqueDeces(e);
    setIndicateursFormCVC(null);
    setIndicateursLogement(null);
  };

  const onChangeIndicateursFormCVC = (e) => {
    if (CSVAlreadyAsked && CSVAlreadyAsked.length > 0) {
      setIndicateursFormCVC(CSVAlreadyAsked);
      setTypeCVCSelected("CVC");

      //
    } else {
      setIndicateursFormCVC(e);
    }

    setIndicateursLogement(null);
    setIndicateursFormHestiaRisqueDeces(null);
  };

  //   selectedOptionType: typeCVCSelected ? typeCVCSelected : null,
  //   id: props.id,
  //   indicateursEstLeLogement: indicateursEstLeLogement,
  //   indicateursFormHestiaRisqueDeces: indicateursFormHestiaRisqueDeces,
  //   indicateursFormCVC: indicateursFormCVC,
  // });
  //
  props.onChange([
    {
      selectedOptionType: typeCVCSelected ? typeCVCSelected : null,
      type: typeCVCSelected ? typeCVCSelected : null,
      id: props.id,
      indicateursEstLeLogement: indicateursEstLeLogement
        ? indicateursEstLeLogement
        : null,
      indicateursFormHestiaRisqueDeces: indicateursFormHestiaRisqueDeces
        ? indicateursFormHestiaRisqueDeces
        : null,
      indicateursFormCVC: indicateursFormCVC ? indicateursFormCVC : null,
    },
  ]);
  //
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type {typeCVCSelected}</Form.Label>

        {typeCVCSelected === null && (
          <Form.Select
            size="lg"
            value={typeCVCSelected}
            // disabled={(typeCVCSelected ) ? true : false}
            onChange={(e) => choiceTypeCVC(e)}
          >
            <option>Sélectionnez le type d'indicateurs</option>
            {props.options?.map((el, id) => (
              <>
                {el && (
                  <option
                    selected={
                      props.form.type === el ||
                      props.form.selectedOptionType === el
                    }
                    value={el}
                  >
                    {el}
                  </option>
                )}
              </>
            ))}
          </Form.Select>
        )}

        {typeCVCSelected?.includes("HESTIA - Risque perte logement") && (
          <IndicateursFormHestiaPerteLogement
            id={props.id}
            form={props.form}
            onChange={onChangeIndicateursEstiaLogement}
          />
        )}
        {/* {typeCVCSelected?.includes("CVC").toString()} */}
        {(typeCVCSelected?.includes("CVC") ||
          (indicateursFormCVC && indicateursFormCVC.length > 0)) && (
          <IndicateursFormCVC
            id={props.id}
            editForm={props?.form?.indicateursFormCVC}
            onChange={onChangeIndicateursFormCVC}
            followupReportsIndicators={props.form}
            form={props.form}
          />
        )}
        {typeCVCSelected?.includes("HESTIA - Risque décès") && (
          <IndicateursFormHestiaRisqueDeces
            id={props.id}
            form={props.form}
            onChange={onChangeIndicateursFormHestiaRisqueDeces}
          />
        )}
      </div>
    </>
  );
}

export default AddIndicateursByReport;
