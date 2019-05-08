import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "The Department offers undergraduate program in Civil Engineering with an annual intake of 120 students."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The program was accredited by NBA in 2018."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title: "Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future."
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title: "Civil Engineering Department strives to:"
  };
  List1 = {
    instanceID: "List1",
    title: "•	put forth best- rated undergraduate education."
  };
  List2 = {
    instanceID: "List2",
    title: "•	offerhigh-end professional consultancy,excellent work culture and campus atmosphere."
  };
  List3 = {
    instanceID: "List3",
    title: "•	inculcate academic integrity and accountability among our faculty as well as students. "
  };
  List4 = {
    instanceID: "List4",
    title: "•	cultivate a sense of civic and social responsibility among our students by way of various Forums and Clubs."
  };
  List5 = {
    instanceID: "List5",
    title: "•	continue the process of building strong links with the building and construction industry."
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.ProgramDescriptionFour} /></p>
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

export default Program;
