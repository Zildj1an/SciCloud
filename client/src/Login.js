/*
 * Login form
 */

import React from 'react'
import './Form.css'
import Api from './Api.js'
import {
  Link,
  withRouter
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Login extends React.Component {
  constructor (props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = { params: Api.LoginParams }

    // Bind 'this' to the component, otherwise 'this' is undefined inside class methods
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Runs whenever a change is made to the form values
  // Updates the state and runs validation
  handleChange (event) {
    const params = {}
    params[event.target.name] = event.target.value
    this.setState({ params: params })
    // TODO validate
  }

  handleSubmit (event) {
    event.preventDefault()
    // TODO api call
    this.props.history.push('/profile')
  }


  render () {
    return (
      <CSSTransition appear in={this.props.in} classNames='login-form' timeout={{ enter: 0, exit: 0 }}>
        <form id='login' className='login-form' onSubmit={this.handleSubmit}>
          <input type='email' name='email' className='input-field' placeholder='Email' required value={this.state.params.email} onChange={this.handleChange} />
          <input type='password' name='password' className='input-field' placeholder='Password' required value={this.state.params.password} onChange={this.handleChange} />
          <input type='checkbox' className='check-box' /><font color='white'>Remember password</font>
          <button type='submit' id='signin-btn'>Sign in</button>
          <p className='message'>Don't have an account? <Link to='/register'>Register</Link> </p>
        </form>
      </CSSTransition>
    )
  }
}

export default withRouter(Login)
