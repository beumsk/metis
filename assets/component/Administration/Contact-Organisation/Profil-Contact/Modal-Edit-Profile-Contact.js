import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputTypeList from "../../../Input-Type-List";
import InputOrganisationList from "../Input-Organisation-List";
function ModalEditProfileContact(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  // formData.append("pathString", props.link);
  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);

  const [type, setType] = useState(null);

  const [description, setDescription] = useState(null);
  const [url, setURL] = useState(null);
  const [name, setName] = useState(null);
  const [firstName, setFirstName] = useState(null);

  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [place, setPlaces] = useState(
    props?.contactInfo &&
      props?.contactInfo?.organisation &&
      props?.contactInfo?.organisation?.id
      ? props?.contactInfo?.organisation?.id
      : null
  );
  const [listOrganisationSelect, setListOrganisationSelect] = useState(null);
  const [contactInformation, setContactInformation] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setIsSentRepport(false);
  };
  var formData = new FormData();
  formData.append("id", id);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContactInformation(response.data);
        if (response.data.type === 2) {
          setType("2");
        }

        if (response.data.type === 1) {
          setType("1");
        }
      })
      .catch(function (response) {});
    axios({
      method: "get",
      url: "/api/getOrganisationForSelect",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setListOrganisationSelect(response);
      })
      .catch(function (response) {});
  }, []);
  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("firstName", firstName);
    formGetInfos.append("url", url);
    formGetInfos.append("name", name);
    formGetInfos.append("type", type);
    formGetInfos.append("description", description);
    formGetInfos.append(
      "place",
      place && place.length > 0 ? place[0].id : null
    );
    formGetInfos.append("idCont", id.toString());

    axios({
      method: "post",
      url: "/api/updateContactProfile",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setIsSentRepport(true);
      props.onChange(true);
      setShow(false);
    });
  };

  function onChangePlaces(e) {
    setPlaces(e);
  }

  return (
    <>
      <button onClick={handleShow} className="editCont">
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <>
            <Form.Label htmlFor="inputValue">Type</Form.Label>
            <select
              onChange={(e) => setType(e.target.value)}
              className="uk-select"
              defaultValue={
                props.contactInfo && props.contactInfo.type !== null
                  ? props.contactInfo.type
                  : ""
              }
            >
              {/* <option value={0}>Choisissez un type</option> */}
              <option value={1}>Morale</option>
              <option value={2}>Physique</option>
            </select>

            <Form.Label htmlFor="inputValue">Nom</Form.Label>

            <input
              type="text"
              className="uk-input"
              id="inputValueSpécifique"
              onChange={(e) => setName(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.lastname !== null
                  ? props.contactInfo.lastname
                  : ""
              }
            />

            {props?.contactInfo?.type &&
              props?.contactInfo?.type === 2 &&
              type === "2" && (
                <>
                  <Form.Label htmlFor="inputValue">Prénom</Form.Label>

                  <input
                    type="text"
                    className="uk-input"
                    id="inputValueSpécifique"
                    onChange={(e) => setFirstName(e.target.value)}
                    aria-describedby="valueSpécifique"
                    defaultValue={
                      props.contactInfo && props.contactInfo.firstname !== null
                        ? props.contactInfo.firstname
                        : ""
                    }
                  />

                  <InputOrganisationList
                    onChange={onChangePlaces}
                    data={listOrganisationSelect?.data}
                    id="single"
                    defaultValue={
                      props.contactInfo.organisation
                        ? [
                            {
                              id: props.contactInfo.organisation.id,
                              label: props.contactInfo.organisation.label,
                            },
                          ]
                        : null
                    }
                    multiple={false}
                    label="Organisation"
                  />
                </>
              )}

            <Form.Label htmlFor="inputValue">URL</Form.Label>

            <input
              type="text"
              className="uk-input"
              id="url"
              onChange={(e) => setURL(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.url !== null
                  ? props.contactInfo.url
                  : ""
              }
            />

            <Form.Label htmlFor="inputValue">Description</Form.Label>

            <textarea
              className="uk-input"
              id="inputValueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
              aria-describedby="valueSpécifique"
              defaultValue={
                props.contactInfo && props.contactInfo.description !== null
                  ? props.contactInfo.description
                  : ""
              }
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditProfileContact;
