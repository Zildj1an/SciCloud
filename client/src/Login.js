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
    this.state = { params: this.props.global.LoginParams }

    // Bind 'this' to the component, otherwise 'this' is undefined inside class methods
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Runs whenever a change is made to the form values
  // Updates the state and runs validation
  handleChange (event) {
    const params = this.state.params
    params[event.target.name] = event.target.value
    this.props.setGlobal({ params: params })
  }

  handleSubmit (event) {
    // This prevents the submit button from reloading the page
    event.preventDefault()

    // Call login function
    Api.login(this.state.params)
      .then(
        // Accept: redirect to '/profile' with given information
        (info) => {
          this.props.setGlobal({
            ProfileInformation: info,
            isAuthenticated: true
          })
          this.props.history.push('/profile')
        },
        // Reject: print message
        ({ message: err, ...rest }) => {
          window.alert('Could not log in: ' + err)
          console.log(err)
        })
      .catch(console.log)
  }

  render () {
    const em = this.state.params.email
    const pw = this.state.params.password
    return (
      <CSSTransition
        appear in={this.props.in} classNames='login-form'
        timeout={{ enter: 0, exit: 0 }}
      >
        <form id='login' className='login-form' onSubmit={this.handleSubmit}>
          <input
            type='email' name='email' className={`input-field ${em ? '' : 'empty'}`}
            placeholder='Email' required value={em} onChange={this.handleChange}
          />
          <input
            type='password' name='password'
            className={`input-field ${pw ? '' : 'empty'}`}
            placeholder='Password' required value={pw} onChange={this.handleChange}
          />
          <input type='checkbox' className='check-box' />
          <font color='white'>Remember password</font>
          <button type='submit' id='signin-btn'>Sign in</button>
          <p className='message'>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      </CSSTransition>
    )
  }
}

export default withRouter(Login)
