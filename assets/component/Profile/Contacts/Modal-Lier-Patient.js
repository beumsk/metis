import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function ModalEditPatient(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [responseDatas, setResponseDatas] = useState(null);
  const [description, setDescription] = useState(null);
  const [commentaire, setCommentaire] = useState(null);
  const [patientItemList, setPatientItemList] = useState(null);
  const [start, setStartDate] = useState(null);
  const [end, setEndDate] = useState(null);
  const [typeItemList, setTypeItemList] = useState();
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

  const handleSave = () => {
    let formData = new FormData();
    // value-sugg

    formData.append("description", description);
    formData.append("commentaire", commentaire);
    formData.append("patientItemList", patientItemList);
    formData.append("start", start);
    formData.append("end", end);
    formData.append("typeItemList", typeItemList);
    formData.append("idPatient", idPatient);
    axios({
      method: "post",
      url: "/api/setPatientPatient",
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
            if (response) {
              props.onChangeUpdatePatient(true);
              setShow(false);
              // setIsSentRepport(true);
            }
          })
          .catch(function (response) {});
      }
    });
  };

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Lier un patient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lier un patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Select
              size="lg"
              className="uk-select"
              onChange={(e) => setPatientItemList(e.target.value)}
            >
              <option value="">Choisir patient</option>
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
            >
              <option value="">Choisir type</option>
              {props?.type?.data?.map((el, id) => (
                <>{el.value && <option value={el.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              type="textarea"
              className="uk-input"
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
              id="inputValueSpécifique"
              className="uk-select"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              className="uk-select"
              id="inputValueSpécifique"
              onChange={(e) =>
                setEndDate(new Date(e.target.value).toJSON().slice(0, 10))
              }
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Commentaire</Form.Label>
            <Form.Control as="textarea" rows={3} className="uk-input" />
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

export default ModalEditPatient;
