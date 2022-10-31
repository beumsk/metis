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
import ModalAddInfos from "./Modal-Add-Infos";
import BlockInfos from "./Block-Infos";

const Fiche = () => {
  let blockTraitements = [
    "/patient/fiche/traitements/autre",
    "/patient/fiche/traitements/autre/absence-de-traitement",
    "/patient/fiche/traitements/anticoagulant",
    "/patient/fiche/traitements/antipsychotique",
    "/patient/fiche/traitements/antibiotique",
    "/patient/fiche/traitements/antidepresseur",
    "/patient/fiche/traitements/vaccin",
    "/patient/fiche/traitements/antidiabetique",
    "/patient/fiche/traitements/antiepileptique",
    "/patient/fiche/traitements/vitamines",
    "/patient/fiche/traitements/analgesique-morphinique",
    "/patient/fiche/traitements/analgesique-antalgique",
    "/patient/fiche/traitements/anxiolytique",
    "/patient/fiche/traitements/anti-inflammatoire",
    "/patient/fiche/traitements/antihypertenseur",
    "/patient/fiche/traitements/traitement-pour-pathologies-respiratoires",
    "/patient/fiche/traitements/traitement-pour-pathologies-gastro-intestinales",
    "/patient/fiche/traitements/antihistaminique",
    "/patient/fiche/traitements/antiretroviral",
  ];
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [traitement, setTraitements] = useState(useAuth());
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
  }, [idPatient]);
  //
  return (
    <section>
      <Accordion defaultActiveKey="0" flush={true} className="accordion-fiche">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Statut de suivi</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/statut-du-suivi"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/suivi/equipes"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/suivi/programme"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/suivi/antenne"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-fiche" flush={true}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Information générale</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/genre"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/etat-civil"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={
                "/patient/fiche/information-generale/composition-familliale"
              }
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/nationalite"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/titre-de-sejour"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/numero-de-telephone"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/information-generale/e-mail"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/description"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/description/signes-distinctifs"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/description/histoire"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={
                "/patient/fiche/description/points-d-attention-sensibilites"
              }
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ressources personnelles</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-personnelles/langues"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={
                "/patient/fiche/ressources-personnelles/talents-et-centres-d-interet"
              }
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-personnelles/reves"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-personnelles/gouts-culinaires"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Ressources financières</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-financieres/type-de-revenu"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-financieres/gestion-budgetaire"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/ressources-financieres/dettes"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={
                "/patient/fiche/ressources-financieres/aides-exceptionnelles-ponctuelles"
              }
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Accès aux soins</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/acces-aux-soins/aide-medicale-du-cpas"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/acces-aux-soins/mutuelle"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Santé physique</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={
                "/patient/medical/pathologies/pathologies-physiques-chroniques"
              }
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/medical/episodes-de-maladie"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/medical/allergies"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/medical/parametres"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Pathologie mentale</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/assuetude/supposee"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/assuetude/declaree"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Assuétude</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/pathologie-mentale/supposee"}
            ></BlockInfos>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/pathologie-mentale/declaree"}
            ></BlockInfos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Traitements</Accordion.Header>
          <Accordion.Body>
            <BlockInfos
              infos={informationPatient}
              link={"/patient/fiche/traitements"}
            ></BlockInfos>
            {/* {blockTraitements?.map((traitement, idx) => (
              <div key={idx}>
                {informationPatient && informationPatient.length > 0 && (
                  <BlockInfos
                    infos={informationPatient}
                    link={traitement}
                  ></BlockInfos>
                )}
              </div>
            ))} */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Fiche;
