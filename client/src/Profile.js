/*
 * Profile page. Opened after logging in. Shows the users' profile
 * information.
 */

import React from 'react'
import Link from 'react-router-dom'
import Api from './Api.js'
import './Profile.css'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    // Component state: the profile information will be stored here
    this.state = { info: Api.ProfileInfo }
  }

  render () {
    return (
      <div>
        <div className='title'>
          <font size='15'>Welcome to SciCloud</font>
        </div>

        <div className='out'>
          <table>
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
              <td><p className='txt'>{this.state.info.birthdate.toString()}</p></td>
            </tr>
          </table>
          <button type='submit' onclick="location.href = 'login.html';" id='signout-btn'>Sign out</button>
        </div>
      </div>
    )
  }
}

export default Profile
