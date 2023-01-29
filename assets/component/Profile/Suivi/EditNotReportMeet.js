import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
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

      {props.rapport && props.rapport.fogo && props.rapport.fogo.length > 0 && (
        <div className="data-row">
          <h6>Objectifs : </h6>
          <span style={{ fontWeight: "normal" }}>
            {props?.rapport.fogo?.map((fo) => (
              <>{fo.label}</>
            ))}
          </span>
        </div>
      )}

      {/* {props.rapport &&
          props.rapport.fore &&
          props.rapport.fore.length > 0 && (
            <div className="contact-row">
              <h6>Rapports: </h6>
              <span style={{ fontWeight: "normal" }}>
                {props?.rapport.fore?.map((fo) => (
                  <>{fo.content}</>
                ))}
              </span>
            </div>
          )} */}

      {props.rapport && props.rapport.cont && (
        <div className="data-row">
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
        </div>
      )}

      {props.rapport &&
        props.rapport.plac &&
        props.rapport.plac.lastname !== null && (
          <div className="data-row">
            <h6>Lieu : </h6>
            <span style={{ fontWeight: "normal" }}>
              {props.rapport.plac.lastname}
            </span>
          </div>
        )}

      {props?.activityType === 1 && props?.rapport?.reportType && (
        <div className="data-row">
          <h6>Type de rencontre : </h6>
          <span style={{ fontWeight: "normal" }}>
            {props.rapport.reportType === 1 && "Vu"}
            {props.rapport.reportType === 2 && "Rencontre"}
            {props.rapport.reportType === 3 && "Repos"}
            {props.rapport.reportType === 4 && "Recherche"}
          </span>
        </div>
      )}

      {/* {props.activityType !== 1 &&
        props.rapport &&
        props.rapport.creationDate && (
          <div className="data-row">
            <h6>Date de création : </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.creationDate)
                .toLocaleString("fr-BE")
                .slice(0, 10)}
            </span>
          </div>
        )} */}

      {props.rapport && props.rapport.reportDate && (
        <div className="data-row">
          <h6>Date de rencontre : </h6>
          <span style={{ fontWeight: "normal" }}>
            {new Date(props.rapport.reportDate)
              .toLocaleString("fr-BE")
              .slice(0, 10)}
          </span>
        </div>
      )}

      {props.rapport &&
        props.rapport.duration &&
        props.rapport.duration !== "1970-01-01T00:00:00.000+00:00" && (
          <div className="data-row">
            <h6>Durée : </h6>
            <span style={{ fontWeight: "normal" }}>
              {props.rapport.duration?.slice(11, 16)}
            </span>
          </div>
        )}

      <div className="data-row">
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
