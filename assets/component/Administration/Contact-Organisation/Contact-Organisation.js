import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Pagination from "react-js-pagination";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalAddContact from "./Modal-Add-Contacts";
import DataTable from "datatables.net-dt";
import $ from "jquery";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ReactLoading from "react-loading";
// var dt = require("datatables.net")(window, $);
function ContactOrganisations() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [listOrganisation, setListOrganisation] = useState(null);
  const [lengthList, setLengthList] = useState(10);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  const columns = [
    {
      dataField: "typeLabel",
      text: "Type",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => <div>{row.typeLabel}</div>,
    },
    {
      dataField: "lastname + firstname",
      text: "Nom",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.lastname} {row.firstname}
        </div>
      ),
    },
    {
      dataField: "organisation",
      text: "Organisation",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.organisation}</div>
      ),
    },
    {
      dataField: "nb_calls",
      text: "Nombre d'appels",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => <div>{row.nb_calls}</div>,
    },
    {
      dataField: "nb_patients",
      text: "Nombre de patients",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.nb_patients}</div>
      ),
    },
    {
      dataField: "Détails",
      text: "Détails",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <a href={"/profil-contact/" + row.id}>Détails</a>
        </div>
      ),
    },
  ];
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

        // setTimeout(() => {
        console.log(document.getElementById("table-contact"));
        let table0 = new DataTable("#table-contact", {
          language: {
            sProcessing: "En cours...",
            sLengthMenu: "Afficher les enregistrements par:  _MENU_",
            sZeroRecords: "Aucune données pour l'instant",
            // sEmptyTable: "La table est vide",
            sInfo:
              "Affichage des enregistrements du _START_ au _END_ sur un total de _TOTAL_ enregistrements",
            sInfoEmpty:
              "Affichage des enregistrements de 0 à 0 sur un total de 0 enregistrements",
            sInfoFiltered:
              "(filtré à partir d'un total de _MAX_ enregistrements)",
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
        // }, 2000);
      })
      .catch(function (response) {});

    axios({
      method: "get",
      url: "/api/getOrganisation",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setListOrganisation(response);
      })
      .catch(function (response) {});
  }, []);

  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  function onChangeUpdateContact(e) {
    // props.onChangeUpdateContact(e);

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

    // setListContacts(e);
  }
  function onColumnMatch({ searchText, value, column, row }) {}

  console.log(listContacts);

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients mx-auto ">
        <div style={{ float: "right" }}>
          <ModalAddContact
            listOrganisation={listOrganisation}
            onChangeContacts={onChangeUpdateContact}
          ></ModalAddContact>
        </div>

        <h1 className="mb-3">Liste de contacts</h1>
        <div class="table-contact-container">
          {listContacts && listContacts.data !== null ? (
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
                    Type
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
                    Organisation
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
                    Téléphone
                  </th>
                  {/* <th
               className="sorting sorting_asc"
               tabindex="0"
               aria-controls="example"
               rowSpan="1"
               colSpan="1"
               aria-sort="ascending"
               aria-label="Name: activate to sort column descending"
             >
               Tags
             </th> */}
                  <th
                    className="sorting sorting_asc"
                    tabindex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="ascending"
                    aria-label="Name: activate to sort column descending"
                  >
                    Patient(s)
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
                    Appel(s)
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
                    <td>{e.typeLabel}</td>
                    <td className="sorting_1">
                      {e.lastname} {e.firstname}
                    </td>
                    <td>{e.organisation}</td>
                    <td>
                      {e && e.phone !== null && (
                        <>
                          {e.phone.map((number) => (
                            <span className="phone-contacts" key={idx}>
                              {number}
                            </span>
                          ))}
                        </>
                      )}
                    </td>
                    {/* <td>
                     {e && e.tags !== null && (
                       <>
                         {e.tags.map((tag, idx) => (
                           <span className="tags-contacts" key={idx}>
                             {tag}
                           </span>
                         ))}
                       </>
                     )}
                   </td> */}
                    <td>{e.nb_calls}</td>
                    <td>{e.nb_patients}</td>
                    <td>
                      <a href={"/profil-contact/" + e.id}>Détails</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ContactOrganisations;
