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
      "•	Various activities are organized under ORBIT which provides a platform for the young talents to showcase their skills."
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "•	Activities include association inauguration, organizing technical talks and publishing department news letter every year to promote the spirit of social harmony."
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "2018-19"
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "•	The IT association ORBIT  of current academic year was inaugurated on 05/10/2018 by Ms.PRIYA DOMINIC, Delivery Manager, TCS, Kochi, followed by a technical talk by Mr. Gopee Krishnan G and Mr. SARAN R.S., TCS, Kochi."
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "THE COMPUTER SCIENCE ASSOCIATION: 'VOICE' The Vision Of Imperial Computer Engineers lives with its ardent passion to be the fulcrum for change and development in the campus. Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum, inaugurated our association on 16 th   August 2017."
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Association Officials"
  };
  DeptAssociationDescriptionSix = {
    instanceID: "DeptAssociationDescriptionSix",
    title:
      "President                                 -		Ms. Anju SusanGeorge, HOD, IT"
  };
  DeptAssociationDescriptionSeven = {
    instanceID: "DeptAssociationDescriptionFSeven",
    title:
      "Secretary                                 -		Mr. Santhanu P.Mohan, Asst Professor, IT"
  };
  DeptAssociationDescriptionEight = {
    instanceID: "DeptAssociationDescriptionEight",
    title:
      "Student Coordinator                - 		Mr. Mrunalsen P S, S8, IT"
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
        <Bodythree data={this.DeptAssociationDescriptionSix} />
        <Bodythree data={this.DeptAssociationDescriptionSeven} />
        <Bodythree data={this.DeptAssociationDescriptionEight} />
      </div>
    );
  }
}

export default Library;
