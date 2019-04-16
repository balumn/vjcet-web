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
      "Global excellence, research and teaching are the one of the main focus of this department, established in 2001 with strength of 60 students. We have a team of well qualified faculties who are up to date with latest technologies including Cloud Computing, Data Analytics, Blockchain, Big Data, Artificial Intelligence etc. The scope of this discipline includes the development of systems based on computer and information technology and the application of those systems to enhance enterprise operations."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "Our students have won many accolades in the recent past and are placed in reputed companies like Cognizant, Infosys, TCS, WIPRO, Flipkart ,Microsoft and so on. We have a high speed internet connection and all the students can access to the IEEE Journals. Conferences on National Level and State level are conducted for the students to develop their technical skills."
  };
  ProfileDescriptionThree = {
    instanceID: "ProfileDescriptionThree",
    title:
      "Our department is ISO certified and NBA accredited. Throughout the course students are prepared for the study by the Placement and Training Cell (PTC) and the Industry Institute Interaction Cell (IIIC) of our college thereby moulding them for a smooth transition from academia to the industry level."
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
