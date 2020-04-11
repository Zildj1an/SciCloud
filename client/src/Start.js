import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {connect} from "react-redux";
import Logo from './Logo.js';
import {Actions} from 'react-native-router-flux';
import styles from './Styles'

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor:'#3399ff',
	alignItems:'center',
    justifyContent :'center'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width: 0.5*width,
    backgroundColor:'#1c313a',
    borderRadius: 8,
    marginVertical: 10,
    marginTop: 0.1*height,
    paddingVertical: 8
  },
  buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});
*/
class Start extends React.Component<{}> {

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<TouchableOpacity style={styles.button} onPress={ Actions.login }>
					<Text style={styles.buttonText}>Iniciar sesión</Text>
				</TouchableOpacity>
				<View style={styles.signupTextCont}>
                  <TouchableOpacity onPress={ Actions.signup }>
                    <Text style={styles.signupButton}>Registrarse</Text>
                  </TouchableOpacity>
				</View>
			</View>
		)
	}
}

export default Start;
