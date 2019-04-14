import React from "react";
import Canteen from "./Canteen"
import Auditorium from "./Auditorium"
import Health from "./Health";
import Library from "./Library";
import Transportation from "./Transportation";
import BankPost from "./BankPost";
import CCC from "./CCC";
import Gym from "./Gym";
import Hostal from "./Hostel";
import Sports from "./Sports";
// import Transportation from "./Transportation"

class FacilitiesPageContainers extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Sports />
                <br />  <br />
                <Canteen />
                <br />  <br />
                <Auditorium />
                <br />  <br />
                <Health />
                <br />  <br />
                <Library />
                <br />  <br />
                <Transportation />
                <br />  <br />
                <BankPost />
                <br />  <br />
                <CCC/>
                <br />  <br />
                <Gym />
                <br />  <br />
                <Hostal />
            </React.Fragment>

        )
    }
}
export default FacilitiesPageContainers;