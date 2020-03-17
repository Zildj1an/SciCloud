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
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { api: Api }
    this.globalStateChange = this.globalStateChange.bind(this)
  }

  globalStateChange (data) {
    this.setState({
      api: { ...(this.state.api), ...data }
    })
  }

  render () {
    const auth = this.state.api.isAuthenticated
    return (
      <Router>
        <Switch>
          <ProtectedRoute
            cond={auth}
            path='/profile'
            redirect='/register'
          >
            <Profile global={this.state.api} setGlobal={this.globalStateChange} />
          </ProtectedRoute>
          <ProtectedRoute
            cond={!auth}
            path='/login'
            redirect='/profile'
          >
            <Home global={this.state.api} setGlobal={this.globalStateChange} />
          </ProtectedRoute>
          <ProtectedRoute
            cond={!auth}
            path='/register'
            redirect='/profile'
          >
            <Home global={this.state.api} setGlobal={this.globalStateChange} />
          </ProtectedRoute>
          <Route exact path='/'>
            <Redirect
              to={{
                pathname: '/register',
                state: { from: '/' }
              }}
            />
          </Route>
          <Route>
            <p style={{ display: 'block', position: 'fixed', top: '50%', left: '50%', color: 'red' }}>404 error: page not found.</p>
          </Route>
        </Switch>
      </Router>
    )
  }
}

function ProtectedRoute ({ children, cond, redirect, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cond ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: location }
            }}
          />
        )}
    />
  )
}

export default App
