import React, { Component } from "react";
import "./HeadingFour.css";

class HeadingFour extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="HeadingFour" id={instanceID}>
        <h4>{title}</h4>
      </div>
    );
  }
}

export default HeadingFour;
