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

const BlockElementWithValues = () => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", "/patient/fiche/statut-du-suivi");
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listMedias, setMedias] = useState(null);
  const [infos, setInfos] = useState(null);
  const [filterDates, setFilterDates] = useState();
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/findElAndBlckAndValByPatient",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setInfos(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
  console.log(infos);
  return (
    <>
      {/* {listMedias && listMedias.data.length > 0 && (
        <>
          <h6>Liste de fichiers déjà présents</h6>
          {listMedias?.data?.map((medias, id) => (
            <div className="row">
              <div className="col-sm-3">{medias.originalFilename}</div>
              <div className="col-sm-2">{medias.sugg.parentSugg.value}</div>
              <div className="col-sm-2">{medias.comment}</div>
              <div className="col-sm-2">
                {new Date(medias.date).toLocaleString("fr-BE", {
                  dateStyle: "short",
                })}
              </div>
              <div className="col-sm-3">
                <button className="btn-metis delete-btn">delete</button>
                <button className="btn-metis">télécharger</button>
              </div>
            </div>
          ))}
        </>
      )} */}
    </>
  );
};

export default BlockElementWithValues;
