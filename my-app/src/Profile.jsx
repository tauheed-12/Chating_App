import React from "react";
import img from "./images/Tauheed.jpeg";

function Profile({ DisplayName, imageName }) {
    return (
        <div className="Profile">
            <div className="ProfileContent">
                <div className="ProfileTag"><span>Profile</span></div>
                <div className="ProfileImg">
                {console.log(imageName)}
                <img src={`http://localhost:3000/images/${imageName}.jpeg`} alt={DisplayName} />
                </div>
                <div className="ProfileName">
                    <span id="name">Name</span>
                    <span id="tauheed">{DisplayName}</span>
                </div>
                <div className="ProfileAbout">
                    <span id="name">About</span>
                    <span id="tauheed">There is no substitute for hard work</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
