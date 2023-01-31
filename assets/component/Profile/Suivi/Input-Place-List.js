import React, { useState } from "react";
export default function Autocomplete({
  data,
  id,
  label,
  placeholder,
  multiple,
  ...props
}) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedData, setSelectedData] = useState([]);

  const inputChange = (e) => {
    let str = e.target.value.toLowerCase();
    setInput(str);
    console.log(props);
    if (e.target.value?.length >= 3) {
      setFilteredData(
        [...data].filter((x) => x.lastname.toLowerCase().includes(str))
      );
    } else {
      setFilteredData(data);
    }
  };

  const inputBlur = (e) => {
    setTimeout(() => {
      setOpen(false);
    }, 250);
  };

  const addSelected = (e, data) => {
    // console.log(id);
    if (multiple) {
      setInput("");
      if (selectedData.indexOf(e.target.innerText) === -1) {
        setSelectedData([...selectedData, data.id]);
        console.log(selectedData);
        props.onChange(selectedData);
      }
    } else {
      setInput(e.target.innerText);
      setSelectedData([data.id]);
    }

    setFilteredData(data);
    setOpen(false);
  };

  const removeSelected = (x) => {
    setSelectedData([...selectedData].filter((s) => s !== x));
  };

  const removeSelectedAll = (e) => {
    if (multiple) {
      setSelectedData([]);
    } else {
      setInput("");
      setSelectedData([]);
    }
  };

  if (selectedData && selectedData.length > 0) {
    console.log(selectedData);
    props.onChange(selectedData);
  }

  return (
    <div className="App-AutoComplete autocomplete">
      <label htmlFor={id} className="uk-form-label form-label">
        {label || placeholder}
      </label>
      <div className="input-dropdown-wrap">
        <div className="input-wrap">
          {multiple && selectedData && (
            <div className="selected-wrap">
              {selectedData.map((x) => (
                <span key={x}>
                  {x} <i onClick={() => removeSelected(x)}>x</i>
                </span>
              ))}
            </div>
          )}
          <input
            type="text"
            id={id}
            // placeholder={placeholder}
            value={input}
            className="uk-text"
            onChange={inputChange}
            onFocus={() => setOpen(true)}
            onBlur={inputBlur}
          />
          {selectedData.length > 0 && <i onClick={removeSelectedAll}>x</i>}
        </div>
        {open && (
          <ul>
            {filteredData?.map((x) => (
              <li key={x.id} onClick={(e) => addSelected(e, x)}>
                {x.lastname}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
