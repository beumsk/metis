import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Form from "react-bootstrap/Form";
// import InputTypeList from "./Input-Type-List";

function ModalLierLieux(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 174);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [responseDatas, setResponseDatas] = useState(null);
  const [checkMiseEnAvant, setCheckMiseEnAvant] = useState(null);
  const [valueLieux, setValueLieux] = useState(
    props?.lieu?.cont?.id ? props?.lieu?.cont?.id : null
  );
  const [type, setType] = useState(null);
  const [valueType, setValueType] = useState(
    props?.lieu?.sugg?.id ? props?.lieu?.sugg?.id : null
  );
  const [start, setStartDate] = useState(
    props?.lieu?.start ? props?.lieu?.start : null
  );
  const [end, setEndDate] = useState(
    props?.lieu?.end ? props?.lieu?.end : null
  );
  const [valueCommentary, setValueCommentary] = useState(
    props?.lieu?.comment ? props?.lieu?.comment : ""
  );
  const handleClose = () => setShow(false);
  const [errorValue, setErrorValue] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const handleShow = () => {
    setShow(true);
    setErrorValue(false);
  };

  useEffect(() => {
    //   axios({
    //     method: "post",
    //     url: "/api/suggestionsById",
    //     data: formData,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${auth.auth.accessToken}`,
    //     },
    //   })
    //     .then(function (response) {
    //       setType(response);
    //     })
    //     .catch(function (response) {});
  }, [idPatient]);
  //
  const handleInputStartChange = (e) => {
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
  };
  const handleInputEndChange = (e) => {
    setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
  };

  function handleSave() {
    let formData = new FormData();
    // value-sugg
    formData.append("idLieu", props?.lieu?.id);
    formData.append("valueCommentary", valueCommentary);
    formData.append("valueLieux", valueLieux);
    formData.append("start", start);
    formData.append("end", end);

    formData.append("valueType", valueType);
    formData.append("idPatient", idPatient);
    formData.append("isHightLight", checkMiseEnAvant);

    if (valueLieux === null || valueLieux === "defaultValue") {
      setErrorValue(true);
    } else {
      setErrorValue(false);
    }

    if (valueType === null || valueType === "defaultValue") {
      setErrorType(true);
    } else {
      setErrorType(false);
    }
    console.log(
      valueLieux === null || valueLieux === "defaultValue",
      valueType === null || valueType === "defaultValue"
    );
    if (
      valueLieux !== null &&
      valueLieux !== "defaultValue" &&
      valueType !== null &&
      valueType !== "defaultValue"
    ) {
      axios({
        method: "post",
        url: "/api/updateLierPlaces",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      }).then(function (response) {
        if (response) {
          var formGetInfos = new FormData();
          formGetInfos.append("id", id.toString());
          axios({
            method: "post",
            url: "/api/getPlacesPatients",
            data: formGetInfos,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.auth.accessToken}`,
            },
          })
            .then(function (response) {
              handleClose();
              setResponseDatas(response);
              setIsSentRepport(true);
            })
            .catch(function (response) {});
          // document.querySelectorAll(".btn-close")[0].click();
          // location.replace(window.location.origin + "/" + idPatient);
        }
      });
    }
  }

  if (responseDatas !== null) {
    props.onChangeEditPlaces(responseDatas);
  }
  // console.log(props);
  //   /api/getContacts
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le lieu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {/* <InputContactList contacts={props?.contacts} /> */}
            <Form.Label htmlFor="inputValue">Lieu</Form.Label>
            <Form.Select
              size="lg"
              style={{ width: "100%" }}
              className="uk-select"
              defaultValue={props?.lieu?.cont?.id}
              onChange={(e) => setValueLieux(e.target.value)}
            >
              <option value={"defaultValue"}>Sélectionnez le lieu</option>
              {props?.lieuxList?.data?.map((el, id) => (
                <React.Fragment key={el.id}>
                  {el?.lastname && (
                    <option value={el.id}>{el?.lastname}</option>
                  )}
                </React.Fragment>
              ))}
            </Form.Select>

            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <Form.Select
              size="lg"
              style={{ width: "100%" }}
              className="uk-select"
              defaultValue={props?.lieu?.sugg?.id}
              onChange={(e) => setValueType(e.target.value)}
            >
              <option value={"defaultValue"}>
                Sélectionnez le détail du lieu
              </option>
              {props?.type?.data?.map((el, id) => (
                <React.Fragment key={el.id}>
                  {el?.value && <option value={el.id}>{el?.value}</option>}
                </React.Fragment>
              ))}
            </Form.Select>

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              className="uk-select"
              onChange={handleInputStartChange}
              defaultValue={moment(props?.lieu?.start)
                .utc("UTC+01:00")
                .format("YYYY-MM-DD")}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              className="uk-select"
              defaultValue={moment(props?.lieu?.end)
                .utc("UTC+01:00")
                .format("YYYY-MM-DD")}
              onChange={handleInputEndChange}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="uk-textarea"
              defaultValue={props?.lieu?.comment}
              onChange={(e) => setValueCommentary(e.target.value)}
            />

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Mise en avant"
                defaultChecked={props?.lieu?.isHightlight}
                onChange={(e) => setCheckMiseEnAvant(e.target.checked)}
              />
            </Form.Group>
          </>
        </Modal.Body>
        {errorValue && <p className="error-danger">Lieux obligatoire</p>}
        {errorType && <p className="error-danger">Type de lieu obligatoire</p>}
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalLierLieux;
