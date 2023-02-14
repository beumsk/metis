import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import EditorReport from "./Editor-Reports";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TimePicker from "react-time-picker";
function ModalActionsAppelsEntrant(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;
  const [contactsSelected, setContactsSelected] = useState(
    props?.defaultValueContact && props?.defaultValueContact?.id
      ? props?.defaultValueContact?.id
      : null
  );
  const [goalsSelected, setGoalsSelected] = useState(
    props?.defaultValueGoalsValue && props?.defaultValueGoalsValue?.id
      ? props?.defaultValueGoalsValue?.id
      : null
  );
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
    //
    //     setFunction(response.data);
    //   })
    //   .catch(function (response) {});
  }, []);

  for (let index = 0; index < props?.listCalls?.length; index++) {
    const element = props.listCalls[index];
    optionsAppel.push({ value: element.id, label: element.description });
  }

  for (let index = 0; index < props?.listContacts?.length; index++) {
    const element = props.listContacts[index];
    optionsContacts.push({ value: element.id, label: element.description });
  }
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

    formGetInfos.append("content", content);
    formGetInfos.append("goals", JSON.stringify(goalsSelected));
    formGetInfos.append("contacts", JSON.stringify(contactsSelected));
    formGetInfos.append("dureeValue", timeString);
    formGetInfos.append("patientId", props.defaultValueGoalsValue.pati_id);

    formGetInfos.append("userId", auth.auth.idUser);
    formGetInfos.append("activity_type", 4);
    formGetInfos.append("is_completed", 3);
    axios({
      method: "post",
      url: "/api/setCallsByContacts",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      // props.onChangeResponse(response.data);
      setShow(false);
    });
  };

  const handleSaveKeep = (e) => {
    let formGetInfos = new FormData();
    let date = new Date(0);
    date.setHours((dureeValue || "00:00").substring(0, 2)); // "01" of "01:30"
    date.setMinutes((dureeValue || "00:00").substring(3, 5)); // "30" of "01:30"
    let timeString = date.toISOString().substring(11, 19);

    formGetInfos.append("content", content);
    formGetInfos.append("goals", JSON.stringify(goalsSelected));
    formGetInfos.append("contacts", JSON.stringify(contactsSelected));
    formGetInfos.append("dureeValue", timeString);
    formGetInfos.append("patientId", props.defaultValueGoalsValue.pati_id);

    formGetInfos.append("userId", auth.auth.idUser);
    formGetInfos.append("activity_type", 4);
    formGetInfos.append("is_completed", 0);
    axios({
      method: "post",
      url: "/api/setCallsByContacts",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      props.onChangeResponse(response.data);
      setShow(false);
    });
  };

  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Ajouter appel entrant
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un rapport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Appel Entrant</Form.Label>
              <div className="editor">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsAppels(e)}
                  placeholder="Sélectionner..."
                  defaultValue={{
                    value: props?.defaultValueGoalsValue?.id,
                    label: props?.defaultValueGoalsValue?.description,
                  }}
                  isMulti
                  styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
                  options={optionsAppel}
                />
              </div>

              <Form.Label>Contacts</Form.Label>
              <div className="editor">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsContacts(e)}
                  placeholder="Sélectionner..."
                  defaultValue={{
                    value: props?.defaultValueContact?.id,
                    label:
                      props?.defaultValueContact?.firstname +
                      " " +
                      props?.defaultValueContact?.lastname,
                  }}
                  isMulti
                  styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
                  options={optionsContacts}
                />
              </div>

              <Form.Label>Description</Form.Label>

              <div className="editor">
                <EditorReport onChange={onChangeEditor}></EditorReport>
              </div>

              <Form.Label>Durée</Form.Label>
              <TimePicker
                className="input-duration"
                onChange={(e) => setDureeValue(e)}
                clockIcon={false}
                disableClock={false}
                locale={"fr-FR"}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSaveKeep} className="btn-metis">
            Sauver et garder
          </Button>
          <Button onClick={handleSaveComplete} className="btn-metis">
            Sauver et clôturer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalActionsAppelsEntrant;
