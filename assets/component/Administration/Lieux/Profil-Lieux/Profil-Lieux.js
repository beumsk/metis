import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "../../../Menu";
import axios from "axios";
import Table from "react-bootstrap/Table";
import useAuth from "../../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ModalEditLieux from "./Modal-Edit-Lieux";
import ModalAddLieux from "./Modal-Add-Lieux";
import ModalDeleteLieux from "./Modal-Delete-Lieux";
import ModalEditProfileContact from "./Modal-Edit-Profile-Lieux";
import ModalDeleteInfos from "./Modal-Delete-Infos";
const ProfilLieux = () => {
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;

  const [contactInformation, setContactInformation] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [idAppel, setIdAppel] = useState(id);
  const [tagsList, setTagsList] = useState(null);
  const [typeCollabList, setTypeCollabList] = useState(null);
  var formData = new FormData();
  formData.append("id", useParams().idLieux);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPlacesListById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContactInformation(response.data);
      })
      .catch(function (response) {});

    const formDataTagsList = new FormData();
    formDataTagsList.append("id", 159);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataTagsList,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setTagsList(response);
    });
    const formDataCollabList = new FormData();
    formDataCollabList.append("id", 674);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataCollabList,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setTypeCollabList(response);
    });
  }, []);

  //   const readMore = () => {
  //     setLengthList(lengthList + 10);
  //   };

  function informationSaved(e) {
    axios({
      method: "post",
      url: "/api/getPlacesListById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContactInformation(response.data);
      })
      .catch(function (response) {});
  }
  function onChangePlaceProfile() {
    axios({
      method: "post",
      url: "/api/getPlacesListById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContactInformation(response.data);
      })
      .catch(function (response) {});
  }
  return (
    <>
      <Menu></Menu>
      <section>
        <div className="container emp-profile">
          <div className="row">
            <div className="profile-head col-sm-8">
              <h5 style={{ padding: "0" }}>
                {contactInformation?.firstname} {contactInformation?.lastname}
              </h5>
              <p>{contactInformation?.description}</p>
              <p style={{ wordWrap: "break-word" }}>
                <a href={"http://" + contactInformation?.url} target="_blank">
                  {contactInformation?.url}
                </a>
              </p>
            </div>

            <div className="col-sm-4">
              <div className="btn-groups">
                <Link className="prev-btn" to="/lieux">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <ModalEditProfileContact
                  onChange={onChangePlaceProfile}
                  contactInfo={contactInformation}
                ></ModalEditProfileContact>
                <ModalDeleteLieux
                  contacts={contactInformation}
                ></ModalDeleteLieux>
              </div>
            </div>
          </div>
          <div className="row coordonnes-body">
            <table class="uk-table uk-table-striped">
              <h6>Infos</h6>
              {contactInformation?.informations?.map((contInfo) => (
                <tr>
                  <td>{contInfo.value}</td>
                  <td className="column-btnContent">
                    {contInfo?.obj && contInfo?.obj?.length > 0 && (
                      <div className="row-items">
                        {contInfo?.obj.map((e) => (
                          <div className="item">
                            {contInfo.value === "Tags" ||
                            contInfo.value === "Type de Collaborateur"
                              ? e.sugge[0].value
                              : e.valueInformations}
                            <div className="btn-group">
                              <ModalEditLieux
                                selectListCollab={typeCollabList}
                                selectListTags={tagsList}
                                infosAppels={e}
                                contInfo={contInfo}
                                contact={contactInformation}
                                idInfo={e.id}
                                onChange={informationSaved}
                              ></ModalEditLieux>
                              <ModalDeleteInfos
                                infosPatient={e}
                                onChange={informationSaved}
                              ></ModalDeleteInfos>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {contInfo?.obj && contInfo?.obj.length === 0 && (
                      <>Pas d'informations</>
                    )}
                    <div style={{ float: "right" }}>
                      <ModalAddLieux
                        selectListCollab={typeCollabList}
                        selectListTags={tagsList}
                        infosAppels={contInfo}
                        contact={contactInformation}
                        idInfo={contInfo.id}
                        onChange={informationSaved}
                      ></ModalAddLieux>
                    </div>
                  </td>
                  <td></td>
                </tr>
              ))}
            </table>
          </div>

          <div className="row coordonnes-body">
            <table class="uk-table uk-table-striped">
              <h6>Patients liés</h6>
              {contactInformation?.patients.map((e) => (
                <tr>
                  <td>
                    {e.firstName} {e.lastName}
                  </td>
                  <td>
                    <Link to={"/" + e.id} className="uk-link-muted">
                      Aller au Profil
                    </Link>
                  </td>
                </tr>
              ))}

              {contactInformation?.patients.length === 0 && (
                <tr>
                  <td>
                    <p>Aucun patient lié pour l'instant</p>
                  </td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilLieux;
