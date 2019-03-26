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
      "Started in the year 2001, the Department of Computer Science & Engineering offers  both undergraduate (B. Tech.) and postgraduate (M. Tech.) programs. B.Tech Computer Science Engineering program is accredited by NBA on July 2018 for three years.The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 18. The department provides its students an environment that stimulates their intellectual growth and personality development. Infrastructure facilities are excellent with well-equipped computer labs, classrooms and libraries. We also have high speed leased line Internet connection and online access to all IEEE journals. A team of well qualified faculty that keeps their knowledge up to date by attending conferences and workshops on a regular basis is a major asset of the department."
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
