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
import DataTable from "datatables.net-dt";
import $ from "jquery";
// var dt = require("datatables.net")(window, $);

function Anniversaire() {
  document.addEventListener("DOMContentLoaded", function () {});

  const [auth, setAuth] = useState(useAuth());
  const { SearchBar } = Search;
  const [birthdayList, setBirthDaysList] = useState(null);

  //
  var formData = new FormData();
  formData.append("antenna", auth.antenna);

  useEffect(() => {
    // table.searchCols = true;
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

        $(".table-anniversaire thead th").each(function () {
          var title = $(this).text();
          $(this).html(
            '<span class="title-column" >' +
              $(this).text() +
              "</span>" +
              ' </br><input type="text" placeholder="Rechercher par ' +
              title +
              '" />'
          );
        });

        let table0 = new DataTable(".table-anniversaire", {
          language: {
            sProcessing: "En cours...",
            sLengthMenu: "Afficher les enregistrements par:  _MENU_",
            sZeroRecords: "Aucune données pour l'instant",
            // sEmptyTable: "La table est vide",
            sInfo: "Enregistrements _START_ à _END_ sur _TOTAL_",
            sInfoEmpty: "Enregistrements 0 à 0 sur 0",
            sInfoFiltered: "(filtré de _MAX_ enregistrements)",
            sInfoPostFix: "",
            sSearch: "Chercher: ",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords: "Mise en charge...",
            oPaginate: {
              sFirst: "Premier",
              sLast: "Dernière",
              sNext: " Suivant",
              sPrevious: "Précédent ",
            },
            oAria: {
              sSortAscending:
                ": Activer pour trier la colonne par ordre croissant",
              sSortDescending:
                ": Activer pour trier la colonne par ordre décroissant",
            },
          },
          initComplete: function () {
            // Apply the search
            this.api()
              .columns()
              .every(function () {
                var that = this;
                $("input", this.header()).on("keyup change clear", function () {
                  if (that.search() !== this.value) {
                    that.search(this.value).draw();
                  }
                });
              });
          },
        });
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
      <div className="container container-patients mx-auto ">
        <h1 className="mb-3">Anniversaires</h1>
        <div id="example_wrapper" className="dataTables_wrapper">
          {birthdayList && birthdayList !== null && (
            <>
              {Object.keys(birthdayList).map((keyName, i) => (
                <div className="table-anniversaire-container">
                  <h5>
                    {toPascalCase(
                      new Date(keyName).toLocaleString("fr-FR", {
                        month: "long",
                      })
                    )}
                  </h5>
                  <div className="react-bootstrap-table">
                    <table
                      // id={"table-anniversaire" + i}
                      className="table-anniversaire display dataTable  mt-2 table table-striped table-bordered table-hover"
                      aria-describedby="example_info"
                    >
                      <thead>
                        <tr>
                          <th
                            className="sorting sorting_asc"
                            tabindex="0"
                            aria-controls="example"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                          >
                            Nom
                          </th>
                          <th
                            className="sorting sorting_asc"
                            tabindex="0"
                            aria-controls="example"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                          >
                            Date d'anniversaire
                          </th>
                          <th
                            className="sorting sorting_asc"
                            tabindex="0"
                            aria-controls="example"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                          >
                            Age
                          </th>
                          <th
                            className="sorting sorting_asc"
                            tabindex="0"
                            aria-controls="example"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                          >
                            Statut
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {birthdayList[keyName].map((e) => (
                          <tr className="odd">
                            <td>
                              {e.firstname} {e.lastname}
                            </td>
                            <td className="sorting_1">{e.birthdate}</td>
                            <td>
                              {new Date().getFullYear() -
                                new Date(e.birthdate).getFullYear()}
                            </td>
                            <td>{e.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Anniversaire;
