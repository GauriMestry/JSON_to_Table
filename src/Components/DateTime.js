import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DateTime(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEvent = (name, value) => ({
    target: {
      name,
      value
    }
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="yyyy-mm-dd:hh:mm"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEvent(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
