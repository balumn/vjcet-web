import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class EcHonors extends Component {
  state = {};
  EcHonorsHeading = {
    instanceID: "EcHonorsHeading",
    title: " Roll Of Honors"
  };
  EcHonors1 = {
    instanceID: "echonors1",
    image: "echonorsimg1.JPEG",
    width: "30%",
    name: "Meera M Nair",
    content: "Secured First Rank in M.Tech VLSI in May 2011"
  };
  EcHonors2 = {
    instanceID: "echonors2",
    image: "echonorsimg2.JPEG",
    width: "30%",
    name: "Jayaprasad K V",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  EcHonors3 = {
    instanceID: "echonors3",
    image: "dummy.png",
    width: "30%",
    name: "Gayathri Anil",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  EcHonors4 = {
    instanceID: "echonors4",
    image: "echonorsimg4.jpg",
    width: "30%",
    name: "Haripriya P",
    content: "SSecured First Rank in M.Tech VLSI in May 2013"
  };
  EcHonors5 = {
    instanceID: "echonors5",
    image: "dummy.png",
    width: "30%",
    name: "Seena V P",
    content: "Secured Third Rank in M.Tech VLSI in May 2013"
  };
  EcHonors6 = {
    instanceID: "echonors6",
    image: "echonorsimg6.jpg",
    width: "30%",
    name: "Neenu Saju",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2016"
  };
  EcHonors7 = {
    instanceID: "echonors7",
    image: "dummy.png",
    width: "30%",
    name: "Deona Noble",
    content:
      "Secured Third Rank in B.Tech Electronics and Communication Engineering in May 2017"
  };
  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.EcHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.EcHonors1} />
          </div>
          <div>
            <Honors data={this.EcHonors2} />
          </div>
          <div>
            <Honors data={this.EcHonors3} />
          </div>
          <div>
            <Honors data={this.EcHonors4} />
          </div>
          <div>
            <Honors data={this.EcHonors5} />
          </div>
          <div>
            <Honors data={this.EcHonors6} />
          </div>
          <div>
            <Honors data={this.EcHonors7} />
          </div>
        </div>
      </div>
    );
  }
}

export default EcHonors;
