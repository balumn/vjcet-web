import React, { Component } from "react";
import "./Line.css";

class Line extends Component {
  render() {
    const { instanceID } = this.props.data;
    return (
      <div className="Line" id={instanceID}>
        <hr />
      </div>
    );
  }
}
export default Line;
