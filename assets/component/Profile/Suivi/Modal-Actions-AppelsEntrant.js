import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import EditorReport from "./Editor-Calls";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TimePicker from "react-time-picker";
function ModalActionsAppelsEntrant(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  const [contactsSelected, setContactsSelected] = useState(null);
  const [goalsSelected, setGoalsSelected] = useState(null);
  const [optionsAppel, setOptionsAppel] = useState([]);
  const [optionsContacts, setOptionsContacts] = useState([]);
  const [content, setContent] = useState(null);
  const [changeDate, setChangeDate] = useState(new Date());
  const [dureeValue, setDureeValue] = useState("00:00");
  const animatedComponents = makeAnimated();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let optionsAppel = [];
  // let optionsContacts = [];

  // useEffect(() => {
  // axios({
  //   method: "post",
  //   url: "/api/suggestionsById",
  //   data: formData,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${auth.auth.accessToken}`,
  //   },
  // })
  //   .then(function (response) {
  //
  //     setFunction(response.data);
  //   })
  //   .catch(function (response) {});
  // if (props?.listCalls && props?.listCalls?.length > 0) {
  //   for (let index = 0; index < props?.listCalls?.length; index++) {
  //     const element = props.listCalls[index];
  //     optionsAppel.push({ value: element.id, label: element.description });
  //     setOptionsAppel(optionsAppel);
  //   }
  // }
  // if (props?.listContacts && props?.listContacts?.length > 0) {
  //   for (let index = 0; index < props?.listContacts?.length; index++) {
  //     const element = props.listContacts[index];
  //     optionsContacts.push({ value: element.id, label: element.description });
  //
  //     setOptionsContacts(optionsContacts);
  //   }
  // }
  // }, []);

  const onChangeTagsAppels = (e) => {
    // options.filter(e => e.value);
    let optionsValues = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index];
      optionsValues.push(element.value);
    }
    setGoalsSelected(optionsValues);

    // e.filter((f) => [f.value]);
    // props.onChangeFunction(optionsValues);
    //
    //
  };

  const onChangeTagsContacts = (e) => {
    // options.filter(e => e.value);
    let optionsValues = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index];
      optionsValues.push(element.value);
    }

    setContactsSelected(optionsValues);
    // e.filter((f) => [f.value]);
    // props.onChangeFunction(optionsValues);
    //
    //
  };

  function onChangeEditor(e) {
    setContent(e);
  }

  const handleSaveComplete = (e) => {
    let formGetInfos = new FormData();
    let date = new Date(0);
    date.setHours((dureeValue || "00:00").substring(0, 2)); // "01" of "01:30"
    date.setMinutes((dureeValue || "00:00").substring(3, 5)); // "30" of "01:30"
    let timeString = date.toLocaleString("fr-BE").substring(11, 19);

    let dateString = new Date(changeDate).toJSON().slice(0, 10);

    formGetInfos.append("content", content);
    formGetInfos.append("goals", JSON.stringify(goalsSelected));
    formGetInfos.append("contacts", JSON.stringify(contactsSelected));
    formGetInfos.append("changeDate", dateString);
    formGetInfos.append("dureeValue", timeString);
    formGetInfos.append("patientId", id);
    formGetInfos.append("userId", auth.auth.idUser);
    formGetInfos.append("activity_type", 4);
    formGetInfos.append("is_completed", 3);

    axios({
      method: "post",
      url: "/api/setCallsByContactsForFollowUpReports",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      var formDataGetGoals = new FormData();
      formDataGetGoals.append("id", id.toString());
      axios({
        method: "post",
        url: "/api/getFollowUpReportsGoals",
        data: formDataGetGoals,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          props.onChangeResponse(response);
        })
        .catch(function (response) {});
      document.querySelectorAll(".btn-close")[0].click();
      setShow(false);
    });
  };

  // const handleSaveKeep = (e) => {
  //   let formGetInfos = new FormData();
  //   let date = new Date(0);
  //   date.setMinutes(dureeValue); // specify value for SECONDS here
  //   let timeString = date.toISOString().substring(11, 19);

  //   formGetInfos.append("content", content);
  //   formGetInfos.append("goals", JSON.stringify(goalsSelected));
  //   formGetInfos.append("contacts", JSON.stringify(contactsSelected));
  //   formGetInfos.append("dureeValue", timeString);
  //   formGetInfos.append("patientId", props.defaultValueGoalsValue.pati_id);

  //   formGetInfos.append("userId", auth.auth.idUser);
  //   formGetInfos.append("activity_type", 2);
  //   formGetInfos.append("is_completed", 0);
  //   axios({
  //     method: "post",
  //     url: "/api/setCallsByContacts",
  //     data: formGetInfos,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${auth.auth.accessToken}`,
  //     },
  //   }).then(function (response) {
  //     props.onChangeResponse(response.data);
  //     setShow(false);
  //   });
  // };

  return (
    <>
      <button onClick={handleShow} className="btn-metis">
        <FontAwesomeIcon icon={faLongArrowLeft} /> Appel entrant
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un appel entrant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                htmlFor="inputValueSpécifique"
                className="uk-form-label"
              >
                Date de la rencontre
              </Form.Label>
              <Form.Control
                type="date"
                defaultValue={new Date().toJSON().slice(0, 10)}
                onChange={(e) => setChangeDate(e.target.value)}
                className="uk-select"
                id="inputValueSpécifique"
              />

              <Form.Label>Durée</Form.Label>
              <TimePicker
                className="input-duration"
                onChange={(e) => setDureeValue(e)}
                clockIcon={false}
                disableClock={false}
                locale={"fr-FR"}
              />

              <Form.Label>Contacts</Form.Label>
              <div className="editor">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsContacts(e)}
                  isMulti
                  styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
                  options={props?.contacts?.data}
                />
              </div>

              <Form.Label>Objectifs</Form.Label>
              <div className="editor">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsAppels(e)}
                  isMulti
                  styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
                  options={props?.listCalls?.data}
                />
              </div>

              <Form.Label>Description</Form.Label>
              <div className="editor">
                <EditorReport onChange={onChangeEditor}></EditorReport>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleSaveKeep}>
            Sauver et garder
          </Button> */}
          <Button onClick={handleSaveComplete} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalActionsAppelsEntrant;
