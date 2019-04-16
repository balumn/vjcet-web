import React, { Component } from "react";
import EeGraph from "./LocalContainers/graph";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <EeGraph />
        </p>
      </div>
    );
  }
}

export default Result;
