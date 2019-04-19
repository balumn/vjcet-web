import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";

class CCC extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Common Computing Center"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "Common Computing Center"
    };
    NATitle = {
        instanceID: "CCCTitle",
        title: "Network Architecture of VJCET"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi has a central computing facility named as Common Computing Centre (CCC) functioning with a speed of 200 Mbps from 8AM to 8PM. Students can access Internet and download relevant study materials and can procure hard copies of the study materials with the assistance of staff at any time. The center is air conditioned and well-equipped with an uninterrupted power supply."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "We have more than 1000 computers and 11 servers in the campus and all of these are connected across a single LAN. All the computers are in Hence staff and students can access their data at any lab at any time during working hours. Our servers are 24 hours working throughout the year. We have a central point called server room from where all the locations are connected via fiber optic back bone cable. All the operations are monitored from the server room."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "cover2-1.jpg",
        width: "100%"
    }
    Server1 = {
        instanceID: "Server1",
        title: "1. Main Server"
    }
    Server2 = {
        instanceID: "Server2",
        title: "2. Backup Server"
    }
    Server3 = {
        instanceID: "Server3",
        title: "3. NAS (File Server)"
    }
    Server4 = {
        instanceID: "Server4",
        title: "4. Database Server"
    }
    Server5 = {
        instanceID: "Server5",
        title: "5. Student Database Server"
    }
    Server6 = {
        instanceID: "Server6",
        title: "6. FTP Server"
    }
    Server7 = {
        instanceID: "Server7",
        title: "7. Anti Virus Server"
    }
    Server8 = {
        instanceID: "Server8",
        title: "8. Print Server"
    }

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <ImageOne data={this.CCCImagedata} />
                    <br />
                    <div className="bodyContainer">
                        <HeadingTwo data={this.CCCTitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent1} />
                        <HeadingTwo data={this.NATitle} className="Heading" />
                        <BodyOneJustified data={this.CCCContent2} />
                        <div className="bodyContainerInner">
                            <p><BodyOneJustified data={this.Server1} /></p>
                            <p><BodyOneJustified data={this.Server2} /></p>
                            <p><BodyOneJustified data={this.Server3} /></p>
                            <p><BodyOneJustified data={this.Server4} /></p>
                            <p><BodyOneJustified data={this.Server5} /></p>
                            <p><BodyOneJustified data={this.Server6} /></p>
                            <p><BodyOneJustified data={this.Server7} /></p>
                            <p><BodyOneJustified data={this.Server8} /></p>
                        </div>

                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default CCC;