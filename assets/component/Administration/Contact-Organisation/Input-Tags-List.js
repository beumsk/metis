import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Form from "react-bootstrap/Form";
import useAuth from "../../../hooks/useAuth";
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function InputTagsList(props) {
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
      if (active) {
        let formData = new FormData();
        formData.append("id", 159);
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
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: "100%" }}
      size="small"
      open={open}
      // style={{ margin: "1rem 0 1rem 0" }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.value === value.title}
      getOptionLabel={(option) => option.value}
      options={options}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        props.onChange(newValue);
        setOpen(true);
      }}
      onBlur={(event, newValue) => {
        setOpen(false);
      }}
      loading={loading}
      freeSolo={true}
      multiple
      defaultValue={props?.defaultValue ? props?.defaultValue : []}
      renderInput={(params) => (
        <>
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Chercher par tag
          </Form.Label>
          <TextField
            {...params}
            // label="Contacts"
            className="input-autocomplete mb-3"
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
