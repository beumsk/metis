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

const InformationGeneraleBlock = (props) => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("pathString", props.block);
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listMedias, setMedias] = useState(null);
  const [infos, setInfos] = useState(null);
  const [filterDates, setFilterDates] = useState();
  const [valuesForModal, setValuesForModal] = useState();
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
        setInfos(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
  console.log(infos);
  return (
    <div className="row">
      <div className="col-sm-6">{props.nameblock}</div>
      <div className="col-sm-4">
        {infos?.data?.map((infos, id) => (
          <p>
            {infos?.sugg?.value && infos?.deletedAt === null && (
              <>{infos?.sugg?.value}</>
            )}
          </p>
        ))}
      </div>
      <div className="col-sm-2">
        <ModalItemFiche link={props.block}></ModalItemFiche>
      </div>
    </div>
  );
};

export default InformationGeneraleBlock;
