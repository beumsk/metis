import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EditorReport from "./Editor-Reports";
import Select from "react-select";
import makeAnimated from "react-select/animated";
function ModalActionsAppels(props) {
  const [show, setShow] = useState(false);
  const [contactsSelected, setContactsSelected] = useState(false);
  const [goalsSelected, setGoalsSelected] = useState(false);
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
  }, []);

  for (let index = 0; index < props.listCalls.length; index++) {
    const element = props.listCalls[index];
    optionsAppel.push({ value: element.id, label: element.description });
  }

  for (let index = 0; index < props.listContacts.length; index++) {
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
    setContactsSelected(optionsValues);

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

    setGoalsSelected(optionsValues);
    // e.filter((f) => [f.value]);
    // props.onChangeFunction(optionsValues);
    // console.log(optionsValues);
    // console.log(e);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Confirmer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un rapport</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Appel</Form.Label>
              <div className="editor" style={{ "z-index": 555555 }}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsAppels(e)}
                  defaultValue={{
                    value: props.defaultValueGoalsValue.id,
                    label: props.defaultValueGoalsValue.description,
                  }}
                  isMulti
                  options={optionsAppel}
                />
              </div>

              <Form.Label>Contacts</Form.Label>
              <div className="editor" style={{ "z-index": 555555 }}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={(e) => onChangeTagsContacts(e)}
                  defaultValue={{
                    value: props.defaultValueContact.id,
                    label: props.defaultValueContact.description,
                  }}
                  isMulti
                  options={optionsContacts}
                />
              </div>

              <Form.Label>Description</Form.Label>

              <div className="editor" style={{ "z-index": -1 }}>
                <EditorReport></EditorReport>
              </div>

              <Form.Label>Durée</Form.Label>
              <Form.Select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
                <option>45</option>
                <option>50</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalActionsAppels;
