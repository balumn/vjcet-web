import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Correction Needed "
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " Extracurricular activities can offer youth a safe and supervised haven and a chance to learn new skills such as conflict resolution, prepare for a successful career and improve grades. ‘VIDYUTH’ the Association of Electrical and Electronics Engineering Department. Various activities are organized under Vidyuth which provides a platform for the young talents to showcase their skills. Students are actively involved in the association activities including association inauguration, organizing technical talks, exhibitions and publishing department news letter every year to promote the spirit of social harmony. "
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "2018-19"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "Activities of Department Association ‘VIDYUTH’ for academic year 2018 -’19 was inaugurated on 1 st Octoberl 2018, by Sri. CP George , Deputy Chief Engineer at KSEB Ltd. Generation, MoolamattomICSE Association Inauguration"
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "Activities of Department Association ‘VIDYUTH’ for academic year 2018 -’19 was inaugurated on 1 st Octoberl 2018, by Sri. CP George , Deputy Chief Engineer at KSEB Ltd. Generation, MoolamattomICSE Association Inauguration"
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "THE COMPUTER SCIENCE ASSOCIATION: 'VOICE' The Vision Of Imperial Computer Engineers lives with its ardent passion to be the fulcrum for change and development in the campus. Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum, inaugurated our association on 16 th   August 2017."
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Inaugural Speech by Chief Guest Mr. Sajeev K.M, DySP, Marine Enforcement &amp; Vigilance, Trivandrum"
  };

  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
      </div>
    );
  }
}

export default Library;
