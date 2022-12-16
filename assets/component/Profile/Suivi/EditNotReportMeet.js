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
  console.log(props?.rapport);
  return (
    <div className="noEditRepports-container">
      <div className="contact-row">
        {props.rapport &&
          props.rapport.fogo &&
          props.rapport.fogo.length > 0 && (
            <>
              <h6>Objectifs: </h6>
              <span style={{ fontWeight: "normal" }}>
                {props?.rapport.fogo?.map((fo) => (
                  <>{fo.description}</>
                ))}
              </span>
            </>
          )}
      </div>
      <div className="contact-row">
        {props.rapport &&
          props.rapport.cont &&
          props.rapport.cont.length > 0 && (
            <>
              <h6>Contact: </h6>
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
            <h6>Date: </h6>
            <span style={{ fontWeight: "normal" }}>
              {new Date(props.rapport.creationDate).toLocaleString(
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
      {props.rapport.activityType === 1 && (
        <>
          <div className="row-activities mb-2">
            <h6>Activitées</h6>
            {props.rapport.followupReportsActivities &&
            props.rapport.followupReportsActivities.length > 0 ? (
              <>
                {props.rapport.followupReportsActivities.map((item, id) => (
                  <div className="row">
                    <div className="col-sm-4">{item.activity.value}</div>
                    <div className="col-sm-8">{item.activity.description}</div>
                  </div>
                ))}
              </>
            ) : (
              <p>Pas d'activitées</p>
            )}
          </div>
          <div className="row-care mb-2">
            <>
              <h6>Soins</h6>
              {props.rapport.followupReportsCare &&
              props.rapport.followupReportsCare.length > 0 ? (
                <>
                  {props.rapport.followupReportsCare.map((item, id) => (
                    <div className="row">
                      <div className="col-sm-4">{item.activity.value}</div>
                      <div className="col-sm-8">
                        {item.activity.description}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Pas de soins</p>
              )}
            </>
          </div>
          <div className="row-indicateurs mb-2">
            <>
              <h6>Indicateurs</h6>
              {props.indicators && props.indicators.length > 0 ? (
                <>
                  {props.indicators.map((item, id) => (
                    <div className="row">
                      {item.indi.id === 1 && (
                        <div className="indicators-CVC mb-1 mt-2" bg={"green"}>
                          <b>CVC</b>
                        </div>
                      )}

                      {item.indi.id === 6 && (
                        <div className="indicators-Hestia mb-1 mt-2" bg={"red"}>
                          <b>HESTIA Logement</b>
                        </div>
                      )}
                      {item.indi.id === 7 && (
                        <div
                          className="indicators-Logement mb-1 mt-2"
                          bg={"blue"}
                        >
                          <b>HESTIA Deces</b>
                        </div>
                      )}
                      <div className="col-sm-4">{item.indi.name}</div>
                      <div className="col-sm-8">
                        {item.indi.description} ({item.value})
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Pas d'indicateurs</p>
              )}
            </>
          </div>
        </>
      )}
      {props.rapport.content === null && (
        <p>"Aucune description donnée pour l'instant"</p>
      )}
    </div>
  );
}

export default EditNoReportMeet;
