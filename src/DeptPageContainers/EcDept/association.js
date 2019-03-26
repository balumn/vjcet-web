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
      "The Electronic Engineers have spun in their best to carve out the personal as well as the technical skills of each engineer of the VJC campus. True enough, a highly successful agenda of programmes were conducted from the usual seminars, paper presentations to the mega Personality Hunts, Brand Wars organized on a large scale. Personality hunt coined as 'The Mighty Cruise' was a 2-3 week long chore hunting down personalities based on their technical and general awareness, group discussions, and technical dumb charades and stress management capabilities."
  };

  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
      </div>
    );
  }
}

export default Library;
