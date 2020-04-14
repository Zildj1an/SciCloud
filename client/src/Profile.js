import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";

import {logoutUser, getUser} from "./Api.js";

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#3399ff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  data : {
    backgroundColor:'#6ea5ee',
    width: '83%',
    height: '55%',
	borderRadius: 25,
	marginVertical: 0,
    alignItems:'center',
    justifyContent :'center'
  },
  title: {
      color: "#fff",
      fontSize: 35,
	  paddingVertical: 40
  },
  textStyle: {
      color: "#fff",
      fontSize: 18,
	  marginVertical: 8
  },
  button: {
    width: '83%',
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 20,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});

class Profile extends Component<{}> {
	
    getUser = async () => {
        await this.props.dispatch(getUser());
    }

    componentDidMount () {
        console.log('Profile: Attepmting to get user...')
        this.getUser()
    }

	logoutUser = () => {
		this.props.dispatch(logoutUser());
	}

	render() {
		const {getUser: {userDetails}} = this.props;
		return(
			<View style={styles.container}>
			    <Text style={styles.title}>Welcome</Text>
				<View style={styles.data}>
					<Text style={styles.textStyle}>Name: {userDetails ? userDetails.name : ""}</Text>
					<Text style={styles.textStyle}>Surname 1: {userDetails ? userDetails.surname1 : ""}</Text>
					<Text style={styles.textStyle}>Surname 2: {userDetails ? userDetails.surname2 : ""}</Text>
					<Text style={styles.textStyle}>Email: {userDetails ? userDetails.email : ""}</Text>
					<Text style={styles.textStyle}>Password: {userDetails ? userDetails.password : ""}</Text>
					<Text style={styles.textStyle}>Job: {userDetails ? userDetails.job : ""}</Text>
					<Text style={styles.textStyle}>Field: {userDetails ? userDetails.field : ""}</Text>
					<Text style={styles.textStyle}>Subfield: {userDetails ? userDetails.subfield : ""}</Text>
				</View>
				<TouchableOpacity style={styles.button} onPress={this.logoutUser}>
					<Text style={styles.buttonText}>Sign out</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
