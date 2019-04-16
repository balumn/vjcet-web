import React, { Component } from "react";
import "./BodyOne.css";

class BodyOne extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="BodyOne" id={instanceID}>
        <p>{title}</p>
      </div>
    );
  }
}

export default BodyOne;
