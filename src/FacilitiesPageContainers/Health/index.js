import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
// import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

class Health extends React.Component {
    HealthTitle = {
        instanceID: "HealthTitle",
        title: "Health and Counselling"
    };
    HealthContent1 = {
        instanceID: "HealthContent1",
        title: "Viswajyothi College of Engineering and Technology  is very much concerned about the Psychological- human formation of Students along with their academic and intellectual development. We have a counselling center in Viswajyothi college where students are free to walk in and share their challenges and difficulties to become resilient people. Through Counseling students get a Psychological strength to cope with stress and hardships."
    }
    HealthContent2 = {
        instanceID: "HealthContent2",
        title: "A follow up sessions where the psychological changes of the students are being evaluated periodically. Mostly evaluations are done with the help of emotional intelligence self-assessment test and personality assessment tests etc. Counselling help the students to have a deeper self knowledge by knowing one's own personality 'Trait Inventory'. Each counseling sessions focus more on their healthy personality factors such as achievement, acceptance and affection in a very unique way. Thus the result is, students become very positive in their attitude and focus more on their studies, inter-personal relationships thereby become become efficient and skilled engineers in the future."
    }
    // HealthImagedata = {
    //     instanceID: "HealthImagedata",
    //     image: "cover2-1.jpg",
    //     width: "100%"
    // }
    render() {
        return (
            <React.Fragment>
                <div className="contain">
                    <HeadingTwo data={this.HealthTitle} className="Heading" />
                    {/* <ImageOne data={this.HealthImagedata} /> */}
                    <div className="bodyContainer">
                        <BodyOneJustified data={this.HealthContent1} />
                        <p><BodyOneJustified data={this.HealthContent2} /></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Health;