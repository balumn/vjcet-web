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
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "EEE Association - VIDYUTH"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " Extracurricular activities can offer youth a safe and supervised haven and a chance to learn new skills such as conflict resolution, prepare for a successful career and improve grades. ‘VIDYUTH’ the Association of Electrical and Electronics Engineering Department. Various activities are organized under Vidyuth which provides a platform for the young talents to showcase their skills. Students are actively involved in the association activities including association inauguration, organizing technical talks, exhibitions and publishing department news letter every year to promote the spirit of social harmony. Extracurricular activities can offer youth a safe and supervised haven and a chance to learn new skills such as conflict resolution, prepare for a successful career and improve grades. ‘VIDYUTH’, EEE Association is a student oriented association where the activities and programs are supported by the faculty as well. Students are actively involved in the association activities including association inauguration, organizing technical talks, exhibitions and publishing department news letter every year to promote the spirit of social harmony."
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "Association Officials"
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "President                                 -       Dr. B Aruna, HOD EEE    "
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "Faculty in charge                     -       Ms. Mereya Baby, Assistant Professor, EEE"
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "Secretary  			-       Mr. Jishnu V, S6 EEE B"
  };
  ActivitiesHeading = {
    instanceID: "ActivitiesHeading",
    title: "Association Activities"
  };
  Activities1Heading = {
    instanceID: "Activities1Heading",
    title: "2010-11"
  };
  Activities1Content = {
    instanceID: "Activities1Content",
    title: "A short term Training Programme on” Recent Mathematical Tools For Solving Engineering Problems ” was conducted on 25/4/11 and 29/4/11. Association was inaugurated for the year 2010-11 on 04/03/11 by  ER. BIJU VARGHESE, Manager ( Operations), MOTT Mc DONALD"
  };
  Activities2Heading = {
    instanceID: "Activities2Heading",
    title: "2011-2012"
  };
  Activities2Content = {
    instanceID: "Activities2Content",
    title: "Association was inaugurated for the year 2011-12 on 07/03/2012 by Prof. K U Abraham, Head of the Department, EEE, Holy Kings College of Engineering"
  };
  Activities3Heading = {
    instanceID: "Activities3Heading",
    title: "2012-13"
  };
  Activities3Content = {
    instanceID: "Activities3Content",
    title: "The association activities for the year are inaugurated by Mr. Joseph George (District Project Manager, ANERT , Idukki)  on 23rd March, 2013."
  };
  Activities4Heading = {
    instanceID: "Activities4Heading",
    title: "2013-14"
  };
  Activities4Content = {
    instanceID: "Activities4Content",
    title: "Activities of Department Association ‘VIDYUTH’ for academic year 2013 -’14 was inaugurated on 24th March 2014. Inauguration was done by Mr. N.N. SHAJI, Deputy Chief Engineer, KSEB, Moolamattom and delivered a talk on “Energy crisis and solutions in Kerala”."
  };
  Activities5Heading = {
    instanceID: "Activities5Heading",
    title: "2014-15"
  };
  Activities5Content = {
    instanceID: "Activities5Content",
    title: "Activities of Department Association ‘VIDYUTH’ for academic year 2014 -’15 was inaugurated on 25th March 2015. Inauguration was done by Mr. M. V John, Rt. Deputy Chief Engineer, KSEB and delivered a talk on “Effective Learning”."
  };
  Activities6Heading = {
    instanceID: "Activities6Heading",
    title: "2015-16"
  };
  Activities6Content = {
    instanceID: "Activities6Content",
    title: "Activities of Department Association ‘VIDYUTH’ for academic year 2015 -’16 was inaugurated on 19th April 2016, by Mr. C Jayaraman, Sr. Manager (Rtd.), BPCL Cochin Refinery."
  };
  Activities7Heading = {
    instanceID: "Activities7Heading",
    title: "2016-17"
  };
  Activities7Content = {
    instanceID: "Activities7Content",
    title: "Mr. Jayakumar (National Joint Secretary Society of Energy Engineers and Managers) inaugurated the association activities for academic year 2016-17 and also inaugurated Society of Energy Engineers and Managers (SEEM) Student Chapter on 31st August, 2016. Mr. Azeem K, Joint Secretary, SEEM Kerala, delivered a Technical talk thereafter."
  };
  Activities8Heading = {
    instanceID: "Activities8Heading",
    title: "2017-18"
  };
  Activities8Content = {
    instanceID: "Activities8Content",
    title: "The association activities for the year are inaugurated by Mr. E. Sankaran Sivadasan (Asst. Executive Engineer, KSEB) on 30th August, 2017. The newsletter is also released on the same venue."
  };
  Activities9Heading = {
    instanceID: "Activities8Heading",
    title: "2018-2019"
  };
  Activities9Content = {
    instanceID: "Activities9Content",
    title: "Activities of Department Association ‘VIDYUTH’ for academic year 2018 -’19 was inaugurated on 1 st October 2018, by Sri. C. P. George , Deputy Chief Engineer, Generation,KSEB Ltd., Moolamattom."
  };
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
        <Bodythree data={this.DeptAssociationDescriptionThree} />
        <Bodythree data={this.DeptAssociationDescriptionFour} />
        <Bodythree data={this.DeptAssociationDescriptionFive} />
        <div className="bodyContainer">
          <HeadingFour data={this.ActivitiesHeading} />
          <Bodythree data={this.Activities1Heading} />
          <Bodythree data={this.Activities1Content} />
          <Bodythree data={this.Activities2Heading} />
          <Bodythree data={this.Activities2Content} />
          <Bodythree data={this.Activities3Heading} />
          <Bodythree data={this.Activities3Content} />
          <Bodythree data={this.Activities4Heading} />
          <Bodythree data={this.Activities4Content} />
          <Bodythree data={this.Activities5Heading} />
          <Bodythree data={this.Activities5Content} />
          <Bodythree data={this.Activities6Heading} />
          <Bodythree data={this.Activities6Content} />
          <Bodythree data={this.Activities7Heading} />
          <Bodythree data={this.Activities7Content} />
          <Bodythree data={this.Activities8Heading} />
          <Bodythree data={this.Activities8Content} />
          <Bodythree data={this.Activities9Heading} />
          <Bodythree data={this.Activities9Content} />
        </div>
      </div>
    );
  }
}

export default Library;
