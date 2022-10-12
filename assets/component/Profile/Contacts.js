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
  const [listContacts, setContacts] = useState(null);
  const [options, setOptions] = useState();
  const [filterDates, setFilterDates] = useState();
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
        console.log(response);
        setContacts(response);
      })
      .catch(function (response) {});
  }, [idPatient]);
  console.log(listContacts);
  return (
    <>
      <h5>Contacts</h5>
      {listContacts && listContacts.data.length > 0 && (
        <>
          {listContacts?.data?.map((item, id) => (
            <div className="row">
              <div className="col-sm-4">
                {item?.cont?.firstname} {item?.cont?.lastname}
              </div>
            </div>
          ))}
        </>
      )}

      <h5>Patients</h5>
      {listContacts && listContacts.data.length > 0 && (
        <>
          {/* <h6>Liste de fichiers déjà présents</h6> */}

          {listContacts?.data?.map((item, id) => (
            <div className="row">
              <div className="col-sm-4">
                {item?.orpa?.firstname} {item?.orpa?.lastname}
              </div>
              {/* <div className="col-sm-4">{item?.cont?.lastname}</div>
              <div className="col-sm-4">{item?.cont?.description}</div> */}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Contacts;
