import React from 'react';
import altProfilePic from './altprofilepic.png';

class UserProfilePic extends React.Component {
  checkForProfilePic(imgSrc) {
    if(imgSrc == null) {
      imgSrc = altProfilePic;
    }
    return imgSrc;
  }
  render() {
    return(
      <div id='profilepic'>
        <a href='https://www.youtube.com/watch?v=wJHDVqFC-dg'><img style={{width:'7%', height:'7%'}} alt='Profile Pic' src={this.checkForProfilePic(this.props.src)}></img></a>
      </div>
    );
  }
}

export default UserProfilePic;
