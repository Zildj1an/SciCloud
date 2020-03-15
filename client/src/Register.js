/*
 * Register form.
 */

import React from 'react'
import './Form.css'
import Profile from './Profile.js'
import Api from './Api.js'
import {
  Link,
  Redirect
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Register extends React.Component {
  constructor (props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = { params: Api.RegisterParams }
  }

  render () {
    return (
      <CSSTransition appear in={this.props.in} classNames='register-form'>
        <form class='register-form'>
          <input type='text' class='input-field' placeholder='First name' required />
          <input type='text' class='input-field' placeholder='Last name' required />
          <input type='email' id='r_email' class='input-field' placeholder='Email' required />
          <input type='date' id='date_b' class='input-field' placeholder='Date of birth' title='You must be 18 or older' required />
          <input
            type='password' id='r_password' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title='Must contain at least one number and
  uppercase and lowercase letter, and at
  least 8 or more characters' class='input-field' placeholder='Password' required
          />
          <input type='password' id='rc_password' class='input-field' placeholder='Confirm password' required />
          <input type='number' class='input-field' placeholder='Phone number' />
          <button type='submit' class='signup-btn'>Sign up</button>
          <p class='message'>Already registered? <Link to='login'>Login</Link></p>
        </form>
      </CSSTransition>
    )
  }
}

export default Register
