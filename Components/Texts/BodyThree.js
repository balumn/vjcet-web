import React, { Component } from "react";
import "./BodyThree.css";

class BodyThree extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="BodyThree" id={instanceID}>
        <p>{title}</p>
      </div>
    );
  }
}

export default BodyThree;
