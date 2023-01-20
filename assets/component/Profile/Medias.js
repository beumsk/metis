import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Basic from "./Dropzone";
import DeleteMedias from "./Delete-Medias";

const Medias = (props) => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listMedias, setMedias] = useState(null);
  const [options, setOptions] = useState();
  const [filterDates, setFilterDates] = useState();
  const [value, setValue] = useState(null);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getAllMediasByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setMedias(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  const sendMedias = () => {
    //
    var formData = new FormData();

    let sugg = 2;

    formData.append("id", id.toString());
    formData.append("image", value[0]);
    formData.append("fileName", value[0].name);
    formData.append("sugg", sugg.toString());

    axios({
      method: "post",
      url: "/api/setMediasByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        axios({
          method: "post",
          url: "/api/getAllMediasByPatients",
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            setMedias(response);
            setValue(null);
          })
          .catch(function (response) {});
      })
      .catch(function (response) {
        //
      });
  };

  function onChangeDeleteMedias() {
    axios({
      method: "post",
      url: "/api/getAllMediasByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setMedias(response);
        setValue(null);
      })
      .catch(function (response) {});
  }
  return (
    <>
      <Basic onChange={(e) => setValue(e)} />
      {value && value.length > 0 && (
        <div className="row">
          <button className="btn-metis send-btn" onClick={(e) => sendMedias()}>
            Envoyer les images sur le serveur
          </button>
        </div>
      )}

      {listMedias && listMedias.data.length > 0 && (
        <>
          <h6>Liste de fichiers déjà présents</h6>
          {listMedias?.data?.map((medias, id) => (
            <>
              {medias.deletedAt === null && (
                <>
                  <div className="row mt-2">
                    <div
                      className="col-sm-3"
                      style={{ overflowWrap: "break-word" }}
                    >
                      {medias.originalFilename}
                    </div>
                    <div className="col-sm-2">
                      {medias.sugg.parentSugg.value}
                    </div>
                    <div className="col-sm-2">{medias.comment}</div>
                    <div className="col-sm-2">
                      {new Date(medias.date).toLocaleString("fr-BE", {
                        dateStyle: "short",
                      })}
                    </div>

                    <div className="col-sm-3 d-flex justify-content-around">
                      <DeleteMedias
                        idMedias={medias.id}
                        onChange={onChangeDeleteMedias}
                      ></DeleteMedias>
                      {/* <button
                        className="btn-metis delete-btn"
                        onClick={(e) => deleteMedias(medias.id)}
                      >
                        delete
                      </button> */}
                      <a
                        className="btn-metis"
                        style={{ marginLeft: "1rem" }}
                        href={medias.absolutePath}
                      >
                        Télécharger
                      </a>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Medias;
