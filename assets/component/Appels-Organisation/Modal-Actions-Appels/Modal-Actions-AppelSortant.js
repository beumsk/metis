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
function ModalActionsAppelsSortant(props) {
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
    formGetInfos.append("activity_type", 2);
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
    formGetInfos.append("activity_type", 2);
    formGetInfos.append("is_completed", 0);

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
      props.onChangeResponse(response.data);
      setShow(false);
    });
  };

  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Ajouter appel sortant
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un rapport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ajouter appel Entrant</Form.Label>
              <div className="editor">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsAppels(e)}
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
              <Form.Select
                className="uk-select"
                onChange={(e) => setDureeValue(e.target.value)}
              >
                <option value="00:00">00:00</option>
                <option value="00:01">00:01</option>
                <option value="00:05">00:05</option>
                <option value="00:10">00:10</option>
                <option value="00:15">00:15</option>
                <option value="00:20">00:20</option>
                <option value="00:25">00:25</option>
                <option value="00:30">00:30</option>
                <option value="00:35">00:35</option>
                <option value="00:40">00:40</option>
                <option value="00:45">00:45</option>
                <option value="00:50">00:50</option>
                <option value="00:55">00:55</option>
                <option value="01:00">01:00</option>
                <option value="01:05">01:05</option>
                <option value="01:10">01:10</option>
                <option value="01:15">01:15</option>
                <option value="01:20">01:20</option>
                <option value="01:25">01:25</option>
                <option value="01:30">01:30</option>
                <option value="01:35">01:35</option>
                <option value="01:40">01:40</option>
                <option value="01:45">01:45</option>
                <option value="01:50">01:50</option>
                <option value="01:55">01:55</option>
                <option value="02:00">02:00</option>
                <option value="02:05">02:05</option>
                <option value="02:10">02:10</option>
                <option value="02:15">02:15</option>
                <option value="02:20">02:20</option>
                <option value="02:25">02:25</option>
                <option value="02:30">02:30</option>
                <option value="02:35">02:35</option>
                <option value="02:40">02:40</option>
                <option value="02:45">02:45</option>
                <option value="02:50">02:50</option>
                <option value="02:55">02:55</option>
                <option value="03:00">03:00</option>
                <option value="03:05">03:05</option>
                <option value="03:10">03:10</option>
                <option value="03:15">03:15</option>
                <option value="03:20">03:20</option>
                <option value="03:25">03:25</option>
                <option value="03:30">03:30</option>
                <option value="03:35">03:35</option>
                <option value="03:40">03:40</option>
                <option value="03:45">03:45</option>
                <option value="03:50">03:50</option>
                <option value="03:55">03:55</option>
                <option value="04:00">04:00</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSaveKeep} className="btn-metis">
            Sauver et garder
          </Button>
          <Button onClick={handleSaveComplete} className="btn-metis">
            Sauver et compléter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalActionsAppelsSortant;
