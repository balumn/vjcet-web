import React, { Component } from "react";
import ItGraph from "./LocalContainers/graph";
class Result extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <ItGraph />
        </p>
      </div>
    );
  }
}

export default Result;
