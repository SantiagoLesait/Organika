import React, { Fragment } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./Components/Navbar";
import Texto from "./Components/texto";
import NotFound from "./Components/NotFound";
import Blog from "./Components/blog/blog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#63cabb" },
    secondary: { main: "#63a98e" },
  },
  typography: {
    fontFamily: "Oswald",
    caption: {
      fontFamily: "Montserrat",
    },
  },
});
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Route path="/" component={NavBar} />
          <Route exact path="/try" component={Texto} />

          <Route exact path="/blog" component={Blog} />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
