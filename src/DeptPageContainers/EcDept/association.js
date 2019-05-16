import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
import BodyThree from "../../Components/Texts/BodyThree";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "ECE Department Association ‘ZEALOUS’"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Electronic Engineers have spun in their best to carve out the personal as well as the technical skills of each engineer of the VJC campus. True enough, a highly successful agenda of programmes were conducted from the usual seminars, paper presentations to the mega Personality Hunts, Brand Wars organized on a large scale. Personality hunt coined as 'The Mighty Cruise' was a 2-3 week long chore hunting down personalities based on their technical and general awareness, group discussions, and technical dumb charades and stress management capabilities.Equal importance in development to organizational abilities is given as part of the agenda to one and all."
  };
  Activitiesheading = {
    instanceID: "Activitiesheading",
    title: "Club activities under ZEALOUS"
  }
  Activity1Heading = {
    instanceID: "Activity1Heading",
    title: "1.	 NATURE AND PHOTOGRAPHY CLUB"
  }
  Activity1Content1 = {
    instanceID: "Activity1Content1",
    title: "Objective"
  }
  Activity1Content2 = {
    instanceID: "Activity1Content2",
    title: " To promote the extra talents of students "
  }
  Activity1Content3 = {
    instanceID: "Activity1Content3",
    title: "Mission "
  }
  Activity1Content4 = {
    instanceID: "Activity1Content4",
    title: "Provide a supportive environment for interested photography students to share their creativity, knowledge and passion for photography."
  }
  Activity1Content5 = {
    instanceID: "Activity1Content5",
    title: "The mission of the Nature & Photography Club is to provide a supportive environment for interested photography students to share their creativity, knowledge and passion for photography.  The club will hold meetings and discussions and organize events such as; photo-exhibition, field trips and lectures and workshops by experts. Members will also explore the possible opportunities for photography projects in collaboration with other campus departments.  The club promotes photography as a hobby among the students and makes every moment an unforgettable event by capturing it through the lens."
  }
  Activity2Heading = {
    instanceID: "Activity2Heading",
    title: "2.	WRITERS CLUB"
  }
  Activity2Content1 = {
    instanceID: "Activity2Content1",
    title: "Objective"
  }
  Activity2Content2 = {
    instanceID: "Activity2Content2",
    title: "Writing and reading skills are promoted through an interactive, collaborative & creative environment."
  }
  Activity2Content3 = {
    instanceID: "Activity2Content3",
    title: "Mission "
  }
  Activity2Content4 = {
    instanceID: "Activity2Content4",
    title: "The purpose of the Creative Writing Club is to provide a positive and productive atmosphere for developing student writers to integrate, learn, and grow."
  }
  Activity2Content5 = {
    instanceID: "Activity2Content5",
    title: "Writers club engages students who enjoy writing or discussing creative works. This club will help students to harness creativity effectively with a variety of different contests or workshops and exercises so as to benefit an individual's skill and competence as a writer."
  }
  Activity3Heading = {
    instanceID: "Activity3Heading",
    title: "3.	 ENVIRONMENT AND HEALTH CLUB"
  }
  Activity3Content1 = {
    instanceID: "Activity3Content1",
    title: "Objective"
  }
  Activity3Content2 = {
    instanceID: "Activity3Content2",
    title: "To empower students to live healthier lives in a healthier environment"
  }
  Activity3Content3 = {
    instanceID: "Activity3Content3",
    title: "Mission "
  }
  Activity3Content4 = {
    instanceID: "Activity3Content4",
    title: "Raise awareness and support among students for issues related to health and protection of the environment."
  }
  Activity3Content5 = {
    instanceID: "Activity3Content5",
    title: " The mission of the Environment & Health Club is to not only conserve one’s environment and health but also to improve it substantially.  The club will hold meetings and discussions and organize events such as exhibitions and lectures to realize its mission. Students will also be made aware of and participate in the various off-campus activities like marathons and field trips though the mission of the club can be implemented."
  }
  Activity4Heading = {
    instanceID: "Activity4Heading",
    title: "4.	Quiz & Debate Club"
  }
  Activity4Content1 = {
    instanceID: "Activity4Content1",
    title: "Objective"
  }
  Activity4Content2 = {
    instanceID: "Activity4Content2",
    title: "To identify the students who are talented in quiz and debate and develop further in their quizzing and debating skills"
  }
  Activity4Content3 = {
    instanceID: "Activity4Content3",
    title: "The Quiz & Debate Club aims at identifying the students who are talented in quiz and debate and develop further in their quizzing and debating skills. Quiz competitions are organized in the campus in inter departmental levels and intercollegiate levels to improve general and technical knowledge of the students.  Inter department debating competitions and debates are also organized to make students aware about the current topics and issues that affect ones lives locally as well as globally."
  }
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.Activitiesheading} />
        <div className="bodyContainer">
          <HeadingFour data={this.Activity1Heading} />
          <HeadingFour data={this.Activity1Content1} />
          <BodyThree data={this.Activity1Content2} />
          <HeadingFour data={this.Activity1Content3} />
          <BodyThree data={this.Activity1Content4} />
          <Bodythree data={this.Activity1Content5} />
          <HeadingFour data={this.Activity2Heading} />
          <HeadingFour data={this.Activity2Content1} />
          <BodyThree data={this.Activity2Content2} />
          <HeadingFour data={this.Activity2Content3} />
          <BodyThree data={this.Activity2Content4} />
          <Bodythree data={this.Activity2Content5} />
          <HeadingFour data={this.Activity3Heading} />
          <HeadingFour data={this.Activity3Content1} />
          <BodyThree data={this.Activity3Content2} />
          <HeadingFour data={this.Activity3Content3} />
          <BodyThree data={this.Activity3Content4} />
          <Bodythree data={this.Activity3Content5} />
          <HeadingFour data={this.Activity4Heading} />
          <HeadingFour data={this.Activity4Content1} />
          <BodyThree data={this.Activity4Content2} />
          <Bodythree data={this.Activity4Content3} />
        </div>
      </div>
    );
  }
}

export default Library;
