import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
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
    props.lieu.comment ? props.lieu.comment : null
  );
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
  const handleInputChange = (e) => {
    //new Date(start).toJSON().slice(0, 10)
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
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
            setResponseDatas(response);
            setIsSentRepport(true);
            document.querySelectorAll(".btn-close")[0].click();
          })
          .catch(function (response) {});
        // document.querySelectorAll(".btn-close")[0].click();
        // location.replace(window.location.origin + "/" + idPatient);
      }
    });
  }

  if (responseDatas !== null) {
    props.onChangeEditPlaces(responseDatas);
  }

  //   /api/getContacts
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Modifier le lieu
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
              className="mb-4"
              defaultValue={props?.lieu?.cont?.id}
              onChange={(e) => setValueLieux(e.target.value)}
            >
              {props?.lieuxList?.data?.map((el, id) => (
                <>
                  {el?.lastname && (
                    <option value={el.id}>{el?.lastname}</option>
                  )}
                </>
              ))}
            </Form.Select>

            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <Form.Select
              size="lg"
              className="mb-4"
              defaultValue={props?.lieu?.sugg?.id}
              onChange={(e) => setValueType(e.target.value)}
            >
              {props?.type?.data?.map((el, id) => (
                <>{el?.value && <option value={el.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              onChange={handleInputChange}
              defaultValue={new Date(props?.lieu?.start)
                .toISOString()
                .substring(0, 10)}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              defaultValue={new Date(props?.lieu?.end)
                .toISOString()
                .substring(0, 10)}
              onChange={handleInputChange}
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={props?.lieu?.comment}
              onChange={(e) => setValueCommentary(e.target.value)}
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalLierLieux;
