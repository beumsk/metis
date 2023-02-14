import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Menu from "../../Menu";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalAddLieux from "./Modal-Add-Lieux";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import DataTable from "datatables.net-dt";
import $ from "jquery";

function Lieux() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [activePage, setActivePage] = useState(15);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  let linker = <a href="profil-lieux/1">Détails</a>;

  const sortCaret = (order, column) => {
    if (!order)
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} />/
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      );
    else if (order === "desc")
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} />/
          <FontAwesomeIcon icon={faArrowUp} color="#91bd10" />
        </span>
      );
    else if (order === "asc")
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} color="#91bd10" />/
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      );
    return null;
  };

  const columns = [
    {
      dataField: "lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) =>
        row.url ? (
          <a href={row.url} target="_blank">
            {row.lastname}
          </a>
        ) : (
          row.lastname
        ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
    },
    {
      dataField: "occupants",
      text: "Occupants",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.lengthOccupants}</div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "Détails",
      text: "Détails",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <a href={"/profil-lieux/" + row.id} className="uk-link-muted">
            Détails
          </a>
        </div>
      ),
    },
  ];

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPlacesList",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success

        setListContacts(response);
        let table0 = new DataTable("#table-contact", {
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
        });
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  function setPlacesAdded() {
    axios({
      method: "post",
      url: "/api/getPlacesList",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setListContacts(response);
      })
      .catch(function (response) {});
  }
  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  return (
    <>
      <Menu></Menu>

      <div className="container container-patients mx-auto ">
        <div style={{ float: "right" }}>
          <ModalAddLieux
            listContacts={listContacts}
            setListContacts={(e) => setListContacts(e)}
            onChange={setPlacesAdded}
          ></ModalAddLieux>
        </div>

        <h1 className="mb-3">Tous les Lieux</h1>

        <div class="table-contact-container">
          {listContacts && listContacts.data !== null ? (
            <div className="react-bootstrap-table">
              <table
                id="table-contact"
                class="display dataTable  display dataTable  mt-2 table table-striped table-bordered table-hover"
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
                      Description
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
                      # Occupants
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listContacts.data.map((e, idx) => (
                    <tr className="odd" key={idx}>
                      <td>
                        {" "}
                        {e.url ? (
                          <a href={e.url} target="_blank">
                            {e.lastname}
                          </a>
                        ) : (
                          e.lastname
                        )}
                      </td>
                      <td className="sorting_1">{e.description}</td>
                      <td>{e.lengthOccupants}</td>

                      <td>
                        <a
                          href={"/profil-lieux/" + e.id}
                          className="uk-link-muted"
                        >
                          Détails
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <ReactLoading
              type={"spin"}
              color={"#b1b1b1"}
              height={"10%"}
              width={"10%"}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Lieux;
