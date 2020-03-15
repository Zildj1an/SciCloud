/*
 * Register form.
 */

import React from 'react'
import './Form.css'
import Api from './Api.js'
import {
  Link,
  withRouter
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

class Register extends React.Component {
  constructor (props) {
    super(props)

    // Component state: the form values will be stored here
    this.state = { params: Api.RegisterParams }
    // Bind 'this' to the component, otherwise 'this' is undefined inside class methods
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Runs whenever a change is made to the form values
  // Updates the state and runs validation
  handleChange (event) {
    const params = this.state.params
    params[event.target.id] = event.target.value
    this.setState({ params: params })
    // TODO validate
  }

  handleSubmit (event) {
    // This prevents the submit button from reloading the page
    event.preventDefault()

    // TODO check user does not exist
    // Call register function
    Api.register(this.state.params)
      .then(/* Accept */ () => this.props.history.push('/login'),
            /* Reject */ console.log)
      .catch(console.log)
  }

  render () {
    return (
      // Appear transition: see CSS classes register-form and register-form-enter-done.
      <CSSTransition appear in={this.props.in} classNames='register-form' timeout={{ enter: 0, exit: 0 }}>
        <form className='register-form' onSubmit={this.handleSubmit}>
          {/* The input id must be the same as the value parameter*/}
          <input type='text' id='name' className='input-field' placeholder='First name' required value={this.state.params.name} onChange={this.handleChange} />
          <input type='text' id='surname1' className='input-field' placeholder='Last name' required value={this.state.params.surname1} onChange={this.handleChange} />
          <input type='text' id='surname2' className='input-field' placeholder='Last name 2' required value={this.state.params.surname2} onChange={this.handleChange} />
          <input type='email' id='email' className='input-field' placeholder='Email' required value={this.state.params.email} onChange={this.handleChange} />
          <input type='date' id='birthdate' className='input-field' placeholder='Date of birth' title='You must be 18 or older' required value={this.state.params.birthdate} onChange={this.handleChange} />
          <input
            type='password' id='password' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title='Must contain at least one number and
  uppercase and lowercase letter, and at
  least 8 or more characters' className='input-field' placeholder='Password' required
            value={this.state.params.password} onChange={this.handleChange}
          />
          <input type='password' id='c_password' className='input-field' placeholder='Confirm password' required value={this.state.params.c_password} onChange={this.handleChange} />
          <input type='number' id='phone' className='input-field' placeholder='Phone number' value={this.state.params.phone} onChange={this.handleChange} />
          <button type='submit' className='signup-btn'>Sign up</button>
          <p className='message'>Already registered? <Link to='login'>Login</Link></p>
        </form>
      </CSSTransition>
    )
  }
}

export default withRouter(Register)
