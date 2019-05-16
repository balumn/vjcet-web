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
    title: "Our Graduates shall be,  "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1: Suitably employed in allied industries/services with professional competency and knowledge of modern tools. "
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      " 2: Capable of developing economically viable, technically feasible eco-friendly electronic systems."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3: Capable to pursue higher studies/research in the field of engineering and management."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Programme Specific Outcomes"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title: "Our Students shall be able to,"
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "1: Design and modify embedded system based products which will find applications in the fields of Communication and Automation."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "2: Develop algorithms for real life applications in signal & image processing."
  };
  psoListFour = {
    instanceID: "psoListFour",
    title: " 3: Design efficient low power electronic circuits."
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
        <Bodythree data={this.psoListFour} />
      </div>
    );
  }
}

export default PEO;
