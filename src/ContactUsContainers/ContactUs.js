import './contact.css'
import React from "react"
import HeadingOne from '../Components/Texts/HeadingOne';
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class ContactUs extends React.Component {
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


    ReachUsHeading = {
        instanceID: "ReachUsHeading",
        title: "Reach Us"
    }
    EnquiryHeading = {
        instanceID: "EnquiryHeading",
        title: "Enquiry"
    }

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <div classNameName="bgg">
                    <div className="root">
                        <div>

                            <div className="child">
                                {/* <h1 className="Heading"> Reach Us</h1> */}
                                <HeadingOne data={this.ReachUsHeading} />
                                <h3 className="add"> Our Address</h3>
                                <h3 className="Reach1">Viswajyothi College of Engineering & Technology Vazhakulam,<br />
                                    Muvattupuzha,<br />
                                    Ernakulam,Kerala,<br />
                                    India-686670
                                    </h3>
                                <h3 className="add"> E-mail</h3>
                                <h3 className="Reach1"> vjcvklm@gmail.com<br />
                                    vjcet@vjcet.org
                                    </h3>
                            </div>
                            <div className="child">
                                <h3 className="add"> Our Phone<br /></h3>
                                <h3 className="Reach1">
                                    0485-2262211<br />
                                    0485-2262211<br />
                                    0485-2262211<br />
                                    0485-2262211<br />
                                    0485-2262211<br />
                                </h3>
                            </div>
                            <div className="child">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125752.05890978406!2d76.5889803!3d9.9545934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd2f387bbce7%3A0x33c9780276b797b6!2sViswajyothi+College+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1555349832912!5m2!1sen!2sin" width="450" height="450" frameborder="0"></iframe>
                            </div>
                        </div>
                        <div className="child" >
                            {/* <h1 className="Heading">Enquiry</h1> */}
                            <HeadingOne data={this.EnquiryHeading} />
                            <h3 className="Reach1">Send us and enquiry or call us directly to learn more</h3>
                            <form>
                                <label className="Enquiry"> <b>Name </b></label>
                                <br />
                                <input className="clr1" type="text" name="Name" placeholder="Enter your name" />
                                <br />
                                <br />
                                <label className="Enquiry">  <b> Phone Number</b>  </label>
                                <br />
                                <input className="clr1" type="integer" name="Phonenum" placeholder="Enter your phone number" />
                                <br />
                                <br />
                                <label className="Enquiry"> <b>Email </b></label>
                                <br />
                                <input className="clr1" type="email" name="E-mail" placeholder="Enter your Email" />
                                <br />
                                <br />
                                <label className="Enquiry"> <b>Comments </b> </label>
                                <br />
                                <textarea className="clr" name="message" placeholder="Your Enquiry"></textarea >
                                <br />
                                <input className="button" type="Submit" name="Submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </React.Fragment>
        );
    }
}

export default ContactUs;