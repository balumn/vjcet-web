import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Program Educational Outcomes(PEOs)"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Graduate shall have  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      " 1. Strong base in Mathematics, Science, and Mechanical Engineering to face and handle the challenges in real world engineering problems in society and industry. "
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Passion for Mechanical Engineering to select an area of specialization,pursue higher studies, choose a career, lifelong learning in industry, research and academics."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Basic knowledge in other disciplines to tackle and coordinate Interdisciplinary real life problems"
  };
  peoListFive = {
    instanceID: "peoListFive",
    title:
      "4.	Soft skills, discipline, confidence, self esteem, and ethical values."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Program Specific Outcomes(PSOs)"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "The Graduates shall be able to, "
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      " 1. Students shall be competent, creative and imaginative mechanical engineers employable in fields of design, research, manufacturing, safety, quality, technical services."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "2. Students shall be able to progress through advanced degree, certificate programs or participate in continuing education in mechanical engineering, business, and other professionally related fields."
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
