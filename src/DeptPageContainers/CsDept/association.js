import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " VOICE is the association of the Computer Science & Engineering department. VOICE plays its vital role of giving opportunities and exposure for the young minds of the department to the tech world through different events like Technical Quiz, Technical Talks, Group Discussions, Workshops etc. VOICE is run by the student coordinators under the guidance of faculty members from the department. "
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "Sinu Arby Quiz Competition"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "Sinu Arby Memorial Quiz Competition was conducted by the department."
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title: "ICSE Association Inauguration"
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "THE COMPUTER SCIENCE ASSOCIATION: 'VOICE' The Vision Of Imperial Computer Engineers lives with its ardent passion to be the fulcrum for change and development in the campus. Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum, inaugurated our association on 16 th   August 2017."
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Inaugural Speech by Chief Guest Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum"
  };

  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
        <Bodythree data={this.DeptAssociationDescriptionThree} />
        <Bodythree data={this.DeptAssociationDescriptionFour} />
        <Bodythree data={this.DeptAssociationDescriptionFive} />
      </div>
    );
  }
}

export default Library;
