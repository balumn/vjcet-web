import React, { Component } from 'react'
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
    title: "•	The department of Information Technology was commenced in the year 2001."
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	It offers undergraduate program with an annual intake of 60 students."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	The IT department in VJCET stands stupendous for being one among the only two NBA accredited IT programs in Kerala. "
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	This branch deals with study, devise, development, execution, support and running of computer-based information systems."
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	The department of IT is enriched with well qualified faculty members with adequate number of PhD pursuing faculty and PhD holders; and faculty honored with excellence awards."
  };
  Features6 = {
    instanceID: "Features6",
    title: "•	The department has well-equipped laboratories with modern software tools and smart classrooms."
  };
  Features7 = {
    instanceID: "Features7",
    title: "•	The scholars of IT department are updated with trainings and workshops in the emerging fields of technologies for a smooth transition from academia to the industry."
  };
  Features8 = {
    instanceID: "Features8",
    title: "•	Students of IT department are promoted to participate in paper presentations and idea fest competitions so as to encourage them to carry out research work and to set off start ups."
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
          <p><BodyOneJustified data={this.Features7} /></p>
          <p><BodyOneJustified data={this.Features8} /></p>
        </div>
      </div>
    );
  }
}

export default Profile;
