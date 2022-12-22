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
import Fiche from "./Profile/Fiche/Fiche";
import Indicators from "./Profile/Indicators";
import Profile from "./Profile/Suivi/Suivi";
import Medias from "./Profile/Medias";
import Contacts from "./Profile/Contacts/Contacts";
import Places from "./Profile/Lieux/Places";
import Moment from "react-moment";
import "moment-timezone";

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
  const [isFiche, setFiche] = useState(true);
  const [isProfile, setProfile] = useState(false);
  const [isIndicators, setIndicators] = useState(false);
  const [isMedias, setMedias] = useState(false);
  const [isContacts, setContacts] = useState(false);
  const [isPlaces, setPlaces] = useState(false);

  var formData = new FormData();
  formData.append("id", id.toString());

  let objPatient = {};

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
            let backgroundImage = response.image;
            setImgPatient(response.data);
          })
          .catch(function (response) {});
      })
      .catch(function (response) {});
  }, [idPatient]);

  const showOngletProfile = (titleOnglet) => {
    titleOnglet === "Fiche" ? setFiche(true) : setFiche(false);
    titleOnglet === "Profile" ? setProfile(true) : setProfile(false);
    titleOnglet === 1 ? setIndicators(true) : setIndicators(false);
    if (titleOnglet === 1) {
      setIndicators(true);
    } else {
      setIndicators(false);
    }
    titleOnglet === "Medias" ? setMedias(true) : setMedias(false);
    titleOnglet === "Contacts" ? setContacts(true) : setContacts(false);
    titleOnglet === "Lieux" ? setPlaces(true) : setPlaces(false);
  };

  const uploadFile = (e) => {
    console.log(e);
    var formData = new FormData();

    console.log(document.getElementById("fileInput").files[0]);
    let fileName = document.getElementById("fileInput").files[0].name;
    formData.append("id", id.toString());
    formData.append("image", document.getElementById("fileInput").files[0]);
    formData.append("fileName", fileName);
    formData.append("sugg", "32");

    axios({
      method: "post",
      url: "/api/setMediasByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (response) {});
  };
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
                  Object.keys(imgPatient).length > 0 ? (
                    <>
                      <img src={imgPatient.image} />
                    </>
                  ) : (
                    <>
                      <img src="https://ucreate.ch/wp-content/uploads/2022/02/profil_vide.jpg" />
                    </>
                  )}

                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input
                      type="file"
                      name="file"
                      id="fileInput"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={(e) => uploadFile(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="profile-head">
                  <h5>
                    {patient.firstname} {patient.lastname}
                  </h5>
                  <h6>
                    {" "}
                    {patient && patient.birthdate !== null ? (
                      <Moment format="DD/MM/YYYY">{patient.birthdate}</Moment>
                    ) : (
                      <p></p>
                    )}
                    {/* {new Date(patient.birthdate).toLocaleDateString()} */}
                  </h6>
                  <p className="proile-rating">
                    Premier contact :{" "}
                    <span>
                      {" "}
                      {patient && patient.firstContactDate !== null ? (
                        <Moment format="DD/MM/YYYY">
                          {patient.firstContactDate}
                        </Moment>
                      ) : (
                        <p>
                          Pas de dates de premières rencontre pour le moment
                        </p>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row body-profile">
              <div className="d-flex mb-4 menuFichePatient">
                <div
                  style={
                    isFiche
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile("Fiche")}
                  className="btn-menuFichePatient"
                >
                  Fiche
                </div>
                <div
                  style={
                    isProfile
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile("Profile")}
                  className="btn-menuFichePatient"
                >
                  Suivi
                </div>
                <div
                  style={
                    isIndicators
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile(1)}
                  className="btn-menuFichePatient"
                >
                  Indicateurs
                </div>
                <div
                  style={
                    isMedias
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile("Medias")}
                  className="btn-menuFichePatient"
                >
                  Medias
                </div>
                <div
                  style={
                    isContacts
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile("Contacts")}
                  className="btn-menuFichePatient"
                >
                  Contacts
                </div>
                <div
                  style={
                    isPlaces
                      ? { borderBottom: "0.3rem solid #ffc107" }
                      : { border: "0" }
                  }
                  onClick={(e) => showOngletProfile("Lieux")}
                  className="btn-menuFichePatient"
                >
                  Lieux
                </div>
              </div>
              <div>
                {isFiche && (
                  <div>
                    <Fiche />
                  </div>
                )}
                {isProfile && (
                  <div>
                    <Profile />
                  </div>
                )}

                {isIndicators && (
                  <div>
                    <Indicators />
                  </div>
                )}

                {isMedias && (
                  <div>
                    <Medias />
                  </div>
                )}
                {isContacts && (
                  <div>
                    <Contacts />
                  </div>
                )}

                {isPlaces && (
                  <div>
                    <Places />
                  </div>
                )}
              </div>
              {/* <Tabs
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
                  <Indicators />
                </Tab>
                <Tab eventKey="medias" title="Medias">
                  <Medias />
                </Tab>
                <Tab eventKey="contacts" title="Contacts">
                  <Contacts />
                </Tab>
                <Tab eventKey="lieux" title="Lieux">
                  <Places />
                </Tab>
              </Tabs> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Patient;
