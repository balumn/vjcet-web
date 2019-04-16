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
      "The science of today is the Technology of tomorrow. The Department of Science and Humanities spokes of the same wheel at Viswajyothi College of Engineering and Technology, prepares Engineering students for UG and PG examinations under Kerala Technological University. A team of highly qualified, experienced and professionally proven faculties guide students to become industry ready, employable and competent personalities catering to the need of global job scenario."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "The Department deals in the disciplines of Chemistry, Physics, Mathematics, Statistics, Communicative English and Economics. The faculty of the school, whose research expertise includes all frontier areas, believe in individualistic approach, remedial classes for the needy and comprehensive development of the taught."
  };
  ProfileDescriptionThree = {
    instanceID: "ProfileDescriptionThree",
    title:
      "The Department is actively involved in basic and applied research through various R& D projects undertaken by the R&D Department of VJCET. "
  };

  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <Bodythree data={this.ProfileDescriptionOne} />
        <Bodythree data={this.ProfileDescriptionTwo} />
        <Bodythree data={this.ProfileDescriptionThree} />
      </div>
    );
  }
}

export default Profile;
