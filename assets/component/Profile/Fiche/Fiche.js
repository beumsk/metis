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
import StatutDuSuiviBlock from "./Statut-du-suivi-block";
import InformationGeneraleBlock from "./Informations-Generale-block";
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
    // axios({
    //   method: "post",
    //   url: "/findElAndBlckAndValByPatient",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setInformation(response.data);
    //   })
    //   .catch(function (response) {});
    // axios({
    //   method: "get",
    //   url: "/information/template/element",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setInformationTemplateBlock(response.data);
    //   })
    //   .catch(function (response) {});
  }, [idPatient]);
  return (
    <section>
      <Accordion defaultActiveKey="0" flush={true} className="accordion-fiche">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Statut de suivi</Accordion.Header>
          <Accordion.Body>
            <StatutDuSuiviBlock
              nameblock={"Statut de suivi"}
              block={"/patient/fiche/statut-du-suivi"}
            ></StatutDuSuiviBlock>
            <StatutDuSuiviBlock
              nameblock={"Equipes"}
              block={"/patient/suivi/equipes"}
            ></StatutDuSuiviBlock>
            <StatutDuSuiviBlock
              nameblock={"Programme"}
              block={"/patient/suivi/programme"}
            ></StatutDuSuiviBlock>
            <StatutDuSuiviBlock
              nameblock={"Antenne"}
              block={"/patient/suivi/antenne"}
            ></StatutDuSuiviBlock>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Information générale</Accordion.Header>
          <Accordion.Body>
            <InformationGeneraleBlock
              nameblock={""}
              block={"/patient/fiche/information-generale"}
            ></InformationGeneraleBlock>
            {/* <BlockElementWithValues
              nameblock={"Equipes"}
              block={"/patient/suivi/equipes"}
            ></BlockElementWithValues>
            <BlockElementWithValues
              nameblock={"Programme"}
              block={"/patient/suivi/programme"}
            ></BlockElementWithValues>
            <BlockElementWithValues
              nameblock={"Antenne"}
              block={"/patient/suivi/antenne"}
            ></BlockElementWithValues> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Fiche;
