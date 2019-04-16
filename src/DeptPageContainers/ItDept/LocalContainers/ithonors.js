import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honors from "../../../Components/honors";
import "./honors.css";
class ItHonors extends Component {
  state = {};
  ItHonorsHeading = {
    instanceID: "ItHonorsHeading",
    title: "Honors of Information Technology"
  };
  ItHonors1 = {
    instanceID: "ithonors1",
    image: "dummy.png",
    width: "30%",
    name: "Sonam Susan Mathews",
    content: "2014-2018"
  };
  ItHonors2 = {
    instanceID: "ithonors2",
    image: "dummy.png",
    width: "30%",
    name: " Jeesmon Johny",
    content: "2013-2017"
  };
  ItHonors3 = {
    instanceID: "ithonors3",
    image: "dummy.png",
    width: "30%",
    name: "Maria Jolly",
    content: "2012-2016"
  };
  ItHonors4 = {
    instanceID: "ithonors4",
    image: "dummy.png",
    width: "30%",
    name: "Nimitha Joy",
    content: "2011-2015"
  };
  ItHonors5 = {
    instanceID: "ithonors5",
    image: "dummy.png",
    width: "30%",
    name: "Akshay Aggarwal",
    content: "2010-2014"
  };
  ItHonors6 = {
    instanceID: "ithonors6",
    image: "ithonorsimg5.JPEG",
    width: "30%",
    name: "Dincy Devasia",
    content: "Secured Third rank in B.Tech Information Technology May 2013"
  };
  ItHonors7 = {
    instanceID: "ithonors7",
    image: "dummy.png",
    width: "30%",
    name: "Rhimi KX",
    content: "2008-2012"
  };
  ItHonors8 = {
    instanceID: "ithonors8",
    image: "dummy.png",
    width: "30%",
    name: "Rhimi KX",
    content: "2008-2012"
  };
  ItHonors9 = {
    instanceID: "ithonors9",
    image: "ithonorsimg1.JPEG",
    width: "30%",
    name: "Soumya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2011"
  };
  ItHonors10 = {
    instanceID: "ithonors10",
    image: "ithonorsimg2.JPEG",
    width: "30%",
    name: "Neethu Devassy",
    content: "Secured First Rank in B.Tech Information Technology May 2010"
  };
  ItHonors11 = {
    instanceID: "ithonors11",
    image: "ithonorsimg3.JPEG",
    width: "30%",
    name: "Priya Joseph",
    content: "Secured First Rank in B.Tech Information Technology May 2009"
  };
  ItHonors12 = {
    instanceID: "ithonors12",
    image: "dummy.png",
    width: "30%",
    name: "Mithun B Mathew",
    content: "2004-2008"
  };
  ItHonors13 = {
    instanceID: "ithonors13",
    image: "dummy.png",
    width: "30%",
    name: "Veena Kunju",
    content: "2003-2007"
  };
  ItHonors14 = {
    instanceID: "ithonors14",
    image: "dummy.png",
    width: "30%",
    name: "Vanitha K",
    content: "2002-2006"
  };
  ItHonors15 = {
    instanceID: "ithonors15",
    image: "ithonorsimg4.JPEG",
    width: "30%",
    name: "Jithin Joy",
    content: "Secured First Rank in B.Tech Information Technology May 2005"
  };

  render() {
    return (
      <div className="honors">
        <HeadingOne data={this.ItHonorsHeading} />
        <div className="photos">
          <div>
            <Honors data={this.ItHonors1} />
          </div>
          <div>
            <Honors data={this.ItHonors2} />
          </div>
          <div>
            <Honors data={this.ItHonors3} />
          </div>
          <div>
            <Honors data={this.ItHonors4} />
          </div>
          <div>
            <Honors data={this.ItHonors5} />
          </div>
          <div>
            <Honors data={this.ItHonors6} />
          </div>
          <div>
            <Honors data={this.ItHonors7} />
          </div>
          <div>
            <Honors data={this.ItHonors8} />
          </div>
          <div>
            <Honors data={this.ItHonors9} />
          </div>
          <div>
            <Honors data={this.ItHonors10} />
          </div>
          <div>
            <Honors data={this.ItHonors11} />
          </div>
          <div>
            <Honors data={this.ItHonors12} />
          </div>
          <div>
            <Honors data={this.ItHonors13} />
          </div>
          <div>
            <Honors data={this.ItHonors14} />
          </div>
          <div>
            <Honors data={this.ItHonors15} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItHonors;
