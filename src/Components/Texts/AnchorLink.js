import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AnchorLink.css";
// import {NavLink as Link} from "react-router-dom"

class AnchorLink extends Component {
  render() {
    const { instanceID, title, link } = this.props.data;

    return (
      <div className="AnchorLink" id={instanceID}>
        {/* <a href={link}>{title}</a> */}
        <Link to={link}>{title}</Link>
      </div>
    );
  }
}

export default AnchorLink;
