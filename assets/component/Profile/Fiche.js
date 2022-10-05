import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import useAuth from "../..//hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Fiche = () => {
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

  const [statusSuivi, setStatus] = useState(null);

  var formData = new FormData();
  formData.append("id", id.toString());

  let objPatient = {};

  const [informationPatient, setInformation] = useState(null);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/patientsInformationByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        // setInformation(response);
        console.log(response);

        setInformation(response.data);
      })
      .catch(function (response) {});
  }, [idPatient]);

  let status = informationPatient?.data?.itel?.suge?.pathString.filter(
    (e) => e.valeurParentPathString === "/patient/fiche/assuetude/declaree"
  );

  console.log(status);

  // if (statusSuivi === undefined || statusSuivi === null) {
  //   setStatus(status);
  // }

  // setStatus(status);

  return (
    <section>
      <Accordion defaultActiveKey="0" flush={true} className="accordion-fiche">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Statut de suivi</Accordion.Header>
          <Accordion.Body>
            <div>
              <h6>
                Statut de suivi{" "}
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.patientInfo &&
                    patient.patientInfo.itel?.suge?.pathString ===
                      "/patient/fiche/statut-du-suivi" &&
                    patient.patientInfo.deletedAt === null && (
                      <div className="row">
                        <div className="col-sm-4">
                          <p>{patient.patientInfo.sugg?.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.patientInfo.start).toLocaleString(
                              "fr-BE",
                              {
                                dateStyle: "short",
                              }
                            )}
                            -
                            {new Date(patient.patientInfo.end).toLocaleString(
                              "fr-BE",
                              {
                                dateStyle: "short",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="block mt-4">
              <h6>
                Equipes{" "}
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString === "/patient/suivi/programme" && (
                      <div className="row">
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.startDate).toLocaleString(
                              "fr-BE",
                              {
                                dateStyle: "short",
                              }
                            )}
                            -
                            {new Date(patient.endDate).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div className="block mt-4">
              <h6>
                Programme{" "}
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString === "/patient/suivi/programme" && (
                      <div className="row">
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.startDate).toLocaleString(
                              "fr-BE",
                              {
                                dateStyle: "short",
                              }
                            )}
                            -
                            {new Date(patient.endDate).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div className="block mt-4">
              <h6>
                Antenne{" "}
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString === "/patient/suivi/antenne" && (
                      <div className="row">
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.startDate).toLocaleString(
                              "fr-BE",
                              {
                                dateStyle: "short",
                              }
                            )}
                            -
                            {new Date(patient.endDate).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Information générale</Accordion.Header>
          <Accordion.Body>
            <div className="block">
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/information-generale" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-2">
                          <h6>{patient.valeurParent}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-2">{patient.commentColumn}</div>
                        <div className="col-sm-4">
                          <button>
                            {" "}
                            <FontAwesomeIcon icon={faPlusCircle} />
                          </button>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            <div className="block">
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/description" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.valeurParent}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                        </div>
                        <div className="col-sm-4">
                          <button>
                            <FontAwesomeIcon icon={faPlusCircle} />
                          </button>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ressources personnelles</Accordion.Header>
          <Accordion.Body>
            <div>
              <h6>
                Langues
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/langues" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div>
              <h6>
                Talents et centres d'intérêt
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/ressources-personnelles" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div>
              <h6>
                Rêves
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/ressources-personnelles/reves" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div>
              <h6>
                Goûts culinaires
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/ressources-personnelles/gouts-culinaires" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Ressources financières</Accordion.Header>
          <Accordion.Body>
            {informationPatient?.map((patient, id) => (
              <>
                <div className="block">
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/ressources-financieres" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.valeurParent}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                      </div>
                    )}
                </div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Accès aux soins</Accordion.Header>
          <Accordion.Body>
            {informationPatient?.map((patient, id) => (
              <>
                <div className="block">
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/acces-aux-soins" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.valeurParent}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                      </div>
                    )}
                </div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Santé physique</Accordion.Header>
          <Accordion.Body>
            <div className="mt-4">
              <h6>
                Pathologies physiques chroniques
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/medical/pathologies" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                        <p>{patient.valeurParent}</p>
                      </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.commentColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="mt-4">
              <h6>
                Episodes de maladie
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString ===
                      "/patient/medical/episodes-de-maladie" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                        <p>{patient.valeurParent}</p>
                      </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.commentColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="mt-4">
              <h6>
                Allergies
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString ===
                      "/patient/medical/allergies" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                        <p>{patient.valeurParent}</p>
                      </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.commentColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="mt-4">
              <h6>
                Paramètres
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString ===
                      "/patient/medical/parametres" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                        <p>{patient.valeurParent}</p>
                      </div> */}
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.commentColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Pathologie mentale</Accordion.Header>
          <Accordion.Body>
            <div>
              <h6>
                Supposée
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.valeurParentPathString ===
                      "/patient/fiche/pathologie-mentale/supposee" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <p>{patient.valeurParent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            {/* <div>
              <h6>
                Déclarée
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurParentPathString &&
                    patient.patientInfo.valeurParentPathString ===
                      "/patient/fiche/pathologie-mentale/declaree" &&
                    patient.patientInfo.deletedAt === null && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <p>{patient.valeurParent}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.parent}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Assuétude</Accordion.Header>
          <Accordion.Body>
            <h6>
              Supposée
              <button>
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </h6>
            {informationPatient?.map((patient, id) => (
              <>
                {patient &&
                  patient &&
                  patient?.patientInfo?.itel?.suge?.pathString &&
                  patient?.patientInfo?.itel?.suge?.pathString ===
                    "/patient/fiche/assuetude/supposee" &&
                  patient?.patientInfo?.deletedAt === null && (
                    <div key={patient.id} className="row mt-4">
                      {/* <div className="col-sm-4"></div> */}
                      {/* <p>{patient.parent}</p> */}
                      <div className="col-sm-2">
                        <h6>{patient?.patientInfo?.sugg.value}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p>{patient?.patientInfo?.comment}</p>
                      </div>
                      <div className="col-sm-4">
                        {/* <p>
                          {" "}
                          <FontAwesomeIcon icon={faPlusCircle} />
                        </p> */}
                      </div>
                    </div>
                  )}
              </>
            ))}
            <h6>
              Déclarée
              <button>
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </h6>
            {informationPatient?.map((patient, id) => (
              <>
                {patient &&
                  patient &&
                  patient?.patientInfo?.itel?.suge?.pathString &&
                  patient?.patientInfo?.itel?.suge?.pathString ===
                    "/patient/fiche/assuetude/declaree" &&
                  patient?.patientInfo?.deletedAt === null && (
                    <div key={patient.id} className="row mt-4">
                      {/* <div className="col-sm-4"></div> */}
                      {/* <p>{patient.parent}</p> */}
                      <div className="col-sm-2">
                        <h6>{patient?.patientInfo?.sugg.value}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p>{patient?.patientInfo?.comment}</p>
                      </div>
                      <div className="col-sm-4">
                        {/* <p>
                          {" "}
                          <FontAwesomeIcon icon={faPlusCircle} />
                        </p> */}
                      </div>
                    </div>
                  )}
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Traitements</Accordion.Header>
          <Accordion.Body>
            <div className="block">
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient &&
                    patient.valeurpathString &&
                    patient.valeurpathString ===
                      "/patient/fiche/traitements" && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.parent}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.valeurColumn}</p>
                          <p>{patient.commentColumn}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Fiche;
