/*
 * Profile page. Opened after logging in. Shows the users' profile
 * information.
 */

import React from 'react';
import Link from 'react-router-dom'
import Api from './Api.js'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    // Component state: the profile information will be stored here
    this.state = {info: new Api.ProfileInfo()};
  }

  render() {
    return (
      <div>
        {/* Profile HTML here */}
      </div>
    );
  }
}

export default Profile;
