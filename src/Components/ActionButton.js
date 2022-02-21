import React from "react";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ffffff",
    color: "#091353",
    margin: theme.spacing(1)
  }
}));

export default function ActionButton({ color, chirldren, onClick }) {
  const styles = useStyles();
  return (
    <div>
      <IconButton className={styles.button} color={color} onClick={onClick}>
        {chirldren}
      </IconButton>
    </div>
  );
}
