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
              <h6>Objectifs : </h6>
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
        {props.rapport && props.rapport.cont && (
          <>
            <h6>Contact : </h6>
            {!(props.rapport.cont.length > 0) ? (
              <>
                <span style={{ fontWeight: "normal" }}>
                  {props?.rapport.cont.lastname} {props?.rapport.cont.firstname}
                </span>
              </>
            ) : (
              <>
                <span style={{ fontWeight: "normal" }}>
                  {props?.rapport.cont?.map((cont) => (
                    <>
                      {cont.label}
                      {/* {cont.firstname} */}
                    </>
                  ))}
                </span>
              </>
            )}
          </>
        )}
      </div>

      <div className="place-row">
        {props.rapport &&
          props.rapport.plac &&
          props.rapport.plac.lastname !== null && (
            <>
              <h6>Lieu : </h6>
              <span style={{ fontWeight: "normal" }}>
                {props.rapport.plac.lastname}
              </span>
            </>
          )}
      </div>

      {props.activityType !== 3 && (
        <div className="date-row">
          {props.rapport && props.rapport.creationDate && (
            <>
              <h6>Date de création : </h6>
              <span style={{ fontWeight: "normal" }}>
                {new Date(props.rapport.creationDate)
                  .toLocaleString("fr-BE")
                  .slice(0, 10)}
              </span>
            </>
          )}
        </div>
      )}

      <div className="date-row">
        {props.rapport && props.rapport.reportDate && (
          <>
            <h6>Date de rencontre : </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.reportDate)
                .toLocaleString("fr-BE")
                .slice(0, 10)}
            </span>
          </>
        )}
      </div>

      <div className="date-row">
        {props.rapport &&
          props.rapport.duration &&
          props.rapport.duration !== "1970-01-01T00:00:00.000+00:00" && (
            <>
              <h6>Durée : </h6>
              <span style={{ fontWeight: "normal" }}>
                {props.rapport.duration?.slice(11, 16)}
              </span>
            </>
          )}
      </div>

      <div className="description-row">
        <h6>Description : </h6>
        {props.rapport.description === "null" ||
        props.rapport.content === "null" ? (
          <p>Aucune description donnée pour l'instant</p>
        ) : (
          <div
            style={{ padding: "0" }}
            dangerouslySetInnerHTML={{
              __html:
                props.rapport.content ||
                props.rapport.description ||
                "Aucune description donnée pour l'instant",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default EditNoReportMeet;
