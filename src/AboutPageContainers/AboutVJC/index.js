import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import "./About.css";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";

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
  AboutVjcText = {
    instanceID: "AboutVjcText",
    title:
      "Located in Vazhakulam one of the suburbs of Ernakulam.VJCET is on a sprawling 26 acres plot of land and is just on the side of State Highway No.8, about 5 Kms from Muvattupuzha en-route to Thodupuzha.Viswajyothi College of Engineering has established itself as a benchmark of excellence in technical higher education and research. Founded in 2001, Viswajyothi is approved by the AICTE, with all B-Tech degrees accredited to NBA and affiliated to A.P.J. Abdul Kalam Technological University(KTU),Thiruvananthapuram.Over the years, the institute has created a niche for its innovative short-term courses through continuing education programmes.With the majestic beauty of the land on one side, and with hills and vast open spaces on others, the campus provides an ideal setting for learning."
  };

  render() {
    return (
      <React.Fragment>
        <HeadingTwo data={this.AboutVjcTitle} />
        <ImageOne data={this.AboutVjcImage} />
        <div className="about-para">
          <BodyOneJustified data={this.AboutVjcText} />
        </div>
        {/* <ResourcesAvailable /> */}
      </React.Fragment>
    );
  }
}

export default AboutVJC;
