import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
class CeHonors extends Component {
  state = {};
  CeHonorsHeading = {
    instanceID: "CeHonorsHeading",
    title: "HONORS"
  };
  CeHonorsImg1 = {
    instanceID: "CeHonorsImg",
    image: "cehonorsimg1.jpg"
  };
  render() {
    return (
      <div class="cehonors">
        <HeadingOne data={this.CeHonorsHeading} />
        <div class="photos">{/* content not provided */}</div>
      </div>
    );
  }
}

export default CeHonors;
