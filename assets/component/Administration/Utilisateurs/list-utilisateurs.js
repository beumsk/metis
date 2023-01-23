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
// import ModalAddLieux from "./Modal-Add-Lieux";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import DataTable from "datatables.net-dt";
import $ from "jquery";
import moment from "moment";
import ModalEditUtilisateurs from "./edit-utilisateurs";
import ModalAddUtilisateurs from "./add-utilisateur";
function ListUtilisateurs() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listUsers, setListUsers] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [activePage, setActivePage] = useState(15);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  let linker = <a href="profil-lieux/1">Détails</a>;

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/listUsers",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success

        setListUsers(response);
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
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  function onChangeUser() {
    axios({
      method: "get",
      url: "/api/listUsers",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      //handle success

      setListUsers(response);
    });
  }

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
        setListUsers(response);
      })
      .catch(function (response) {});
  }

  return (
    <>
      <Menu></Menu>

      <div className="container container-patients mx-auto ">
        <div style={{ float: "right" }}>
          <ModalAddUtilisateurs
            // listUsers={listUsers}
            // setListUsers={(e) => setListUsers(e)}
            onChange={onChangeUser}
          ></ModalAddUtilisateurs>
        </div>

        <h1 className="mb-3">Utilisateurs</h1>

        <div class="table-contact-container">
          {listUsers && listUsers.data !== null ? (
            <>
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
                      Prénom
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
                      Username
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
                      Email
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
                      Activé
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
                      Groupe(s)
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
                      Dernier login
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
                  {listUsers.data.map((e, idx) => (
                    <tr className="odd" key={idx}>
                      {console.log(e)}
                      <td>{e.firstname}</td>
                      <td>{e.lastname}</td>

                      <td>{e.username}</td>
                      <td>{e.email}</td>
                      <td>{e.enabled}</td>
                      <td>{JSON.stringify(e.roles)}</td>
                      <td>
                        {moment(e.lastLogin)
                          .utc("UTC+01:00")
                          .format("YYYY-MM-DD")}
                      </td>

                      <td>
                        <ModalEditUtilisateurs
                          user={e}
                          onChange={onChangeUser}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
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

export default ListUtilisateurs;
