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
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
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
        var formGetInfos = new FormData();
        formGetInfos.append("id", id.toString());
        axios({
          method: "post",
          url: "/api/getPatientsByPatients",
          data: formGetInfos,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            console.log(response);
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
    props.onChangePatientsPatients({
      data: responseDatas,
    });
  }

  if (props.infos) {
    // console.log(props.infos);
  }

  const handleInputChange = (e) => {
    //new Date(start).toJSON().slice(0, 10)
    setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
    setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
  };
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Lier un patient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Select
              size="lg"
              defaultValue={props?.infos?.orpa?.id}
              onChange={(e) => setPatientItemList(e.target.value)}
            >
              {props.listPatients?.data?.map((el, id) => (
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
              onChange={(e) => setTypeItemList(e.target.value)}
              defaultValue={props?.infos?.sugg?.id}
            >
              {type?.data?.map((el, id) => (
                <>{el.value && <option>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={props?.infos?.linkDescription}
              id="inputValueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
              aria-describedby="valueSpécifique"
            />

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              onChange={handleInputChange}
              defaultValue={new Date(props?.infos?.start)
                .toISOString()
                .substring(0, 10)}
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              id="inputValueSpécifique"
              onChange={handleInputChange}
              defaultValue={new Date(props?.infos?.end)
                .toISOString()
                .substring(0, 10)}
              aria-describedby="valueSpécifique"
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

export default ModalLierPatient;
