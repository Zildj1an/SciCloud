/*
 * Profile page. Opened after logging in. Shows the users' profile
 * information.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Api from './Api.js'
import './Profile.css'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = { info: Api.ProfileInformation }
  }

  handleClick (e) {
    Api.isAuthenticated = false
  }

  render () {
    return (
      <div className='prof'>
        <div className='title'>
          <font size='15'>Welcome to SciCloud</font>
        </div>

        <div className='prof'>
          <div className='out'>
            {this.state.info ? (
              <table>
                <thead />
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td><p className='txt'>{this.state.info.name}</p></td>
                  </tr>
                  <tr>
                    <td>Surname 1:</td>
                    <td><p className='txt'>{this.state.info.surname1}</p></td>
                  </tr>
                  <tr>
                    <td>Surname 2:</td>
                    <td><p className='txt'>{this.state.info.surname2}</p></td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td><p className='txt'>{this.state.info.email}</p></td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td><p className='txt'>{this.state.info.password}</p></td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td><p className='txt'>{this.state.info.phone}</p></td>
                  </tr>
                  <tr>
                    <td>Birthday:</td>
                    <td><p className='txt'>{this.state.info.birthdate}</p></td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p style={{ color: 'red' }}>
              An error occurred while retrieving profile information. Please try again.
              </p>
            )}
            <Link to='/'>
              <button id='signout-btn' onClick={this.handleClick}>
              Sign out
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
