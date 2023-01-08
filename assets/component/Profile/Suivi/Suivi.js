import React, {
  useContext,
  useDebugValue,
  useRef,
  useState,
  useEffect,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactLoading from "react-loading";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Editor from "./Editor-Reports";
import ModalAddAppels from "./Modal-Add-Appels";
import RapportDetails from "./Rapport-Details";
import ModalAddObjectifs from "./Modal-Add-Objectifs";
import AddReportMeet from "./Add-Report-Meet";
import DashboardReports from "./Dashboard-Reports";
import Accordion from "react-bootstrap/Accordion";
import ModalEditObjectifs from "./Modal-Edit-Objectifs";
import ModalEditAppels from "./Modal-Edit-Appels";
import ModalActionsAppelsEntrant from "./Modal-Actions-AppelsEntrant";
import ModalActionsAppelSortant from "./Modal-Actions-AppelSortant";
import { DoNotStepOutlined } from "@mui/icons-material";
const Profile = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [isEdit, setEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [isDahsboardReports, setIsDashbordReports] = useState(false);
  const [isAddReportMeet, setIsAddReportMeet] = useState(false);
  const [fonction, setFonction] = useState(null);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [valueWhatDoinFunction, setValueWhatDoinFunction] = useState(null);
  const [isReportDetails, setIsReportsDetails] = useState(true);
  const [value, setValue] = useState(null);
  var funcAppelFormData = new FormData();
  funcAppelFormData.append("id", 658);
  var formData = new FormData();
  formData.append("id", id.toString());
  var suggForm = new FormData();
  suggForm.append("id", [57, 658, 174, 25]);

  var valueFormData = new FormData();
  valueFormData.append("id", 174);
  let objPatient = {};

  const [informationPatient, setInformation] = useState(null);
  const [search, setSearch] = useState(null);
  const [goals, setGoals] = useState(null);
  const [goalsList, setGoalsList] = useState(null);
  const [goalsListForSelect, setGoalsListForSelect] = useState(null);
  const [activities, setActivities] = useState(null);
  const [idSearch, setIdSearch] = useState(null);
  // getFollowUpReportsGoals
  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);

  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/getFollowUpReportsById",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setInformation(response);
    //   })
    //   .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: valueFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setWhatDoinFunction(response);
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
        setGoals(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getFollowUpReportsGoalsForSelectForCalls",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setGoalsListForSelect(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getFollowUpReportsGoals",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setGoalsList(response);
      })
      .catch(function (response) {});

    var formDataType = new FormData();
    formDataType.append("id", 174);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataType,
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
      data: funcAppelFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setFonction(response);
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
        setContacts(response);
      })
      .catch(function (response) {});
    [];
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
    setPatiId(idPatient);
    setUserId(auth.auth.idUser);
  }, [idPatient]);

  const editContent = (e) => {
    setEdit(true);
  };

  function onChangeRepportAdded(e) {
    // var reportSearch = new FormData();
    // reportSearch.append("id", idPatient);
    // axios({
    //   method: "post",
    //   url: "/api/getFollowUpReportsById",
    //   data: reportSearch,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     return setSearch(response);
    //   })
    //   .catch(function (response) {});
  }

  const showAddReports = (e) => {
    setIsDashbordReports(false);
    setIsAddReportMeet(true);
    setIsReportsDetails(false);
  };

  const showListReports = (e) => {
    setIsDashbordReports(true);
    setIsAddReportMeet(false);
    setIsReportsDetails(false);
  };
  const showDetailsReports = (e) => {
    setIsDashbordReports(false);
    setIsAddReportMeet(false);
    setIsReportsDetails(true);
  };

  function onChangeResponseDatas(e) {
    var reportSearch = new FormData();
    reportSearch.append("id", id.toString());
    reportSearch.append("number", 10);
    // reportSearch.append("number", 10);
    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportSearch,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        return setSearch(response);
      })
      .catch(function (response) {});
  }
  const choiceRepport = (e) => {
    var reportSearch = new FormData();
    reportSearch.append("id", e);
    axios({
      method: "post",
      url: "/api/getFollowUpGoalsById",
      data: reportSearch,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        return setSearch(response);
      })
      .catch(function (response) {});
  };

  function onChangeGoals(e) {
    setGoalsList(e);
  }

  function addReport(e) {
    formData.append("activityType", 1);
    formData.append("contacts", null);
    formData.append("changeTypeMeet", null);
    formData.append("changeDate", null);
    formData.append("changeGoals", null);
    formData.append("contId", null);
    formData.append("changePlaces", null);
    formData.append("changeEditor", null);
    formData.append("goalsInput", null);
    formData.append("meetType", null);

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
        var reportSearch = new FormData();
        reportSearch.append("id", idPatient);
        axios({
          method: "post",
          url: "/api/getFollowUpReportsById",
          data: reportSearch,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            return setSearch(response);
          })
          .catch(function (response) {});
      })
      .catch(function (response) {});
  }
  function onChangeIsResponse(e) {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsGoalsForSelectForCalls",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setGoalsListForSelect(response);
      })
      .catch(function (response) {});
  }
  return (
    <div className="container-ongletProfile">
      <div className="row item-report">
        <div className="col-sm-4">
          <div className="menu-ongletFiche mb-4">
            {/* <button
              style={
                isAddReportMeet
                  ? { borderBottom: "0.3rem solid #ffc107" }
                  : { border: "0" }
              }
              onClick={(e) => showAddReports()}
            >
              Ajouter un rapport
            </button> */}
            {/* <button
              style={
                isDahsboardReports
                  ? { borderBottom: "0.3rem solid #ffc107" }
                  : { border: "0" }
              }
              onClick={(e) => showListReports()}
            >
              {" "}
              Liste de rapports
            </button> */}
            <button
              style={
                isReportDetails
                  ? { borderBottom: "0.3rem solid #ffc107" }
                  : { border: "0" }
              }
              onClick={(e) => showDetailsReports()}
              id="rapport_details-btn"
            >
              Rapports détaillées
            </button>
          </div>

          <h6 className="mt-4 mb-3">Objectifs </h6>
          {goals ? (
            <Accordion className="mb-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ouvertes</Accordion.Header>
                <Accordion.Body>
                  <div className="goals-open mb-4">
                    {goalsList?.data.map((g, id) => (
                      <>
                        {g && g.type === 1 && g.status === 0 ? (
                          <div className="item-goals" key={id}>
                            <ModalEditObjectifs
                              goalsItem={g}
                              type={type}
                              onChange={onChangeGoals}
                            ></ModalEditObjectifs>
                            <Link
                              // from={window.location.origin}
                              style={
                                g?.isHightlight
                                  ? { fontWeight: "bold", color: "#3371cd" }
                                  : { fontWeight: "normal", color: "#3371cd" }
                              }
                              onClick={(e) => choiceRepport(g.id)}
                            >
                              (
                              {new Date(g.creationDate).toLocaleString(
                                "fr-BE",
                                {
                                  dateStyle: "short",
                                }
                              )}
                              ) {g?.sugg?.value} {g?.description}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </div>

                  {goalsList?.data.map((g, id) => (
                    <>
                      {g && g.type === 1 && g.status === 1 ? (
                        <div
                          className="item-goals"
                          key={id}
                          style={{ fontWeight: "bold" }}
                        >
                          <ModalEditObjectifs
                            goalsItem={g}
                            type={type}
                            onChange={onChangeGoals}
                          ></ModalEditObjectifs>
                          <Link
                            // from={window.location.origin}
                            style={
                              g?.isHightlight
                                ? { fontWeight: "bold", color: "#8cb30c" }
                                : { fontWeight: "normal", color: "#8cb30c" }
                            }
                            onClick={(e) => choiceRepport(g.id)}
                          >
                            (
                            {new Date(g.creationDate).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            ) {g?.sugg?.value} {g?.description}
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Fermées</Accordion.Header>
                <Accordion.Body>
                  {goalsList?.data.map((g, id) => (
                    <>
                      {g &&
                      g.type === 1 &&
                      (g.status === 2 || g.status === 3) ? (
                        <div className="item-goals" key={id}>
                          <ModalEditObjectifs
                            goalsItem={g}
                            onChange={onChangeGoals}
                            type={type}
                          ></ModalEditObjectifs>
                          <Link
                            // from={window.location.origin}
                            style={
                              g?.isHightlight
                                ? { fontWeight: "bold", color: "#4f5053" }
                                : { fontWeight: "normal", color: "#4f5053" }
                            }
                            onClick={(e) => choiceRepport(g.id)}
                          >
                            (
                            {new Date(g.creationDate).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            ){g?.func?.value} {g?.description}
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <ReactLoading
              type={"spin"}
              color={"#B1B1B1"}
              height={"20%"}
              width={"20%"}
            />
          )}

          <h6 className="mt-4 mb-3">Appels</h6>
          {goals ? (
            <>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ouvertes</Accordion.Header>
                  <Accordion.Body>
                    <div className="calls-open mb-4">
                      {goalsList?.data.map((g, id) => (
                        <>
                          {g && g?.type === 2 && g?.status === 0 ? (
                            <div className="item-goals" key={id}>
                              <ModalEditAppels
                                calls={g}
                                contacts={contacts}
                                fonction={fonction}
                                whatDoinFunction={whatDoinFunction}
                                onChange={onChangeGoals}
                              ></ModalEditAppels>
                              <Link
                                // from={window.location.origin}
                                style={
                                  g?.isHightlight
                                    ? { fontWeight: "bold", color: "#3371cd" }
                                    : { fontWeight: "normal", color: "#3371cd" }
                                }
                                onClick={(e) => choiceRepport(g.id)}
                              >
                                (
                                {new Date(g.creationDate).toLocaleString(
                                  "fr-BE",
                                  {
                                    dateStyle: "short",
                                  }
                                )}
                                ) {g?.func?.value} {g?.description}
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      ))}
                    </div>

                    {goalsList?.data.map((g, id) => (
                      <>
                        {g && g?.type === 2 && g?.status === 1 ? (
                          <div
                            className="item-goals"
                            key={id}
                            style={{ fontWeight: "bold" }}
                          >
                            <ModalEditAppels
                              calls={g}
                              contacts={contacts}
                              fonction={fonction}
                              whatDoinFunction={whatDoinFunction}
                              onChange={onChangeGoals}
                            ></ModalEditAppels>
                            <Link
                              // from={window.location.origin}
                              style={
                                g?.isHightlight
                                  ? { fontWeight: "bold", color: "#8cb30c" }
                                  : { fontWeight: "normal", color: "#8cb30c" }
                              }
                              onClick={(e) => choiceRepport(g.id)}
                            >
                              (
                              {new Date(g.creationDate).toLocaleString(
                                "fr-BE",
                                {
                                  dateStyle: "short",
                                }
                              )}
                              ) {g?.func?.value} {g?.description}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Fermées</Accordion.Header>
                  <Accordion.Body>
                    {goalsList?.data.map((g, id) => (
                      <>
                        {g &&
                        g?.type === 2 &&
                        (g.status === 2 || g.status === 3) ? (
                          <div className="item-goals" key={id}>
                            <ModalEditAppels
                              calls={g}
                              contacts={contacts}
                              fonction={fonction}
                              whatDoinFunction={whatDoinFunction}
                              onChange={onChangeGoals}
                            ></ModalEditAppels>
                            <Link
                              // from={window.location.origin}
                              style={
                                g?.isHightlight
                                  ? { fontWeight: "bold", color: "#4f5053" }
                                  : { fontWeight: "normal", color: "#4f5053" }
                              }
                              onClick={(e) => choiceRepport(g.id)}
                            >
                              (
                              {new Date(g.creationDate).toLocaleString(
                                "fr-BE",
                                {
                                  dateStyle: "short",
                                }
                              )}
                              ) {g?.func?.value} {g?.description}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          ) : (
            <ReactLoading
              type={"spin"}
              color={"#B1B1B1"}
              height={"20%"}
              width={"20%"}
            />
          )}
        </div>
        <div className="col-sm-8">
          <div className="d-flex row-btn mb-4">
            <button onClick={(e) => addReport(e)} className="btn-metis">
              Rapport de rencontre
            </button>
            <div>
              <ModalActionsAppelsEntrant
                listCalls={goalsListForSelect}
                // defaultValueContact={patient}
                // isResponse={onChangeIsResponse}
                onChangeResponse={onChangeGoals}
                // typeCall={typeCallsSelect}
                contacts={contacts}
                // defaultValueGoalsValue={e}
              ></ModalActionsAppelsEntrant>
            </div>

            <div>
              <ModalActionsAppelSortant
                listCalls={goalsListForSelect}
                // defaultValueContact={patient}
                // typeCall={typeCallsSelect}
                // isResponse={onChangeIsResponse}
                contacts={contacts}
                onChangeResponse={onChangeGoals}
                // defaultValueGoalsValue={e}
              ></ModalActionsAppelSortant>
            </div>
            <div>
              <ModalAddAppels
                type={type}
                contacts={contacts}
                isResponse={onChangeIsResponse}
                places={places}
                onChange={onChangeGoals}
              ></ModalAddAppels>
            </div>

            <div>
              <ModalAddObjectifs
                type={type}
                contacts={contacts}
                places={places}
                onChange={onChangeGoals}
              ></ModalAddObjectifs>
            </div>
          </div>

          {isReportDetails && (
            <RapportDetails
              type={type}
              contacts={contacts}
              goals={goals}
              search={search}
              places={places}
              informationPatient={informationPatient}
            ></RapportDetails>
          )}

          {isAddReportMeet && (
            <AddReportMeet
              type={type}
              contacts={contacts}
              goals={goals}
              onChange={onChangeRepportAdded}
              places={places}
            ></AddReportMeet>
          )}

          {/* {isDahsboardReports && (
            // <DashboardReports
            //   informationPatient={informationPatient}
            // ></DashboardReports>
          )} */}
        </div>

        {/* <h1>TEXT</h1> */}
      </div>
    </div>
  );
};

export default Profile;
