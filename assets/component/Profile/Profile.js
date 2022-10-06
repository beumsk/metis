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
  }, [idPatient]);

  return (
    <div className="container-ongletProfile">
      <div className="row item-report">
        <div className="col-sm-3">
          <h6>Objectifs</h6>
          <h6>Appels</h6>
        </div>
        <div className="col-sm-9">
          {informationPatient?.data.map((r, id) => (
            <div key={id} className="report-content">
              {r && r.report && r.report.activityType === 2 && (
                <h6>Appel Sortant</h6>
              )}
              {r && r.report && r.report.activityType === 4 && (
                <h46>Appel Entrant</h46>
              )}
              {r && r.report && r.report.deletedAt === null && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: r.report.content }}
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
