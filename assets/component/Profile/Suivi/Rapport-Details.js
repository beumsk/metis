import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Editor from "./Editor-Reports";
import Form from "react-bootstrap/Form";
import AddReportMeet from "./Add-Report-Meet";
import EditReportMeet from "./Edit-Report-Meet";

function RapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
  // console.log(contacts);
  const editContent = (e) => {
    console.log("e");
    setEdit(true);
  };
  return (
    <>
      {props?.informationPatient?.data.map((r, id) => (
        <div key={id} className="report-content">
          {r && r.activityType === 2 && <h6>Appel Sortant</h6>}
          {r && r.activityType === 4 && <h6>Appel Entrant</h6>}
          {r && r.deletedAt === null && (
            <>
              <button
                onClick={() => {
                  setToggle(!toggle);
                  r.isHightlight = toggle;
                }}
              >
                <FontAwesomeIcon icon={faEdit} /> Editer
              </button>
              {r.isHightlight === true && (
                <EditReportMeet
                  informationPatient={r}
                  type={type}
                  contacts={props?.contacts}
                  places={props?.places}
                ></EditReportMeet>
              )}
              {r.isHightlight === false && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: r.content }}
                ></div>
              )}
              {r.isHightlight === null && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: r.content }}
                ></div>
              )}

              {/* <Editor contentText={r.content}></Editor> */}
            </>
          )}
        </div>
      ))}
    </>
  );
}

// render(<Modal />);

export default RapportDetails;
