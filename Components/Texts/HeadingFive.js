import React, { Component } from "react";
import "./HeadingFive.css";

class HeadingFive extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="HeadingFive" id={instanceID}>
        <h5>{title}</h5>
      </div>
    );
  }
}

export default HeadingFive;
