import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  ProfileDescriptionOne = {
    instanceID: "ProfileDescriptionOne",
    title:
      "The Department of Electrical and Electronics Engineering of VJCET was established in the year 2004, with eminent and well qualified faculty and excellent infra structure. The department is recognized for excellence in teaching and service to the profession and it offers Undergraduate Programme with an intake of 90 students. In a very short spell the department could emerge with four University ranks. The academic strength of the faculty is reflected by the alumni, many of whom are in the top echelons of industry and academicia both in India and abroad."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "M. Tech. students with GATE qualification are funded by AICTE scholarships. Training programs conducted for the B. Tech. students throughout the course of their study by the Placement and Training Cell (PTC) of our college prepares them for a smooth transition from academia to the industry. In the past our students have been placed in reputed companies like Infosys, Wipro, TCS, Tata Elxsi, Oracle, HCL, L&T, IBS, Cognizant, and so on. Our students have secured very good results in the University examinations including University ranks. They regularly participate in inter collegiate technical and cultural events and have won many prizes."
  };

  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <Bodythree data={this.ProfileDescriptionTwo} />
      </div>
    );
  }
}

export default Profile;
