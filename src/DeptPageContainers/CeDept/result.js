import React, { Component } from "react";
import CeGraph from "./LocalContainers/graph";
import CeHonors from "./LocalContainers/cehonors";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <CeGraph />
        </p>
        {/* <p>
          <CeHonors />
        </p> */}
      </div>
    );
  }
}

export default Result;
