import React, {
  useContext,
  useDebugValue,
  useRef,
  useState,
  useEffect,
} from "react";
import useAuth from "../..//hooks/useAuth";
import axios from "axios";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

const Profile = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);

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
        // setInformation(response);
        console.log(response);

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
        // setInformation(response);
        console.log(response);

        setGoals(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getActivitiesReports",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        // setInformation(response);
        console.log(response);

        setActivities(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  console.log(goals);
  return (
    <div className="container-ongletProfile">
      <div className="row item-report">
        <div className="col-sm-3">
          <h6>Objectifs</h6>
          {goals?.data.map((g, id) => (
            <>
              {g && g.type === 1 && (
                <div className="item-goals">
                  {new Date(g.creationDate).toLocaleString("fr-BE", {
                    dateStyle: "short",
                  })}
                  {g.func.value} {g.description}
                </div>
              )}
            </>
          ))}
          <h6>Appels</h6>
          {goals?.data.map((g, id) => (
            <>
              {g && g.type === 2 && (
                <div className="item-goals">
                  {new Date(g.creationDate).toLocaleString("fr-BE", {
                    dateStyle: "short",
                  })}
                  {g.func.value} {g.description}
                </div>
              )}
            </>
          ))}
        </div>
        <div className="col-sm-9">
          {informationPatient?.data.map((r, id) => (
            <div key={id} className="report-content">
              {r && r.activityType === 2 && <h6>Appel Sortant</h6>}
              {r && r.activityType === 4 && <h6>Appel Entrant</h6>}
              {r && r.deletedAt === null && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: r.content }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
