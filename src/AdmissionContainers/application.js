import React, { Component } from 'react';
import HeadingOne from '../Components/Texts/HeadingOne';
class Application extends Component {
    state = {}
    Heading = {
        instanceID: "Heading",
        title: "Application"
    }
    render() {
        return (
            <div>

                <HeadingOne data={this.Heading}></HeadingOne>
                <a href="https://vjcetwebadmin.github.io/downloads/application.pdf" target="_blank" rel="noopener noreferrer">
                    Click here to download to M.Tech Application Form</a>
            </div>
        );
    }
}

export default Application;