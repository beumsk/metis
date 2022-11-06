import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalLierPatient from "./Modal-Lier-Patient";
import ModalLierContacts from "./Modal-Lier-Contacts";
import Table from "react-bootstrap/Table";

const Contacts = () => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [listContacts, setContacts] = useState(null);
  const [options, setOptions] = useState();
  const [contactList, setContactList] = useState();
  const [filterDates, setFilterDates] = useState();
  const [patients, setPatients] = useState(null);
  useEffect(() => {
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
        setContacts(response);
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
        setContactList(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getAllPatients",
      data: formData,
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

  function contactLierResponse(e) {
    console.log(e);
    if (e && e.response) {
      setContacts(e.response);
    }
  }
  return (
    <div className="onglet-contact">
      {listContacts && listContacts.data.length > 0 && (
        <div className="d-flex mb-4 row-btn">
          <ModalLierPatient listPatients={patients}></ModalLierPatient>
          <ModalLierContacts
            onChangeContacts={(e) => contactLierResponse(e)}
            listContacts={contactList}
          ></ModalLierContacts>
        </div>
      )}

      {/* <h5 className="mt-4 mb-4">Tous les rapports</h5> */}
      <h5>Contacts</h5>
      {listContacts && listContacts.data.length > 0 && (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>Surnom</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Description</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Actions</th>
              </tr>
            </thead>
            {listContacts?.data.map((item) => (
              <>
                <tbody>
                  <tr>
                    <td></td>
                    <td>{item?.cont?.firstname}</td>
                    <td>{item?.cont?.lastname}</td>
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>

                    <td>
                      {" "}
                      <span>
                        <button>Modifier</button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </>
      )}

      <h5>Patients</h5>
      {listContacts && listContacts.data.length > 0 && (
        <>
          {/* <h6>Liste de fichiers déjà présents</h6> */}
          <Table striped>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Organisation</th>
                <th>Type</th>
                <th>Description</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Actions</th>
              </tr>
            </thead>

            {listContacts?.data.map((item) => (
              <>
                <tbody>
                  <tr>
                    <td>
                      {item?.orpa?.firstname} {item?.orpa?.lastname}
                    </td>
                    <td>
                      {/* {new Date(patient.creationDate).toLocaleDateString()} */}
                    </td>
                    <td></td>
                    <td></td>
                    <td> </td>
                    <td></td>

                    <td>
                      {" "}
                      <span>
                        <button>Modifier</button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </>
      )}
    </div>
  );
};

export default Contacts;
