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
import Editor from "./Editor-Reports";
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Indicateurs-Form-AddReports/Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import InputPlaceListSelect from "./Input-Place-List-Select";
import { nanoid } from "nanoid";
import InputContactList from "./Input-Contact-List";
import InputGoalsList from "./Input-Goals-List";
function AddReportMeet(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);

  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);
  const [formSoins, setFormSoins] = useState([{ id: nanoid() }]);
  const [formActivities, setFormActivities] = useState([{ id: nanoid() }]);
  const [formIndicateurs, setFormIndicateurs] = useState([{ id: nanoid() }]);
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
  const [changeTypeMeet, setChangeTypeMeet] = useState(null);
  const [changeDate, setChangeDate] = useState(null);
  const [changeGoals, setChangeGoals] = useState(null);
  const [changeContacts, setChangeContacts] = useState(null);
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(null);
  const [changeOptions, setChangeOptions] = useState(null);

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
  }, [options, formSoins]);

  const inputChangeTypeMeet = (e) => {
    setChangeTypeMeet(e.target.value);
  };

  const onChangeDate = (e) => {
    setChangeDate(e.target.value);
  };

  const inputChangeGoals = (e) => {
    setChangeGoals(e);
  };

  const onChangeContacts = (e) => {
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    setChangePlaces(e);
  };

  const onClickAddActivities = (e) => {
    setFormActivities((prevFormSoins) => [...prevFormSoins, e]);
  };

  function editorChange(e) {
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs.length < 3) {
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };
  const onClickOnCare = (e) => {
    //
    setFormSoins((prevFormSoins) => [...prevFormSoins, e]);
  };

  let arrId = [];
  const onClickDeleteIndicateursForm = (index, id) => {
    if (formActivities.length > 0) {
      let filter = formIndicateurs.filter((el) => el.id !== index);
      setFormIndicateurs((content) => content.filter((el) => el.id !== index));
      // for (let index = 0; index < filter.length; index++) {
      //   const element = filter[index];
      //   element.id = index;

      //   setFormIndicateurs(filter);
      // }
    }

    if (formIndicateurs.length === 1) {
      setFormIndicateurs([{ id: 0 }]);
      setOptions([
        "HESTIA - Risque perte logement",
        "CVC",
        "HESTIA - Risque décès",
      ]);
    }
  };

  const sentRapport = (e) => {
    // showActivities
    formData.append("activityType", 1);
    formData.append("contacts", contacts);
    formData.append("changeTypeMeet", changeTypeMeet);
    formData.append("changeDate", changeDate);
    formData.append("changeGoals", JSON.stringify(changeGoals));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", JSON.stringify(goalsInput));
    formData.append("meetType", 1);

    formData.append("userId", userId);
    formData.append("patiId", patiId);

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
        // location.replace(window.location.origin + "/" + idPatient);
        document.getElementById("rapport_details-btn").click();
        props.onChange(true);
      })
      .catch(function (response) {});
  };

  function onChangeGoals(e) {
    setGoalsInput(e);
  }

  return (
    <div className="report-content">
      <Form.Label htmlFor="inputValue" className="uk-form-label">
        Type de rencontre
      </Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => inputChangeTypeMeet(e)}
        value={meetType}
        className="uk-select"
      >
        <>
          <option>Choisissez votre type de rencontre</option>
          <option value={1}>Vu</option>
          <option value={2}>Rencontre</option>
          <option value={3}>Repos</option>
          <option value={4}>Recherche</option>
        </>
      </Form.Select>
      <Form.Label htmlFor="inputValue" className="uk-form-label">
        Date de la rencontre
      </Form.Label>
      <Form.Control
        type="date"
        className="uk-select"
        defaultValue={new Date("now")}
        onChange={(e) => onChangeDate(e)}
        id="inputValueSpécifique"
      />
      <InputGoalsList
        goals={props.goals}
        defaultValue={null}
        onChangeGoals={onChangeGoals}
      />
      <InputContactList
        contacts={props.contacts}
        onChange={onChangeContacts}
        defaultValue={null}
      />
      <InputPlaceListSelect
        places={props.places}
        onChange={onChangePlaces}
        defaultValue={null}
      />
      <Editor onChange={editorChange}></Editor>

      <button onClick={(e) => sentRapport(e)}>Envoyer</button>
    </div>
  );
}

export default AddReportMeet;
