import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import Routes from './Routes';
import NavBar from './NavBar';

class Init extends Component<{}> {
	
	constructor() {
		super()
		this.state = {
			logged: true
		}
	}
	
	render() {
    const {authData:{isLoggedIn}} = this.props;
		return(
			<View style={styles.container}>
				<StatusBar
				   backgroundColor="#a8ccdc"
				   barStyle="light-content"
				/> 
				<Routes isLoggedIn={isLoggedIn} />
				{isLoggedIn && <NavBar/>}
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Init)
