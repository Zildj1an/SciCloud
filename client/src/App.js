/*
 * Root component of the application. Only contains routing
 */

import React from 'react'
import Profile from './Profile.js'
import Home from './Home.js'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path='/profile' component={Profile} />
        <Route path='/' component={Home} />
      </Router>
    )
  }
}

export default App
