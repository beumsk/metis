import React, { useState } from "react";
import nextId from "react-id-generator";
// custom data matching??

export default function InputContactList({
  data,
  id,
  label,
  placeholder,
  multiple,
  defaultValue,
  ...props
}) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedData, setSelectedData] = useState(
    defaultValue ? [...defaultValue] : []
  );
  console.log(defaultValue);
  const inputChange = (e) => {
    let str = e.target.value.toLowerCase();
    setInput(str);
    if (e.target.value?.length >= 3) {
      setFilteredData(
        [...data].filter((x) => x.label.toLowerCase().includes(str))
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

  const addSelected = (e) => {
    console.log(multiple);
    if (multiple) {
      setInput("");
      if (!selectedData.some((x) => x.id === +e.target.id)) {
        setSelectedData([
          ...selectedData,
          filteredData.find((x) => x.id === +e.target.id),
        ]);
      }
    } else {
      setInput(e.target.innerText);
      setSelectedData(filteredData.filter((x) => x.id === +e.target.id));
    }
    setFilteredData(data);
    setOpen(false);
  };

  const removeSelected = (id) => {
    setSelectedData([...selectedData].filter((s) => s.id !== id));
  };

  const removeSelectedAll = (e) => {
    if (multiple) {
      setSelectedData([]);
    } else {
      setInput("");
      setSelectedData([]);
    }
  };

  props.onChange(selectedData);

  return (
    <div className="autocomplete">
      <label htmlFor={id}>{label || placeholder}</label>
      <div className="input-dropdown-wrap">
        <div
          className="input-wrap"
          onClick={(e) => document.getElementById(nextId()).focus()}
        >
          {/* {multiple && selectedData && ( */}
          <div className="selected-wrap">
            {multiple && (
              <>
                {selectedData.map((x) => (
                  <span key={x.id}>
                    {x.label} <i onClick={() => removeSelected(x.id)}>x</i>
                  </span>
                ))}
              </>
            )}

            <input
              type="text"
              id={nextId()}
              placeholder={placeholder}
              value={input}
              autoComplete={"off"}
              onChange={inputChange}
              onFocus={() => setOpen(true)}
              onBlur={inputBlur}
            />
          </div>
          {/* )} */}

          {selectedData.length > 0 && <i onClick={removeSelectedAll}>x</i>}
        </div>
        {open && (
          <ul>
            {filteredData?.map((x) => (
              <li key={x.id} id={x.id} onClick={addSelected}>
                {x.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
