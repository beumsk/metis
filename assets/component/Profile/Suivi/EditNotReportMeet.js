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

function EditNoReportMeet(props) {
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

  function onChangeActivities() {
    props.onChangeActivities(true);
  }

  function onChangeIndicators() {
    props.onChangeIndicators(true);
  }
  return (
    <div className="noEditRepports-container">
      <IndicateursActiviteesComponent
        contacts={props.contacts}
        places={props.places}
        selectActivities={props.selectActivities}
        onChangeActivities={onChangeActivities}
        selectSoins={props.selectSoins}
        onChangeIndicators={onChangeIndicators}
        report={props?.rapport}
        activityType={props.activityType}
        indicateursByDefault={props?.rapport?.followupReportsIndicators}
        soinsByDefault={props?.rapport?.followupReportsActivities?.filter(
          (e) => e?.sugg && e?.sugg?.parentValue === "Soins"
        )}
        activitiesByDefault={props?.rapport?.followupReportsActivities?.filter(
          (e) => e?.sugg && e?.sugg?.parentValue === "Activités"
        )}
      ></IndicateursActiviteesComponent>
      <div className="contact-row">
        {props.rapport &&
          props.rapport.fogo &&
          props.rapport.fogo.length > 0 && (
            <>
              <h6>Objectifs: </h6>
              <span style={{ fontWeight: "normal" }}>
                {props?.rapport.fogo?.map((fo) => (
                  <>{fo.label}</>
                ))}
              </span>
            </>
          )}
      </div>

      {/* <div className="contact-row">
        {props.rapport &&
          props.rapport.fore &&
          props.rapport.fore.length > 0 && (
            <>
              <h6>Rapports: </h6>
              <span style={{ fontWeight: "normal" }}>
                {props?.rapport.fore?.map((fo) => (
                  <>{fo.content}</>
                ))}
              </span>
            </>
          )}
      </div> */}
      <div className="contact-row">
        <h6>Contact: </h6>
        {props.rapport && props.rapport.cont && (
          <>
            <span style={{ fontWeight: "normal" }}>
              {props?.rapport.cont.lastname} {props?.rapport.cont.firstname}
            </span>
          </>
        )}

        {props.rapport &&
          props.rapport.cont &&
          props.rapport.cont.length > 0 && (
            <>
              <span style={{ fontWeight: "normal" }}>
                {props?.rapport.cont?.map((cont) => (
                  <>
                    {cont.lastname}
                    {cont.firstname}
                  </>
                ))}
              </span>
            </>
          )}
      </div>

      <div className="place-row">
        {props.rapport && props.rapport.plac && props.rapport.plac !== null && (
          <>
            <h6>Lieu: </h6>
            <span style={{ fontWeight: "normal" }}>
              {props.rapport.plac.lastname}
            </span>
          </>
        )}
      </div>
      <div className="date-row">
        {props.rapport && props.rapport.creationDate && (
          <>
            <h6>Date de création: </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.creationDate).toLocaleString(
                "fr-BE",
                "short"
              )}
            </span>
          </>
        )}
      </div>

      <div className="date-row">
        {props.rapport && props.rapport.duration && (
          <>
            <h6>Duration: </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.duration).toLocaleString(
                "fr-BE",
                "short"
              )}
            </span>
          </>
        )}
      </div>
      <div className="date-row">
        {props.rapport && props.rapport.reportDate && (
          <>
            <h6>Date de rencontre: </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.reportDate).toLocaleString(
                "fr-BE",
                "short"
              )}
            </span>
          </>
        )}
      </div>
      <div className="description-row">
        <h6>Description: </h6>
        <div
          style={{ padding: "0" }}
          dangerouslySetInnerHTML={{
            __html:
              props.rapport.content ||
              props.rapport.description ||
              "Aucune description donnée pour l'instant",
          }}
        ></div>
      </div>

      {props.rapport.content === null && (
        <p>"Aucune description donnée pour l'instant"</p>
      )}
    </div>
  );
}

export default EditNoReportMeet;
