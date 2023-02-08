import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Menu from "../../Menu";
import { json, Link, useParams } from "react-router-dom";
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
import ReactLoading from "react-loading";
import InputTagsList from "./Input-Tags-List";
// var dt = require("datatables.net")(window, $);
function ContactOrganisations() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [listOrganisation, setListOrganisation] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [tags, setTags] = useState(null);
  const [queryValue, setQueryValue] = useState(null);

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
    // formData.append("query", queryValue);
    if (window.location.search) {
      const urlParams = new URLSearchParams(location.search);
      for (const [key, value] of urlParams) {
        let valeurObj = JSON.parse(value);
        setQueryValue(valeurObj);
        // if (tags && tags.length > 0) {
        formData.append("tags", JSON.stringify(valeurObj?.map((e) => e.id)));
        // }
      }
    }

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

  return (
    <div>
      <Menu></Menu>

      <div className="container container-patients mx-auto ">
        <ModalAddContact
          listOrganisation={listOrganisation}
          onChangeContacts={onChangeUpdateContact}
        ></ModalAddContact>

        <h1 className="mb-3">Liste de contacts</h1>

        <div className="row">
          <div className="col-sm-6">
            <div className="input-tags-search">
              {queryValue !== null && (
                <InputTagsList
                  onChange={(e) => {
                    setTags(e);
                  }}
                  defaultValue={queryValue}
                ></InputTagsList>
              )}

              {queryValue === null && (
                <InputTagsList onChange={(e) => setTags(e)}></InputTagsList>
              )}

              <form action="/contactsorganisation" method="get">
                <input
                  name="query"
                  type={"hidden"}
                  value={JSON.stringify(tags)}
                ></input>
                <button type="submit" className="btn-metis ml-2">
                  Filtrer
                </button>
              </form>
            </div>
          </div>
        </div>

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
                    <th
                      className="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="example"
                      rowSpan="1"
                      colSpan="1"
                      aria-sort="ascending"
                      aria-label="Name: activate to sort column descending"
                    >
                      Tags
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
                  {listContacts.data.map((e, idx) => {
                    let tagArr = e.tags?.split(",");
                    return (
                      <tr className="odd" key={idx}>
                        <td>{e.typeLabel}</td>
                        <td className="sorting_1">
                          {e.lastname} {e.firstname}
                        </td>
                        <td>{e.organisation}</td>
                        <td>
                          {e && e.phone !== null && (
                            <>
                              <span className="phone-contacts" key={idx}>
                                {e.phone}
                              </span>
                            </>
                          )}
                        </td>
                        <td>
                          {e &&
                            e.tags !== null &&
                            tagArr &&
                            tagArr.map((x, idxx) => (
                              <span className="tags-contacts" key={idxx}>
                                {x}
                              </span>
                              // <form
                              //   action="/contactsorganisation"
                              //   method="get"
                              //   key={idxx}
                              // >
                              //   <input
                              //     name="query"
                              //     type={"hidden"}
                              //     // get actual ID OR remove ID from query
                              //     value={JSON.stringify([{ id: 0, value: x }])}
                              //   ></input>
                              //   <button type="submit" className="tags-contacts">
                              //     {x}
                              //   </button>
                              // </form>
                            ))}
                        </td>
                        <td>{e.nb_calls}</td>
                        <td>{e.nb_patients}</td>
                        <td>
                          <Link to={"/profil-contact/" + e.id}>Détails</Link>
                        </td>
                      </tr>
                    );
                  })}
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
    </div>
  );
}

export default ContactOrganisations;
