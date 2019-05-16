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
    title: "Graduate shall have  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	The foundation in mathematical, analytical and scientific skills to design technically and economically viable engineering solutions. "
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	The culture and attitude of team work, to help in upbringing socially committed Entrepreneurs engaged in lifelong learning."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title: "3.	Professional communication skills, social values and work ethics."
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
    title: "The Graduates shall be able to, "
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "•	Apply fundamentals of Engineering in analyzing multidisciplinary issues, developing solutions with professional and ethical responsibilities and promoting conventional and unconventional methods for higher research. "
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "•	Apply Electrical engineering knowledge to perform circuit analysis, troubleshoot electrical machines and optimize power system designs by incorporating analog and digital controls."
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
