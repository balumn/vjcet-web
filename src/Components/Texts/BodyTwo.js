import React, { Component } from "react";
import "./BodyTwo.css";

class BodyTwo extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="BodyTwo" id={instanceID}>
        <p>{title}</p>
      </div>
    );
  }
}

export default BodyTwo;
