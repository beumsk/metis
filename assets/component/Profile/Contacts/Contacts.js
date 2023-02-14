import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ModalLierPatient from "./Modal-Lier-Patient";
import ModalLierContacts from "./Modal-Lier-Contacts";
import ModalEditContacts from "./Modal-Edit-Contacts";
import ModalEditPatient from "./Modal-Edit-Patient";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ModalDeleteContacts from "./Modal-Delete-Contacts";
import ModalDeletePatient from "./Modal-Delete-Patient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import DataTable from "datatables.net-dt";
import $ from "jquery";
import Table from "react-bootstrap/Table";

const Contacts = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  let formData = new FormData();
  formData.append("id", id.toString());
  formData.append("antenna", auth.antenna);

  const [idPatient, setIdPatient] = useState(id);
  const [contacts, setContactsList] = useState(null);
  const [listContacts, setContacts] = useState(null);
  const [options, setOptions] = useState();
  const [type, setType] = useState(null);
  const [contactList, setContactList] = useState();
  const [filterDates, setFilterDates] = useState();
  const [patients, setPatients] = useState(null);
  const [patientsLists, setPatientsLists] = useState(null);

  useEffect(() => {
    let formDataSugg = new FormData();
    formDataSugg.append("id", 57);

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataSugg,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getContactsForSelect",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContactsList(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getContactsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContacts(response.data);

        setTimeout(() => {
          let table0 = new DataTable(".table-contacts", {
            language: {
              sProcessing: "En cours...",
              sLengthMenu: "Afficher les enregistrements par:  _MENU_",
              sZeroRecords: "Aucune données pour l'instant",
              sEmptyTable: "La table est vide",
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
            // data: [...listContacts],
            // columns: [
            //   { data: "name" },
            //   { data: "cont" },
            //   { data: "type" },
            //   { data: "comment" },
            //   { data: "start" },
            //   { data: "end" },
            //   { data: "Actions" },
            // ],
            initComplete: function () {
              // Apply the search
              // this.api()
              //   .columns()
              //   .every(function () {
              //     var that = this;
              //     $("input", this.footer()).on("keyup change clear", function () {
              //       if (that.search() !== this.value) {
              //         that.search(this.value).draw();
              //       }
              //     });
              //   });
            },
          });
        }, 4000);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getPatientsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatientsLists(response.data);
      })
      .catch(function (response) {});

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
        setContactList(response.data);
      })
      .catch(function (response) {});
    let formDataPati = new FormData();
    formDataPati.append("antenna", auth.antenna);

    axios({
      method: "post",
      url: "/api/getAllPatientsSelect",
      data: formDataPati,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatients(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  const onChangeUpdatePatient = (e) => {
    axios({
      method: "post",
      url: "/api/getPatientsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatientsLists(response.data);
      })
      .catch(function (response) {});
  };

  function onChangeUpdateContact(e) {
    axios({
      method: "post",
      url: "/api/getContactsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContacts(response.data);
      })
      .catch(function (response) {});
  }

  function patientLierResponse(e) {
    if (e && e.response) {
      setPatientsLists(e.response);
    }
  }

  function contactLierResponse(e) {
    if (e && e.response) {
      setContacts(e.response);
    }
  }

  function onChangePatients(e) {
    setPatients(e.data);
  }

  //

  return (
    <div className="onglet-contact">
      <div className="d-flex mb-4 row-btn">
        <ModalLierContacts
          onChangeUpdateContact={onChangeUpdateContact}
          type={type}
          contacts={contacts}
          listContacts={contactList}
        ></ModalLierContacts>
        <ModalLierPatient
          listPatients={patients}
          onChangeUpdatePatient={onChangeUpdatePatient}
          type={type}
          patients={patients}
        ></ModalLierPatient>
      </div>

      <h5>Contacts</h5>
      <div className="react-bootstrap-table">
        <table class="mt-2 table-contacts table table-striped table-bordered table-hover">
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
                Début
              </th>{" "}
              <th
                className="sorting sorting_asc"
                tabindex="0"
                aria-controls="example"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
              >
                Fin
              </th>{" "}
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
            {listContacts && listContacts.length > 0 && (
              <>
                {listContacts.map((e) => (
                  <tr>
                    <td>
                      {e?.cont?.map((cont) => (
                        <Link
                          to={"/profil-contact/" + cont?.id}
                          target="_blank"
                        >
                          {cont?.firstname} {cont?.lastname} {cont?.description}
                        </Link>
                      ))}
                    </td>
                    <td>
                      <>{e?.orga}</>
                    </td>
                    <td>
                      {e?.sugg?.map((cont) => (
                        <>{cont?.value}</>
                      ))}
                    </td>
                    <td>{e?.comment === "null" ? "" : e?.comment}</td>
                    <td>
                      {e?.start
                        ? new Date(e?.start)
                            .toLocaleString("fr-BE", "short")
                            .slice(0, 10)
                        : ""}
                    </td>
                    <td>
                      {e?.end
                        ? new Date(e?.end)
                            .toLocaleString("fr-BE", "short")
                            .slice(0, 10)
                        : ""}
                    </td>
                    <td className="d-flex">
                      <ModalEditContacts
                        infos={e}
                        type={type}
                        contacts={contacts}
                        // onChangeContacts={(e) => contactLierResponse(e)}
                        onChangeUpdateContact={onChangeUpdateContact}
                        listContacts={listContacts}
                        // listContactsSelect={props.listContacts}
                      />
                      <ModalDeleteContacts
                        infos={e}
                        onChangeUpdateContact={onChangeUpdateContact}
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      <h5>Patients</h5>
      <div className="react-bootstrap-table">
        <table class="mt-2 table-contacts table table-striped table-bordered table-hover">
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
                Surnom
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
                Description
              </th>{" "}
              <th
                className="sorting sorting_asc"
                tabindex="0"
                aria-controls="example"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
              >
                Début
              </th>{" "}
              <th
                className="sorting sorting_asc"
                tabindex="0"
                aria-controls="example"
                rowSpan="1"
                colSpan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending"
              >
                Fin
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
            {patientsLists && patientsLists.targ.length > 0 && (
              <>
                {patientsLists.targ.map((e) => (
                  <>
                    {e.deletedAt === null && (
                      <tr>
                        <td>
                          <>{e?.orpa?.nicknames}</>
                        </td>
                        <td>
                          <>{e?.orpa?.firstname}</>
                        </td>
                        <td>
                          <>{e?.orpa?.lastname}</>
                        </td>
                        <td>
                          <>{e?.sugg && <>{e?.sugg?.value}</>}</>
                        </td>
                        <td>
                          {e?.linkDescription === "null"
                            ? ""
                            : e?.linkDescription}
                        </td>
                        <td>
                          {e?.start
                            ? new Date(e?.start)
                                .toLocaleString("fr-BE", "short")
                                .slice(0, 10)
                            : ""}
                        </td>
                        <td>
                          {e?.end
                            ? new Date(e?.end)
                                .toLocaleString("fr-BE", "short")
                                .slice(0, 10)
                            : ""}
                        </td>
                        <td className="d-flex">
                          <ModalEditPatient
                            infos={e}
                            type={type}
                            patients={patients}
                            // onChangeContacts={(e) => contactLierResponse(e)}
                            onChangeUpdatePatient={onChangeUpdatePatient}
                            listContacts={patientsLists}
                            // listContactsSelect={props.listContacts}
                          />
                          <ModalDeletePatient
                            infos={e}
                            onChangeUpdatePatient={onChangeUpdatePatient}
                          />
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </>
            )}
            {patientsLists && patientsLists.orig.length > 0 && (
              <>
                {patientsLists.orig.map((e) => (
                  <>
                    {e.deletedAt === null && (
                      <>
                        <tr>
                          <td>
                            <>{e?.tapa?.nicknames}</>
                          </td>
                          <td>
                            <>{e?.tapa?.firstname}</>
                          </td>
                          <td>
                            <>{e?.tapa?.lastname}</>
                          </td>
                          <td>
                            <>{e?.sugg && <>{e?.sugg?.value}</>}</>
                          </td>
                          <td>
                            {e?.linkDescription === "null"
                              ? ""
                              : e?.linkDescription}
                          </td>
                          <td>
                            {e?.start
                              ? new Date(e?.start)
                                  .toLocaleString("fr-BE", "short")
                                  .slice(0, 10)
                              : ""}
                          </td>
                          <td>
                            {e?.end
                              ? new Date(e?.end)
                                  .toLocaleString("fr-BE", "short")
                                  .slice(0, 10)
                              : ""}
                          </td>
                          <td className="d-flex">
                            <ModalEditPatient
                              infos={e}
                              type={type}
                              contacts={patients}
                              // onChangeContacts={(e) => contactLierResponse(e)}
                              onChangeUpdatePatient={onChangeUpdatePatient}
                              listContacts={patientsLists}
                              // listContactsSelect={props.listContacts}
                            />
                            <ModalDeletePatient
                              infos={e}
                              onChangeUpdatePatient={onChangeUpdatePatient}
                            />
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
