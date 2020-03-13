/*
 * Initial page. Contains the login and register forms
 */

import React from 'react';
import './Home.css';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import {
  Link,
  Redirect
} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Home HTML here */}
      </div>
    );
  }
}

export default Home;
