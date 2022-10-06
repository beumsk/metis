import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Users from "./Users";
import Menu from "./Menu";
import logoPath from "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Fiche from "./Profile/Fiche";
import Profile from "./Profile/Profile";

const Patient = () => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [patient, setPatient] = useState(null);
  const [imgPatient, setImgPatient] = useState(null);
  const [key, setKey] = useState("fiche");
  const [idPatient, setIdPatient] = useState(id);
  const navigate = useNavigate();
  const location = useLocation();
  const [locationWeb, setLocation] = useState(location);

  var formData = new FormData();
  formData.append("id", id.toString());

  let objPatient = {};

  console.log(idPatient);

  if (!idPatient) {
  }

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPatient",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        objPatient.patient = response.data;
        // setPatient(response.data);
        console.log(response);
        setPatient(response.data);
        axios({
          method: "post",
          url: "/api/getMediaForPatient",
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            //handle success
            // setPatient(response.data);
            console.log(response);
            let backgroundImage = response.image;
            setImgPatient(response.data);
            // setPatient(response.data);
          })
          .catch(function (response) {
            console.log(response);
          });
      })
      .catch(function (response) {
        console.log(response);
      });
  }, [idPatient]);

  console.log(objPatient, imgPatient);
  // "../build/images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png"
  return (
    <>
      <Menu></Menu>

      {patient !== null && (
        <section>
          <div className="container emp-profile">
            <div className="row profile-head">
              <div className="col-sm-2">
                <div className="profile-img">
                  {imgPatient &&
                    imgPatient !== null &&
                    Object.keys(imgPatient).length > 0 && (
                      <>
                        <img src={imgPatient.image} />;
                      </>
                    )}

                  {imgPatient &&
                    imgPatient === null &&
                    Object.keys(imgPatient).length > 0 && (
                      <>
                        <img src="https://ucreate.ch/wp-content/uploads/2022/02/profil_vide.jpg" />
                        ;
                      </>
                    )}

                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="profile-head">
                  <h5>
                    {patient.firstname} {patient.lastname}
                  </h5>
                  <h6> {new Date(patient.birthdate).toLocaleDateString()}</h6>
                  <p className="proile-rating">
                    Premier contact :{" "}
                    <span>
                      {" "}
                      {new Date(patient.firstContactDate).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row body-profile">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="profile-tab"
              >
                <Tab eventKey="fiche" title="Fiche">
                  <Fiche />
                </Tab>
                <Tab eventKey="suivi" title="Profile">
                  <Profile />
                </Tab>
                <Tab eventKey="indicateurs" title="Indicateurs">
                  <p>test3</p>
                </Tab>
                <Tab eventKey="medias" title="Medias" disabled>
                  <p>test3</p>
                </Tab>
                <Tab eventKey="statistiques" title="Statistiques" disabled>
                  <p>test4</p>
                </Tab>
                <Tab eventKey="contacts" title="Contacts" disabled>
                  <p>test5</p>
                </Tab>
                <Tab eventKey="lieux" title="Lieux" disabled>
                  <p>test6</p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Patient;
