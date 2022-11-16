import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
// import AppelsOrganisation from "../Appels/Appels-Organisation";
function AppelsOrganisation() {
  const [auth, setAuth] = useState(useAuth());
  const [patientsList, setPatientsList] = useState(null);
  const [lengthList, setLengthList] = useState(10);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  formData.append("antenna", auth.antenna);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationRunning",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setPatientsList(response);
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Tous les Appels</h3>

        {patientsList && patientsList.data && patientsList.data.length > 0 && (
          <>
            {patientsList.data.map((patient) => (
              <Accordion className="my-3">
                <Accordion.Item eventKey={patient.id} key={patient.id}>
                  <Accordion.Header>
                    <div className="col-sm-1">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="col-sm-4">
                      {patient.firstname} {patient.lastname}
                      <Link
                        className="seeProfil"
                        from={"/appels-organisation"}
                        to={"/appels-organisation/" + patient.id}
                      >
                        Voir profil
                      </Link>
                    </div>
                    <div className="col-sm-4">{patient.description}</div>
                    {/* <div className="col-sm-3">{patient.birthLocation}</div> */}
                    {/* <div className="col-sm-1">
                      <span className="status">{(patient.type)? Appel}</span>
                    </div> */}
                    {/* <div className="col-sm-3">{Date.now()}</div> */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row body-accordeonitemPatient">
                      {patient.goalsInformation.map((e) => (
                        <div className="row">
                          <div className="col-sm-6">
                            {e.patientfirstName}
                            {e.patientLastName}
                          </div>
                          <div className="col-sm-6">{e.description}</div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
            <button className="btn-metis" onClick={readMore}>
              Read More
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default AppelsOrganisation;
