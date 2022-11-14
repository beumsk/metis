import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../Menu";
const ProfilAppel = () => {
  //   const [auth, setAuth] = useState(useAuth());
  //   let id = useParams().id;
  //   const [patientsList, setPatientsList] = useState(null);
  //   const [lengthList, setLengthList] = useState(10);
  //   const [idAppel, setIdAppel] = useState(id);
  //   var formData = new FormData();
  //   formData.append("page", lengthList.toString());
  //   console.log(idAppel);
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/getCallsAndOrganisationRunning",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     //handle success
    //     setPatientsList(response);
    //   })
    //   .catch(function (response) {});
  }, []);

  //   const readMore = () => {
  //     setLengthList(lengthList + 10);
  //   };

  return (
    <>
      <Menu></Menu>
      <section>
        <div className="container emp-profile">
          <div className="row profile-head">
            <h5>Appel</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilAppel;
