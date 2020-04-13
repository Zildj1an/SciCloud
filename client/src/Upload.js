import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TextInput,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import CheckBox from '@react-native-community/checkbox';
import SwitchSelector from 'react-native-switch-selector';
import cstyles from './Styles';

import {logoutUser} from "./Api.js";

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  user: {
    width: width,
	height: 0.13*height,
    backgroundColor:'#a8ccdc',
	marginBottom: 0.01*height,
  },
  name: {
    fontSize: 24,
	marginHorizontal:0.04*width,
	marginVertical:0.03*height,
  },
  switch: {
    width: 0.7*width,
	height: 0.03*height,
	marginBottom: 0.05*height,
	marginHorizontal: 0.15*width,
  },
  row : {
    width: 0.9*width,
	height: 0.06*height,
	flexDirection: 'row',
	borderRadius: 25,
	alignItems:'center',
	marginVertical:0.01*width,
  },
  dataCont1 : {
    backgroundColor:'#a8ccdc',
    width: 0.6*width,
	height: 0.06*height,
	marginHorizontal:0.01*width,
	borderRadius: 10,
  },
  dataCont2 : {
    backgroundColor:'#a8ccdc',
    width: 0.9*width,
	height: 0.17*height,
	marginHorizontal:0.05*width,
	marginBottom:0.02*height,
	borderRadius: 10,
  },
  data : {
    width: 0.54*width,
	height: 0.06*height,
	marginHorizontal:0.03*width,
	textAlignVertical: "top"
  },
  text: {
    fontSize: 20,
	marginHorizontal:0.04*width,
  },
  button: {
	width: 0.4*width,
	height: 0.06*height,
    backgroundColor:'#a8ccdc',
	flexDirection: 'row',
    borderRadius: 15,
	marginHorizontal:0.3*width,
	alignItems:'center',
	justifyContent :'center'
  },
  buttonText: {
    fontSize:15,
    fontWeight:'500',
  },
  imgupload: {
    width:0.07*width,
	height: 0.07*width,
  },
  imgplcr: {
    width:0.05*width,
	height: 0.05*width,
	marginHorizontal:0.01*width,
  },
});

class Upload extends Component<{}> {
		
	constructor() {
		super()
		this.state = {
			isChecked: false,
			author1: false,
			author2: false,
			journal1: false,
			journal2: false
		}
	}
	
	upload = () => {

	}
	
	moreAuthors = () => {
		if (!this.state.author1) {
			this.setState({
				author1: true
			});
		}
		else {
			this.setState({
				author2: true
			});
		}
	}
	
	moreJournals = () => {
		if (!this.state.journal1) {
			this.setState({
				journal1: true
			});
		}
		else {
			this.setState({
				journal2: true
			});
		}
	}
	
	lessAuthors = () => {
		if (this.state.author2) {
			this.setState({
				author2: false
			});
		}
		else {
			this.setState({
				author1: false
			});
		}
	}
	
	lessJournals = () => {
		if (this.state.journal2) {
			this.setState({
				journal2: false
			});
		}
		else {
			this.setState({
				journal1: false
			});
		}
	}

	render() {
		const {getUser: {userDetails}} = this.props;
		const options = [
			{ label: 'Publicación', value: '1' },
			{ label: 'Trabajo', value: '1.5' },
			{ label: 'Tool', value: '2' }
		];
		return(
			<SafeAreaView style={cstyles.container}>
				<ScrollView style={cstyles.scrollView}>
					<View style={styles.user}>
						<Text style={styles.name}>{userDetails ? userDetails.name : "Nombre"}</Text>
					</View>
					<SwitchSelector 
						options={options}
						initial={0}
						style={styles.switch}
						backgroundColor='#3399ff'
						buttonColor='#a8ccdc'/>
					<View style={[styles.row, {height: 0.095*height}]}>
						<Text style={styles.text}>Título</Text>
						<View style={[styles.dataCont1, {height: 0.095*height}]}>
							<TextInput multiline={true} style={[styles.data, {height: 0.095*height}]}>
							</TextInput>
						</View>
					</View>
					<View style={styles.row}>
						<Text style={styles.text}>Autor</Text>
						<View style={styles.dataCont1}>
							<TextInput style={styles.data}>
							</TextInput>
						</View>
						<TouchableOpacity style={styles.imgplcr} onPress={this.moreAuthors}>
							<Image style={styles.imgplcr}
							source={require('../assets/plus2.png')}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.imgplcr} onPress={this.lessAuthors}>
							<Image style={styles.imgplcr}
							source={require('../assets/minus.png')}/>
						</TouchableOpacity>
					</View>
					{this.state.author1 && <View style={styles.row}>
						<View style={[styles.dataCont1, {marginLeft: 0.223*width}]}>
							<TextInput style={styles.data}>
							</TextInput>
						</View>
					</View>}
					{this.state.author2 && <View style={styles.row}>
						<View style={[styles.dataCont1, {marginLeft: 0.223*width}]}>
							<TextInput style={styles.data}>
							</TextInput>
						</View>
					</View>}
					<View style={styles.row}>
						<Text style={styles.text}>Revista</Text>
						<View style={[styles.dataCont1, {width: 0.55*width}]}>
							<TextInput style={[styles.data, {width: 0.49*width}]}>
							</TextInput>
						</View>
						<TouchableOpacity style={styles.imgplcr} onPress={this.moreJournals}>
							<Image style={styles.imgplcr}
							source={require('../assets/plus2.png')}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.imgplcr} onPress={this.lessJournals}>
							<Image style={styles.imgplcr}
							source={require('../assets/minus.png')}/>
						</TouchableOpacity>
					</View>
					{this.state.journal1 && <View style={styles.row}>
						<View style={[styles.dataCont1, {width: 0.55*width, marginLeft: 0.273*width}]}>
							<TextInput style={styles.data}>
							</TextInput>
						</View>
					</View>}
					{this.state.journal2 && <View style={styles.row}>
						<View style={[styles.dataCont1, {width: 0.55*width, marginLeft: 0.273*width}]}>
							<TextInput style={styles.data}>
							</TextInput>
						</View>
					</View>}
					<Text style={[styles.text, {marginVertical:0.01*width}]}>Resumen</Text>
					<View style={styles.dataCont2}>
						<TextInput multiline={true} style={[styles.data, {width: 0.84*width, height: 0.17*height}]}>
						</TextInput>
					</View>
					<View style={[styles.row, {marginHorizontal:0.07*width}]}>
						<CheckBox
							onChange={()=>{
							  this.setState({
								  isChecked:!this.state.isChecked
							  })
							}}
							value={this.state.isChecked}
						/>
						<Text style={[styles.text, {marginHorizontal:0.02*width, fontSize:12}]}>Contenido protegido por el autor. Para usarlo, es necesario pedir permiso.</Text>
					</View>
					<TouchableOpacity style={styles.button} onPress={this.upload}>
						<Text style={styles.buttonText}>Upload File  </Text>
						<Image style={styles.imgupload}
							source={require('../assets/upload.png')}/>
					</TouchableOpacity>
					<View style={{height:0.025*height}}/>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);