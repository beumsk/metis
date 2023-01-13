import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
function Anniversaire() {
  const [auth, setAuth] = useState(useAuth());
  const { SearchBar } = Search;
  const [birthdayList, setBirthDaysList] = useState(null);

  var formData = new FormData();
  formData.append("antenna", auth.antenna);
  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} />/
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} />/
              <FontAwesomeIcon icon={faArrowUp} color="#91bd10" />
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} color="#91bd10" />
              /<FontAwesomeIcon icon={faArrowUp} />
            </span>
          );
        return null;
      },
    },
    {
      dataField: "lastname + firstname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.firstname} {row.lastname}
        </div>
      ),
    },
    {
      dataField: "birthdate",
      text: "Date de Naissance",
      sort: true,
      sortCaret: (order, column) => {
        if (!order)
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} />/
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          );
        else if (order === "asc")
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} />/
              <FontAwesomeIcon icon={faArrowUp} color="#91bd10" />
            </span>
          );
        else if (order === "desc")
          return (
            <span>
              <FontAwesomeIcon icon={faArrowDown} color="#91bd10" />
              /<FontAwesomeIcon icon={faArrowUp} />
            </span>
          );
        return null;
      },
    },
    {
      dataField: "birthdate",
      text: "Age",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {new Date().getFullYear() - new Date(row.birthdate).getFullYear()}
        </div>
      ),
    },
    {
      dataField: "status",
      text: "Statut",
    },
  ];
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/birthdays",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
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
        <h1 className="mb-3">Anniversaires</h1>
        {birthdayList && birthdayList !== null && (
          <>
            <div className="row coordonnes-body">
              <div>
                {Object.keys(birthdayList).map((keyName, i) => (
                  <div key={i}>
                    <h5 style={{ color: "white" }}>
                      {toPascalCase(
                        new Date(keyName).toLocaleString("fr-FR", {
                          month: "long",
                        })
                      )}
                    </h5>
                    <ToolkitProvider
                      keyField="id"
                      data={[...birthdayList[keyName]]}
                      columns={columns}
                      search
                    >
                      {(props) => (
                        <div>
                          <div className="mb-2 mt-2">
                            <SearchBar
                              {...props.searchProps}
                              placeholder="Rechercher le nom"
                              className="uk-input"
                              style={{ width: "186px" }}
                            />
                          </div>

                          <BootstrapTable
                            {...props.baseProps}
                            pagination={paginationFactory()}
                          />
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Anniversaire;
