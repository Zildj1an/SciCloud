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
  Alert,
  Dimensions
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {compose} from "redux";
import Logo from './Logo.js';
import {createUser} from "./Api.js";
import {Actions} from 'react-native-router-flux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#3399ff',
	alignItems:'center',
    justifyContent :'center'
  },
  nameContainer: {
    flexDirection: 'row',
    width: 0.8*width,
    marginHorizontal:0.1*width,
  },
  inputLabel: {
    width: 0.8*width,
    marginHorizontal:0.1*width,
    fontSize: 20
  },
  scrollView : {
    backgroundColor:'#3399ff',
  },
  textInputName: {
    width: 'auto',
    marginHorizontal: 0
  },
  textInputCont: {
    width: 0.8*width,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 10,
    paddingVertical: 2,
    fontSize:16,
    color:'#ffffff',
    marginHorizontal:0.1*width,
    marginBottom: 10
  },
  signupTextCont: {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
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
  },
  logo: {
    transform: [{scale: 0.6}],
    marginTop: -20,
    marginBottom: -40
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
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, name, ...restInput}} = field;
        return (
            <View>
              <TextInput style={[styles.textInputCont,
                ['name', 'surname'].includes(name) ? styles.textInputName : {},
                name == 'name' ? {marginRight: 0.03*width} : {}]}
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
              <View style={styles.logo}>
				<Logo/>
              </View>
				{createUser.isLoading && <View style={styles.loader}>
					<ActivityIndicator color="#ffffff" size="large" />
					</View>}
				<ScrollView  style={styles.scrollView}>
					
                  <View style={styles.nameContainer}>
                    <View style={{ flex: 2 }}>
                      <Text style={[styles.inputLabel,styles.textInputName]}>Nombre</Text>
					  <Field
						name="name"
						component={this.renderTextInput} />
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={[styles.inputLabel,styles.textInputName]}>Apellidos</Text>
					  <Field
						name="surname"
						component={this.renderTextInput} />
                    </View>
                  </View>
                    <Text style={styles.inputLabel}>Correo</Text>
					<Field
						name="email"
						component={this.renderTextInput} />
                    <Text style={styles.inputLabel}>Contraseña</Text>
					<Field
						name="password"
						secureTextEntry={true}
						component={this.renderTextInput} />
                    <Text style={styles.inputLabel}>Confirmar contraseña</Text>
					<Field
						name="cPassword"
						secureTextEntry={true}
						component={this.renderTextInput} />
                    <Text style={styles.inputLabel}>Ocupación</Text>
					<Field
						name="occupation"
						component={this.renderTextInput} />
                    <Text style={styles.inputLabel}>Especialidad</Text>
					<Field
						name="field"
						component={this.renderTextInput} />
                    <Text style={styles.inputLabel}>Otras especialidades</Text>
					<Field
						name="other_fields"
						component={this.renderTextInput} />
					<TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
						<Text style={styles.buttonText}>Registrarme</Text>
					</TouchableOpacity>
				</ScrollView>
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
