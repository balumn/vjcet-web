import React, { Component } from "react";
import "./LibraryDiv.css";

class LibraryDiv extends Component {

    render() {
        const { instanceID, title } = this.props.data;

        return(
            <div>
                <h2>{title}</h2>
            </div>
        )
    }
}