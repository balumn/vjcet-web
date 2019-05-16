import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Department Association"
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
        {/* <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} /> */}
        <table border="1">
          <tr>
            <th>SL No</th>
            <th>PROGRAMME</th>
            <th>DATE</th>
            <th>RESOURCE PERSON</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Expert Talk on "Modern Trends in Coal-Fired Thermal Power Plants" for all final year students organised by IIIC, VJCET and Mechanical Engineering Association, VJCET </td>
            <td>13/02/2019</td>
            <td>Mr. Sushil Cherian
Co Founder and Vice President
Kalki Communications pvt Ltd</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ist INTERNATIONAL SYMPOSIUM ON INNOVATIVE ENGINEERING PARAGDIMS by SES</td>
            <td>03.12.2018-
21.12.2018</td>
            <td>RALPH SCHNEIDER
GERMANY</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lecture Meet   on ‘AUTOMOTIVE ELECTRONICS 2020’
organised by Mechanical Engineering Department in association with SAEINDIA</td>
            <td>22.11.2018</td>
            <td>Mr. Kasiraja Thangapandian
Software Project Manager , Visteon Technical and Services  Centre Pvt Ltd,</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Alumni Talk on "Marine Engineering"
for S5 and S7 ME Students</td>
            <td>12.11.2018</td>
            <td>Mathaikutty Sunny
3rd Engineer, Anglo Eastern Ship Management Ltd</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Expert Talk on "Cyber Security"
for all ME students organised by Technical Staff MED</td>
            <td>07.11.2018</td>
            <td>Mr. Thalhath PM
Cyber Cell Officer Aluva</td>
          </tr>
          <tr>
            <td>6</td>
            <td>One day Training on PLC for final year ME students organised by Robotics Club Mechanical Department</td>
            <td>23.10.2018
24.10.2018</td>
            <td>Recode Innovations, Muvattupuzha</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Library;
