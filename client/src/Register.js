import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import Logo from './Logo.js';
import {createUser} from "./Api.js";
import {Actions} from 'react-native-router-flux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor:'#3399ff',
	alignItems:'center',
    justifyContent :'center'
  },
  scrollView : {
    backgroundColor:'#3399ff',
  },
  textInputCont: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
  },
  signupTextCont: {
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
  buttonDate: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
	paddingHorizontal:16,
  },
  buttonTextDate: {
    fontSize:16,
    color:'rgba(255,255,255,0.8)',
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
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  }
});

class Register extends React.Component<{}> {
		
	constructor() {
		super()
		this.state = {
			RegisterParams: {
				email: '',
				password: '',
				birthdate: '',
				phone: '',
				name: '',
				surname1: '',
				surname2: ''
			},
			visible: false,
			chosenDate: 'Birthday'
		}
	}
	
	goBack() {
		Actions.pop();
	}
	
	registerUser = async (values) => {
		this.setState({
			RegisterParams: { ...this.state.RegisterParams,
				email: values.email,
				password: values.password,
				birthdate: this.state.chosenDate,
				phone: values.phone,
				name: values.name,
				surname1: values.surname1,
				surname2: values.surname2}
		})
		try {
			const response =  await this.props.dispatch(createUser(this.state.RegisterParams));
			if (!response.success) {
				throw response;
			}
		} catch (error) {
			let errorText = "Something went wrong";
			if (error.message) {
				errorText = error.message
			} else if (error.responseBody && error.responseBody.message) {
				errorText = error.responseBody.message;
			} else if (error.responseBody) {
				errorText = error.responseBody;
			}
			Alert.alert(
			  'Signup Error',
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
		this.registerUser(values);
	}
	
	showPicker = () => {
		this.setState({
			visible: !this.state.visible
		})
	}
	
	setDate = (event, date) => {
		this.setState({
			visible: false
		})
		if (date != undefined) {
			this.setState({
				chosenDate: moment(date).format('YYYY-MM-DD')
			})
		}
	};

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
    const { handleSubmit, createUser} = this.props;
		return(
			<SafeAreaView style={styles.container}>
				<Logo/>
				{createUser.isLoading && <View style={styles.loader}>
					<ActivityIndicator color="#ffffff" size="large" />
					</View>}
				<ScrollView  style={styles.scrollView}>
					
					<Field
						name="name"
						placeholder="Name"
						component={this.renderTextInput} />
					<Field
						name="surname1"
						placeholder="Surname 1"
						component={this.renderTextInput} />
					<Field
						name="surname2"
						placeholder="Surname 2"
						component={this.renderTextInput} />
					<Field
						name="email"
						placeholder="Email"
						component={this.renderTextInput} />
					<TouchableOpacity style={styles.buttonDate} onPress={this.showPicker}>
						<Text style={styles.buttonTextDate}>{this.state.chosenDate}</Text>
					</TouchableOpacity>
					{this.state.visible && <DateTimePicker
						value={new Date()}
						onChange={this.setDate}
						mode={'date'}
					/>}
					<Field
						name="phone"
						keyboardType="number-pad"
						placeholder="Phone"
						component={this.renderTextInput} />
					<Field
						name="password"
						placeholder="Password"
						secureTextEntry={true}
						component={this.renderTextInput} />
					<Field
						name="cPassword"
						placeholder="Confirm password"
						secureTextEntry={true}
						component={this.renderTextInput} />
					<TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
						<Text style={styles.buttonText}>Sign up</Text>
					</TouchableOpacity>
					<View style={styles.signupTextCont}>
						<Text style={styles.signupText}>Already registered? </Text>
						<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Login</Text></TouchableOpacity>
					</View>
				</ScrollView >
			</SafeAreaView>
		)
	}
}

const validate = (values) => {
    const errors = {};
    if(!values.name) {
        errors.name = "Required"
    }
    //if(!values.surname1) {
    //    errors.surname1 = "Required"
    //}
	//if(!values.surname2) {
    //    errors.surname2 = "Required"
    //}
    if(!values.email) {
        errors.email = "Required"
    }
	if(!values.password) {
        errors.password = "Required"
    }
	//var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	//if(!re.test(values.password)) {
    //    errors.password = "Must contain at least one number and\nuppercase and lowercase letter, and at\nleast 8 or more characters"
    //}
	//if(values.password !== values.cPassword) {
    //    errors.cPassword = "Passwords do not match"
    //}
    return errors;
};

mapStateToProps = (state) => ({
    createUser: state.authReducer.createUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "register",
    validate
  })
)(Register);
