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
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ModalEditLieux from "./Modal-Edit-Lieux";
import ModalAddLieux from "./Modal-Add-Lieux";
const ProfilLieux = () => {
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  console.log(id);
  const [contactInformation, setContactInformation] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [idAppel, setIdAppel] = useState(id);
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
        console.log(response);
        setContactInformation(response.data);
      })
      .catch(function (response) {});
  }, []);

  //   const readMore = () => {
  //     setLengthList(lengthList + 10);
  //   };

  function informationSaved(e) {
    if (e) {
      setContactInformation(e.response);
    }
  }

  return (
    <>
      <Menu></Menu>
      <section>
        <div className="container emp-profile">
          <div className="row profile-head">
            <h5>
              {contactInformation?.firstname} {contactInformation?.lastname}
            </h5>
            <p>{contactInformation?.description}</p>
          </div>

          <div className="row coordonnes-body">
            <Table>
              <h6>Infos</h6>
              {contactInformation?.informations.map((e) => (
                <tr>
                  <td>{e.value}</td>
                  <td>
                    {e?.obj && e?.obj?.length > 0 && (
                      <>
                        {e?.obj.map((e) => (
                          <span>
                            {e.valueInformations || e.sugge.value}
                            <ModalEditLieux
                              infosAppels={e}
                              contact={contactInformation}
                              idInfo={e.id}
                              onChange={(e) => informationSaved(e)}
                            ></ModalEditLieux>
                          </span>
                        ))}
                      </>
                    )}

                    {e?.obj && e?.obj.length === 0 && <>Pas d'informations</>}
                    <div style={{ float: "right" }}>
                      <ModalAddLieux
                        infosAppels={e}
                        contact={contactInformation}
                        idInfo={e.id}
                        onChange={(e) => informationSaved(e)}
                      ></ModalAddLieux>
                    </div>
                  </td>
                  <td></td>
                </tr>
              ))}
            </Table>
          </div>

          <div className="row coordonnes-body">
            <Table>
              <h6>Patients liées</h6>
              {contactInformation?.patients.map((e) => (
                <tr>
                  <td>
                    {e.firstName} {e.lastName}
                  </td>
                  <td>
                    <Link to={"/" + e.id}>Aller au Profil</Link>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilLieux;
