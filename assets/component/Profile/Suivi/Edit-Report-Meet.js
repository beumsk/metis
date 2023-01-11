import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Indicateurs-Form-AddReports/Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
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

    //

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

  const inputChangeGoals = (e) => {
    //
    setChangeGoals(e);
  };

  const onChangeContacts = (e) => {
    //
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    //
    setChangePlaces(e);
  };

  const onClickAddActivities = (e) => {
    setFormActivities((prevFormSoins) => [...prevFormSoins, e]);
  };

  function editorChange(e) {
    setChangeDescriptionGoals(e);
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs.length < 3) {
      //
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };

  let arrId = [];

  const sentCalls = (e) => {
    // if (props.informationPatient.type === 2){
    //   formData.append("activityType", 1);
    // }

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

    formData.append("changeGoals", JSON.stringify(changeGoals));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append(
      "changePlaces",
      changePlaces && changePlaces.value ? changePlaces.value : null
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
    });
  };

  function onChangeActivities() {
    props.onChangeActivities(true);
  }

  function onChangeIndicators() {
    props.onChangeIndicators(true);
  }
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
          <h5 className="mt-4 mb-4">Ajouter un rapport</h5>
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
              <option>Choissisez votre type de rencontre</option>
              <option value={1}>Vu</option>
              <option value={2}>Rencontre</option>
              <option value={3}>Repos</option>
              <option value={4}>Recherche</option>
            </>
          </Form.Select>
        </>
      )}
      <Form.Label htmlFor="inputValue" className="uk-form-label">
        Date de la rencontre
      </Form.Label>

      {reportDate ? (
        <Form.Control
          type="date"
          defaultValue={
            props?.informationPatient && props?.informationPatient?.reportDate
              ? new Date(props?.informationPatient?.reportDate)
                  .toJSON()
                  .slice(0, 10)
              : ""
          }
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          className="uk-select"
          id="inputValueSpécifique"
        />
      ) : (
        <Form.Control
          type="date"
          defaultValue={
            props?.informationPatient && props?.informationPatient?.reportDate
              ? new Date(props?.informationPatient?.reportDate)
                  .toJSON()
                  .slice(0, 10)
              : ""
          }
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          className="uk-select"
          id="inputValueSpécifique"
        />
      )}

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
          <InputContactList
            contacts={props.contacts}
            defaultValue={props?.informationPatient?.cont}
            onChange={onChangeContacts}
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
            places={props.places}
            defaultValue={props?.informationPatient?.plac?.id}
            onChange={onChangePlaces}
          />

          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Editor
            onChange={editorChange}
            content={
              props.informationPatient.content ||
              props.informationPatient.description
            }
          ></Editor>
        </>
      )}
      {props?.informationPatient?.activityType === 2 && (
        <>
          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Editor
            onChange={editorChange}
            content={
              props.informationPatient.content ||
              props.informationPatient.description
            }
          ></Editor>
          {/* <Form.Control
            as="textarea"
            className="mt-4"
            placeholder="Leave a comment here"
            onChange={(e) => setChangeDescriptionGoals(e.target.value)}
            defaultValue={props.informationPatient.description}
            style={{ height: "100px" }}
          /> */}

          <button onClick={(e) => sentCalls(e)} className="mt-4 btn-metis">
            Confirmer
          </button>
          {isSentGoals && <FontAwesomeIcon icon={faCheck} />}
        </>
      )}
      {props?.informationPatient?.activityType === 1 ||
        props?.informationPatient?.activityType === 2 ||
        (props?.informationPatient?.activityType === 4 && (
          <>
            <button
              onClick={(e) =>
                sentRapport(props?.informationPatient?.activityType)
              }
              className="mt-4 btn-metis"
            >
              Confirmer
            </button>
            {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          </>
        ))}

      {props?.informationPatient?.activityType === 3 && (
        <>
          <button
            onClick={(e) =>
              sentRapport(props?.informationPatient?.activityType)
            }
            className="mt-4 btn-metis"
          >
            Confirmer
          </button>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
        </>
      )}
    </div>
  );
}

export default EditReportMeet;
