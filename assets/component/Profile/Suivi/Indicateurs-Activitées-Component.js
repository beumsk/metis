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
import EditIndicateursByReport from "./Indicateurs-Form-AddReports/Edit-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import EditIndicateurs from "./Edit-Indicateurs";
import EditActivities from "./Edit-Activities";
import DeleteIndicateurs from "./Delete-Indicateurs";
import DeleteActivities from "./Delete-Acitivities";
import IndicateursActivitiesDescription from "./Indicateurs-Activities-Description";

function IndicateursActiviteesComponent(props) {
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

  const [changePlaces, setChangePlaces] = useState(null);

  const [changeOptions, setChangeOptions] = useState(null);
  const [reportDate, setReportDate] = useState(null);

  useEffect(() => {
    if (props?.indicateursByDefault !== null) {
      var result = props?.indicateursByDefault.reduce((x, y) => {
        (x[y.indi.groups.id] = x[y.indi.groups.name] || []).push(y);

        return x;
      }, {});
    }
  }, []);

  function onChangeIndicators() {
    props.onChangeIndicators(true);
  }

  function onChangeActivities() {
    props.onChangeActivities(true);
  }

  return (
    <>
      <div className="indicateurs-container">
        <div className="activities indicateur">
          Activité(s){" "}
          <AddActivitiesByReport
            contacts={props.contacts}
            report={props.report}
            places={props.places}
            onChangeActivities={onChangeActivities}
            selectActivities={props.selectActivities}
            activitiesByDefault={props?.activitiesByDefault}
          ></AddActivitiesByReport>
        </div>
        <div>
          {/* indicateursByDefault */}
          {props?.activitiesByDefault?.map((el, id) => (
            <div className="indicateur-line">
              {el?.sugg.value} : {el?.description}
              <div className="edit-delete">
                <EditActivities
                  activity={el}
                  select={props.selectActivities}
                  onChangeActivities={onChangeActivities}
                  report={props.report}
                ></EditActivities>{" "}
                <DeleteActivities
                  activity={el}
                  onChangeActivities={onChangeActivities}
                  report={props.report}
                ></DeleteActivities>
              </div>
            </div>
          ))}
        </div>

        {/* indicateursByDefault */}
        {props.activityType === 1 && (
          <>
            <div className="soins indicateur">
              Soins(s){" "}
              <AddSoinsByReport
                contacts={props.contacts}
                places={props.places}
                onChangeActivities={onChangeActivities}
                selectSoins={props.selectSoins}
                report={props.report}
                soinsByDefault={props?.soinsByDefault}
              ></AddSoinsByReport>
            </div>
            <div>
              {/* indicateursByDefault */}
              {props?.soinsByDefault?.map((el, id) => (
                <div className="indicateur-line">
                  {el?.sugg.value} : {el?.description}{" "}
                  <div className="edit-delete">
                    <EditActivities
                      activity={el}
                      select={props.selectSoins}
                      onChangeActivities={onChangeActivities}
                      report={props.report}
                    ></EditActivities>{" "}
                    <DeleteActivities
                      activity={el}
                      onChangeActivities={onChangeActivities}
                      report={props.report}
                    ></DeleteActivities>
                  </div>
                </div>
              ))}
            </div>

            <div className="indicateurs indicateur">
              Indicateur(s){" "}
              <AddIndicateursByReport
                report={props.report}
                onChangeIndicators={onChangeIndicators}
                indicatorsGroups={props?.report?.indicatorsGroups}
              ></AddIndicateursByReport>
            </div>
            {props?.report?.indicatorsGroups?.map((el, id) => (
              <>
                {el.id === 3 && (
                  <div className="indicateur-line">
                    {el.name}{" "}
                    <div className="edit-delete">
                      <EditIndicateursByReport
                        rapportIndicators={el}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 3
                        )}
                        report={props.report}
                        onChangeIndicators={onChangeIndicators}
                        idIndicators={"3"}
                      ></EditIndicateursByReport>
                      <DeleteIndicateurs
                        rapportIndicators={el}
                        idIndicators={"3"}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 3
                        )}
                        report={props.report}
                        onChangeIndicators={onChangeIndicators}
                      ></DeleteIndicateurs>
                    </div>
                  </div>
                )}
              </>
            ))}
            {props?.indicateursByDefault?.map((el, id) => (
              <>
                {el.indi.groups.id === 3 && (
                  <div className="indicateur-subline">
                    {/* {el?.indi.name} {el?.indi.description} {el?.value} */}
                    <IndicateursActivitiesDescription
                      group={el.indi.groups.id}
                      name={el?.indi.name}
                      value={el?.value}
                      description={el?.indi.description}
                    />
                  </div>
                )}
              </>
            ))}
            {props?.report?.indicatorsGroups?.map((el, id) => (
              <>
                {el.id === 2 && (
                  <div className="indicateur-line">
                    {el.name}{" "}
                    <div className="edit-delete">
                      <EditIndicateursByReport
                        rapportIndicators={el}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 2
                        )}
                        report={props.report}
                        onChangeIndicators={onChangeIndicators}
                        idIndicators={"2"}
                      ></EditIndicateursByReport>
                      <DeleteIndicateurs
                        rapportIndicators={el}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 2
                        )}
                        report={props.report}
                        idIndicators={"2"}
                        onChangeIndicators={onChangeIndicators}
                      ></DeleteIndicateurs>
                    </div>
                  </div>
                )}
              </>
            ))}
            {props?.indicateursByDefault?.map((el, id) => (
              <>
                {el.indi.groups.id === 2 && (
                  <div className="indicateur-subline">
                    {/* {el?.indi.name} {el?.indi.description} {el?.value} */}
                    <IndicateursActivitiesDescription
                      group={el.indi.groups.id}
                      name={el?.indi.name}
                      value={el?.value}
                      description={el?.indi.description}
                    />
                  </div>
                )}
              </>
            ))}
            {props?.report?.indicatorsGroups?.map((el, id) => (
              <>
                {el.id === 1 && (
                  <div className="indicateur-line">
                    {el.name}{" "}
                    <div className="edit-delete">
                      <EditIndicateursByReport
                        rapportIndicators={el}
                        idIndicators={"1"}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 1
                        )}
                        report={props.report}
                        onChangeIndicators={onChangeIndicators}
                      ></EditIndicateursByReport>
                      <DeleteIndicateurs
                        rapportIndicators={el}
                        indicatorsItem={props.report.followupReportsIndicators.filter(
                          (e) => e.indi.groups.id === 1
                        )}
                        report={props.report}
                        idIndicators={"1"}
                        onChangeIndicators={onChangeIndicators}
                      ></DeleteIndicateurs>
                    </div>
                  </div>
                )}
              </>
            ))}
            {props?.indicateursByDefault?.map((el, id) => (
              <>
                {el.indi.groups.id === 1 && (
                  <div className="indicateur-subline">
                    {/* {el?.indi.name} {el?.indi.description} {el?.value} */}
                    <IndicateursActivitiesDescription
                      group={el.indi.groups.id}
                      name={el?.indi.name}
                      value={el?.value}
                      description={el?.indi.description}
                    />
                  </div>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default IndicateursActiviteesComponent;
