import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Header: {
    color: "#091353",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "roboto"
  }
});
export default function Header() {
  const header = useStyles();

  return (
    <div>
      <h1 className={header.Header}>JSON Data To Table</h1>
    </div>
  );
}
