/*
 * Login form
 */

import React from 'react';
import './Login.css';
import Profile from './Profile.js';
import Api from './Api.js';
import {
  Link,
  Redirect
} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = {params: new Api.LoginParams()};
  }

  render() {
    return (
      <div>
        {/* Login HTML here */}
      </div>
    );
  }
}

export default Login;
