import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textfield: {
    padding: theme.spacing(1)
  }
}));

export default function InputText({ name, label, value, onChange }) {
  const styles = useStyles();
  return (
    <div>
      <TextField
        name={name}
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        required
        className={styles.textfield}
      />
    </div>
  );
}
