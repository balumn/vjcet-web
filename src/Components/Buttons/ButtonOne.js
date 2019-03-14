import React, { Component } from "react";
import "./ButtonOne.css";
import Button from "../../Assets/ButtonOne.svg";

class ButtonOne extends Component {
  render() {
    const { instanceID } = this.props.data;

    return (
      <div className="ButtonOne" id={instanceID}>
        <img src={Button} width="200px" />
      </div>
    );
  }
}

export default ButtonOne;
