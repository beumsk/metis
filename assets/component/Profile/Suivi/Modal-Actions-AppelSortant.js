import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import EditorReport from "./Editor-Calls";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
function ModalActionsAppelsSortant(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  const [contactsSelected, setContactsSelected] = useState(null);
  const [goalsSelected, setGoalsSelected] = useState(null);
  const [content, setContent] = useState(null);
  const [dureeValue, setDureeValue] = useState(null);
  const animatedComponents = makeAnimated();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let optionsAppel = [];
  let optionsContacts = [];

  useEffect(() => {
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
    //     console.log(response);
    //     setFunction(response.data);
    //   })
    //   .catch(function (response) {});
    // for (let index = 0; index < props?.listCalls?.length; index++) {
    //   const element = props.listCalls[index];
    //   optionsAppel.push({ value: element.id, label: element.description });
    // }
    // for (let index = 0; index < props?.listContacts?.length; index++) {
    //   const element = props.listContacts[index];
    //   optionsContacts.push({ value: element.id, label: element.description });
    // }
  }, []);

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
    // console.log(optionsValues);
    // console.log(e);
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
    // console.log(optionsValues);
    // console.log(e);
  };

  function onChangeEditor(e) {
    console.log(e);
    setContent(e);
  }
  const handleSaveComplete = (e) => {
    console.log("content", content);
    console.log("goalsSelected", JSON.stringify(goalsSelected));
    console.log("contactsSelected", JSON.stringify(contactsSelected));
    console.log("dureeValue", dureeValue);
    console.log("patiId", id);
    console.log(props);
    let formGetInfos = new FormData();
    let date = new Date(0);
    date.setMinutes(dureeValue); // specify value for SECONDS here
    let timeString = date.toISOString().substring(11, 19);
    console.log(timeString);

    formGetInfos.append("content", content);
    formGetInfos.append("goals", JSON.stringify(goalsSelected));
    formGetInfos.append("contacts", JSON.stringify(contactsSelected));
    formGetInfos.append("dureeValue", timeString);
    formGetInfos.append("patientId", id);
    formGetInfos.append("activity_type", 3);
    formGetInfos.append("is_completed", 3);

    formGetInfos.append("userId", auth.auth.idUser);
    axios({
      method: "post",
      url: "/api/setCallsByContacts",
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
  console.log(props);
  return (
    <>
      <button variant="primary" onClick={handleShow} className="btn-metis">
        Ajouter appel sortant
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter appel sortant</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>

              <div className="editor" style={{ "z-index": -1 }}>
                <EditorReport onChange={onChangeEditor}></EditorReport>
              </div>

              <Form.Label>Durée</Form.Label>
              <select
                className="uk-select"
                onChange={(e) => setDureeValue(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
              </select>

              <Form.Label>Contacts</Form.Label>
              <div className="editor" style={{ "z-index": 555555 }}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsContacts(e)}
                  isMulti
                  options={props?.contacts?.data}
                />
              </div>

              <Form.Label>Objectifs</Form.Label>
              <div className="editor" style={{ "z-index": 555555 }}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsAppels(e)}
                  isMulti
                  options={props?.listCalls?.data}
                />
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
          <Button variant="primary" onClick={handleSaveComplete}>
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalActionsAppelsSortant;
