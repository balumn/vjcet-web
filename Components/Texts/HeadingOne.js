import React, { Component } from "react";
import "./HeadingOne.css";

class HeadingOne extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="HeadingOne" id={instanceID}>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default HeadingOne;
