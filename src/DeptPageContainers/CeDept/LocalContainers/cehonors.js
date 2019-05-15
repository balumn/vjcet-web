import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
class CeHonors extends Component {
  state = {};
  CeHonorsHeading = {
    instanceID: "CeHonorsHeading",
    title: "Honors of Civil Engineering"
  };
  CeHonors1 = {
    instanceID: "cshonors1",
    image: "cehonors.jpg",
    width: "30%",
    name: "Mariamol Mathew",
    content:
      "Secured Tenth Rank in B.Tech Civil Engineering May 2018"
  };
  render() {
    return (

      <div className="Honors">
        <HeadingOne data={this.CeHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.CeHonors1} />
          </div>
        </div>
      </div>
    );
  }
}

export default CeHonors;
