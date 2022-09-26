import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
import Menu from "./Menu";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Fiche from "./Profile/Fiche";
const Patient = () => {
  let id = useParams().id;

  const [auth, setAuth] = useState(useAuth());
  const [patient, setPatient] = useState(null);
  const [key, setKey] = useState("fiche");
  const [idPatient, setIdPatient] = useState(id);

  var formData = new FormData();
  formData.append("id", id);

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
        setPatient(response.data);
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, [idPatient, setIdPatient]);

  console.log(patient);

  return (
    <>
      <Menu></Menu>

      {patient !== null && (
        <section>
          <div className="container emp-profile">
            <div className="row profile-head">
              <div className="col-sm-2">
                <div className="profile-img">
                  <img
                    src="https://ucreate.ch/wp-content/uploads/2022/02/profil_vide.jpg"
                    alt=""
                  />
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
                <Tab eventKey="suivi" title="Profile" disabled>
                  <div className="col-md-4">
                    <div className="profile-work">
                      <p>Activitée</p>
                      {/* <a href="">Website Link</a>
                    <br />
                    <a href="">Bootsnipp Profile</a>
                    <br />
                    <a href="">Bootply Profile</a>
                    <p>SKILLS</p>
                    <a href="">Web Designer</a>
                    <br />
                    <a href="">Web Developer</a>
                    <br />
                    <a href="">WordPress</a>
                    <br />
                    <a href="">WooCommerce</a>
                    <br />
                    <a href="">PHP, .Net</a>
                    <br /> */}
                    </div>
                    <div className="profile-work">
                      <p>Objectifs</p>
                      {/* <a href="">Website Link</a>
                    <br />
                    <a href="">Bootsnipp Profile</a>
                    <br />
                    <a href="">Bootply Profile</a>
                    <p>SKILLS</p>
                    <a href="">Web Designer</a>
                    <br />
                    <a href="">Web Developer</a>
                    <br />
                    <a href="">WordPress</a>
                    <br />
                    <a href="">WooCommerce</a>
                    <br />
                    <a href="">PHP, .Net</a>
                    <br /> */}
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="indicateurs" title="Indicateurs" disabled>
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
