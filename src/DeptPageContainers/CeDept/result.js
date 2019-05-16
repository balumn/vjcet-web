import React, { Component } from "react";
import CeGraph from "./LocalContainers/graph";
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
