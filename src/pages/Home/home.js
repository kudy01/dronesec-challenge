import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import { Dashboard, Quit } from "..";

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/quit">
          <Quit />
        </Route>
        <Route exact path="/">
          <div id="main">
            <div>
              <h1 className="f1 tc logo"> Dronesec </h1>
              <div id="button-container">
                <Link
                  to="/dashboard"
                  className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-dashboard br-pill buttonFont"
                >
                  Dashboard
                </Link>
                <Link
                  to="/quit"
                  className="b maxwidth no-underline ph5 mb2 pv2 input-reset ba b--white-025 white grow pointer f3 dib bg-quit br-pill buttonFont"
                >
                  Quit
                </Link>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
