import React, { Component } from "react";
import MeGraph from "./LocalContainers/graph";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <MeGraph />
        </p>
      </div>
    );
  }
}

export default Result;
