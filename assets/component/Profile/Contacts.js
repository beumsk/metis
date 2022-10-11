import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";

const Contacts = () => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listMedias, setMedias] = useState(null);
  const [options, setOptions] = useState();
  const [filterDates, setFilterDates] = useState();
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/getAllMediasByPatients",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     setMedias(response);
    //   })
    //   .catch(function (response) {});
  }, [idPatient]);
  //   console.log(listMedias);
  return (
    <>
      <h6>Contacts</h6>
      {/* {listMedias && listMedias.data.length > 0 && (
        <>
          <h6>Liste de fichiers déjà présents</h6>
          {listMedias?.data?.map((medias, id) => (
            <div className="row">
              <div className="col-sm-3">{medias.originalFilename}</div>
              <div className="col-sm-2">{medias.sugg.parentSugg.value}</div>
              <div className="col-sm-2">{medias.comment}</div>
              <div className="col-sm-2">
                {new Date(medias.date).toLocaleString("fr-BE", {
                  dateStyle: "short",
                })}
              </div>
              <div className="col-sm-3">
                <button className="btn-metis delete-btn">delete</button>
                <button className="btn-metis">télécharger</button>
              </div>
            </div>
          ))}
        </>
      )} */}
    </>
  );
};

export default Contacts;