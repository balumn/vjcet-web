import React, { Component } from "react";
import "./HeadingTwo.css";

class HeadingTwo extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="HeadingTwo" id={instanceID}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default HeadingTwo;
