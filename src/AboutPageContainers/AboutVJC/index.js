import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import "./About.css";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import AcademicsList from "../../Pages/AcademicsContainers/AcademicsList";

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
      "Viswajyothi is the lamp of God which brings light to the whole world. “Service of GOD through service of Humanity” is motto of the Kothamangalam Diocese. Behind each of its 96 famed educational institutions, is the unflagging efforts of the people of the Diocese.Viswajyothi was established in the year 2001, and its affiliated to A.P.J.Abdul Kalam Technological University. A highly committed Management Team with the vision of transforming the institute into an International Center of Excellence in Engineering Education; competent and dedicated Faculty; scientifically planned infrastructural facilities with state-of-the-art Laboratories, Fab-Lab, R & D centre, workshops and full-fledged learning arrangements."
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

  render() {
    return (
      <React.Fragment>
        <HeadingTwo data={this.AboutVjcTitle} />
        <ImageOne data={this.AboutVjcImage} />
        <div className="about-para">
          <BodyOneJustified data={this.AboutVjcText1} />
          <p><BodyOneJustified data={this.AboutVjcText2} /></p>
          <AcademicsList />
          <p><BodyOneJustified data={this.AboutVjcText3} /></p>
        </div>
        {/* <ResourcesAvailable /> */}
      
      </React.Fragment>
    );
  }
}

export default AboutVJC;
