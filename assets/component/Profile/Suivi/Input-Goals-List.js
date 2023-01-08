import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { array } from "prop-types";
import Form from "react-bootstrap/Form";
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function InputContactList(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [defaultValueFormatted, setDefaultValueFormatted] = React.useState([]);
  const loading = open && options.length === 0;
  let arr = [];
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...props.goals.data]);
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

    if (props.defaultValue !== null) {
      for (let index = 0; index < props.defaultValue.length; index++) {
        const element = props.defaultValue[index];

        arr.push({ value: element.id, label: element.description });
      }

      if (arr && arr.length > 0) {
        setDefaultValueFormatted([...arr]);
      }
    }
  }, [open]);

  return (
    <Autocomplete
      // id="asynchronous-demo"
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
      onChange={(event, newValue) => {
        props.onChangeGoals(newValue);
      }}
      loading={loading}
      freeSolo={true}
      multiple
      defaultValue={arr}
      renderInput={(params) => (
        <>
          <Form.Label htmlFor="inputValue" className="uk-form-label">
            Objectifs
          </Form.Label>
          <TextField
            {...params}
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
