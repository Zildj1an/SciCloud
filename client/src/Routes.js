import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Start from './Start.js';
import Login from './Login.js';
import Register from './Register.js';
import Profile from "./Profile.js";

export default class Routes extends Component<{}> {
  render() {
    return(
      <Router>
        <Scene>
          <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
            <Scene key="start" component={Start} initial />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="signup" component={Register} title="Register" />
          </Scene>
          <Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
            <Scene key="profile" component={Profile} />
          </Scene>
        </Scene>
     </Router>
    )
  }
}
