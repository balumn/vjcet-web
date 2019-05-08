import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Canteen extends React.Component {
    CanteenTitle = {
        instanceID: "CanteenTitle",
        title: "Canteen"
    };
    CanteenContent = {
        instanceID: "CanteenContent",
        title: "College has spacious canteen facility in the campus. It spans around an area of 3000sqft which caters to the taste of all students. Our canteen can accommodate 130 persons at a time. The canteens and cafeterias remain open on all working days. It provides all types of nutritious and hygienic eatables and beverages to cater to the students, staff and visitors. A variety of south Indian food and snack items are provided to the students and staff of the college with best quality. Our canteen uses multi kitchen system for quality cooking. Canteen is open from 8:00 AM to 5:30 PM on all working days."
    }
    CanteenContent2 = {
        instanceID: "CanteenContent2",
        title: "The college canteen is providing an experience of multi cuisine dishes to the students and the staff members on subsidized rates. It is directly run by the management to give paramount importance to the quality of food and hygiene."
    }
    canteenImagedata = {
        instanceID: "canteenImagedata",
        image: "IMG_7292.JPG",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <div className="contain">
                    <HeadingTwo data={this.CanteenTitle} className="Heading" />
                    <ImageOne data={this.canteenImagedata} />
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.CanteenContent} />
                        <p><BodyOneJustified data={this.CanteenContent2} /></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Canteen;