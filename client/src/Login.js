/*
 * Login form
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

class Login extends React.Component {
  constructor (props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = { params: Api.LoginParams }

    // Bind 'this' to the component, otherwise 'this' is undefined inside class methods
    this.handleChange = this.handleChange.bind(this)
  }

  // Runs whenever a change is made to the form values
  // Updates the state and runs validation
  handleChange (event) {
    const params = {}
    params[event.target.id] = event.target.value
    this.setState({ params: params })
    // TODO validate
  }

  render () {
    return (
      <CSSTransition appear in={this.props.in} classNames='login-form'>
        <form id='login' class='login-form'>
          <input type='email' id='email' class='input-field' placeholder='Email' required value={this.state.params.email} onChange={this.handleChange} />
          <input type='password' id='password' class='input-field' placeholder='Password' required value={this.state.params.password} onChange={this.handleChange} />
          <input type='checkbox' class='check-box' /><font color='white'>Remember password</font>
          <button type='submit' onclick="location.href = 'welcome.html';" id='signin-btn'>Sign in</button>
          <p class='message'>Don't have an account? <Link to='/register'>Register</Link> </p>
        </form>
      </CSSTransition>
    )
  }
}

export default Login
