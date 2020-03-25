import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch></Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
