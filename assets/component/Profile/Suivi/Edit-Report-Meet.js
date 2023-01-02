import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";
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
  const [isSentGoals, setSentGoals] = useState(false);
  const [isSentRepport, setSentRepport] = useState(false);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);
  const [formSoins, setFormSoins] = useState(
    props?.informationPatient?.followupReportsActivities?.length > 0
      ? [
          props?.informationPatient?.followupReportsActivities.filter(
            (e) => e.sugg.parentValue === "Soins"
          ),
        ][0]
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
      ? [
          props?.informationPatient?.followupReportsActivities.filter(
            (e) => e.sugg.parentValue === "Activités"
          ),
        ]
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
  console.log(formActivities, formSoins);
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
  const [showAccesSoins, setAccesSoins] = useState(
    formSoins && formSoins.length > 0 ? true : false
  );
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
  const [changeDescriptionGoals, setChangeDescriptionGoals] = useState(
    props.informationPatient.content || props.informationPatient.description
  );
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(null);
  const [changeOptions, setChangeOptions] = useState(null);
  const [reportDate, setReportDate] = useState(null);

  function onChangeGoals(e) {
    setGoalsInput(e);
  }
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

    if (formSoins?.length > 0) {
      function Cares() {
        act_id: null;
        id: null;
        value: null;
        contact: null;
        place: null;
        description: null;
      }

      console.log(formSoins);
      var copyCares = JSON.parse(JSON.stringify(formSoins));
      var i = 0;

      let arrCareHydrated = [];
      for (var prop in copyCares) {
        if (
          Object.prototype.hasOwnProperty.call(copyCares, prop) &&
          copyCares[prop] !== null
        ) {
          var care = new Cares();
          care["act_id"] = copyCares[prop]?.id;
          care["id"] = Number(prop);
          care["type"] = Number(copyCares[prop]?.sugg?.id);
          care["contact"] = copyCares[prop]?.contacts
            ? copyCares[prop]?.contacts
            : null;
          care["place"] = copyCares[prop]?.places
            ? copyCares[prop]?.places
            : null;
          care["description"] = copyCares[prop]?.description;

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
        if (
          Object.prototype.hasOwnProperty.call(copy, prop) &&
          copy[prop] !== null
        ) {
          var activities = new Activities();
          var editID = JSON.parse(JSON.stringify(...formActivities))[prop]?.id;
          let copyID = editID;
          // console.log(activities);
          activities["act_id"] = copy[prop]?.id;
          activities["id"] = Number(prop);

          // activities["id"] = Number(prop);
          activities["type"] = Number(copy[prop]?.sugg?.id);
          activities["contact"] = copy[prop]?.contacts
            ? copy[prop]?.contacts
            : null;
          activities["place"] = copy[prop]?.places ? copy[prop]?.places : null;
          activities["description"] = copy[prop]?.description;
          console.log(copy[prop]);
          arrActivitiesHydrated.push(activities);
        }
      }

      formActivities.splice(0, formActivities.length);
      formActivities.push(...arrActivitiesHydrated);
      console.log(formActivities);
      setFormActivities(formActivities);
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
    setChangeDescriptionGoals(e);
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

  const sentCalls = (e) => {
    // if (props.informationPatient.type === 2){
    //   formData.append("activityType", 1);
    // }
    console.log(props?.informationPatient);
    var formData = new FormData();
    formData.append("idRapport", props?.informationPatient?.id);

    if (changeDate !== null) {
      formData.append("changeDate", changeDate);
    } else {
      formData.append(
        "changeDate",
        new Date(props?.informationPatient?.creationDate).toJSON().slice(0, 10)
      );
    }

    formData.append("changeGoals", JSON.stringify(goalsInput));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append("goalsInput", JSON.stringify(goalsInput));
    formData.append("userId", userId);
    formData.append("patiId", patiId);
    formData.append("description", changeDescriptionGoals);
    console.log(changeDescriptionGoals);

    axios({
      method: "post",
      url: "/api/updateCalls",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      // location.replace(window.location.origin + "/" + idPatient);
      setSentGoals(true);
    });
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

    if (changeDate === null) {
      formData.append("changeDate", props.informationPatient.reportDate);
    } else {
      formData.append("changeDate", changeDate);
    }

    formData.append("changeGoals", JSON.stringify(changeGoals));
    formData.append("contId", JSON.stringify(changeContacts));
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", JSON.stringify(goalsInput));
    formData.append("meetType", meetType);
    formData.append("userId", userId);
    formData.append("patiId", patiId);
    formData.append("formSoins", JSON.stringify(formSoins));
    formData.append("formActivities", JSON.stringify(formActivities));
    formData.append("formIndicateurs", JSON.stringify(formIndicateurs));
    axios({
      method: "post",
      url: "/api/updateSendReport",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      console.log(response);
    });
  };

  function onChangeValuesByOnCareForm(e) {
    console.log(e);
    if (formSoins.filter((el) => e[0].id === el.id)) {
      formSoins.filter((el) => e[0].id === el.id)[0].type =
        e[0].value === undefined ? null : e[0].value;
      formSoins.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact === undefined ? null : e[0].contact;
      formSoins.filter((el) => e[0].id === el.id)[0].place =
        e[0].place === undefined ? null : e[0].place;
      formSoins.filter((el) => e[0].id === el.id)[0].description =
        e[0].description === undefined ? null : e[0].description;

      setFormSoins(formSoins);
      console.log(formSoins);
    }
  }

  function onChangeValuesByActivitiesForm(e) {
    console.log(e);
    if (formActivities.filter((el) => e[0].id === el.id)) {
      formActivities.filter((el) => e[0].id === el.id)[0].type =
        e[0].value === undefined ? null : e[0].value;
      formActivities.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact === undefined ? null : e[0].contact;
      formActivities.filter((el) => e[0].id === el.id)[0].place =
        e[0].place === undefined ? null : e[0].place;
      formActivities.filter((el) => e[0].id === el.id)[0].description =
        e[0].description === undefined ? null : e[0].description;

      setFormActivities(formActivities);
      console.log(formActivities);
    }
  }

  const onChangeValuesIndicateursForm = (e) => {
    // setSelectedTypeCVC(e[0].selectedOptionType);

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
      {props?.informationPatient?.activityType === 1 && (
        <>
          <h5 className="mt-4 mb-4">Ajouter un rapport</h5>
          {/* <Form.Control type="text" id="inputText" className="mt-4" /> */}
          <Form.Group className="mb-3">
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
                  defaultChecked={formSoins?.length > 0}
                  type={"radio"}
                  id={`inline-radio-21`}
                />
                <Form.Check
                  inline
                  label="Non"
                  name="group26"
                  defaultChecked={formSoins?.length === 0}
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
                        id={form.id}
                        typeValue={form.type}
                        type={type}
                        contacts={props?.contacts}
                        formCaresEdit={form}
                        places={props.places}
                        onChange={onChangeValuesByOnCareForm}
                      ></AddSoinsByReport>
                      {formSoins && formSoins.length > 1 && (
                        <button
                          className="uk-button uk-button-default"
                          onClick={(e) => onClickDeleteOnCare(form.id)}
                        >
                          Supprimer un autre soin
                        </button>
                      )}
                    </>
                  ))}

                  <button
                    className="uk-button uk-button-default"
                    onClick={(e) => onClickOnCare({ id: formSoins.length })}
                  >
                    Ajouter un autre soin
                  </button>
                </div>
              )}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
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
                    props?.informationPatient?.followupReportsActivities
                      ?.length > 0
                  }
                  type={"radio"}
                  id={`inline-radio-23`}
                />
                <Form.Check
                  inline
                  label="Non"
                  name="group25"
                  defaultChecked={
                    props?.informationPatient?.followupReportsActivities
                      ?.length === 0
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
                        key={idx}
                        contacts={props.contacts}
                        places={props.places}
                        formActivitiesEdit={form}
                        onChange={onChangeValuesByActivitiesForm}
                      ></AddActivitiesByReport>
                      {formActivities && formActivities.length > 1 && (
                        <button
                          className="uk-button uk-button-default"
                          onClick={(e) => onClickDeleteActivitiesForm(form.id)}
                        >
                          {form.id} Supprimer un autre soin
                        </button>
                      )}
                    </>
                  ))}

                  <button
                    className="uk-button uk-button-default"
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
          <Form.Group className="mb-3">
            <div className="d-flex">
              <div key={`inline-radio`}>
                <Form.Label htmlFor="inputValue" className="mr-4 uk-form-label">
                  Y'a t'il des indicateurs ?
                </Form.Label>
                <Form.Check
                  inline
                  label="Oui"
                  onClick={(e) => choiceIndicateurs(true)}
                  name="group24"
                  defaultChecked={
                    props?.informationPatient?.followupReportsIndicators
                      ?.length > 0
                  }
                  type={"radio"}
                  id={`inline-radio-25`}
                />
                <Form.Check
                  inline
                  label="Non"
                  name="group24"
                  defaultChecked={
                    props?.informationPatient?.followupReportsIndicators
                      ?.length === 0
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
                          className="uk-button uk-button-default"
                          onClick={(e) =>
                            onClickDeleteIndicateursForm(idx, form.id)
                          }
                        >
                          Supprimer un autre soin
                        </button>
                      )}

                      {formIndicateurs && formIndicateurs.length < 3 && (
                        <button
                          className="uk-button uk-button-default"
                          onClick={(e) =>
                            onClickAddIndicateurs({
                              id: formIndicateurs.length,
                            })
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

          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Type de rencontre
          </Form.Label>
          <Form.Select
            size="lg"
            className="uk-select"
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
        </>
      )}
      <Form.Label htmlFor="inputValue" className="uk-form-label">
        Date de la rencontre
      </Form.Label>

      {reportDate ? (
        <Form.Control
          type="date"
          defaultValue={
            props?.informationPatient && props?.informationPatient?.reportDate
              ? new Date(props?.informationPatient?.reportDate)
                  .toJSON()
                  .slice(0, 10)
              : ""
          }
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          className="uk-select"
          id="inputValueSpécifique"
        />
      ) : (
        <Form.Control
          type="date"
          defaultValue={
            props?.informationPatient && props?.informationPatient?.reportDate
              ? new Date(props?.informationPatient?.reportDate)
                  .toJSON()
                  .slice(0, 10)
              : ""
          }
          placeholder="Here edit the release date"
          onChange={(e) => onChangeDate(e)}
          className="uk-select"
          id="inputValueSpécifique"
        />
      )}
      <InputGoalsList
        goals={props?.goals}
        defaultValue={
          props?.informationPatient && props?.informationPatient?.fogo
            ? props?.informationPatient?.fogo
            : null
        }
        onChangeGoals={onChangeGoals}
      />
      {props?.informationPatient?.hasOwnProperty("type") === false && (
        <InputContactList
          contacts={props.contacts}
          defaultValue={props?.informationPatient?.cont}
          onChange={onChangeContacts}
        />
      )}
      {props?.informationPatient?.hasOwnProperty("type") === true && (
        <InputContactList
          contacts={props.contacts}
          defaultValue={props?.informationPatient?.cont}
          onChange={onChangeContacts}
        />
      )}
      {props?.informationPatient?.activityType === 1 && (
        <>
          <InputPlaceList
            places={props.places}
            defaultValue={props?.informationPatient?.plac?.id}
            onChange={onChangePlaces}
          />

          <Editor
            onChange={editorChange}
            content={
              props.informationPatient.content ||
              props.informationPatient.description
            }
          ></Editor>
        </>
      )}
      {props?.informationPatient?.activityType !== 1 && (
        <>
          <Form.Label htmlFor="inputValue">Description</Form.Label>
          <Editor
            onChange={editorChange}
            content={
              props.informationPatient.content ||
              props.informationPatient.description
            }
          ></Editor>
          {/* <Form.Control
            as="textarea"
            className="mt-4"
            placeholder="Leave a comment here"
            onChange={(e) => setChangeDescriptionGoals(e.target.value)}
            defaultValue={props.informationPatient.description}
            style={{ height: "100px" }}
          /> */}

          <button onClick={(e) => sentCalls(e)} className="mt-4 btn-metis">
            Confirmer
          </button>
          {isSentGoals && <FontAwesomeIcon icon={faCheck} />}
        </>
      )}
      {props?.informationPatient?.activityType === 1 && (
        <>
          <button onClick={(e) => sentRapport(e)} className="mt-4 btn-metis">
            Confirmer
          </button>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
        </>
      )}
    </div>
  );
}

export default EditReportMeet;
