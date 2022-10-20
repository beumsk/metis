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

  const [idPatient, setIdPatient] = useState(id);
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);

  useEffect(() => {}, []);

  // if (props.formIndicateurs.length > 1 && props.formIndicateurs.length < 4) {
  //   let opts = options.filter((el) => el === typeCVCSelected);
  //   console.log(opts);
  //   options.splice(opts, 1);
  //   setOptions(options);
  // }
  // if (
  //   !props.formIndicateurs &&
  //   props.formIndicateurs.length > 0 &&
  //   props.formIndicateurs.length < 2
  // ) {
  //   let opts = options.filter((el) => el === typeCVCSelected);
  //   console.log(opts);
  //   options.splice(opts, 1);
  //   setOptions(options);
  // }

  const choiceTypeCVC = (e) => {
    console.log(e.target.value);
    setTypeCVCSelected(e.target.value);
  };

  const onChangeIndicateursEstiaLogement = (e) => {
    console.log(e);
  };

  const onChangeIndicateursFormHestiaRisqueDeces = (e) => {
    console.log(e);
  };

  const onChangeIndicateursFormCVC = (e) => {
    console.log(e);
  };

  props.onChange([
    {
      selectedOptionType: typeCVCSelected,
      id: props.id,
    },
  ]);

  console.log(props.form);
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type {props.form.type}</Form.Label>
        {props.form.type === null && (
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
        )}

        {typeCVCSelected?.includes("HESTIA - Risque perte logement") && (
          <IndicateursFormHestiaPerteLogement
            onChange={(e) => onChangeIndicateursEstiaLogement(e)}
          />
        )}
        {typeCVCSelected?.includes("CVC") && (
          <IndicateursFormCVC onChange={(e) => onChangeIndicateursFormCVC(e)} />
        )}
        {typeCVCSelected?.includes("HESTIA - Risque décès") && (
          <IndicateursFormHestiaRisqueDeces
            onChange={(e) => onChangeIndicateursFormHestiaRisqueDeces(e)}
          />
        )}
      </div>
    </>
  );
}

export default AddIndicateursByReport;
