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
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ModalEditContact from "./Modal-Edit-Contact";
import ModalAddContact from "./Modal-Add-Contact";
import ModalDeleteInfos from "./Modal-Delete-Contact";
import ModalEditProfileContact from "./Modal-Edit-Profile-Contact";
const ProfilContact = () => {
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idContact;

  const [contactInformation, setContactInformation] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [idAppel, setIdAppel] = useState(id);
  const [tagsList, setTagsList] = useState(null);
  const [typeCollabList, setTypeCollabList] = useState(null);
  var formData = new FormData();
  formData.append("id", id);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationById",
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
    if (e) {
      setContactInformation(e.response);
    }
  }

  function onChangeContactProfile() {
    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationById",
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
          <div className="row profile-head">
            <div className="col-sm-8">
              <h5>
                {contactInformation?.firstname} {contactInformation?.lastname} (
                {contactInformation?.type === 1 ? "Morale" : "Physique"})
              </h5>
              <p>{contactInformation?.description}</p>
              <p>
                <a href={"http://" + contactInformation?.url} target="_blank">
                  {contactInformation?.url}
                </a>
              </p>
            </div>

            <div className="col-sm-4">
              <div className="btn-groups">
                <Link className="prev-btn" to="/contactsorganisation">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <ModalEditProfileContact
                  onChange={onChangeContactProfile}
                  contactInfo={contactInformation}
                ></ModalEditProfileContact>
              </div>
            </div>
          </div>

          <div className="row coordonnes-body mb-4">
            <table class="uk-table uk-table-striped">
              <h6>Infos</h6>
              {contactInformation?.informations.map((contInfo) => (
                <tr>
                  <td>{contInfo.value}</td>
                  <td>
                    {contInfo?.obj && contInfo?.obj?.length > 0 && (
                      <>
                        {contInfo?.obj.map((e) => (
                          <span>
                            {contInfo.value === "Tags" ||
                            contInfo.value === "Type de Collaborateur"
                              ? e.sugge.value
                              : e.valueInformations}
                            <span className="btn-group">
                              <ModalEditContact
                                selectListCollab={typeCollabList}
                                selectListTags={tagsList}
                                infosAppels={e}
                                contInfo={contInfo}
                                contact={contactInformation}
                                idInfo={e.id}
                                onChange={(e) => informationSaved(e)}
                              ></ModalEditContact>
                              <ModalDeleteInfos
                                infosPatient={e}
                                onChange={(e) => informationSaved(e)}
                              ></ModalDeleteInfos>
                            </span>
                          </span>
                        ))}
                      </>
                    )}

                    {contInfo?.obj && contInfo?.obj.length === 0 && (
                      <>Pas d'informations</>
                    )}
                    <div style={{ float: "right" }}>
                      <ModalAddContact
                        selectListCollab={typeCollabList}
                        selectListTags={tagsList}
                        infosAppels={contInfo}
                        contact={contactInformation}
                        idInfo={contInfo.id}
                        onChange={(e) => informationSaved(e)}
                      ></ModalAddContact>
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
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilContact;
