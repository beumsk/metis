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

function ModalLierPatient(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [idPatient, setIdPatient] = useState(id);
  const [responseDatas, setResponseDatas] = useState(null);
  const [description, setDescription] = useState(
    props?.infos?.linkDescription ? props?.infos?.linkDescription : null
  );
  const [commentaire, setCommentaire] = useState(null);
  const [patientItemList, setPatientItemList] = useState(
    props?.infos?.orpa?.id ? props?.infos?.orpa?.id : null
  );
  const [start, setStartDate] = useState(
    props?.infos?.start ? props?.infos?.start : null
  );
  const [end, setEndDate] = useState(
    props?.infos?.end ? props?.infos?.end : null
  );
  const [typeItemList, setTypeItemList] = useState(
    props?.infos?.sugg?.id ? props?.infos?.sugg?.id : null
  );
  const [type, setType] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave() {
    let formData = new FormData();
    // value-sugg

    formData.append("description", description);
    formData.append("commentaire", commentaire);
    formData.append("patientItemList", patientItemList);
    formData.append("start", start);
    formData.append("end", end);
    formData.append("typeItemList", typeItemList);
    formData.append("idPatient", idPatient);
    formData.append("Idinfos", props?.infos.id);
    axios({
      method: "post",
      url: "/api/updatePatientPatient",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      if (response) {
        let resFormData = new FormData();
        resFormData.append("antenna", localStorage.getItem("antenna"));
        resFormData.append("id", idPatient);
        axios({
          method: "post",
          url: "/api/getPatientsByPatients",
          data: resFormData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            setResponseDatas(response.data);
            setIsSentRepport(true);
          })
          .catch(function (response) {});
        setShow(false);
        // document.querySelectorAll(".btn-close")[0].click();
        // location.replace(window.location.origin + "/" + idPatient);
      }
    });
  }

  if (responseDatas !== null) {
    props.onChangeUpdatePatient(responseDatas);
  }

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Modifier une information</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Select
              className="uk-select"
              size="lg"
              defaultValue={props?.infos?.orpa?.id}
              onChange={(e) => setPatientItemList(e.target.value)}
            >
              {props?.contacts?.data?.map((el, id) => (
                <>
                  {el?.firstname && el?.lastname && (
                    <option value={el.id}>
                      {el?.firstname} {el?.lastname}
                    </option>
                  )}
                </>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <Form.Select
              size="lg"
              className="uk-select"
              onChange={(e) => setTypeItemList(e.target.value)}
              defaultValue={props?.infos?.sugg?.id}
            >
              {props?.type?.data?.map((el, id) => (
                <option value={el.id}>{el?.value}</option>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="uk-input"
              defaultValue={props?.infos?.linkDescription}
              id="inputValueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
              aria-describedby="valueSpécifique"
            />

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) =>
                setStartDate(new Date(e.target.value).toJSON().slice(0, 10))
              }
              defaultValue={
                props?.infos?.start === null
                  ? ""
                  : new Date(props?.infos?.start).toISOString().substring(0, 10)
              }
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
              className="uk-select"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              className="uk-select"
              onChange={(e) =>
                setEndDate(new Date(e.target.value).toJSON().slice(0, 10))
              }
              defaultValue={
                props?.infos?.end === null
                  ? ""
                  : new Date(props?.infos?.end).toISOString().substring(0, 10)
              }
              aria-describedby="valueSpécifique"
            />
          </>
        </Modal.Body>
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

export default ModalLierPatient;
