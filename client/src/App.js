import React, { Fragment } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./Components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#63cabb" },
    secondary: { main: "#63a98e" },
  },
  typography: {
    fontFamily: 'Oswald',
    caption: {
      fontFamily: "Montserrat"
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <NavBar />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
