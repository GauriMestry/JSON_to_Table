import {
  Grid,
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHead,
  TableContainer
} from "@mui/material";
import Header from "./Components/Header.js";
import Form from "/src/Components/Form.js";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";
import * as DataFile from "/src/Components/Datafiles.js";
import { useState } from "react";
import ButtonComponent from "/src/Components/ButtonComponent.js";
import AddIcon from "@mui/icons-material/Add";
import FormDialog from "/src/Components/FormDialog.js";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(2)
  },
  table: {
    marginTop: theme.spacing(2),
    "& thead th": {
      fontWeight: 700,
      backgroundColor: "#091353",
      color: "#ffffff"
    },
    "& tbody td": {
      fontWeight: 300
    },
    "& tbody tr:hover": {
      backgroundColor: "#D5D5D5"
    },
    "&:last-child td, &:last-child th": {
      border: 0
    }
  },
  newdata: {
    background: "#d5d5d5",
    borderColor: "#ffffff",
    color: "#091353",
    padding: theme.spacing(2)
  },
  actionbutton: {
    padding: theme.spacing(1),
    border: "none",
    color: "#091353",
    fontSize: "medium"
  }
}));

export default function MainComponents() {
  const styles = useStyles();
  const [editRecord, setEditRecord] = useState();
  const [records, setRecords] = useState(DataFile.getAllData());
  const [open, setOpen] = useState(false);

  const update = (data, handleReset) => {
    if (data.id === 0) {
      DataFile.insertData(data);
    } else {
      DataFile.updateData(data);
    }
    handleReset();
    setOpen(false);
    setRecords(DataFile.getAllData());
    setEditRecord(null);
  };
  const openFormDialog = (item) => {
    setEditRecord(item);
    setOpen(true);
  };

  const handleDelete = (dataId) => {
    DataFile.deleteData(dataId);
    setRecords(DataFile.getAllData());
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            marginRight: "40px"
          }}
        >
          <ButtonComponent
            text="New Data"
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
            sx={{
              background: "#d5d5d5",
              borderColor: "#ffffff",
              color: "#091353"
            }}
            onClick={() => {
              setOpen(true);
              setEditRecord(null);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper} elevation={2}>
            <TableContainer>
              <Table className={styles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Business Group</TableCell>
                    <TableCell align="center">Scope</TableCell>
                    <TableCell align="center">Request Type</TableCell>
                    <TableCell align="center">Submitter</TableCell>
                    <TableCell align="center">State</TableCell>
                    <TableCell align="center">Scheduled</TableCell>
                    <TableCell align="center">Started At</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {records.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.businessgroup}</TableCell>
                      <TableCell>{item.scope}</TableCell>
                      <TableCell>{item.reqtype}</TableCell>
                      <TableCell>{item.submitter}</TableCell>
                      <TableCell>{item.state}</TableCell>
                      <TableCell>{item.scheduled}</TableCell>
                      <TableCell>{item.created}</TableCell>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              openFormDialog(item);
                            }}
                          >
                            <EditIcon className={styles.actionbutton} />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <DeleteIcon className={styles.actionbutton} />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <FormDialog open={open} setOpen={setOpen} title="Add New Data">
            <Paper className={styles.paper} elevation={2}>
              <Form update={update} editRecord={editRecord} />
            </Paper>
          </FormDialog>
        </Grid>
      </Grid>
    </div>
  );
}
