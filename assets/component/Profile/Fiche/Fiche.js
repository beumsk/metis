import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ModalItemFiche from "./ModalItemFiche";
const Fiche = () => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const location = useLocation();
  var formData = new FormData();
  formData.append("id", id.toString());

  const [informationPatient, setInformation] = useState(null);
  const [informationTemplateBlock, setInformationTemplateBlock] =
    useState(null);

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
        setInformation(response.data);
      })
      .catch(function (response) {});

    axios({
      method: "get",
      url: "/information/template/element",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformationTemplateBlock(response.data);
      })
      .catch(function (response) {});
  }, [idPatient]);
  console.log("infos", informationTemplateBlock);
  return (
    <section>
      <Accordion defaultActiveKey="0" flush={true} className="accordion-fiche">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Statut de suivi</Accordion.Header>
          <Accordion.Body>
            <div>
              <h6>
                Statut de suivi
                <>
                  {/* {informationTemplateBlock.filter(
                    (e) =>
                      e.itel?.suge?.pathString ===
                      "/patient/fiche/statut-du-suivi"
                  ) && ( */}
                  <ModalItemFiche
                    props={informationTemplateBlock?.filter(
                      (e) =>
                        e.elements?.parentSugg?.pathString ===
                        "/patient/fiche/statut-du-suivi"
                    )}
                  />
                  {/* )} */}
                </>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient.itel?.suge?.pathString ===
                      "/patient/fiche/statut-du-suivi" &&
                    patient.deletedAt === null && (
                      <div className="row" key={patient.id}>
                        <div className="col-sm-4">
                          <p>{patient.sugg?.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.start).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            -
                            {new Date(patient.end).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <button>
                            {/* faDeleteLeft, faEdit  */}
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faCancel} />
                          </button>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="block mt-4">
              <h6>
                Equipes
                <ModalItemFiche
                  props={informationTemplateBlock?.filter(
                    (e) =>
                      e.elements?.parentSugg?.pathString ===
                      "/patient/suivi/equipes"
                  )}
                />
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient.sugg?.parentSugg.pathString ===
                      "/patient/suivi/equipes" &&
                    patient.deletedAt === null && (
                      <div className="row" key={patient.id}>
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.start).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            -
                            {new Date(patient.end).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <button>
                            {/* faDeleteLeft, faEdit  */}
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faCancel} />
                          </button>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div className="block mt-4">
              <h6>
                Programme
                <ModalItemFiche
                  props={informationTemplateBlock?.filter(
                    (e) =>
                      e.elements?.parentSugg?.pathString ===
                      "/patient/suivi/programme"
                  )}
                />
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient.sugg?.parentSugg.pathString ===
                      "/patient/suivi/programme" &&
                    patient.deletedAt === null && (
                      <div className="row" key={patient.id}>
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.start).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            -
                            {new Date(patient.end).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <button>
                            {/* faDeleteLeft, faEdit  */}
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faCancel} />
                          </button>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>
            <div className="block mt-4">
              <h6>
                Antenne{" "}
                <ModalItemFiche
                  props={informationTemplateBlock?.filter(
                    (e) =>
                      e.elements?.parentSugg?.pathString ===
                      "/patient/suivi/antenne"
                  )}
                />
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient.sugg?.parentSugg.pathString ===
                      "/patient/suivi/antenne" &&
                    patient.deletedAt === null && (
                      <div className="row" key={patient.id}>
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>
                            {new Date(patient.start).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                            -
                            {new Date(patient.end).toLocaleString("fr-BE", {
                              dateStyle: "short",
                            })}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <button>
                            {/* faDeleteLeft, faEdit  */}
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faCancel} />
                          </button>
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
                    patient.sugg?.parentSugg.parentSugg.pathString ===
                      "/patient/fiche/information-generale" &&
                    patient.deletedAt === null && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-2">
                          <h6>{patient.sugg.parentSugg.value}</h6>
                        </div>
                        <div className="col-sm-2">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">{patient.commentColumn}</div>
                        <div className="col-sm-2">
                          <button>
                            {/* faDeleteLeft, faEdit  */}
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faCancel} />
                          </button>
                        </div>
                        <div className="col-sm-2">
                          <ModalItemFiche
                            className="f-right"
                            style={{ float: "right" }}
                            props={informationTemplateBlock?.filter(
                              (e) =>
                                e.elements?.parentSugg?.pathString ===
                                patient?.sugg?.parentSugg?.pathString
                            )}
                          />
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
                    patient.itel?.itbk?.sugb?.pathString ===
                      "/patient/fiche/description" &&
                    patient.deletedAt === null && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.value}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
                        </div>
                        <div className="col-sm-4">
                          <button style={{ float: "right" }}>
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
                    patient &&
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/fiche/ressources-personnelles/langues" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg?.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/fiche/ressources-personnelles/talents-et-centres-d-interet" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/fiche/ressources-personnelles/reves" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/fiche/ressources-personnelles/gouts-culinaires" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient?.sugg?.parentSugg?.parentSugg?.pathString ===
                      "/patient/fiche/ressources-financieres" &&
                    patient?.deletedAt === null && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.sugg.parentSugg.value}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
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
                    patient?.sugg?.parentSugg?.parentSugg?.pathString ===
                      "/patient/fiche/acces-aux-soins" &&
                    patient?.deletedAt === null && (
                      <div key={patient.id} className="row">
                        <div className="col-sm-4">
                          <h6>{patient.sugg.parentSugg.value}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
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
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/medical/pathologies/pathologies-physiques-chroniques" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
                        </div>
                      </div>
                    )}
                </>
              ))}
            </div>

            <div className="mt-4">
              <h6>
                Episodes de maladie
                {/* /patient/medical/episodes-de-maladie */}
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/medical/episodes-de-maladie" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient &&
                    patient.sugg?.parentSugg?.pathString ===
                      "/patient/medical/allergies" && (
                      <div key={patient.id} className="row">
                        {/* <div className="col-sm-4">
                          {/* <p>{patient.valeurParent}</p> 
                        </div> */}
                        <div className="col-sm-4">
                          <p>{patient.sugg.value}</p>
                        </div>
                        <div className="col-sm-4">
                          <p>{patient.comment}</p>
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
                    patient.sugg?.parentSugg?.pathString ===
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
                    patient?.itel?.suge?.pathString &&
                    patient?.itel?.suge?.pathString ===
                      "/patient/fiche/pathologie-mentale/supposee" &&
                    patient?.deletedAt === null && (
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
            <div>
              <h6>
                Declarée
                <button>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </h6>
              {informationPatient?.map((patient, id) => (
                <>
                  {patient &&
                    patient?.itel?.suge?.pathString &&
                    patient?.itel?.suge?.pathString ===
                      "/patient/fiche/pathologie-mentale/declaree" &&
                    patient?.deletedAt === null && (
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
                  patient?.itel?.suge?.pathString &&
                  patient?.itel?.suge?.pathString ===
                    "/patient/fiche/assuetude/supposee" &&
                  patient?.deletedAt === null && (
                    <div key={patient.id} className="row mt-4">
                      {/* <div className="col-sm-4"></div> */}
                      {/* <p>{patient.parent}</p> */}
                      <div className="col-sm-2">
                        <h6>{patient?.sugg.value}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p>{patient?.comment}</p>
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
                  patient?.itel?.suge?.pathString &&
                  patient?.itel?.suge?.pathString ===
                    "/patient/fiche/assuetude/declaree" &&
                  patient?.deletedAt === null && (
                    <div key={patient.id} className="row mt-4">
                      <div className="col-sm-2">
                        <h6>{patient?.sugg.value}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p>{patient?.comment}</p>
                      </div>
                      <div className="col-sm-4"></div>
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
                  <div className="block">
                    {patient &&
                      patient?.sugg?.parentSugg?.pathString ===
                        "/patient/fiche/traitements" &&
                      patient?.deletedAt === null && (
                        <div key={patient.id} className="row">
                          <div className="col-sm-4">
                            <h6>{patient.sugg.value}</h6>
                          </div>
                          <div className="col-sm-4">
                            <p>{patient.comment}</p>
                          </div>
                        </div>
                      )}
                  </div>
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
