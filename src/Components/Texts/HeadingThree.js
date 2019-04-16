import React, { Component } from "react";
import "./HeadingThree.css";

class HeadingThree extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="HeadingThree" id={instanceID}>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default HeadingThree;
