import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import moment from "moment";
import InputPlaceList from "../Suivi/Input-Place-List";
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
  const [valueLieux, setValueLieux] = useState(null);
  const [type, setType] = useState(null);

  const [valueType, setValueType] = useState(null);
  const [start, setStartDate] = useState(null);
  const [end, setEndDate] = useState(null);
  const [valueCommentary, setValueCommentary] = useState(null);
  const [errorValue, setErrorValue] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    formData.append("valueCommentary", valueCommentary);
    formData.append(
      "valueLieux",
      valueLieux && valueLieux.length > 0
        ? JSON.stringify(valueLieux[0].id)
        : null
    );
    formData.append("start", start);
    formData.append("end", end);
    formData.append("valueType", valueType);
    formData.append("idPatient", idPatient);

    if (valueLieux === null || valueLieux === "defaultValue") {
      setErrorValue(true);
    } else {
      setErrorValue(false);
    }

    if (valueLieux !== null && valueLieux !== "defaultValue") {
      axios({
        method: "post",
        url: "/api/setLierPlaces",
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
    props.onChangeLierPlaces(responseDatas);
  }

  function onChangePlaces(e) {
    setValueLieux(e);
  }
  //   /api/getContacts

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Lier un lieu
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <InputPlaceList
              onChange={onChangePlaces}
              // defaultValue={
              //   props?.informationPatient?.plac
              //     ? [
              //         {
              //           id: props?.informationPatient?.plac?.id,
              //           label: props?.informationPatient?.plac?.lastname,
              //         },
              //       ]
              //     : null
              // }
              data={props?.lieuxList?.data}
              id="single"
              multiple={false}
              label="Lieux"
            />
            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <Form.Select
              size="lg"
              style={{ width: "100%" }}
              className="uk-select"
              onChange={(e) => setValueType(e.target.value)}
            >
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
              onChange={(e) => setStartDate(e.target.value)}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              className="uk-select"
              onChange={(e) => setEndDate(e.target.value)}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="uk-textarea"
              onChange={(e) => setValueCommentary(e.target.value)}
            />
          </>
        </Modal.Body>
        {errorValue && <p>Lieux obligatoire</p>}
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
