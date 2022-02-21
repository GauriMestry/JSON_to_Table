import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles
} from "@material-ui/core";
import ButtonComponent from "/src/Components/ButtonComponent.js";
import React from "react";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolutte",
    top: theme.spacing(5)
  },
  title: {
    color: "#091353",
    fontWeight: 700
  }
}));
export default function FormDialog({ title, children, open, setOpen }) {
  const styles = useStyles();
  return (
    <div>
      <Dialog open={open} maxWidth="lg" className={styles.dialog}>
        <DialogTitle className={styles.title}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            {title}
            <ButtonComponent
              text="X"
              sx={{
                borderColor: "#ffffff",
                color: "#B42B51",
                fontSize: "18px"
              }}
              onClick={() => setOpen(false)}
            ></ButtonComponent>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
