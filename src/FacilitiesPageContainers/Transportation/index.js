import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Transportation extends React.Component{
    TransportationTitle = {
        instanceID: "TransportationTitle",
        title: "Transportation"
    };
    TransportationContent1 = {
        instanceID: "TransportationContent1",
        title:"Viswajyothi is situated in Vazhakulam is well-connected with the central Kerala. It offers transport facility to its students and faculty members on very nominal charges. The buses ply on different routes of Ernakulam, Idukki and Kottayam Districts areas to pick and drop the students. The colleges have a total of 19 buses.  Our Bus drivers are licensed by the RTO to drive college buses to ensure the full safety of both the students & staff members."
    }
    TransportationContent2 = {
        instanceID: "TransportationContent2",
        title:"The students are spared from the difficulty of commuting to the college by public transport. The transport facility is also a significant contributor of inculcating an element of punctuality among the students. Bus Facility is also available for students & faculty members for industrial visits, field trips and other academic activities."
    }
    TransportationImagedata = {
        instanceID: "TransportationImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
              <div className="contain">
              <HeadingTwo data={this.TransportationTitle} className="Heading" />
              <ImageOne data={this.TransportationImagedata} />
              <div className="bodyContainer">
                <BodyOneJustified data={this.TransportationContent1} />
                <p><BodyOneJustified data={this.TransportationContent2} /></p>
              </div>
              </div>
          </React.Fragment>
      )
    }

}

export default Transportation;