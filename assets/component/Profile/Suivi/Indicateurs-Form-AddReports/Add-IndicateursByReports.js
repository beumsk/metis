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
  const [indicateursEstLeLogement, setIndicateursLogement] = useState(
    props?.form?.indicateursEstLeLogement
      ? props?.form?.indicateursEstLeLogement
      : null
  );

  const [idPatient, setIdPatient] = useState(id);
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);
  const [CSVAlreadyAsked, setAlreadyAsked] = useState(
    props.form.indicateursFormCVC
  );

  const [isIndicateursLogement, setIsIndicateursLogement] = useState(false);
  const [isIndicateursHestiaRisqueDeces, setIsIndicateursHestiaRisqueDeces] =
    useState(false);
  const [isIndicateursFormCVC, setIsIndicateursFormCVC] = useState(false);

  const [
    indicateursFormHestiaRisqueDeces,
    setIndicateursFormHestiaRisqueDeces,
  ] = useState(
    props?.form?.indicateursFormHestiaRisqueDeces
      ? props?.form?.indicateursFormHestiaRisqueDeces
      : null
  );
  const [indicateursFormCVC, setIndicateursFormCVC] = useState(
    props?.form?.indicateursFormCVC ? props?.form?.indicateursFormCVC : null
  );

  let obj = {};

  useEffect(() => {
    setIndicateursLogement(indicateursEstLeLogement);
    setIndicateursFormHestiaRisqueDeces(indicateursFormHestiaRisqueDeces);
    setIndicateursFormCVC(indicateursFormCVC);
    if (
      props?.form &&
      props?.form?.indicateursFormHestiaRisqueDeces &&
      props?.form?.indicateursFormHestiaRisqueDeces.length > 0
    ) {
      setIsIndicateursHestiaRisqueDeces(true);
    }

    if (
      props?.form &&
      props?.form?.indicateursEstLeLogement &&
      props?.form?.indicateursEstLeLogement.length > 0
    ) {
      setIsIndicateursLogement(true);
    }

    if (
      props?.form &&
      props?.form?.indicateursFormCVC &&
      props?.form?.indicateursFormCVC.length > 0
    ) {
      setIsIndicateursFormCVC(true);
    }
  }, [
    indicateursEstLeLogement,
    indicateursFormHestiaRisqueDeces,
    indicateursFormCVC,
  ]);

  function choiceTypeCVC(e) {
    if (e.target.value) {
      setTypeCVCSelected(e.target.value);
    }
    if (
      e.target.value === "HESTIA - Risque décès" ||
      (props?.form &&
        props?.form?.indicateursFormHestiaRisqueDeces &&
        props?.form?.indicateursFormHestiaRisqueDeces.length > 0)
    ) {
      setIsIndicateursHestiaRisqueDeces(true);
    }

    if (
      e.target.value === "HESTIA - Risque perte logement" ||
      (props?.form &&
        props?.form?.indicateursEstLeLogement &&
        props?.form?.indicateursEstLeLogement.length > 0)
    ) {
      setIsIndicateursLogement(true);
    }

    if (
      e.target.value === "CVC" ||
      (props?.form &&
        props?.form?.indicateursFormCVC &&
        props?.form?.indicateursFormCVC.length > 0)
    ) {
      setIsIndicateursFormCVC(true);
    }
    // if (!typeCVCSelected) {
    //   console.log(typeCVCSelected.includes("CVC"));
    // }
    // if (props.form.indicateursEstLeLogement.length > 0) {
    //   setTypeCVCSelected("HESTIA - Risque perte logement");
    // }
    // if (props.form.indicateursFormCVC.length > 0) {
    //   setTypeCVCSelected("CVC");
    // }
    // if (props.form.indicateursFormHestiaRisqueDeces.length > 0) {
    //   setTypeCVCSelected("HESTIA - Risque décès");
    // }
  }

  const onChangeIndicateursEstiaLogement = (indicateursEstLeLogement) => {
    setIndicateursLogement(indicateursEstLeLogement);
    setTypeCVCSelected("HESTIA - Risque perte logement");
    // setIndicateursFormHestiaRisqueDeces(indicateursFormHestiaRisqueDeces);
    // setIndicateursFormCVC(indicateursFormCVC);
  };

  const onChangeIndicateursFormHestiaRisqueDeces = (
    indicateursFormHestiaRisqueDeces
  ) => {
    setIndicateursFormHestiaRisqueDeces(indicateursFormHestiaRisqueDeces);
    // setIndicateursFormCVC(indicateursFormCVC);
    // setIndicateursLogement(indicateursEstLeLogement);
    setTypeCVCSelected("HESTIA - Risque décès");
  };

  const onChangeIndicateursFormCVC = (indicateursFormCVC) => {
    console.log(indicateursFormCVC);
    setIndicateursFormCVC(indicateursFormCVC);
    // setIndicateursLogement(indicateursEstLeLogement);
    // setIndicateursFormHestiaRisqueDeces(indicateursFormHestiaRisqueDeces);
    setTypeCVCSelected("CVC");
    // if (CSVAlreadyAsked && CSVAlreadyAsked.length > 0) {
    //   setIndicateursFormCVC(CSVAlreadyAsked);
    //   setTypeCVCSelected("CVC");

    //   //
    // } else {
    //   setIndicateursFormCVC(e);
    // }

    // setIndicateursLogement(null);
    // setIndicateursFormHestiaRisqueDeces(null);
  };

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
      indicateursFormCVC:
        indicateursFormCVC && indicateursFormCVC.length > 0
          ? indicateursFormCVC
          : null,
    },
  ]);
  console.log(
    isIndicateursLogement,
    isIndicateursHestiaRisqueDeces,
    isIndicateursFormCVC
  );
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
                    // selected={
                    //   props.form.indicateursEstLeLogement.length > 0 ||
                    //   props.form.indicateursFormCVC.length > 0 ||
                    //   props.form.indicateursFormHestiaRisqueDeces.length > 0
                    // }
                    value={el}
                  >
                    {el}
                  </option>
                )}
              </>
            ))}
          </Form.Select>
        )}

        {typeCVCSelected}
        {isIndicateursLogement && (
          <IndicateursFormHestiaPerteLogement
            id={props.id}
            form={props.form}
            editForm={props?.form?.indicateursEstLeLogement}
            onChange={onChangeIndicateursEstiaLogement}
          />
        )}

        {isIndicateursFormCVC && (
          <IndicateursFormCVC
            id={props.id}
            editForm={props?.form?.inqdicateursFormCVC}
            onChange={onChangeIndicateursFormCVC}
            followupReportsIndicators={props.form}
            form={props.form}
          />
        )}

        {isIndicateursHestiaRisqueDeces && (
          <IndicateursFormHestiaRisqueDeces
            id={props.id}
            form={props.form}
            editForm={props?.form?.indicateursFormHestiaRisqueDeces}
            onChange={onChangeIndicateursFormHestiaRisqueDeces}
          />
        )}
      </div>
    </>
  );
}

export default AddIndicateursByReport;
