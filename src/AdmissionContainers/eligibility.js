import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified"
class Eligibility extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Eligibility"
    };
    Features1 = {
        instanceID: "Features1",
        title: "Eligibility will be subject to the rules and regulations of Kerala Technological University/ AICTE/DTE.Candidate with a Valid GATE score is given preference."
    };

    Features2 = {
        instanceID: "Features2",
        title: "•	For M.Tech in CSE: At least 60% marks in B.E./ B.Tech in CSE or Information Technology."
    };
    Features3 = {
        instanceID: "Features3",
        title: "•	For M.Tech in VLSI&ES : At least 60% marks in B.E./ B.Tech in ECE/ Applied Electronics/Applied Electronics &Instrumentation."
    };
    Features4 = {
        instanceID: "Features4",
        title: "For SC/ST candidates, a pass in the above mentioned degrees is sufficient."
    };
    Features5 = {
        instanceID: "Features5",
        title: "Candidates who have degrees awarded from Universities other than Kerala Technical University shall submit Eligibility Certificate from Kerala Technical University as well as Migration Certificate at the time of admission."
    };
    Features6 = {
        instanceID: "Features6",
        title: "Candidates who have appeared for the final examination can also apply, provided he/ she has passed all the subjects up to and including the 6th semester exam. Such candidates shall submit self attested copies of all mark lists up to 6th semester along with the application.Admission of such candidates shall be subject to the production of qualifying degree satisfying the minimum eligibility criteria stipulated for each courses.Scholarship is available for candidates with valid GATE score."
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <p><BodyOneJustified data={this.Features1} /></p>
                    <p><BodyOneJustified data={this.Features2} /></p>
                    <p><BodyOneJustified data={this.Features3} /></p>
                    <p><BodyOneJustified data={this.Features4} /></p>
                    <p><BodyOneJustified data={this.Features5} /></p>
                    <p><BodyOneJustified data={this.Features6} /></p>
                </div>
            </div>
        );
    }
}

export default Eligibility;
