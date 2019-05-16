import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Headingtwo from "../Components/Texts/HeadingTwo"
import BodyOneJustified from "../Components/Texts/BodyOneJustified"
class GuideLines extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Guidelines"
    };
    Heading1 = {
        instanceID: "Heading1",
        title: "General Instructions"
    };
    Features1 = {
        instanceID: "Features1",
        title: "•	Candidate should submit applications offline."
    };

    Features2 = {
        instanceID: "Features2",
        title: "•	Affix a passport size (3.5 x 3.5 cm) photograph in the space provided for offline application. "
    };
    Features3 = {
        instanceID: "Features3",
        title: "•	Applications should be complete in all respects. A candidate will be considered for admission, only if he/she has furnished the relevant certificates prescribed, in proof of eligibility or in support of any claim for reservation, under any category along with the DD"
    };
    Features4 = {
        instanceID: "Features4",
        title: "•	No opportunity will be given to incorporate any details after the submission of the application."
    };
    Features5 = {
        instanceID: "Features5",
        title: "•	All basic information required is to be filled in with utmost care. The data provided in the offline application will be used for processing the application. Any error in filling the offline application or providing false/incomplete/wrong information will affect the candidate's eligibility for admission or claim for reservation under any category."
    };
    Features6 = {
        instanceID: "Features6",
        title: "•	Applications with the necessary copies of certificates and DD may be sent to The Principal, Viswajyothi College of Engineering and Technology, Vazhakulam P.O, Muvattupuzha, Ernakulam Dist. Kerala. Pin: 686 670 on or before the last date prescribed."
    };
    Features7 = {
        instanceID: "Features7",
        title: "•	The college will not be responsible for any postal delay or loss of application during transit."
    };
    Features8 = {
        instanceID: "Features8",
        title: "•	Candidates are advised to keep a copy of completed application form for further reference."
    };
    Heading2 = {
        instanceID: "Heading1",
        title: "General Instructions"
    };
    Features21 = {
        instanceID: "Features1",
        title: "•	Qualifying Degree Certificate."
    };

    Features22 = {
        instanceID: "Features2",
        title: "•	Qualifying Degree mark list."
    };
    Features23 = {
        instanceID: "Features3",
        title: "•	Proof of age and date of birth"
    };
    Features24 = {
        instanceID: "Features4",
        title: "•	Experience Certificate, if any"
    };
    Features25 = {
        instanceID: "Features5",
        title: "•	Proof to claim SC/ST"
    };
    Features26 = {
        instanceID: "Features6",
        title: "•	GATE score card (for candidates with valid GATE score)"
    };
    Features27 = {
        instanceID: "Features7",
        title: "•	Proof regarding the submission of application to DTE."
    };
    Features28 = {
        instanceID: "Features8",
        title: "•	Conduct Certificate from the institution last attended (< 6 months)."
    };
    Features29 = {
        instanceID: "Features8",
        title: "Candidates are advised to visit the college website regularly to get updated information on interview and admission etc. No separate communication will be sent on this account. Selected candidate shall take admission at the appointed time after paying the tuition fees and other fees stipulated by authorities including special fees and other fees to be paid to the University/statutory bodies."
    };
    Heading3 = {
        instanceID: "Heading1",
        title: " At the Time of Admission"
    };
    Features31 = {
        instanceID: "Features1",
        title: "The following certificates have to be produced in original at the time of admission"
    };

    Features32 = {
        instanceID: "Features2",
        title: "•	Qualifying Degree Certificate with 1 attested copy"
    };
    Features33 = {
        instanceID: "Features3",
        title: "•	Mark list of qualifying degree with 1 attested copy"
    };
    Features34 = {
        instanceID: "Features4",
        title: "•	Proof of age and community"
    };
    Features35 = {
        instanceID: "Features5",
        title: "•	Sponsorship Certificate, in case of sponsored candidate, if not produced yet."
    };
    Features36 = {
        instanceID: "Features6",
        title: "•	Relieving Certificate for sponsored candidates who are employed."
    };
    Features37 = {
        instanceID: "Features7",
        title: "•	Gate Score Card, Gate qualified candidates."
    };
    Features38 = {
        instanceID: "Features8",
        title: "•	SSLC/Secondary Examination Certificate with 1 attested copies."
    };
    Features39 = {
        instanceID: "Features8",
        title: "•	Transfer Certificate from the institution last studies."
    };
    Features310 = {
        instanceID: "Features8",
        title: "•	Course and conduct Certificate from the Head of the Department last attended (< 6 months)."
    };
    Features311 = {
        instanceID: "Features8",
        title: "•	Two Passport Size Colour Photographs."
    };
    Features312 = {
        instanceID: "Features8",
        title: "•	Migration Certificate in original for students who passed degree from Universities other than Kerala technical University"
    };
    Features313 = {
        instanceID: "Features8",
        title: "Eligibility Certificate from Kerala Technological University from students who passed degree from state other than Kerala."
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <p><Headingtwo data={this.Heading1} /></p>
                    <p><BodyOneJustified data={this.Features1} /></p>
                    <p><BodyOneJustified data={this.Features2} /></p>
                    <p><BodyOneJustified data={this.Features3} /></p>
                    <p><BodyOneJustified data={this.Features4} /></p>
                    <p><BodyOneJustified data={this.Features5} /></p>
                    <p><BodyOneJustified data={this.Features6} /></p>
                    <p><BodyOneJustified data={this.Features7} /></p>
                    <p><BodyOneJustified data={this.Features8} /></p>
                    <p><Headingtwo data={this.Heading2} /></p>
                    <p><BodyOneJustified data={this.Features21} /></p>
                    <p><BodyOneJustified data={this.Features22} /></p>
                    <p><BodyOneJustified data={this.Features23} /></p>
                    <p><BodyOneJustified data={this.Features24} /></p>
                    <p><BodyOneJustified data={this.Features25} /></p>
                    <p><BodyOneJustified data={this.Features26} /></p>
                    <p><BodyOneJustified data={this.Features27} /></p>
                    <p><BodyOneJustified data={this.Features28} /></p>
                    <p><BodyOneJustified data={this.Features29} /></p>
                    <p><Headingtwo data={this.Heading3} /></p>
                    <p><BodyOneJustified data={this.Features31} /></p>
                    <p><BodyOneJustified data={this.Features32} /></p>
                    <p><BodyOneJustified data={this.Features33} /></p>
                    <p><BodyOneJustified data={this.Features34} /></p>
                    <p><BodyOneJustified data={this.Features35} /></p>
                    <p><BodyOneJustified data={this.Features36} /></p>
                    <p><BodyOneJustified data={this.Features37} /></p>
                    <p><BodyOneJustified data={this.Features38} /></p>
                    <p><BodyOneJustified data={this.Features39} /></p>
                    <p><BodyOneJustified data={this.Features310} /></p>
                    <p><BodyOneJustified data={this.Features311} /></p>
                    <p><BodyOneJustified data={this.Features312} /></p>
                    <p><BodyOneJustified data={this.Features313} /></p>
                </div>
            </div>
        );
    }
}

export default GuideLines;
