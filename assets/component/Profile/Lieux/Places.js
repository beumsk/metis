import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Basic from "./Dropzone";
import ModalLierLieux from "./Modal-Lier-Lieux";
import EditLierLieux from "./Edit-Lieux";
import ModalDeletePlaces from "./Delete-Lieux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Table from "react-bootstrap/Table";
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
    console.log(e);
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

  console.log(listPlaces);

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
      {listPlaces &&
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
              {console.log(props.baseProps)}
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </>
          )}
        </ToolkitProvider>
      ) : (
        <p>{listPlaces ? "Pas de lieu pour ce contact." : "Loading"}</p>
      )}
      {/* {listPlaces && listPlaces.data.length > 0 && (
        <>
          <h6>Lieux</h6>

          <Table striped>
            <thead>
              <tr>
                <th>Lieu</th>
                <th>Type de lieu</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Comment</th>
                <th>Actions</th>
              </tr>
            </thead>

            {listPlaces?.data?.map((places, id) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      {places.cont.firstname}
                      {places.cont.lastname}
                    </td>
                    <td>
                      {/* {new Date(patient.creationDate).toLocaleDateString()}
                    </td>
                    <td></td>
                    <td></td>
                    <td> </td>
                    <td>
                      {" "}
                      <EditLierLieux
                        lieu={places}
                        type={type}
                        onChangeEditPlaces={(e) => editPlacesResponse(e)}
                        lieuxList={alllistPlaces}
                        // typeDefault={places.type.lastname}
                        places={places}
                      ></EditLierLieux>
                      <ModalDeletePlaces
                        lieu={places}
                        type={type}
                        onChangeDeletePlace={(e) => onChangeDeletePlace(e)}
                        places={places}
                      ></ModalDeletePlaces>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </>
      )} */}
    </>
  );
};

export default Places;
