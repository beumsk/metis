import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function ContactOrganisations() {
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [lengthList, setLengthList] = useState(10);

  var formData = new FormData();
  formData.append("page", lengthList.toString());

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getContacts",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setListContacts(response);
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  function onChangeUpdateContact(e) {
    props.onChangeUpdateContact(e);
  }

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Contact & Organisations</h3>
        {listContacts && listContacts.data.length > 0 && (
          <>
            <div className="row coordonnes-body">
              <div>
                <h6>Infos</h6>
                {listContacts.data.map((e) => (
                  <div className="row row-contactOrganisation">
                    <div className="col-sm-2">
                      {e.type === 2 ? "Physique" : "Morale"}
                    </div>
                    <div className="col-sm-6">
                      {e.firstname}
                      {e.lastname}
                    </div>
                    <div className="col-sm-1">{e.numberPatients}</div>
                    <div className="col-sm-1">{e.numberApps}</div>
                    <div className="col-sm-2">
                      <Link
                        className="seeProfil"
                        from={"/appels-organisation"}
                        to={"/appels-organisation/" + e.id}
                      >
                        Voir profil
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-metis" onClick={readMore}>
              Read More
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default ContactOrganisations;
