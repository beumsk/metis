import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { array } from "prop-types";
import axios from "axios";
import Form from "react-bootstrap/Form";
import useAuth from "../../../hooks/useAuth";
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function InputContactList(props) {
  const [auth, setAuth] = React.useState(useAuth());
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [defaultValueFormatted, setDefaultValueFormatted] = React.useState([]);
  const loading = open && options.length === 0;
  const [inputValue, setInputValue] = React.useState("");
  let arr = [];
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.
      console.log(props.contacts);
      if (active) {
        let formData = new FormData();
        formData.append("query", inputValue);
        console.log(formData);
        axios({
          method: "post",
          url: "/api/getContactsForSelect",
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            console.log(response);
            setOptions([...response.data]);
          })
          .catch(function (response) {});
        // setOptions([...props.contacts.data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }

    if (props.defaultValue !== null && props.defaultValue !== undefined) {
      console.log(props.defaultValue);

      for (let index = 0; index < props.defaultValue.length; index++) {
        const element = props.defaultValue[index];

        arr.push({ value: element.id, label: element.lastname });
      }

      if (arr && arr.length > 0) {
        setDefaultValueFormatted([...arr]);
        console.log(defaultValueFormatted);
      }
    }
  }, [open]);
  console.log(props?.defaultValue);
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: "100%" }}
      open={open}
      // style={{ margin: "1rem 0 1rem 0" }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.label === value.title}
      getOptionLabel={(option) => option.label}
      options={options}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        console.log(newInputValue);

        let formData = new FormData();
        formData.append("query", newInputValue);
        console.log(formData);
        axios({
          method: "post",
          url: "/api/getContactsForSelect",
          data: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.auth.accessToken}`,
          },
        })
          .then(function (response) {
            console.log(response);
            setOptions([...response.data]);
          })
          .catch(function (response) {});
      }}
      onChange={(event, newValue) => {
        props.onChange(newValue);
      }}
      loading={loading}
      freeSolo={true}
      multiple
      defaultValue={props?.defaultValue || []}
      renderInput={(params) => (
        <>
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Contacts
          </Form.Label>
          <TextField
            {...params}
            // label="Contacts"
            className="input-autocomplete"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        </>
      )}
    />
  );
}
