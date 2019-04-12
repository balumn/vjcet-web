import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class EeHonors extends Component {
  state = {};
  EeHonorsHeading = {
    instanceID: "EeHonorsHeading",
    title: "Roll Of Honors"
  };
  EeHonors1 = {
    instanceID: "eehonors1",
    image: "dummy.png",
    width: "30%",
    name: "Jeswin Jose",
    content:
      "Secured First Position in B.Tech Electrical &amp; Electronics Engineering May 2017"
  };
  EeHonors2 = {
    instanceID: "eehonors2",
    image: "eehonorsimg1.JPEG",
    width: "30%",
    name: "Devika K B",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2010"
  };
  EeHonors3 = {
    instanceID: "eehonors3",
    image: "eehonorsimg2.JPEG",
    width: "30%",
    name: "Breeza Paoulose",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2009"
  };
  EeHonors4 = {
    instanceID: "eehonors4",
    image: "eehonorsimg3.JPEG",
    width: "30%",
    name: "Roseline Baby",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };
  EeHonors5 = {
    instanceID: "eehonors5",
    image: "eehonorsimg4.JPEG",
    width: "30%",
    name: "Ashna Joseph",
    content:
      "Secured Third Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };

  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.EeHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.EeHonors1} />
          </div>
          <div>
            <Honors data={this.EeHonors2} />
          </div>
          <div>
            <Honors data={this.EeHonors3} />
          </div>
          <div>
            <Honors data={this.EeHonors4} />
          </div>
          <div>
            <Honors data={this.EeHonors5} />
          </div>
        </div>
      </div>
    );
  }
}

export default EeHonors;
