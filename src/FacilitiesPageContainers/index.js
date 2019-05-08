import React from "react";
import Canteen from "./Canteen";
import Auditorium from "./Auditorium";
import Health from "./Health";
import Transportation from "./Transportation";
import BankPost from "./BankPost";
import HeadingOne from "../Components/Texts/HeadingOne";

class FacilitiesPageContainers extends React.Component {
  FacTitle = {
    instanceID: "FacTitle",
    title: "Core Facilities"
  };
  render() {
    return (
      <React.Fragment>
        <HeadingOne data={this.FacTitle} className="Heading" />
        <Canteen />
        <br /> <br />
        <Transportation />
        <br /> <br />
        <Auditorium />
        <br /> <br />
        <Health />
        <br /> <br />
        <BankPost />
        <br /> <br />
      </React.Fragment>
    );
  }
}
export default FacilitiesPageContainers;
