import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {connect} from "react-redux";

import Start from './Start.js';
import Login from './Login.js';
import Register from './Register.js';
import Home from "./Home.js";
import Search from "./Search.js";
import Upload from "./Upload.js";
import Messages from "./Messages.js";
import Profile from "./Profile.js";

class Routes extends Component<{}> {
	
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	
	render() {
		return(
			<Router>
			    <Scene>
					<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
						<Scene key="start" component={Start} initial />
						<Scene key="login" component={Login} />
						<Scene key="signup" component={Register} />
					</Scene>
					<Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
						<Scene key="home" component={Home} initial/>
						<Scene key="search" component={Search} />
						<Scene key="upload" component={Upload} />
						<Scene key="messages" component={Messages} />
						<Scene key="profile" component={Profile} />
					</Scene>
				</Scene>
		 </Router>
		)
	}
}

mapStateToProps = (state) => ({
    isLoggedIn: state.authReducer.authData.isLoggedIn
})

export default connect(mapStateToProps, null)(Routes);
