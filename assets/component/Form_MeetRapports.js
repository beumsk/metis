import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Editor from "./Editor-Reports";
import InputPlaceList from "../component/Profile/Suivi/Input-Place-List";
import InputContactList from "../component/Profile/Suivi/Input-Contact-List";
import InputGoalsList from "../component/Profile/Suivi/Input-Goals-List";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Form_MeetRapports = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  formData.append("antenna", auth.antenna);
  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [places, setPlaces] = useState(null);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);
  const [formSoins, setFormSoins] = useState([{ id: 0 }]);
  const [formActivities, setFormActivities] = useState([{ id: 0 }]);
  const [formIndicateurs, setFormIndicateurs] = useState([{ id: 0 }]);
  const [selectedTypeCVC, setSelectedTypeCVC] = useState(null);
  //   formData.append("pathString", props.link);
  const [options, setOptions] = useState([
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [optionsConst, setOptionsConst] = useState([
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [contacts, setContacts] = useState(null);
  const [showAccesSoins, setAccesSoins] = useState(false);
  const [showActivities, setActivities] = useState(false);
  const [showIndicateurs, setChoiceIndicateurs] = useState(false);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeFormActivities, setTypeFormActivities] = useState(null);
  const [meetType, setMeetType] = useState(null);
  const [goalsInput, setGoalsInput] = useState(null);
  const [goals, setGoals] = useState(null);
  const [changeTypeMeet, setChangeTypeMeet] = useState(null);
  const [changeDate, setChangeDate] = useState(null);
  const [changeGoals, setChangeGoals] = useState(null);
  const [changeContacts, setChangeContacts] = useState(null);
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(null);
  const [patientsLists, setPatientsLists] = useState(null);
  const [changeOptions, setChangeOptions] = useState(null);
  function onChangeGoals(e) {
    setGoalsInput(e);
  }
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getAllPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatientsLists(response);
      })
      .catch(function (response) {});

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
    axios({
      method: "post",
      url: "/api/getPlaces",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPlaces(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getFollowUpReportsGoalsForSelect",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setGoals(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getContactsForSelect",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setContacts(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formActivitiesDatas,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setTypeFormActivities(response);
      })
      .catch(function (response) {});
    setPatiId(idPatient);
    setUserId(auth.auth.idUser);
    setOptions(options);
  }, [options]);

  const onChangeContacts = (e) => {
    setChangeContacts(e);
  };

  const onChangeDate = (e) => {
    setChangeDate(e.target.value);
  };

  function editorChange(e) {
    console.log(e);
    setChangeEditor(e);
  }

  const inputChangeTypeMeet = (e) => {
    setChangeTypeMeet(e.target.value);
  };

  const onChangePlaces = (e) => {
    setChangePlaces(e);
  };
  console.log(idPatient);
  const sentRapport = (e) => {
    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];

    formData.append("activityType", 1);
    // formData.append("contacts", JSON.stringify(contacts));
    formData.append("changeTypeMeet", changeTypeMeet);
    formData.append("changeDate", changeDate);
    formData.append("changeGoals", changeGoals);
    formData.append("contId", changeContacts);
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", goalsInput);
    formData.append("meetType", changeTypeMeet);
    formData.append("formSoins", null);
    formData.append("formActivities", null);
    formData.append("formIndicateurs", null);
    formData.append("userId", userId);
    formData.append("patiId", idPatient);

    axios({
      method: "post",
      url: "/api/sendReport",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setIsSent(true);
      })
      .catch(function (response) {});
  };

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  return (
    <>
      {/* <h5 style={{ color: "white" }}>Rapport de rencontre</h5> */}
      <Form className="formMeet-home d-flex flex-column uk-form">
        <Form.Label htmlFor="inputValue" className="uk-form-label">
          Patient
        </Form.Label>
        <Form.Select
          size="lg"
          className="uk-select"
          onChange={(e) => setIdPatient(e.target.value)}
        >
          {patientsLists?.data?.map((el, id) => (
            <>
              {el?.firstname && el?.lastname && (
                <option value={el.id}>
                  {el?.firstname} {el?.lastname}
                </option>
              )}
            </>
          ))}
        </Form.Select>

        <Form.Label
          htmlFor="inputValue"
          className="uk-form-label"
          style={{ color: "white" }}
        >
          Type de rencontre
        </Form.Label>
        <Form.Select
          size="lg"
          onChange={(e) => inputChangeTypeMeet(e)}
          value={meetType}
          className="uk-select"
        >
          <>
            <option>Choissisez votre type de rencontre</option>
            <option value={1}>Vu</option>
            <option value={2}>Rencontre</option>
            <option value={3}>Repos</option>
            <option value={4}>Recherche</option>
          </>
        </Form.Select>

        <Form.Label
          htmlFor="inputValue"
          className="uk-form-label"
          style={{ color: "white" }}
        >
          Date de la rencontre
        </Form.Label>
        <Form.Control
          type="date"
          defaultValue={new Date("now")}
          className="uk-select"
          placeholder="Here edit the release date"
          onChange={(e) => setChangeDate(e.target.value)}
          id="inputValueSpécifique"
        />

        {/* <InputGoalsList
          goals={goals}
          defaultValue={null}
          onChangeGoals={onChangeGoals}
        /> */}

        <InputContactList
          contacts={contacts}
          onChange={onChangeContacts}
          defaultValue={null}
        />
        <InputPlaceList places={places} onChange={onChangePlaces} />

        <Editor onChange={editorChange} content={editorChange}></Editor>

        <a className={"send-btn"} onClick={sentRapport}>
          Envoyer
        </a>
        {isSent && <FontAwesomeIcon icon={faCheck} />}
      </Form>
    </>
  );
};

export default Form_MeetRapports;
