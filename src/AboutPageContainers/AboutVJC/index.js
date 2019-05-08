import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import "./About.css";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import ResourcesGroup from "../ResourcesGroup/ResourcesGroup";

class AboutVJC extends React.Component {
  AboutVjcTitle = {
    instanceID: "AboutVjcTitle",
    title: "About Viswajyothi"
  };

  AboutVjcImage = {
    instanceID: "AboutVjcImage",
    image: "cover2-1.jpg",
    width: "93%"
  };
  AboutVjcText1 = {
    instanceID: "AboutVjcText1",
    title:
      "Viswajyothi was established in the year 2001, and it is affiliated to A.P.J.AbdulKalam Technological University. A highly committed Management Team with competent and dedicated Faculty and staff makes this place an International Center of Excellence in Engineering Education."
  };
  AboutVjcText2 = {
    instanceID: "AboutVjcText2",
    title:
      "Viswajyothi started its function with 135 students and 35 staffs offering three Engineering Degree courses- B.Tech in Computer Science and Engineering, Electronics and Communication and Information Technology. In 2005 B-Tech in Mechanical Engineering and in 2006, Electrical and Electronics Engineering were introduced. Later, six UG degree courses in engineering with improved intake and four  PG courses including MBA, were offered after due permission from AICTE. The National Board of Accreditation was awarded to all six undergraduate engineering degree courses in 2018."
  };
  AboutVjcText3 = {
    instanceID: "AboutVjcText3",
    title:
      "The building complex of the College is  situated in a sprawling campus of 26 acres, nestled among lush greenery over a hillock on the side of the Ernakulam - Thodupuzha State Highway.  The campus is divided into various functional zones-Main College Building namely; Block A,B,C & D, Gents and Ladies Hostels. The college has spacious playgrounds, synthetic basketball court and gymnasium. ATM counters of South Bank of India and South Indian Bank are there in front of the college gate."
  };
  PGCourse = {
    instanceID: "PGCourse",
    title: "PG Programmes offered:"
  }
  PGCourse1 = {
    instanceID: "PGCourse1",
    title: "Computer Science & Engineering"
  }
  PGCourse2 = {
    instanceID: "PGCourse2",
    title: "Electronics and Communication Engineering with specialization VLSI & Embedded Systems."
  }
  PGCourse3 = {
    instanceID: "PGCourse3",
    title: "Industrial Engineering and Management"
  }
  PGCourse4 = {
    instanceID: "PGCourse4",
    title: "MBA"
  }
  UGCourse = {
    instanceID: "UGCourse",
    title: "B-Tech Programmes offered:(All programs Accredited by NBA)"
  }
  UGCourse1 = {
    instanceID: "UGCourse1",
    title: "Civil Engineering"
  }
  UGCourse2 = {
    instanceID: "UGCourse2",
    title: "Computer Science and Engineering"
  }
  UGCourse3 = {
    instanceID: "UGCourse3",
    title: "Electronics and Communication engineering"
  }
  UGCourse4 = {
    instanceID: "UGCourse4",
    title: "Electrical and Electronics Engineering"
  }
  UGCourse5 = {
    instanceID: "UGCourse5",
    title: "Information Technology"
  }
  UGCourse6 = {
    instanceID: "UGCourse6",
    title: "Mechanical Engineering"
  }


  render() {
    return (
      <React.Fragment>
        <HeadingTwo data={this.AboutVjcTitle} />
        <ImageOne data={this.AboutVjcImage} />
        <div className="about-para">
          <BodyOneJustified data={this.AboutVjcText1} />
          {/* <p><BodyOneJustified data={this.AboutVjcText2} /></p> */}
          <div className="inner-para">
            <p><BodyOneJustified data={this.PGCourse} /></p>
            <ul>
              <li><p><BodyOneJustified data={this.PGCourse1} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse2} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse3} /></p></li>
              <li><p><BodyOneJustified data={this.PGCourse4} /></p></li>
            </ul>
            <p><BodyOneJustified data={this.UGCourse} /></p>
            <ul>
              <li><p><BodyOneJustified data={this.UGCourse1} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse2} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse3} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse4} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse5} /></p></li>
              <li><p><BodyOneJustified data={this.UGCourse6} /></p></li>
            </ul>

          </div>
          {/* <p><BodyOneJustified data={this.AboutVjcText3} /></p> */}
        </div>
        <ResourcesGroup />

      </React.Fragment>
    );
  }
}

export default AboutVJC;
