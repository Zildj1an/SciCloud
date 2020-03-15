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
    this.state = { info: new Api.ProfileInfo() }
  }

  render () {
    return (
      <div className="title">
        <font size="15">Welcome to SciCloud</font>
      </div>

      <div className="out">
        <table>
          <tr>
          <td>Name:</td>
          <td><p className='txt'>{this.state.ProfileInfo.name}</p></td>
          </tr>
          <tr>
          <td>Surname 1:</td>
          <td><p className='txt'>{this.state.ProfileInfo.surname1}</p></td>
          </tr>
          <tr>
          <td>Surname 2:</td>
          <td><p className='txt'>{this.state.ProfileInfo.surname2}</p></td>
          </tr>
          <tr>
          <td>Email:</td>
          <td><p className='txt'>{this.state.ProfileInfo.email}</p></td>
          </tr>
          <tr>
          <td>Password:</td>
          <td><p className='txt'>{this.state.ProfileInfo.password}</p></td>
          </tr>
          <tr>
          <td>Phone:</td>
          <td><p className='txt'>{this.state.ProfileInfo.phone}</p></td>
          </tr>
          <tr>
          <td>Birthday:</td>
          <td><p className='txt'>{this.state.ProfileInfo.birthdate}</p></td>
          </tr>
        </table>
        <button type="submit" onclick="location.href = 'login.html';" id="signout-btn">Sign out</button>
      </div>
    )
  }
}

export default Profile
