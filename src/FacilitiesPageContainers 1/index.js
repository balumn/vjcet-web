import React from "react";
<<<<<<< HEAD
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
=======
import CCC from "./CCC"
import Canteen from "./Canteen"
import Gym from "./Gym"
// import Auditorium from "./Auditorium"
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
// import Transportation from "./Transportation"

class FacilitiesPageContainers extends React.Component{
    render(){
        return (
            <React.Fragment>
<<<<<<< HEAD
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
=======
                <Canteen />
                <hr style={{width:'85%'}} /> <br />
                <CCC />
                <Gym />
                {/* <MiniAuditorium /> */}
                {/* <Transportation /> */}
>>>>>>> cfaf3c989fcc45709bede74c51900dcba55e7ed9
            </React.Fragment>

        )
    }
}
export default FacilitiesPageContainers;