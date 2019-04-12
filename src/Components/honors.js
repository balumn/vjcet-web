import React, { Component } from "react";
class Honors extends Component {
  state = {};

  render() {
    const { instanceID, image, width, name, content } = this.props.data;

    return (
      <div
        className={`Honors ${this.props.className ? this.props.className : ""}`}
        id={instanceID}
        style={{ ...this.props.containerStyle }}
        onClick={
          this.props.onClickAction
            ? () => {
                this.props.onClickAction();
              }
            : () => {}
        }
      >
        <img
          src={require("../Assets/" + image)}
          width={width}
          style={{ ...this.props.imgStyle }}
          alt="img"
        />
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Honors;
