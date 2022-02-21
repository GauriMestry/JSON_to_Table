import { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function DataForm(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleReset = () => {
    setFormValues(initialValues);
  };
  return { formValues, setFormValues, handleInput, handleReset };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(4)
    }
  }
}));

export function MainForm(props) {
  const formStyles = useStyles();

  const { children, ...other } = props;
  return (
    <form className={formStyles.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
