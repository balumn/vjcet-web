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
      "Mechanical engineering is one of the major areas in the engineering and its principles are involved in the design, study, development and construction of physical devices and systems, along with controls. B.Tech Mechanical Engineering program is accredited by NBA on June 2018 for three years. Continued research and development have led to the development better machines and processes helping the mankind to ease the tasks & to achieve the never thought possible dreams."
  };
  ProfileDescriptionTwo = {
    instanceID: "ProfileDescriptionTwo",
    title:
      "The spectrum of professional activity for the mechanical engineering graduate runs from R&D to manufacturing, production, sales and marketing. Moreover, the comprehensive training and education attained by mechanical engineers are often called upon to assume managerial roles. Industry is in need of qualified mechanical engineering technologists that, upon graduation, are able to apply state-of-the-art tools in the areas of computer-aided design, finite element modeling and analysis, and the concepts of advanced mechanical design to the creation of sophisticated machines and systems."
  };
  ProfileDescriptionThree = {
    instanceID: "ProfileDescriptionThree",
    title:
      "Department of mechanical engineering is an outstanding example of the college's insistence on quality education appropriate to the needs of industry. The department faculty consists of well-qualified and experienced professionals having a proven track record in academics, industry and research. The faculty is well prepared to train competent Mechanical Engineering professionals in the field of engineering to meet requirements of industry and research organization academics etc."
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
