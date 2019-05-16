import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import ImageOne from "../Components/Images/ImageOne"
class Home extends Component {
    state = {};
    HomeHeading = {
        instanceID: "HomeHeading",
        title: "Home"
    };
    Img1 = {
        instanceID: "Img1",
        image: "Mtech1.jpg",
        width: "100%"
    };
    Img2 = {
        instanceID: "Img2",
        image: "Mtech2.jpg",
        width: "100%"
    };
    Img3 = {
        instanceID: "Img3",
        image: "Mtech3.jpg",
        width: "100%"
    };
    Img4 = {
        instanceID: "Img4",
        image: "Mtech4.jpg",
        width: "100%"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.HomeHeading} />
                <div className="bodyContainer">
                    <p><ImageOne data={this.Img1} /></p>
                    <p><ImageOne data={this.Img2} /></p>
                    <p><ImageOne data={this.Img3} /></p>

                </div>
            </div>
        );
    }
}

export default Home; 
