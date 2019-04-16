import React, { Component } from "react";
import EcGraph from "./LocalContainers/graph";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <EcGraph />
        </p>
      </div>
    );
  }
}

export default Result;
