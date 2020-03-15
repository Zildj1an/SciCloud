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
    this.state = {
      params: Api.RegisterParams,
      formValid: false,
      passwordsMatch: false,
      passwordValid: false,
      birthdateValid: false
    }
    this.state.params.cPassword = ''
    // Bind 'this' to the component, otherwise 'this' is undefined inside class methods
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Runs whenever a change is made to the form values
  // Updates the state and runs validation
  handleChange (event) {
    const params = this.state.params
    params[event.target.name] = event.target.value
    this.setState({ params: params })
    this.validateInputs(params)
  }

  validateInputs (params) {
    const passMatch = params.password === params.cPassword
    const passVal = params.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    const millisInYear = 1000 * 60 * 60 * 24 * 365
    const birthVal =
      (new Date().getTime() - new Date(params.birthdate).getTime()) / millisInYear > 18

    this.setState({
      passwordsMatch: passMatch,
      passwordValid: passVal,
      birthdateValid: birthVal,
      formValid: passMatch && passVal && birthVal
    })
  }

  handleSubmit (event) {
    // This prevents the submit button from reloading the page
    event.preventDefault()

    if (!this.state.formValid) {
      return
    }

    // Discard the password confirmation
    const { cPassword, ...params } = this.state.params

    // TODO check user does not exist
    // Call register function
    Api.register(params)
      .then(
        // Accept: redirect to '/login'
        () => this.props.history.push('/login'),
        // Reject
        console.log)
      .catch(console.log)
  }

  render () {
    const nm = this.state.params.name
    const s1 = this.state.params.surname1
    const s2 = this.state.params.surname2
    const email = this.state.params.email
    const bd = this.state.params.birthdate
    const pw = this.state.params.password
    const cPw = this.state.params.cPassword
    const ph = this.state.params.phone

    return (
      // Appear transition: see CSS classes
      // register-form and register-form-enter-done.
      <CSSTransition
        appear in={this.props.in} classNames='register-form'
        timeout={{ enter: 0, exit: 0 }}
      >

        <form className='register-form' onSubmit={this.handleSubmit}>
          <input
            type='text' name='name' className={`input-field ${nm ? '' : 'empty'}`}
            placeholder='First name' required value={nm}
            onChange={this.handleChange}
          />
          <input
            type='text' name='surname1' className={`input-field ${s1 ? '' : 'empty'}`}
            placeholder='Surname' required value={s1}
            onChange={this.handleChange}
          />
          <input
            type='text' name='surname2' className={`input-field ${s2 ? '' : 'empty'}`}
            placeholder='Surname 2' required value={s2}
            onChange={this.handleChange}
          />
          <input
            type='email' name='email'
            className={`input-field ${email ? '' : 'empty'}`} placeholder='Email'
            required value={email} onChange={this.handleChange}
          />
          <input
            type='date' name='birthdate'
            className={`input-field 
              ${this.state.birthdateValid ? '' : 'input-error'} ${bd ? '' : 'empty'}
            `}
            placeholder='Date of birth' title='You must be 18 or older' required
            value={bd} onChange={this.handleChange}
          />
          <input
            type='password' name='password' title='Must contain at least one number and
              uppercase and lowercase letter, and at least 8 or more characters'
            className={`input-field
              ${this.state.passwordValid ? '' : 'input-error'} ${pw ? '' : 'empty'}
            `}
            placeholder='Password' required
            value={pw} onChange={this.handleChange}
          />
          <input
            type='password' name='cPassword' title='Passwords do not match'
            className={`input-field
              ${this.state.passwordsMatch ? '' : 'input-error'} ${cPw ? '' : 'empty'}
            `}
            placeholder='Confirm password'
            required value={cPw} onChange={this.handleChange}
          />
          <input
            type='number' name='phone' className={`input-field ${ph ? '' : 'empty'}`}
            placeholder='Phone number' value={ph}
            onChange={this.handleChange}
          />
          <button type='submit' className='signup-btn'>Sign up</button>
          <p className='message'>
            Already registered? <Link to='login'>Login</Link>
          </p>

        </form>
      </CSSTransition>
    )
  }
}

// withRouter is necessary to inherit the history prop
export default withRouter(Register)
