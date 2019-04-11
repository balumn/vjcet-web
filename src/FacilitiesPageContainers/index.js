import React from "react";
import CCC from "./CCC"
import Canteen from "./Canteen"
import Gym from "./Gym"
// import Auditorium from "./Auditorium"
// import Transportation from "./Transportation"

class FacilitiesPageContainers extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Canteen />
                <hr style={{width:'85%'}} /> <br />
                <CCC />
                <Gym />
                {/* <MiniAuditorium /> */}
                {/* <Transportation /> */}
            </React.Fragment>

        )
    }
}
export default FacilitiesPageContainers;