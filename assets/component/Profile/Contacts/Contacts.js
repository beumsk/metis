import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalLierPatient from "./Modal-Lier-Patient";
import ModalLierContacts from "./Modal-Lier-Contacts";
import Table from "react-bootstrap/Table";
import ModalEditContacts from "./Modal-Edit-Contacts";
import ModalEditPatient from "./Modal-Edit-Patient";

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
  const [patientsLists, setPatientsLists] = useState(null);
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
      url: "/api/getPatientsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatientsLists(response);
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

  function onChangePatientsPatients(e) {
    console.log(e);
    if (e && e.data?.data) {
      setContacts(e.data?.data);
    }
  }

  function onChangeUpdateContact(e) {
    console.log(e);
    if (e && e.response) {
      setContacts(e.response);
    }
  }

  function patientLierResponse(e) {
    console.log(e);
    if (e && e.response) {
      setPatientsLists(e.response);
    }
  }

  function contactLierResponse(e) {
    console.log(e);
    if (e && e.response) {
      setContacts(e.response);
    }
  }

  function onChangeUpdateContact(e) {
    console.log(e.data.data);
    setContacts(e.data);
  }

  function onChangePatientsPatients(e) {
    console.log(e);
  }
  return (
    <div className="onglet-contact">
      {listContacts && listContacts.data.length > 0 && (
        <div className="d-flex mb-4 row-btn">
          <ModalLierPatient
            listPatients={patients}
            onChangePatientsPatients={(e) => patientLierResponse(e)}
          ></ModalLierPatient>
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
                {item && (
                  <tbody>
                    <tr>
                      <td></td>
                      <td>{item?.cont?.firstname}</td>
                      <td>{item?.cont?.lastname}</td>
                      <td></td>
                      <td>{item.linkDesciption}</td>
                      <td></td>
                      <td></td>

                      <td>
                        {" "}
                        <span>
                          <ModalEditContacts
                            infos={item}
                            // onChangeContacts={(e) => contactLierResponse(e)}
                            onChangeUpdateContact={(e) =>
                              onChangeUpdateContact(e)
                            }
                            listContacts={contactList}
                          />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                )}
              </>
            ))}
          </Table>
        </>
      )}

      <h5>Patients</h5>

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

        {patientsLists?.data.map((item) => (
          <>
            {item && (
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
                      <ModalEditPatient
                        infos={item}
                        // onChangeContacts={(e) => contactLierResponse(e)}
                        onChangePatientsPatients={(e) =>
                          onChangePatientsPatients(e)
                        }
                        listPatients={patients}
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            )}
          </>
        ))}
      </Table>
    </div>
  );
};

export default Contacts;
