import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./AnchorLink.css";
// import {NavLink as Link} from "react-router-dom"

class ExternalLink extends Component {
    render() {
        const { instanceID, title, link } = this.props.data;

        return (
            <div className="AnchorLink" id={instanceID}>
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                {/* <Link to={link}>{title}</Link> */}
            </div>
        );
    }
}

export default ExternalLink;
