import React, { Component } from "react";

class ImageTwo extends Component {
  render() {
    const { instanceID, image, width, height } = this.props.data;

    return (
      <div
        className={`ImageOne ${
          this.props.className ? this.props.className : ""
          }`}
        id={instanceID}
        style={{ ...this.props.containerStyle }}
        onClick={
          this.props.onClickAction
            ? () => {
              this.props.onClickAction();
            }
            : () => { }
        }
      >
        <img
          src={require("../../Assets/" + image)}
          width={width}
          height={height}
          style={{ ...this.props.imgStyle }}
          alt="img"
        />
      </div>
    );
  }
}

export default ImageTwo;
