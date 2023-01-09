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
function EditIndicateursByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [options, setOptions] = useState([
    { id: 0, label: "HESTIA - Risque perte logement" },
    { id: 1, label: "CVC" },
    { id: 2, label: "HESTIA - Risque décès" },
  ]);
  const [indicateursEstLeLogement, setIndicateursLogement] = useState();

  const [isIndicateurs, setIndicateurs] = useState();
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
    setTypeCVCSelected("CVC");
  };
  function onChangeIndicators() {
    props.onChangeIndicators(true);
    setShow(false);
  }

  return (
    <>
      <Button onClick={handleShow}>
        {" "}
        <FontAwesomeIcon icon={faEdit} />
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
              {/* Type: {isIndicateurs} */}
            </Form.Label>
            {/* {isIndicateurs} */}
            {/* <Form.Select
              size="lg"
              value={isIndicateurs}
              className="uk-select"
              onChange={(e) => setIndicateurs(e.target.value)}
            >
              <option>Sélectionnez le type d'indicateurs</option>
              {options?.map((el, id) => (
                <>{el && <option value={el.id}>{el.label}</option>}</>
              ))}
            </Form.Select> */}

            {props.rapportIndicators.id === 2 && (
              <IndicateursFormHestiaPerteLogement
                // id={props.id}
                isEdit={true}
                editForm={props?.indicatorsItem}
                report={props.report}
                onChangeIndicators={onChangeIndicators}
              />
            )}

            {props.rapportIndicators.id === 1 && (
              <IndicateursFormCVC
                report={props.report}
                isEdit={true}
                onChangeIndicators={onChangeIndicators}
                // id={props.id}
                editForm={props?.indicatorsItem}
                // onChange={onChangeIndicateursFormCVC}
                // followupReportsIndicators={props.form}
                // form={props.form}
              />
            )}

            {props.rapportIndicators.id === 3 && (
              <IndicateursFormHestiaRisqueDeces
                report={props.report}
                // id={props.id}
                isEdit={true}
                // form={props.form}
                editForm={props?.indicatorsItem}
                onChangeIndicators={onChangeIndicators}
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditIndicateursByReport;
