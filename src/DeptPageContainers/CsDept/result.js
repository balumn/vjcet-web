import React, { Component } from "react";
import CsGraph from "./LocalContainers/graph";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <CsGraph />
        </p>
      </div>
    );
  }
}

export default Result;
