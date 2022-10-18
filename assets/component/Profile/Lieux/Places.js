import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Basic from "./Dropzone";
import ModalLierLieux from "./Modal-Lier-Lieux";
import EditLierLieux from "./Edit-Lieux";
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
  }, [idPatient]);

  return (
    <>
      <ModalLierLieux lieuxList={alllistPlaces} type={type}></ModalLierLieux>
      {listPlaces && listPlaces.data.length > 0 && (
        <>
          <h6>Lieux</h6>
          {listPlaces?.data?.map((places, id) => (
            <div className="row">
              <div className="col-sm-3">
                {places.cont.firstname}
                {places.cont.lastname}
                <EditLierLieux
                  lieu={places}
                  type={type}
                  lieuxList={alllistPlaces}
                  // typeDefault={places.type.lastname}
                  places={places}
                ></EditLierLieux>
              </div>
              {/* <div className="col-sm-2">{places.lastname}</div> */}
              {/* <div className="col-sm-2">{medias.comment}</div>
              <div className="col-sm-2">
                {new Date(medias.date).toLocaleString("fr-BE", {
                  dateStyle: "short",
                })}
              </div>
              <div className="col-sm-3">
                <button className="btn-metis delete-btn">delete</button>
                <button className="btn-metis">télécharger</button>
              </div> */}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Places;
