import { DataForm, MainForm } from "./DataForm.js";
import { Grid } from "@mui/material";
import InputText from "/src/Components/InputText.js";
import RadioInput from "/src/Components/RadioInput.js";
import DropDown from "/src/Components/DropDown.js";
import DateTime from "/src/Components/DateTime.js";
import { useEffect } from "react";
import ButtonComponent from "./ButtonComponent.js";

const initialValues = {
  id: 0,
  category: "",
  scope: "",
  reqtype: "",
  submitter: "",
  businessgroup: "",
  state: "",
  created: new Date(),
  scheduled: ""
};

const stateItems = [
  { id: "completed", title: "Completed" },
  { id: "in_progress", title: "In Progress" },
  { id: "on_hold", title: "On Hold" }
];
const scheduledItems = [
  { id: true, title: "Yes" },
  { id: false, title: "No" }
];

const scopeItems = [
  "Y04_89_CI",
  "NSI_03_CI",
  "Y03_55_HD",
  "Y02_46_AP",
  "Y04_83_AP",
  "Y04",
  "Y02_44_CI",
  "Y02-Y03",
  "Y33_05_HD",
  "Y03_55_HD",
  "Y07_35_HD",
  "Y06-Y07",
  "Y32_68_CI",
  "Y08-Y09",
  "Y32-Y33",
  "Y06_46_CI",
  "Y08_72_AP",
  "Y06_41_AP",
  "Y08_42_CI",
  "Y10",
  "Y09_44_HD",
  "Y10_94_AP"
];
const bgItems = ["azt9797", "tib0301", "gcp0501", "tu10101"];
const reqtypes = [
  "Start OS Patching",
  "start",
  "Delete SAP",
  "Resize Virtual Machine",
  "stop",
  "backup-full-online",
  "Enable Database Backup",
  "Extend Filesystem",
  "Scale out",
  "Extend Filesystem"
];

export default function Form({ update, editRecord }) {
  const { formValues, setFormValues, handleInput, handleReset } = DataForm(
    initialValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.alert("Testing...");

    update(formValues, handleReset);
  };

  useEffect(() => {
    if (editRecord !== null) {
      setFormValues({ ...editRecord });
    }
  }, [editRecord]);
  return (
    <div>
      <MainForm onSubmit={handleSubmit} onReset={handleReset}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={6}>
            <InputText
              name="category"
              label="Category"
              value={formValues.category}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              name="submitter"
              label="Username"
              value={formValues.submitter}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={6}>
            <DropDown
              name="scope"
              value={formValues.scope}
              options={scopeItems}
              onChange={handleInput}
              label="Scope"
            />
          </Grid>
          <Grid item xs={6}>
            <DropDown
              name="businessgroup"
              value={formValues.businessgroup}
              options={bgItems}
              onChange={handleInput}
              label="Business Group"
            />
          </Grid>
          <Grid item xs={6}>
            <DropDown
              name="reqtype"
              value={formValues.reqtype}
              options={reqtypes}
              onChange={handleInput}
              label="Request Type"
            />
          </Grid>
          <Grid item xs={6}>
            <DateTime
              name="created"
              value={formValues.created}
              onChange={handleInput}
              label="DateTime"
            />
          </Grid>
          <Grid item xs={6}>
            <RadioInput
              name="state"
              value={formValues.state}
              onChange={handleInput}
              label="State"
              items={stateItems}
            />
          </Grid>
          <Grid item xs={6}>
            <RadioInput
              name="scheduled"
              value={formValues.scheduled}
              onChange={handleInput}
              label="Scheduled"
              items={scheduledItems}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <ButtonComponent
              type="submit"
              text="Add Data"
              variant="contained"
              size="large"
              sx={{
                background: "#091353",
                borderColor: "#ffffff",
                color: "#d5d5d5",
                padding: "9px",
                marginRight: "5px"
              }}
            />

            <ButtonComponent
              type="reset"
              text="Clear"
              variant="outlined"
              size="large"
              sx={{
                background: "#d5d5d5",
                borderColor: "#ffffff",
                color: "#091353",
                padding: "9px",
                marginLeft: "5px"
              }}
            />
          </Grid>
        </Grid>
      </MainForm>
    </div>
  );
}
