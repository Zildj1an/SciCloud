import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar ,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';
import {loginUser} from "./Api.js";
import Logo from './Logo.js';
import {Actions} from 'react-native-router-flux';


const styles = StyleSheet.create({
  container : {
    backgroundColor:'#3399ff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  textInputCont: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
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
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  loader: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 99,
    justifyContent: "center"
  },
  errorText: {
      color: "#ffffff",
      fontSize:14,
      paddingHorizontal:16,
      paddingBottom: 8
  }
});


class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	loginUser = async (values) => {
		try {
			const response =  await this.props.dispatch(loginUser(values));
			console.log(response);
			if (!response.success) {
				throw response;
			}
		} catch (error) {
			let errorText;
			if (error.message) {
				errorText = error.message
			}
			errorText = error.responseBody;
			Alert.alert(
				'Login Error',
				errorText,
				[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				]
			);
		}
  }

  onSubmit = (values) => {
      this.loginUser(values);
  }

  renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <TextInput style={styles.textInputCont}
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
				  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
  }

	render() {
    const { handleSubmit, loginUser} = this.props;
    console.log(loginUser);
		return(
			<View style={styles.container}>
				{(loginUser && loginUser.isLoading) && <View style={styles.loader}>
					<ActivityIndicator color="#ffffff" size="large" />
					</View>}
				<Logo/>
				<Field
					name="email"
					placeholder="Email"
					component={this.renderTextInput} />
				<Field
					name="password"
					placeholder="Password"
					secureTextEntry={true}
					component={this.renderTextInput} />
				<TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
				  <Text style={styles.buttonText}>Sign in</Text>
				</TouchableOpacity>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account? </Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Register</Text></TouchableOpacity>
				</View>
			</View>
		)
	}
}

const validate = (values) => {
    const errors = {};
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Password is required"
    }
    return errors;
};

mapStateToProps = (state) => ({
    loginUser: state.authReducer.loginUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "login",
    validate
  })
)(Login);
