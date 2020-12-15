import React, { Fragment } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./Components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#4fd6a2" },
    secondary: { main: "#63A98E" },
  },
  fontFamily: "Raleway, Arial",
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
