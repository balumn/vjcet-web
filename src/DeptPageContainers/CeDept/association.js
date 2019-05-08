import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Civil Engineering Students’ Association “CIVISTA” plays a pivotal role in the development of students as engineers by various out-of-curriculum and extra-curricular activities. "
  };

  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant fields. Various academic activities and technical talks are being organized on behalf of Civil Engineering Association. "
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title: "CIVISTA has 26 Faculty members, 8 Technical staff and 443 students on its roll. "
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "CIVISTA involves in various Curriculum Enrichment Programs and Social Outreach Programs:"
  };

  List1 = {
    instanceID: "List1",
    title: "•	EXTERNAL CONSULTANCY SERVICES"
  };
  List2 = {
    instanceID: "List2",
    title: "•	SEC ∞"
  };
  List3 = {
    instanceID: "List3",
    title: "•	MINDSPARK "
  };
  List4 = {
    instanceID: "List4",
    title: "•	ROOPAREKHA"
  };
  List5 = {
    instanceID: "List5",
    title: "•	SOCIAL OUT REACH PROGRAMS"
  };
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
        <Bodythree data={this.DeptAssociationDescriptionThree} />
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.DeptAssociationDescriptionFour} /></p>
          <div className="bodyContainerInner">
            <p><BodyOneJustified data={this.List1}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List2}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List3}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List4}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List5}></BodyOneJustified></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
