import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class MeHonors extends Component {
  state = {};
  MeHonorsHeading = {
    instanceID: "MeHonorsHeading",
    title: "Honors of Mechanical Engineering"
  };
  MeHonors1 = {
    instanceID: "mehonors1",
    image: "mehonorsimg1.jpg",
    width: "30%",
    name: "Deepu P",
    content: "Secured First Rank in B.Tech Mechanical Engineering May 2006"
  };
  MeHonors2 = {
    instanceID: "mehonors2",
    image: "mehonorsimg2.JPEG",
    width: "30%",
    name: "Ms. Anju Joy",
    content: "2nd Rank MTech (2011-13 Batch)"
  };
  MeHonors3 = {
    instanceID: "mehonors3",
    image: "mehonorsimg3.JPEG",
    width: "30%",
    name: "Ms. Shari S Nair",
    content: "3rd Rank MTech (2011-13 Batch)"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.MeHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.MeHonors1} />
          </div>
          <div>
            <Honors data={this.MeHonors2} />
          </div>
          <div>
            <Honors data={this.MeHonors3} />
          </div>
        </div>
      </div>
    );
  }
}

export default MeHonors;
