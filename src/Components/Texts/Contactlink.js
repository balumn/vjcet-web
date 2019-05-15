import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactLink.css";
// import {NavLink as Link} from "react-router-dom"

class ContactLink extends Component {
    render() {
        const { instanceID, title, link } = this.props.data;

        return (
            <div className="ContactLink" id={instanceID}>
                {/* <a href={link}>{title}</a> */}
                <Link to={link}>{title}</Link>
            </div>
        );
    }
}

export default ContactLink;
