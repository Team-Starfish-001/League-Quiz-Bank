import React from 'react';
import "./UserProfilePic.css";
import altProfilePic from "./altprofilepic.png";
class UserProfilePic extends React.Component {
    checkForProfilePic(imgSrc) {
        if(imgSrc == null) {
            imgSrc = altProfilePic;
        }
        return imgSrc
    }
    render() {
        return(
            <div id='profilepic'>
                <img alt='Profile Pic' src={this.checkForProfilePic(this.props.src)}></img>
            </div>
        );
    }
}
export default UserProfilePic;