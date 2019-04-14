import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";

class Hostal extends React.Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };
    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };

    HostalTitle = {
        instanceID: "HostalTitle",
        title: "RESIDENTIAL FACILITIES"
    };
    HostalContent = {
        instanceID: "HostalContent",
        title: "The hostel facilities are of high quality. Both Ladies and Men’s Hostel are located inside the campus. Members of the teaching staff are appointed as Resident Tutors in the hostel. The rooms provide most modern facilities and privacy.  Viswajyothi  provides excellent hostel facilities for students. The hostels have mess facilities for students and faculties. The mess is spacious, highly hygienic and elegant. College hostel is fully wifi enabled. Uninterrupted power supply is ensured using a 100KV Generator. Each student is provided with a cot, a table and a chair in their respective rooms. Counseling Hall Counseling and Prayer cells are available and active in each hostel to facilitate counseling the students and conduct prayers. Students of all faiths can avail of these services.  "
    }


    GentsHostalTitle = {
        instanceID: "GentsHostalTitle",
        title: "Gents Hostel"
    };
    GentsContent = {
        instanceID: "GentsContent",
        title: "The hostel system runs under the control of chief warden Rev.Fr. Thomas Kottaram and resident tutors."
    }


    GirlsHostalTitle = {
        instanceID: "GirlsHostalTitle",
        title: "Girls Hostel"
    };
    GirlsHostalContent = {
        instanceID: "GirlsHostalContent",
        title: "The hostel system runs under the control of the warden Sr. Lissy."
    };

    GentsFeature1 = {
        instanceID: "GentsFeature1",
        title: "Maximum Capacity: 350 boys "
    }
    GirlsFeature1 = {
        instanceID: "GirlsFeature1",
        title: "Maximum Capacity: 450 girls "
    }
    HostalImagedata = {
        instanceID: "HostalImagedata",
        image: "cover2-1.jpg",
        width: "100%"
    }
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.HostalTitle} className="Heading" />
                    <ImageOne data={this.HostalImagedata} />
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.HostalContent} />
                        <HeadingTwo data={this.GentsHostalTitle} className="Heading" />
                        <ul>
                            <li><BodyOneJustified data={this.GentsFeature1} /></li>
                        </ul>
                        <HeadingTwo data={this.GirlsHostalTitle} className="Heading" />
                        <ul>
                            <li><BodyOneJustified data={this.GirlsFeature1} /></li>
                        </ul>
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}
            </React.Fragment>
        )
    }

}

export default Hostal;