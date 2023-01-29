import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Basic from "./Dropzone";
import ModalLierLieux from "./Modal-Lier-Lieux";
import EditLierLieux from "./Edit-Lieux";
import ModalDeletePlaces from "./Delete-Lieux";
import ReactLoading from "react-loading";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Table from "react-bootstrap/Table";
import DataTable from "datatables.net-dt";
import $ from "jquery";
const Places = () => {
  let id = useParams().id;
  var formType = new FormData();
  formType.append("id", 745);
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listPlaces, setPlaces] = useState(null);
  const [type, setType] = useState(null);
  const [alllistPlaces, setAllPlaces] = useState(null);
  const [options, setOptions] = useState();
  const [filterDates, setFilterDates] = useState();
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPlacesPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPlaces(response);

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
    axios({
      method: "post",
      url: "/api/getPlaces",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setAllPlaces(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formType,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});
    setPlaces(listPlaces);
  }, [idPatient]);

  function onChangePlaces(e) {
    setPlaces(e);
  }

  function editPlacesResponse(e) {
    setPlaces(e);
  }

  function onChangeDeletePlace(e) {
    setPlaces(e);
  }

  const columns = [
    {
      dataField: "cont[0].lastname",
      text: "Lieu",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.cont[0]?.lastname}</div>
      ),
    },
    {
      dataField: "sugg[0].type",
      text: "Type de lieu",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.sugg[0]?.value}</div>
      ),
    },
    {
      dataField: "start",
      text: "Début",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.start
            ? new Date(row?.start).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
    },
    {
      dataField: "end",
      text: "Fin",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.end
            ? new Date(row?.end).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
    },
    {
      dataField: "comment",
      text: "Commentaire",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.comment === "null" ? "" : row.comment}</div>
      ),
    },
    {
      formatter: (cell, row, rowIndex, extraData) => (
        <div className="d-flex">
          <>
            <EditLierLieux
              lieu={row}
              type={type}
              onChangeEditPlaces={(e) => editPlacesResponse(e)}
              lieuxList={alllistPlaces}
              // typeDefault={places.type.lastname}
              places={row}
            ></EditLierLieux>
            <ModalDeletePlaces
              lieu={row}
              type={type}
              onChangeDeletePlace={(e) => onChangeDeletePlace(e)}
              places={row}
            ></ModalDeletePlaces>
          </>
        </div>
      ),
      dataField: "Actions",
      text: "Comment",
    },
  ];

  // const styles = {
  //   popup: {
  //     fontWeight: e?.sugg?.id === 747 ? "bold" : "normal",
  //     backgroundColor: e?.isHightlight === 1 ? "#8cb30c21" : "white",
  //   },
  // };

  return (
    <>
      <div className="d-flex mb-4 row-btn">
        <ModalLierLieux
          lieuxList={alllistPlaces}
          type={type}
          onChangeLierPlaces={(e) => onChangePlaces(e)}
          striped
          hover
          condensed
        ></ModalLierLieux>
      </div>
      {/* {listPlaces &&
      listPlaces.data.length > 0 &&
      alllistPlaces?.data?.length > 0 &&
      type ? (
        <ToolkitProvider
          keyField="id"
          data={[...listPlaces.data]}
          columns={columns}
          sort={
            ({ dataField: "end", order: "desc" },
            { dataField: "start", order: "asc" })
          }
          search
        >
          {(props) => (
            <>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </>
          )}
        </ToolkitProvider>
      ) : (
        <p>{listPlaces ? "Pas de lieu pour ce contact." : "Loading"}</p>
      )} */}

      <div class="table-contact-container">
        {listPlaces && listPlaces.data !== null ? (
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
                    Lieu
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
                    Type de lieu
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
                    Commentaire
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
                {listPlaces.data.map((e, idx) => {
                  let tagArr = e.tags?.split(",");
                  return (
                    <tr
                      className="odd"
                      key={idx}
                      style={{
                        fontWeight: e?.sugg?.id === 747 ? "bold" : "normal",
                        backgroundColor:
                          e?.isHightlight === 1 ? "#8cb30c21" : "white",
                      }}
                    >
                      <td>{e.cont?.lastname}</td>
                      <td className="sorting_1">{e?.sugg?.value}</td>
                      <td>
                        <div>
                          {e?.start
                            ? new Date(e?.start)
                                .toLocaleString("fr-BE", "short")
                                .slice(0, 10)
                            : ""}
                        </div>
                      </td>
                      <td>
                        <div>
                          {e?.end
                            ? new Date(e?.end)
                                .toLocaleString("fr-BE", "short")
                                .slice(0, 10)
                            : ""}
                        </div>
                      </td>
                      <td>
                        <div>{e.comment === "null" ? "" : e.comment}</div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <EditLierLieux
                            lieu={e}
                            type={type}
                            onChangeEditPlaces={(e) => editPlacesResponse(e)}
                            lieuxList={alllistPlaces}
                            // typeDefault={places.type.lastname}
                            places={e}
                          ></EditLierLieux>
                          <ModalDeletePlaces
                            lieu={e}
                            type={type}
                            onChangeDeletePlace={(e) => onChangeDeletePlace(e)}
                            places={e}
                          ></ModalDeletePlaces>
                        </div>
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
    </>
  );
};

export default Places;
