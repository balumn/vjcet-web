import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Program Educational Objectives"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	Shall tackle the multiple responsibilities of analysis, design and construction of traditional and modern systems in compliance with various codes of practices and to meet the current technical challenges."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Shall be proficient in the use of relevant software packages for planning, designing, scheduling, executing and controlling of Civil Engineering projects, with an urge for life-long learning."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Shall function effectively with individual capabilities as well as with a collective strength as a professional team with good communication skills."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Program Specific Outcomes"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "Our Graduates shall have"
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "1.	Ability to utilize Civil Engineering principles and software that are appropriate to solve technical problems; prepare design and construction documents ; create structural systems; produce drawings, reports and quantity estimates related to the Civil Engineering domain."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "2.	Ability to utilize modern surveying methods for land measurement and/or construction layout and to conduct standardized field /laboratory tests related to Civil Engineering."
  };

  render() {
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        <Bodythree data={this.peoListOne} />
        <Bodythree data={this.peoListTwo} />
        <Bodythree data={this.peoListThree} />
        <Bodythree data={this.peoListFour} />
        <HeadingOne data={this.psoHeading} />
        <Bodythree data={this.psoListOne} />
        <Bodythree data={this.psoListTwo} />
        <Bodythree data={this.psoListThree} />
      </div>
    );
  }
}

export default PEO;
