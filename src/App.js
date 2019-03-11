import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import DeparmentPage from "./Pages/Departmentpage";
import FacilitiesPage from "./Pages/FacilitiesPage";
import CampusLifePage from "./Pages/CampusLifePage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/About" component={AboutUsPage} />
              <Route exact path="/Departments" component={DeparmentPage} />
              <Route exact path="/Facilities" component={FacilitiesPage} />
              <Route exact path="/Campus-Life" component={CampusLifePage} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
