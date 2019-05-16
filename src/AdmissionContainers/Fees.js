import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
class Fees extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Fees Structure"
    };
    Features1 = {
        instanceID: "Features1",
        title: "M. Tech Computer Science and Engineering"
    };

    Features2 = {
        instanceID: "Features2",
        title: "Candidates with valid GATE Score- Government Fees"
    };
    Features3 = {
        instanceID: "Features3",
        title: "Candidate without Gate Score - Rs. 25,000/- Semester "
    };
    Features4 = {
        instanceID: "Features4",
        title: "M. Tech VLSI and Embedded Systems"
    };
    Features5 = {
        instanceID: "Features5",
        title: "Candidates with valid GATE Score- Government Fees"
    };
    Features6 = {
        instanceID: "Features6",
        title: "Candidate without Gate Score - Rs. 25,000/- Semester"
    };
    Features7 = {
        instanceID: "Features7",
        title: "FOR DETAILS CONTACT"
    };
    Features8 = {
        instanceID: "Features8",
        title: "Mr. Andrews Jose (CSE) - 9895987155"
    };
    Features9 = {
        instanceID: "Features9",
        title: "Mr. Andrews Jose (CSE) - 9895987155"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <p><HeadingThree data={this.Features1} /></p>
                    <p><BodyOneJustified data={this.Features2} /></p>
                    <p><BodyOneJustified data={this.Features3} /></p>
                    <p><HeadingThree data={this.Features4} /></p>
                    <p><BodyOneJustified data={this.Features5} /></p>
                    <p><BodyOneJustified data={this.Features6} /></p>
                    <p><HeadingThree data={this.Features7} /></p>
                    <p><BodyOneJustified data={this.Features8} /></p>
                    <p><BodyOneJustified data={this.Features9} /></p>
                </div>
            </div>
        );
    }
}

export default Fees;
