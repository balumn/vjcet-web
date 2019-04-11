import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "./honors.js";
import "./honors.css";
class CsHonors extends Component {
  state = {};
  CsHonorsHeading = {
    instanceID: "CeHonorsHeading",
    title: "HONORS"
  };
  CsHonors1 = {
    instanceID: "cshonors1",
    image: "cshonorsimg1.JPEG",
    width: "10%",
    name: "Anu Soosan Baby",
    content:
      "Secured Third Rank in B.Tech Computer Science & Engineering May 2011"
  };
  CsHonors2 = {
    instanceID: "cshonors2",
    image: "cshonorsimg2.JPEG",
    width: "10%",
    name: "Lisa Joy",
    content:
      "Secured Second Rank in B.Tech Computer Science & Engineering May 2008"
  };
  CsHonors3 = {
    instanceID: "cshonors3",
    image: "cshonorsimg3.JPEG",
    width: "10%",
    name: "Nimmy George",
    content: "Secured First Rank in M.Tech Computer Science May 2011"
  };
  CsHonors4 = {
    instanceID: "cshonors4",
    image: "cshonorsimg4.JPEG",
    width: "10%",
    name: "Kavya Johny",
    content: "Secured Second Rank in M.Tech Computer Science May 2011"
  };
  CsHonors5 = {
    instanceID: "cshonors5",
    image: "cshonorsimg5.JPEG",
    width: "10%",
    name: "Sivadas T Nair",
    content: "Secured Third Rank in M.Tech Computer Science May 2011"
  };
  CsHonors6 = {
    instanceID: "cshonors6",
    image: "cshonorsimg6.JPEG",
    width: "10%",
    name: "Merin Francis",
    content: "Secured First Rank in M.Tech Computer Science 2014"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.CsHonorsHeading} />
        <div className="photos">
          <div className="containers">
            <div className="row1">
              <Honors data={this.CsHonors1} />
            </div>
            <div className="row2">
              <Honors data={this.CsHonors2} />
            </div>
            <div className="row3">
              <Honors data={this.CsHonors3} />
            </div>
            <div className="row4">
              <Honors data={this.CsHonors4} />
            </div>
            <div className="row5">
              <Honors data={this.CsHonors5} />
            </div>
            <div className="row6">
              <Honors data={this.CsHonors6} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CsHonors;
