import React, {
  useContext,
  useDebugValue,
  useRef,
  useState,
  useEffect,
} from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Editor from "../Editor-Reports";
import ModalAddAppels from "./Modal-Add-Appels";
import ModalAddReports from "./Modal-Add-Reports";
import ModalAddObjectifs from "./Modal-Add-Objectifs";

const Profile = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [isEdit, setEdit] = useState(false);
  const [toggle, setToggle] = useState(false);

  var formData = new FormData();
  formData.append("id", id.toString());

  let objPatient = {};

  const [informationPatient, setInformation] = useState(null);
  const [goals, setGoals] = useState(null);
  const [activities, setActivities] = useState(null);
  // getFollowUpReportsGoals
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformation(response);
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
        setGoals(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  const editContent = (e) => {
    console.log("e");
    setEdit(true);
  };

  console.log(informationPatient);
  return (
    <div className="container-ongletProfile">
      <div className="row item-report">
        <div className="col-sm-3">
          <h6>Objectifs</h6>
          {goals?.data.map((g, id) => (
            <>
              {g && g.type === 1 && (
                <div className="item-goals" key={id}>
                  {new Date(g.creationDate).toLocaleString("fr-BE", {
                    dateStyle: "short",
                  })}
                  {g?.func?.value} {g?.description}
                </div>
              )}
            </>
          ))}
          <h6>Appels</h6>
          {goals?.data.map((g, id) => (
            <>
              {g && g?.type === 2 && (
                <div className="item-goals" key={id}>
                  {new Date(g.creationDate).toLocaleString("fr-BE", {
                    dateStyle: "short",
                  })}
                  {g?.func?.value} {g?.description}
                </div>
              )}
            </>
          ))}
        </div>
        <div className="col-sm-9">
          <div className="d-flex">
            <div>
              <ModalAddReports></ModalAddReports>
            </div>
            <div style={{ margin: "0 1rem" }}>
              <ModalAddAppels></ModalAddAppels>
            </div>

            <div>
              <ModalAddObjectifs></ModalAddObjectifs>
            </div>
          </div>
          {informationPatient?.data.map((r, id) => (
            <div key={id} className="report-content">
              {r && r.activityType === 2 && <h6>Appel Sortant</h6>}
              {r && r.activityType === 4 && <h6>Appel Entrant</h6>}
              {r && r.deletedAt === null && (
                <>
                  <button
                    onClick={() => {
                      setToggle(!toggle);
                      r.isHightlight = toggle;
                    }}
                  >
                    Editer
                  </button>
                  {r.isHightlight === true && (
                    <Editor contentText={r.content}></Editor>
                  )}
                  {r.isHightlight === false && (
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{ __html: r.content }}
                    ></div>
                  )}
                  {r.isHightlight === null && (
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{ __html: r.content }}
                    ></div>
                  )}

                  {/* <Editor contentText={r.content}></Editor> */}
                </>
              )}
            </div>
          ))}
        </div>

        {/* <h1>TEXT</h1> */}
      </div>
    </div>
  );
};

export default Profile;
