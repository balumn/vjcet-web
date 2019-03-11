import React, { Component } from "react";
import "./AnchorLink.css";

class AnchorLink extends Component {
  render() {
    const { instanceID, title, link } = this.props.data;

    return (
      <div className="AnchorLink" id={instanceID}>
        <a href={link}>{title}</a>
      </div>
    );
  }
}

export default AnchorLink;
