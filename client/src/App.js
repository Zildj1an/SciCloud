/*
 * Root component of the application. Only contains routing
 */

import React from 'react';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import Home from './Home.js';
import Example from './Example.js';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* WARNING: Remember to remove the example component!! */}
        <Example />

        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
