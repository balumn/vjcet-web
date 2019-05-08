import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class CsHonors extends Component {
  state = {};
  CsHonorsHeading = {
    instanceID: "CeHonorsHeading",
    title: "Honors of Computer Science Engineering"
  };
  CsHonors1 = {
    instanceID: "cshonors1",
    image: "cshonorsimg1.JPEG",
    width: "30%",
    name: "Anu Soosan Baby",
    content:
      "Secured Third Rank in B.Tech Computer Science & Engineering May 2011"
  };
  CsHonors2 = {
    instanceID: "cshonors2",
    image: "cshonorsimg2.JPEG",
    width: "30%",
    name: "Lisa Joy",
    content:
      "Secured Second Rank in B.Tech Computer Science & Engineering May 2008"
  };
  CsHonors3 = {
    instanceID: "cshonors3",
    image: "cshonorsimg3.JPEG",
    width: "30%",
    name: "Nimmy George",
    content: "Secured First Rank in M.Tech Computer Science May 2011"
  };
  CsHonors4 = {
    instanceID: "cshonors4",
    image: "cshonorsimg4.JPEG",
    width: "30%",
    name: "Kavya Johny",
    content: "Secured Second Rank in M.Tech Computer Science May 2011"
  };
  CsHonors5 = {
    instanceID: "cshonors5",
    image: "cshonorsimg5.JPEG",
    width: "30%",
    name: "Sivadas T Nair",
    content: "Secured Third Rank in M.Tech Computer Science May 2011"
  };
  CsHonors6 = {
    instanceID: "cshonors6",
    image: "cshonorsimg6.JPEG",
    width: "30%",
    name: "Merin Francis",
    content: "Secured First Rank in M.Tech Computer Science 2014"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.CsHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.CsHonors1} />
          </div>
          <div>
            <Honors data={this.CsHonors2} />
          </div>
          <div>
            <Honors data={this.CsHonors3} />
          </div>
          <div>
            <Honors data={this.CsHonors4} />
          </div>
          <div>
            <Honors data={this.CsHonors5} />
          </div>
          <div>
            <Honors data={this.CsHonors6} />
          </div>
        </div>
      </div>
    );
  }
}

export default CsHonors;
