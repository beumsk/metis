import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Basic from "./Dropzone";
import ModalLierLieux from "./Modal-Lier-Lieux";
import EditLierLieux from "./Edit-Lieux";
import Table from "react-bootstrap/Table";
const Places = () => {
  let id = useParams().id;
  var formType = new FormData();
  formType.append("id", 174);
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
    console.log(e);
    // listPlaces.data.splice(listPlaces.data.length, 0);
    // console.log("base", listPlaces);
    // listPlaces.data.push(...e.data);
    setPlaces(e);
    // console.log("devenir", e);
    // console.log("base", listPlaces);
  }

  return (
    <>
      <div className="d-flex mb-4 row-btn">
        <ModalLierLieux
          lieuxList={alllistPlaces}
          type={type}
          onChangeLierPlaces={(e) => onChangePlaces(e)}
        ></ModalLierLieux>
      </div>

      {listPlaces && listPlaces.data.length > 0 && (
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
                      {/* {new Date(patient.creationDate).toLocaleDateString()} */}
                    </td>
                    <td></td>
                    <td></td>
                    <td> </td>
                    <td>
                      {" "}
                      <EditLierLieux
                        lieu={places}
                        type={type}
                        lieuxList={alllistPlaces}
                        // typeDefault={places.type.lastname}
                        places={places}
                      ></EditLierLieux>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </>
      )}
    </>
  );
};

export default Places;
