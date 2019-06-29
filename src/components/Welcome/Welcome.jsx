import React from 'react';
import UserProfilePic from '../UserProfilePic/UserProfilePic.jsx';

class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <UserProfilePic></UserProfilePic>
        <p>Welcome {this.props.name}</p>
      </div>
    );
  }
}

export default Welcome;
