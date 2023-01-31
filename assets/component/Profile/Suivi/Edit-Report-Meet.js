import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputGoalsList from "./Input-Goals-List";
import IndicateursActiviteesComponent from "./Indicateurs-Activitées-Component";

function EditReportMeet(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  const [isSentGoals, setSentGoals] = useState(false);
  const [isSentRepport, setSentRepport] = useState(false);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);

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

  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeFormActivities, setTypeFormActivities] = useState(null);
  const [meetType, setMeetType] = useState(null);
  const [goalsInput, setGoalsInput] = useState(null);
  const [changeTypeMeet, setChangeTypeMeet] = useState(null);
  const [changeDate, setChangeDate] = useState(null);
  const [dureeValue, setDureeValue] = useState(
    props.informationPatient.duration || "00:00"
  );
  const [changeGoals, setChangeGoals] = useState(null);
  const [changeContacts, setChangeContacts] = useState(null);
  const [changeDescriptionGoals, setChangeDescriptionGoals] = useState(
    props.informationPatient.content || props.informationPatient.description
  );
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(
    props.informationPatient.content || props.informationPatient.description
  );
  const [changeOptions, setChangeOptions] = useState(null);
  const [reportDate, setReportDate] = useState(null);

  function onChangeGoals(e) {
    setGoalsInput(e);
  }

  useEffect(() => {
    setReportDate(
      new Date(props?.informationPatient?.reportDate?.timestamp * 1000).toJSON()
    );

    setDureeValue(
      dureeValue !== "00:00" && props.informationPatient.duration?.slice(11, 16)
    );

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
    // setFormIndicateurs(formIndicateurs);
  }, [options]);

  const inputChangeTypeMeet = (e) => {
    //
    setChangeTypeMeet(e.target.value);
  };

  const onChangeDate = (e) => {
    setChangeDate(e.target.value);
  };

  const onChangeContacts = (e) => {
    //
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    console.log(e);
    setChangePlaces(e);
  };

  function editorChange(e) {
    setChangeDescriptionGoals(e);
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs?.length < 3) {
      //
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };

  console.log(props);
  const sentCalls = (e) => {
    var formData = new FormData();
    formData.append("idRapport", props?.informationPatient?.id);

    if (changeDate !== null) {
      formData.append("changeDate", changeDate);
    } else {
      formData.append(
        "changeDate",
        new Date(props?.informationPatient?.creationDate).toJSON().slice(0, 10)
      );
    }

    let date = new Date(0);
    date.setHours((dureeValue || "00:00").substring(0, 2)); // "01" of "01:30"
    date.setMinutes((dureeValue || "00:00").substring(3, 5)); // "30" of "01:30"
    let timeString = date.toLocaleString("fr-BE").substring(11, 19);
    formData.append("dureeValue", timeString);

    formData.append("changeGoals", JSON.stringify(goalsInput));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append("goalsInput", JSON.stringify(goalsInput));
    formData.append("userId", userId);
    formData.append("patiId", patiId);
    formData.append("description", changeDescriptionGoals);

    axios({
      method: "post",
      url: "/api/updateCalls",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      // location.replace(window.location.origin + "/" + idPatient);
      setSentGoals(true);
      props.setToggle(false);
    });
  };

  const sentRapport = (status) => {
    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];
    var formData = new FormData();

    formData.append("activityType", status);
    formData.append("idRapport", props?.informationPatient?.id);
    formData.append("contacts", contacts);
    formData.append("changeTypeMeet", changeTypeMeet);

    if (changeDate === null) {
      formData.append("changeDate", props.informationPatient.reportDate);
    } else {
      formData.append("changeDate", changeDate);
    }

    let date = new Date(0);
    date.setHours((dureeValue || "00:00").substring(0, 2)); // "01" of "01:30"
    date.setMinutes((dureeValue || "00:00").substring(3, 5)); // "30" of "01:30"
    let timeString = date.toLocaleString("fr-BE").substring(11, 19);
    formData.append("dureeValue", timeString);

    formData.append("changeGoals", JSON.stringify(changeGoals));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append(
      "changePlaces",
      changePlaces && changePlaces ? changePlaces : null
    );
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", JSON.stringify(goalsInput));
    formData.append("meetType", meetType);
    formData.append("userId", userId);
    formData.append("patiId", patiId);

    axios({
      method: "post",
      url: "/api/updateSendReport",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setSentRepport(true);
      props.setToggle(false);
    });
  };

  function onChangeActivities() {
    props.onChangeActivities(true);
  }

  function onChangeIndicators() {
    props.onChangeIndicators(true);
  }

  console.log(props);
  return (
    <div className="report-content">
      <IndicateursActiviteesComponent
        contacts={props.contacts}
        onChangeIndicators={onChangeIndicators}
        places={props.places}
        onChangeActivities={onChangeActivities}
        selectActivities={props.selectActivities}
        selectSoins={props.selectSoins}
        activityType={props.activityType}
        indicateursByDefault={
          props?.informationPatient?.followupReportsIndicators
        }
        report={props?.informationPatient}
        soinsByDefault={props?.informationPatient?.followupReportsActivities?.filter(
          (e) => e.sugg && e.sugg.parentValue === "Soins"
        )}
        activitiesByDefault={props?.informationPatient?.followupReportsActivities?.filter(
          (e) => e.sugg && e.sugg.parentValue === "Activités"
        )}
      ></IndicateursActiviteesComponent>
      {props?.informationPatient?.activityType === 1 && (
        <>
          {/* <h5 className="mt-4 mb-4">Ajouter un rapport</h5> */}
          {/* <Form.Control type="text" id="inputText" className="mt-4" /> */}

          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Type de rencontre
          </Form.Label>
          <Form.Select
            size="lg"
            className="uk-select"
            onChange={(e) => inputChangeTypeMeet(e)}
            defaultValue={props?.informationPatient?.reportType}
            // selected={props?.informationPatient?.reportType}
          >
            <>
              <option>Choisissez votre type de rencontre</option>
              <option value={1}>Vu</option>
              <option value={2}>Rencontre</option>
              <option value={3}>Repos</option>
              <option value={4}>Recherche</option>
            </>
          </Form.Select>
        </>
      )}

      <Form.Label htmlFor="inputValueSpécifique" className="uk-form-label">
        Date de la rencontre
      </Form.Label>
      <Form.Control
        type="date"
        defaultValue={
          props?.informationPatient && props?.informationPatient?.reportDate
            ? new Date(props?.informationPatient?.reportDate)
                .toJSON()
                .slice(0, 10)
            : ""
        }
        onChange={(e) => onChangeDate(e)}
        className="uk-select"
        id="inputValueSpécifique"
      />

      <Form.Label htmlFor="inputValueSpécifique" className="uk-form-label">
        Durée de la rencontre
      </Form.Label>
      <select
        className="uk-select"
        value={dureeValue}
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
      </select>

      {/* goalsList */}

      {props?.informationPatient?.hasOwnProperty("type") === false && (
        <>
          <InputContactList
            contacts={props.contacts}
            defaultValue={props?.informationPatient?.cont}
            onChange={onChangeContacts}
          />
        </>
      )}
      {(props?.informationPatient?.activityType === 1 ||
        props?.informationPatient?.activityType === 3) && (
        <>
          <InputGoalsList
            goals={props?.goals}
            defaultValue={
              props?.informationPatient && props?.informationPatient?.fogo
                ? props?.informationPatient?.fogo
                : null
            }
            onChangeGoals={onChangeGoals}
          />
        </>
      )}
      {(props?.informationPatient?.activityType === 2 ||
        props?.informationPatient?.activityType === 4) && (
        <>
          <InputGoalsList
            goals={props?.goalsList}
            defaultValue={
              props?.informationPatient && props?.informationPatient?.fogo
                ? props?.informationPatient?.fogo
                : null
            }
            onChangeGoals={onChangeGoals}
          ></InputGoalsList>
        </>
      )}
      {(props?.informationPatient?.activityType === 1 ||
        props?.informationPatient?.activityType === 3) && (
        <>
          <InputPlaceList
            onChange={onChangePlaces}
            data={props?.places?.data}
            id="single"
            placeholder="Lieux"
          />

          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Editor
            onChange={editorChange}
            isEditorCalls={false}
            content={
              props.informationPatient.content ||
              props.informationPatient.description
            }
          ></Editor>
        </>
      )}
      {props?.informationPatient?.activityType === 2 ||
      props?.informationPatient?.activityType === 4 ? (
        <>
          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Editor
            onChange={editorChange}
            isEditorCalls={true}
            // content={
            //   props.informationPatient.content ||
            //   props.informationPatient.description
            // }
          ></Editor>

          <button onClick={(e) => sentCalls(e)} className="mt-4 btn-metis">
            Sauver
          </button>
          {isSentGoals && <FontAwesomeIcon icon={faCheck} />}
        </>
      ) : (
        ""
      )}
      {props?.informationPatient?.activityType === 1 ||
      props?.informationPatient?.activityType === 3 ? (
        <>
          <button
            onClick={(e) =>
              sentRapport(props?.informationPatient?.activityType)
            }
            className="mt-4 btn-metis"
          >
            Sauver
          </button>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
        </>
      ) : (
        ""
      )}
      <button
        onClick={() => props.setToggle(false)}
        style={{ marginLeft: "1rem" }}
      >
        Annuler
      </button>
    </div>
  );
}

export default EditReportMeet;
