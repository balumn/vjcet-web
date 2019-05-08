import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  Features1 = {
    instanceID: "Features1",
    title: "•	Department demonstrate consistent academic excellence in university examinations including 1st position in 2017 and has strong global Alumni presence."
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	Board of Research Nuclear Science (BRNS), under the Department of Atomic Energy, sanctioned two research projects of worth Rs.63 lakhs and are in progress."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	Students under the guidance of eminent faculty are competent to tackle National and International technical events and secured scholarships and awards."
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	Senior faculty members serve as Independent Director of Nuclear Power Cooperation of India, Energy Auditor and Manager, Entrepreneur etc."
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	As a part of social commitment, department is involved in R&D Project on “Shelf life extension of pineapple” and also, acts as a PMKVY Centre, Government of India initiative for Skill Development."
  };
  Features6 = {
    instanceID: "Features6",
    title: "•	Encouraging sustainable development, department runs a 50kWp on grid - solar power plant in the campus"
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

export default Profile;
