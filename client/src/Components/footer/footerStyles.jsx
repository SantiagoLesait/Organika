import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },

  marginF: {
    marginTop: "40px",
    color: "white",
    cursor: "pointer",
    marginRight: "40px",
  },
  marginB: {
    marginBottom: "7px",
    marginRight: "7px",
  },
}));

export default useStyles;
