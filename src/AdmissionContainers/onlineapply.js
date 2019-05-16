import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
class OnlineApply extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Apply Online"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <iframe src="https://form.jotform.me/90902885025459" width="90%" height="1000" title="mtechApplyForm"></iframe>
                </div>
            </div>
        );
    }
}

export default OnlineApply;
