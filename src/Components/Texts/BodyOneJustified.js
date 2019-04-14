import React, { Component } from "react";
import "./BodyOneJustified.css";

class BodyOneJustified extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="BodyOne" id={instanceID}>
        <p> {title}</p>
      </div>
    );
  }
}

export default BodyOneJustified;
