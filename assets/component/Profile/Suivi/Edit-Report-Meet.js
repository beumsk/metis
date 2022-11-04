import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Indicateurs-Form-AddReports/Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputGoalsList from "./Input-Goals-List";
function EditReportMeet(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);
  const [formSoins, setFormSoins] = useState(
    props?.informationPatient?.followupReportsCare?.length > 0
      ? [{ ...props?.informationPatient?.followupReportsCare }]
      : [
          {
            idEdit: null,
            id: 0,
            value: null,
            contact: null,
            place: null,
            description: null,
          },
        ]
  );
  const [formActivities, setFormActivities] = useState(
    props?.informationPatient?.followupReportsActivities?.length > 0
      ? [{ ...props?.informationPatient?.followupReportsActivities }]
      : [
          {
            idEdit: null,
            id: 0,
            value: null,
            contact: null,
            place: null,
            description: null,
          },
        ]
  );
  const [formIndicateurs, setFormIndicateurs] = useState([
    {
      id: 0,

      selectedOptionType: "CVC",
      indicateursFormCVC: props.indicatorsResponse
        ? [...props.indicatorsResponse.filter((e) => e.indi.id < 4)]
        : null,
      indicateursFormHestiaRisqueDeces: props.indicatorsResponse
        ? [
            ...props.indicatorsResponse.filter((e) => {
              if (e.indi.id > 6 && e.indi.id < 11) {
                return e;
              }
            }),
          ]
        : null,
      indicateursEstLeLogement: props.indicatorsResponse
        ? [
            ...props.indicatorsResponse.filter((e) => {
              if (e.indi.id > 3 && e.indi.id < 7) {
                return e;
              }
            }),
          ]
        : null,
    },
  ]);

  const [selectedTypeCVC, setSelectedTypeCVC] = useState(null);
  //   formData.append("pathString", props.link);
  const [options, setOptions] = useState([
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [optionsConst, setOptionsConst] = useState([
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [contacts, setContacts] = useState(null);
  const [showAccesSoins, setAccesSoins] = useState(false);
  const [showActivities, setActivities] = useState(false);
  const [showIndicateurs, setChoiceIndicateurs] = useState(false);

  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeFormActivities, setTypeFormActivities] = useState(null);
  const [meetType, setMeetType] = useState(null);
  const [goalsInput, setGoalsInput] = useState(null);
  const [changeTypeMeet, setChangeTypeMeet] = useState(null);
  const [changeDate, setChangeDate] = useState(null);
  const [changeGoals, setChangeGoals] = useState(null);
  const [changeContacts, setChangeContacts] = useState(null);
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(null);
  const [changeOptions, setChangeOptions] = useState(null);
  const [reportDate, setReportDate] = useState(null);

  useEffect(() => {
    if (
      props?.informationPatient &&
      props?.informationPatient?.followupReportsCare?.length > 0
    ) {
      choiceSoins(true);
    }

    if (
      props?.informationPatient &&
      props?.informationPatient?.followupReportsActivities?.length > 0
    ) {
      choiceActivities(true);
    }

    if (
      props?.informationPatient &&
      props?.informationPatient?.followupReportsIndicators?.length > 0
    ) {
      choiceIndicateurs(true);
    }

    setReportDate(
      new Date(props?.informationPatient?.reportDate?.timestamp * 1000).toJSON()
    );

    if (props?.informationPatient?.followupReportsCare?.length > 0) {
      function Cares() {
        care_id: null;
        id: null;
        value: null;
        contact: null;
        place: null;
        description: null;
      }

      var copyCares = JSON.parse(JSON.stringify(...formSoins));
      var i = 0;

      let arrCareHydrated = [];
      for (var prop in copyCares) {
        // console.log(prop);
        if (Object.prototype.hasOwnProperty.call(copyCares, prop)) {
          var care = new Cares();
          // console.log(care);
          care["care_id"] = copyCares[prop]?.id;
          care["id"] = Number(prop);
          care["value"] = Number(copyCares[prop].activity?.id);
          care["contact"] =
            copyCares[prop].cont && copyCares[prop].cont.length > 0
              ? Number(copyCares[prop].cont[0]?.orga?.id)
              : null;
          care["place"] =
            copyCares[prop].places && copyCares[prop].places.length > 0
              ? Number(copyCares[prop].places[0]?.id)
              : null;
          care["description"] = copyCares[prop].description;

          // console.log(copyCares);
          arrCareHydrated.push(care);
        }
      }
      formSoins.splice(0, formSoins.length);
      formSoins.push(...arrCareHydrated);
      setFormSoins(arrCareHydrated);
    }

    if (props?.informationPatient?.followupReportsActivities?.length > 0) {
      function Activities() {
        act_id: null;
        id: null;
        value: null;
        contact: null;
        place: null;
        description: null;
      }

      var copy = JSON.parse(JSON.stringify(...formActivities));
      var i = 0;

      let arrActivitiesHydrated = [];
      for (var prop in copy) {
        // console.log(prop);
        if (Object.prototype.hasOwnProperty.call(copy, prop)) {
          var activities = new Activities();
          var editID = JSON.parse(JSON.stringify(...formActivities))[prop].id;
          let copyID = editID;
          // console.log(activities);
          activities["act_id"] = copy[prop].id;
          activities["id"] = Number(prop);

          // activities["id"] = Number(prop);
          activities["value"] = Number(copy[prop].activity?.id);
          activities["contact"] =
            copy[prop].cont && copy[prop].cont.length > 0
              ? Number(copy[prop].cont[0]?.orga?.id)
              : null;
          activities["place"] =
            copy[prop].places && copy[prop].places.length > 0
              ? Number(copy[prop].places[0]?.id)
              : null;
          activities["description"] = copy[prop].description;

          console.log(activities);
          arrActivitiesHydrated.push(activities);
        }
      }

      formActivities.splice(0, formActivities.length);
      formActivities.push(...arrActivitiesHydrated);
      // console.log(formActivities);
      setFormActivities(formActivities);
      console.log(props.informationPatient);
    }

    // console.log(formActivities);

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formActivitiesDatas,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setTypeFormActivities(response);
      })
      .catch(function (response) {});
    setPatiId(idPatient);
    setUserId(auth.auth.idUser);
    setOptions(options);
    // setFormIndicateurs(formIndicateurs);
  }, [options]);

  const choiceActivities = (e) => {
    //
    setActivities(e);
  };
  const choiceSoins = (e) => {
    setAccesSoins(e);
  };
  const choiceIndicateurs = (e) => {
    setChoiceIndicateurs(e);
    //
    if (e === false) {
      setFormIndicateurs([{ id: 0 }]);
      setOptions([
        "HESTIA - Risque perte logement",
        "CVC",
        "HESTIA - Risque décès",
      ]);
    }
  };

  const inputChangeTypeMeet = (e) => {
    //
    setChangeTypeMeet(e.target.value);
  };

  const onChangeDate = (e) => {
    //
    setChangeDate(e.target.value);
  };

  const inputChangeGoals = (e) => {
    //
    setChangeGoals(e);
  };

  const onChangeContacts = (e) => {
    //
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    //
    setChangePlaces(e);
  };

  const onClickAddActivities = (e) => {
    setFormActivities((prevFormSoins) => [...prevFormSoins, e]);
  };

  function editorChange(e) {
    //
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs.length < 3) {
      //
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };
  const onClickOnCare = (e) => {
    //
    setFormSoins((prevFormSoins) => [...prevFormSoins, e]);
  };

  const onClickDeleteOnCare = (e) => {
    if (formSoins.length > 0) {
      let filter = formSoins.filter((el) => el.id !== e);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;
        setFormSoins(filter);
      }
    }
  };

  const onClickDeleteActivitiesForm = (e) => {
    if (formActivities.length > 0) {
      let filter = formActivities.filter((el) => el.id !== e);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;
        setFormActivities(filter);
      }
    }
  };
  let arrId = [];
  const onClickDeleteIndicateursForm = (index, id) => {
    if (formActivities.length > 0) {
      let filter = formIndicateurs.filter((el) => el.id !== index);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;

        setFormIndicateurs(filter);
      }
      //
    }

    if (formIndicateurs.length === 1) {
      setFormIndicateurs([{ id: 0 }]);
      setOptions([
        "HESTIA - Risque perte logement",
        "CVC",
        "HESTIA - Risque décès",
      ]);
    }
  };

  const sentRapport = (e) => {
    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];
    var formData = new FormData();
    let formIndic = formIndicateurs.map((el) => {
      if (
        Object.keys(el).length === 1 ||
        JSON.stringify(el) ===
          JSON.stringify({
            id: el.id,
            indicateursFormCVC: null,
            indicateursFormHestiaRisqueDeces: null,
            indicateursEstLeLogement: null,
          })
      ) {
        return null;
      } else {
        return el;
      }
    });

    let formIndicatorsGrouped = formIndicateurs.filter(
      (e) => e.selectedOptionType !== null && !opt.includes(e.id)
    );

    //
    let arr = {};
    for (let index = 0; index < formIndicatorsGrouped.length; index++) {
      const element = formIndicatorsGrouped[index];
      if (element.indicateursFormCVC !== null) {
        arr.indicateursFormCVC = element.indicateursFormCVC;
      }
      if (element.indicateursFormHestiaRisqueDeces !== null) {
        arr.indicateursFormHestiaRisqueDeces =
          element.indicateursFormHestiaRisqueDeces;
      }
      if (element.indicateursEstLeLogement !== null) {
        arr.indicateursEstLeLogement = element.indicateursEstLeLogement;
      }
    }

    formData.append("activityType", 1);
    formData.append("idRapport", props?.informationPatient?.id);
    formData.append("contacts", contacts);
    formData.append("changeTypeMeet", changeTypeMeet);
    formData.append("changeDate", changeDate);
    formData.append("changeGoals", changeGoals);
    formData.append("contId", changeContacts);
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", goalsInput);
    formData.append("meetType", meetType);
    formData.append(
      "formSoins",
      JSON.stringify(formSoins) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formSoins)
    );
    formData.append(
      "formActivities",
      JSON.stringify(formActivities) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formActivities)
    );
    formData.append(
      "formIndicateurs",
      JSON.stringify(formIndicatorsGrouped) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formIndicatorsGrouped)
    );
    formData.append("userId", userId);
    formData.append("patiId", patiId);

    console.log(formData);
    axios({
      method: "post",
      url: "/api/updateSendReport",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);

        if (response && formSoins) {
          let endpoints = [];

          for (let index = 0; index < formSoins.length; index++) {
            endpoints.push("/api/addCaresToReport");
          }

          axios
            .all(
              endpoints.map((endpoint, i) => {
                let care = formSoins[i];
                let formData = new FormData();

                formData.append(
                  "rapportId",
                  response.data.id ? response.data.id : null
                );
                formData.append("value", care.value ? care.value : null);
                formData.append("formSoins", JSON.stringify(care));

                axios({
                  method: "post",
                  url: endpoint,
                  data: formData,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.auth.accessToken}`,
                  },
                });
              })
            )
            .then((data) => console.log(data));
        }

        if (response && formActivities) {
          let endpoints = [];

          for (let index = 0; index < formActivities.length; index++) {
            endpoints.push("/api/addActivitiesToReport");
          }
          axios
            .all(
              endpoints.map((endpoint, i) => {
                let activities = formActivities[i];
                let formData = new FormData();

                formData.append(
                  "rapportId",
                  response.data.id ? response.data.id : null
                );
                formData.append(
                  "value",
                  activities.value ? activities.value : null
                );
                formData.append("formActivities", JSON.stringify(activities));

                axios({
                  method: "post",
                  url: endpoint,
                  data: formData,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.auth.accessToken}`,
                  },
                });
              })
            )
            .then((data) => console.log(data));
        }

        if (response && formIndicateurs) {
          for (let index = 0; index < formIndicateurs.length; index++) {
            let indi = formIndicateurs[index];
            formIndicateurs[index].rapportId = response.idRapport;
            let formData = new FormData();

            formData.append(
              "rapportId",
              response.data.id ? response.data.id : null
            );

            formData.append("formIndicateurs", JSON.stringify(indi));
            axios({
              method: "post",
              url: "/api/addIndicators",
              data: formData,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.auth.accessToken}`,
              },
            });
          }
        }
        location.replace(window.location.origin + "/" + idPatient);
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  function onChangeValuesByOnCareForm(e) {
    if (formSoins.filter((el) => e[0].id === el.id)) {
      formSoins.filter((el) => e[0].id === el.id)[0].id =
        e[0].idEdit !== null ? e[0].id : null;
      formSoins.filter((el) => e[0].id === el.id)[0].care_id =
        e[0].idEdit !== null ? e[0].care_id : null;
      formSoins.filter((el) => e[0].id === el.id)[0].value =
        e[0].value !== null ? e[0].value : null;
      formSoins.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact !== null ? e[0].contact : null;
      formSoins.filter((el) => e[0].id === el.id)[0].place =
        e[0].place !== null ? e[0].place : null;
      formSoins.filter((el) => e[0].id === el.id)[0].description =
        e[0].description !== null ? e[0].description : null;

      //
    }
  }

  function onChangeValuesByActivitiesForm(e) {
    console.log(e);
    if (formActivities.filter((el) => e[0].id === el.id)) {
      // idEdit
      formActivities.filter((el) => e[0].id === el.id)[0].act_id =
        e[0].act_id !== null ? e[0].act_id : null;
      formActivities.filter((el) => e[0].id === el.id)[0].id =
        e[0].id !== null ? e[0].id : null;
      formActivities.filter((el) => e[0].id === el.id)[0].value =
        e[0].value !== null ? e[0].value : null;
      formActivities.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact !== null ? e[0].contact : null;
      formActivities.filter((el) => e[0].id === el.id)[0].place =
        e[0].place !== null ? e[0].place : null;
      formActivities.filter((el) => e[0].id === el.id)[0].description =
        e[0].description !== null ? e[0].description : null;
      console.log(formActivities);
      //
    }
    // console.log(formActivities);
  }

  const onChangeValuesIndicateursForm = (e) => {
    // setSelectedTypeCVC(e[0].selectedOptionType);
    console.log(e);

    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];
    for (let index = 0; index < formIndicateurs.length; index++) {
      const element = formIndicateurs[index];

      element.id = index;
    }
    if (
      formIndicateurs &&
      formIndicateurs?.filter((el) => e[0].id === el.id)[0] &&
      formIndicateurs?.filter((el) => e[0].id === el.id)[0]?.id !== null
    ) {
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id = e[0].id;

      formIndicateurs.filter((el) => e[0].id === el.id)[0].selectedOptionType =
        e[0].selectedOptionType;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].indicateursFormCVC =
        e[0].indicateursFormCVC;
      formIndicateurs.filter(
        (el) => e[0].id === el.id
      )[0].indicateursFormHestiaRisqueDeces =
        e[0].indicateursFormHestiaRisqueDeces;
      formIndicateurs.filter(
        (el) => e[0].id === el.id
      )[0].indicateursEstLeLogement = e[0].indicateursEstLeLogement;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_corps =
        e[0].id_corps;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_vetements =
        e[0].id_vetements;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_comportement =
        e[0].id_comportement;

      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_bailleur =
        e[0].id_bailleur;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_voisinage =
        e[0].id_voisinage;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_hygiene =
        e[0].id_hygiene;

      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_secur =
        e[0].id_secur;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_sant =
        e[0].id_sant;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id_conso =
        e[0].id_conso;
    }
    console.log("FINAL", formIndicateurs);
    if (
      formIndicateurs &&
      e[0].selectedOptionType &&
      e[0].selectedOptionType !== null
    ) {
      //
      let test = formIndicateurs.filter(
        (e) => e.selectedOptionType !== null && !opt.includes(e.id)
      );

      let arr1 = [];

      for (let index = 0; index < formIndicateurs.length; index++) {
        const element = formIndicateurs[index];

        arr1.push(element.selectedOptionType);
      }
      let resultA = arr1.filter(
        (elm) =>
          !options
            .map((elm) => JSON.stringify(elm))
            .includes(JSON.stringify(elm))
      );

      // a diff b
      let resultB = opt.filter(
        (elm) =>
          !arr1.map((elm) => JSON.stringify(elm)).includes(JSON.stringify(elm))
      );

      options.splice(0, options.length);

      // if ([...resultA, ...resultB]) {
      options.push(...resultB);

      setOptions(options);
      // }

      for (let index = 0; index < opt.length; index++) {
        const element = opt[index];
        test.map((e) => {
          if (element === e.selectedOptionType) {
            opt?.splice(index, 1);
            // let opt = formIndicateurs.filter(
            //   (e) => e.selectedOptionType !== null && !opt.includes(e.id)
            // );

            //
            if (opt && opt.length > 0) {
              options.splice(0, options.length);
              // setOptions(options);

              if (options.length === 0) {
                options.push(...opt);

                setOptions(options);
                // options.filter(e => e === opt.includes(opt))
              }
            }
          }
        });
      }
    }
  };

  if (formIndicateurs !== null) {
    console.log(formIndicateurs);
  }

  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1 === object2;
      });
    });
  }

  function optUpdate(opt) {
    setOptions(opt);
  }

  return (
    <div className="report-content">
      <h5 className="mt-4 mb-4">Ajouter un rapport</h5>
      {/* <Form.Control type="text" id="inputText" className="mt-4" /> */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des soins ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceSoins(true)}
              name="group26"
              defaultChecked={
                props?.informationPatient?.followupReportsCare?.length > 0
              }
              type={"radio"}
              id={`inline-radio-21`}
            />
            <Form.Check
              inline
              label="Non"
              name="group26"
              defaultChecked={
                props?.informationPatient?.followupReportsCare?.length === 0
              }
              onClick={(e) => choiceSoins(false)}
              type={"radio"}
              id={`inline-radio-22`}
            />
          </div>
        </div>
        <div>
          {showAccesSoins && (
            <div className="sous-form">
              {formSoins.map((form, idx) => (
                <>
                  <AddSoinsByReport
                    key={form.id}
                    id={idx}
                    type={type}
                    contacts={props?.contacts}
                    formCaresEdit={form}
                    places={props.places}
                    onChange={onChangeValuesByOnCareForm}
                  ></AddSoinsByReport>
                  {formSoins && formSoins.length > 1 && (
                    <button onClick={(e) => onClickDeleteOnCare(form.id)}>
                      Supprimer un autre soin
                    </button>
                  )}
                </>
              ))}

              <button onClick={(e) => onClickOnCare({ id: formSoins.length })}>
                Ajouter un autre soin
              </button>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des activitées ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceActivities(true)}
              name="group25"
              defaultChecked={
                props?.informationPatient?.followupReportsActivities?.length > 0
              }
              type={"radio"}
              id={`inline-radio-23`}
            />
            <Form.Check
              inline
              label="Non"
              name="group25"
              defaultChecked={
                props?.informationPatient?.followupReportsActivities?.length ===
                0
              }
              onClick={(e) => choiceActivities(false)}
              type={"radio"}
              id={`inline-radio-24`}
            />
          </div>
        </div>
        <div>
          {showActivities && (
            <div className="sous-form">
              {formActivities.map((form, idx) => (
                <>
                  <AddActivitiesByReport
                    type={typeFormActivities}
                    id={idx}
                    key={form.id}
                    contacts={props.contacts}
                    places={props.places}
                    formActivitiesEdit={form}
                    onChange={onChangeValuesByActivitiesForm}
                  ></AddActivitiesByReport>
                  {formActivities && formActivities.length > 1 && (
                    <button
                      onClick={(e) => onClickDeleteActivitiesForm(form.id)}
                    >
                      Supprimer un autre soin
                    </button>
                  )}
                </>
              ))}
              <button
                onClick={(e) =>
                  onClickAddActivities({ id: formActivities.length })
                }
              >
                Ajouter un autre activitée
              </button>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`}>
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des indicateurs ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceIndicateurs(true)}
              name="group24"
              defaultChecked={
                props?.informationPatient?.followupReportsIndicators?.length > 0
              }
              type={"radio"}
              id={`inline-radio-25`}
            />
            <Form.Check
              inline
              label="Non"
              name="group24"
              defaultChecked={
                props?.informationPatient?.followupReportsIndicators?.length ===
                0
              }
              onClick={(e) => choiceIndicateurs(false)}
              type={"radio"}
              id={`inline-radio-26`}
            />
          </div>
        </div>
        <div>
          {showIndicateurs && (
            <div className="sous-form">
              {formIndicateurs?.map((form, idx) => (
                <>
                  <AddIndicateursByReport
                    type={type}
                    key={idx}
                    id={form.id}
                    // followupReportsIndicators={
                    //   formIndicateurs
                    // }
                    form={form}
                    options={options}
                    onChange={onChangeValuesIndicateursForm}
                    contacts={props.contacts}
                    places={props.places}
                  ></AddIndicateursByReport>
                  {(formIndicateurs[0].indicateursEstLeLogement !== null ||
                    formIndicateurs[0].indicateursFormCVC !== null ||
                    formIndicateurs[0].indicateursFormHestiaRisqueDeces !==
                      null) && (
                    <button
                      onClick={(e) =>
                        onClickDeleteIndicateursForm(idx, form.id)
                      }
                    >
                      Supprimer un autre soin
                    </button>
                  )}

                  {formIndicateurs && formIndicateurs.length < 3 && (
                    <button
                      onClick={(e) =>
                        onClickAddIndicateurs({ id: formIndicateurs.length })
                      }
                    >
                      Ajouter un autre indicateur
                    </button>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </Form.Group>

      <Form.Label htmlFor="inputValue">Type de rencontre</Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => inputChangeTypeMeet(e)}
        defaultValue={props?.informationPatient?.reportType}
        // selected={props?.informationPatient?.reportType}
      >
        <>
          <option>Choissisez votre type de rencontre</option>
          <option value={1}>Vu</option>
          <option value={2}>Rencontre</option>
          <option value={3}>Repos</option>
          <option value={4}>Recherche</option>
        </>
      </Form.Select>

      <Form.Label htmlFor="inputValue">Date de la rencontre</Form.Label>

      {reportDate ? (
        <Form.Control
          type="date"
          defaultValue={new Date(props?.informationPatient?.reportDate)
            .toJSON()
            .slice(0, 10)}
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          id="inputValueSpécifique"
        />
      ) : (
        <Form.Control
          type="date"
          // defaultValue={new Date(
          //   props?.informationPatient?.reportDate * 1000
          // ).toJSON()}
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          id="inputValueSpécifique"
        />
      )}

      <InputGoalsList
        goals={props?.informationPatient?.followupReportsGoals}
        // defaultValue={props?.informationPatient?.cont[0]?.orga?.id}
        onChange={onChangeContacts}
      />

      <InputContactList
        contacts={props.contacts}
        defaultValue={props?.informationPatient?.cont[0]?.orga?.id}
        onChange={onChangeContacts}
      />
      <InputPlaceList
        places={props.places}
        defaultValue={props?.informationPatient?.plac?.id}
        onChange={onChangePlaces}
      />

      <Editor
        onChange={editorChange}
        content={props.informationPatient.content}
      ></Editor>

      <button onClick={(e) => sentRapport(e)}>Confirmer</button>
    </div>
  );
}

export default EditReportMeet;
