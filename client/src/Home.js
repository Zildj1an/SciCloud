/*
 * Initial page. Contains the login and register forms
 */

import React from 'react'
import './Home.css'
import Login from './Login.js'
import Register from './Register.js'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import fb from './assets/img/fb.png'
import tw from './assets/img/tw.png'
import gp from './assets/img/gp.png'

class Home extends React.Component {
  render () {
    return (
      <div className='login-page'>
        <div className='form'>
          <Switch>
            <Route path='/login'>
              <Login in />
            </Route>
            <Route path='/register'>
              <Register in />
            </Route>
            <Route exact path='/'>
              <Redirect
                to={{
                  pathname: '/register',
                  state: { from: '/' }
                }}
              />
            </Route>
          </Switch>
          <div className='social-icons'>
            <img src={fb} alt='Facebook' />
            <img src={tw} alt='Twitter' />
            <img src={gp} alt='Google Plus' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
