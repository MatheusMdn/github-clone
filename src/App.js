import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

import Theme from "./styles/themes";

function App() {
  const [themeName, setThemeName] = useState("light");
  const currentTheme = Theme[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/:username" component={Profile} />
          <Route path="/:username/:reponame" component={Repo} />
        </Switch>

        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
