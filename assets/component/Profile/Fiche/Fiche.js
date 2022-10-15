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
import BlockInfos from "./Block-Infos";

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
  }, [idPatient]);
  // console.log("infos", informationPatient);
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
      </Accordion>
    </section>
  );
};

export default Fiche;
