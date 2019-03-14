import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import DepartmentPage from "./Pages/Departmentpage";
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
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/departments" component={DepartmentPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/campus-life" component={CampusLifePage} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
