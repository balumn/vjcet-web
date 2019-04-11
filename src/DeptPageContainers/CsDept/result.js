import React, { Component } from "react";
import CsGraph from "./LocalContainers/graph";
import CsHonors from "./LocalContainers/cshonors";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <CsGraph />
        </p>
        <p>
          <CsHonors />
        </p>
      </div>
    );
  }
}

export default Result;
