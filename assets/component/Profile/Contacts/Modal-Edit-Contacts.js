import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputContactList from "../../Input-Contact-List";

function ModalEditContacts(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [description, setDescription] = useState(
    props?.infos?.comment ? props?.infos?.comment : null
  );
  const [commentaire, setCommentaire] = useState(null);
  const [contactItemList, setContactItemList] = useState(
    props?.infos && props?.infos?.cont && props?.infos?.cont[0]?.id
      ? props?.infos?.cont[0]?.id
      : null
  );

  const [start, setStartDate] = useState(
    props?.infos?.start ? props?.infos?.start : null
  );
  const [end, setEndDate] = useState(
    props?.infos?.end ? props?.infos?.end : null
  );
  const [typeItemList, setTypeItemList] = useState(
    props?.infos?.sugg[0]?.id ? props?.infos?.sugg[0]?.id : null
  );
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [idPatient]);
  //
  //   /api/getContacts

  function handleSave() {
    let formData = new FormData();
    // value-sugg

    formData.append("description", description);
    formData.append("commentaire", commentaire);
    formData.append(
      "contactItemList",
      contactItemList && contactItemList.length > 0
        ? contactItemList[0].id
        : null
    );
    formData.append("start", start);
    formData.append("end", end);
    formData.append("typeItemList", typeItemList);
    formData.append("idPatient", idPatient);
    formData.append("Idinfos", props?.infos.id);
    axios({
      method: "post",
      url: "/api/updatePatientContact",
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
          url: "/api/getContactsByPatients",
          data: resFormData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            props.onChangeUpdateContact(true);
            // setResponseDatas(response.data);
            setIsSentRepport(true);
          })
          .catch(function (response) {});
        setShow(false);
        // document.querySelectorAll(".btn-close")[0].click();
        // location.replace(window.location.origin + "/" + idPatient);
      }
    });
  }

  function onChangeContacts(e) {
    setContactItemList(e);
  }
  // if (responseDatas !== null) {
  //   props.onChangeUpdateContact(responseDatas);
  // }
  console.log(props?.infos?.cont);
  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier un contact lié</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {/* <Form.Label htmlFor="inputValue">Valeur</Form.Label>
            <Form.Select
              size="lg"
              onChange={(e) => setContactItemList(e.target.value)}
              defaultValue={contactItemList}
              className="uk-select"
            >
              <option value="">Choisir contact</option>
              {props?.contacts?.data?.map((el, id) => (
                <>
                  {el?.firstname && el?.lastname && (
                    <option value={el.id}>
                      {el?.firstname} {el?.lastname}
                    </option>
                  )}
                </>
              ))}
            </Form.Select> */}
            <InputContactList
              defaultValue={
                props?.infos?.cont[0]
                  ? [
                      {
                        id: props?.infos?.cont[0]?.id,
                        label:
                          props?.infos?.cont[0]?.lastname +
                          "|" +
                          props?.infos?.cont[0]?.description,
                      },
                    ]
                  : null
              }
              onChange={onChangeContacts}
              data={props?.contacts?.data}
              multiple={false}
              id="single"
              label="Contacts"
            ></InputContactList>
            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <Form.Select
              size="lg"
              defaultValue={props?.infos?.sugg[0]?.id}
              onChange={(e) => setTypeItemList(e.target.value)}
              className="uk-select"
            >
              <option value="">Choisir type</option>
              {props?.type?.data?.map((el, id) => (
                <>{el.value && <option value={el.id}>{el?.value}</option>}</>
              ))}
            </Form.Select>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="uk-textarea"
              id="inputValueSpécifique"
              defaultValue={props?.infos?.comment}
              aria-describedby="valueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              className="uk-select"
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
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              className="uk-select"
              defaultValue={
                props?.infos?.end === null
                  ? ""
                  : new Date(props?.infos?.end).toISOString().substring(0, 10)
              }
              onChange={(e) =>
                setEndDate(new Date(e.target.value).toJSON().slice(0, 10))
              }
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
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

export default ModalEditContacts;
