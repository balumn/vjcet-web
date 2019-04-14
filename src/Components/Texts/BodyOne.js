import React, { Component } from "react";
import "./BodyOne.css";

class BodyOne extends Component {
  render() {
    const { instanceID, title } = this.props.data;

    return (
      <div className="BodyOne" id={instanceID}>
        <p style={{textAlign:'center'}}>{title}</p>
      </div>
    );
  }
}

export default BodyOne;
