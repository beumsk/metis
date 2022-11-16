import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
import Table from "./Table/Table";
import { Link } from "react-router-dom";
function Anniversaire() {
  const [auth, setAuth] = useState(useAuth());
  //   const [listContacts, setListContacts] = useState(null);
  const [birthdayList, setBirthDaysList] = useState(null);

  // var formData = new FormData();
  // formData.append("page", lengthList.toString());

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/birthdays",
      //   data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setBirthDaysList(response.data.patients_bdays);
      })
      .catch(function (response) {});
  }, []);

  const toPascalCase = (str) => {
    if (/^[\p{L}\d]+$/iu.test(str)) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str
      .replace(
        /([\p{L}\d])([\p{L}\d]*)/giu,
        (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
      )
      .replace(/[^\p{L}\d]/giu, "");
  };
  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Anniversaires</h3>
        {birthdayList && birthdayList !== null && (
          <>
            <div className="row coordonnes-body">
              <div>
                <h6>Infos</h6>
                {Object.keys(birthdayList).map((keyName, i) => (
                  <div key={i}>
                    <h3>
                      {toPascalCase(
                        new Date(keyName).toLocaleString("fr-FR", {
                          month: "long",
                        })
                      )}
                    </h3>
                    <Table
                      data={[...birthdayList[keyName]]}
                      rowsPerPage={10}
                      // listContacts={contactList}
                      onChangeUpdateContact={(e) => onChangeUpdateContact(e)}
                    />
                  </div>
                ))}
                {/* {birthdayList.map((e) => (
                  <>
                    <Table
                      data={[...e]}
                      rowsPerPage={10}
                      // listContacts={contactList}
                      onChangeUpdateContact={(e) => onChangeUpdateContact(e)}
                    />
                  </>
                ))} */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Anniversaire;
