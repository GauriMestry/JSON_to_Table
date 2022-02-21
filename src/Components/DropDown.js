import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function DropDown({ options, label, name, value, onChange }) {
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select
          required
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {options.map((item) => (
            <MenuItem key={item.id} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
