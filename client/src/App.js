/*
 * Root component of the application. Only contains routing
 */

import React from 'react'
import Profile from './Profile.js'
import Home from './Home.js'
import Api from './Api.js'
import {
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route
          path='/profile'
          render={() =>
            Api.isAuthenticated ? (
              <Profile />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: '/profile' }
                }}
              />
            )}
        />
        <Route path='/login' component={Home} />
        <Route path='/register' component={Home} />
        <Route exact path='/'>
          <Redirect to={{
            pathname: '/register',
            state: { from: '/' }
          }}
          />
        </Route>
      </Router>
    )
  }
}

export default App
