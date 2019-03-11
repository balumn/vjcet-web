import React, { Component } from "react";
import "./ButtonTwo.css";
import Button from "../../Assets/ButtonTwo.png";

class ButtonTwo extends Component {
  render() {
    const { instanceID, width } = this.props.data;

    return (
      <div className="ButtonTwo" id={instanceID}>
        <img src={Button} width={width} />
      </div>
    );
  }
}

export default ButtonTwo;
