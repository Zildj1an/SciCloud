import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar ,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions
} from 'react-native';
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';
import {loginUser} from "./Api.js";
import Logo from './Logo.js';
import {Actions} from 'react-native-router-flux';


const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container : {
    paddingTop: 0.05*height,
    backgroundColor:'#3399ff',
    flex: 1,
    alignItems:'center',
  },
  inputLabel: {
    width: 0.8*width,
    marginHorizontal:0.1*width,
    fontSize:20
  },
  textInputCont: {
    width: 0.8*width,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 10,
    paddingVertical: 4,
    fontSize: 18,
    color:'#ffffff',
    marginBottom: 10
  },
  button: {
    width: 0.33*width,
    backgroundColor:'#1c313a',
    borderRadius: 10,
    marginVertical: 0.08*height,
    marginHorizontal: 0.33*width,
    paddingVertical: 10
  },
  buttonText: {
    fontSize:13,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  logo: {
    marginVertical: 0.02*height
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
			errorText = error.responseBody.message;
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
    //console.log(loginUser);
		return(
			<View style={styles.container}>
				{(loginUser && loginUser.isLoading) && <View style={styles.loader}>
					<ActivityIndicator color="#ffffff" size="large" />
					</View>}
                
              <View style={styles.logo}>
                <Logo/>
              </View>
              <Text style={styles.inputLabel}>Correo electrónico</Text>
			  <Field
			    	name="email"
				    component={this.renderTextInput} />
              <Text style={styles.inputLabel}>Password</Text>
			  <Field
			    	name="password"
			        secureTextEntry={true}
				    component={this.renderTextInput} />
			  <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
			    <Text style={styles.buttonText}>Acceder</Text>
			  </TouchableOpacity>
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
