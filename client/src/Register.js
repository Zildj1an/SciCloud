/*
 * Register form.
 */

import React from 'react';
import './Register.css';
import Profile from './Profile.js';
import Api from './Api.js';
import {
  Link,
  Redirect
} from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = {params: new Api.RegisterParams()};
  }

  render() {
    return (
      <div>
        {/* Register HTML here */}
      </div>
    );
  }
}

export default Register;
