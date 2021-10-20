import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { App } from "../components/App";

import { AppDetails } from "../components/AppDetails";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/details/:id" component={AppDetails} />

          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
};
