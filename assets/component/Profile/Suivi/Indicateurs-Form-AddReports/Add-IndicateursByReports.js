import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faPlus,
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [options, setOptions] = useState([
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [indicateursEstLeLogement, setIndicateursLogement] = useState(
    props?.form?.indicateursEstLeLogement
      ? props?.form?.indicateursEstLeLogement
      : null
  );

  const [idPatient, setIdPatient] = useState(id);
  const [typeCVCSelected, setTypeCVCSelected] = useState(null);
  const [CSVAlreadyAsked, setAlreadyAsked] = useState();

  const [isIndicateursLogement, setIsIndicateursLogement] = useState(false);
  const [isIndicateursHestiaRisqueDeces, setIsIndicateursHestiaRisqueDeces] =
    useState(false);
  const [isIndicateursFormCVC, setIsIndicateursFormCVC] = useState(false);

  const [
    indicateursFormHestiaRisqueDeces,
    setIndicateursFormHestiaRisqueDeces,
  ] = useState();
  const [indicateursFormCVC, setIndicateursFormCVC] = useState();

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

  function choiceTypeCVC(e) {}

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

  return (
    <>
      <Button onClick={handleShow}>
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter un indicateurs</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addSoins-form">
            <Form.Label htmlFor="inputValue" className="uk-form-label">
              Type: {typeCVCSelected}
            </Form.Label>
            {typeCVCSelected === null && (
              <Form.Select
                size="lg"
                value={typeCVCSelected}
                className="uk-select"
                onChange={(e) => choiceTypeCVC(e)}
              >
                <option>Sélectionnez le type d'indicateurs</option>
                {options?.map((el, id) => (
                  <>{el && <option value={el}>{el}</option>}</>
                ))}
              </Form.Select>
            )}

            {isIndicateursLogement && (
              <IndicateursFormHestiaPerteLogement
                // id={props.id}

                onChange={onChangeIndicateursEstiaLogement}
              />
            )}

            {isIndicateursFormCVC && (
              <IndicateursFormCVC
              // id={props.id}
              // editForm={props?.form?.indicateursFormCVC}
              // onChange={onChangeIndicateursFormCVC}
              // followupReportsIndicators={props.form}
              // form={props.form}
              />
            )}

            {isIndicateursHestiaRisqueDeces && (
              <IndicateursFormHestiaRisqueDeces
              // id={props.id}
              // form={props.form}
              // editForm={props?.form?.indicateursFormHestiaRisqueDeces}
              // onChange={onChangeIndicateursFormHestiaRisqueDeces}
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddIndicateursByReport;
