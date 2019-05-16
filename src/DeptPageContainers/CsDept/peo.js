import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Programme Educational Objectives"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	Shall have creative and critical reasoning skills to solve technical problems ethically and responsibly to serve the society."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Shall have competency to collaborate as a team member and team leader to address social, technical and engineering challenges."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Shall have ability to contribute to the development of the next generation of information technology either through innovative research or through practice in a corporate setting."
  };
  peoListFive = {
    instanceID: "peoListFive",
    title:
      "4.	Shall have potential to build start-up companies with the foundations, knowledge and experience they acquired from undergraduate education."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Programme Specific Outcomes"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title:
      "1.	Ability to integrate theory and practice to construct software systems of varying complexity."
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "2.	Able to Apply Computer Science skills, tools and mathematical techniques to analyze, design and model complex systems."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "3.	Ability to design and manage small-scale projects to develop a career in a related industry."
  };
  render() {
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        <Bodythree data={this.peoListOne} />
        <Bodythree data={this.peoListTwo} />
        <Bodythree data={this.peoListThree} />
        <Bodythree data={this.peoListFour} />
        <Bodythree data={this.peoListFive} />
        <HeadingOne data={this.psoHeading} />
        <Bodythree data={this.psoListOne} />
        <Bodythree data={this.psoListTwo} />
        <Bodythree data={this.psoListThree} />
      </div>
    );
  }
}

export default PEO;
