import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import cstyles from './Styles';
import {Actions} from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')

export default class NavBar extends Component<{}> {
	
	constructor() {
		super()
		this.state = {
			visible: true
		}
	}
	
	visible = () => {
		this.setState({
			visible: true
		});
	}
	
	notVisible = () => {
		this.setState({
			visible: false
		});
	}
	
	moveHome = () => {
		if (Actions.currentScene != "home") {
			this.visible()
			Actions.home()
		}
	}

	moveSearch = () => {
		if (Actions.currentScene != "search") {
			this.visible()
			Actions.search()
		}
	}
	
	moveMessages = () => {
		if (Actions.currentScene != "messages") {
			this.visible()
			Actions.messages()
		}
	}
	
	moveProfile = () => {
		if (Actions.currentScene != "profile") {
			this.visible()
			Actions.profile()
		}
	}
	
	moveUpload = () => {
		if (Actions.currentScene != "upload") {
			this.notVisible()
			Actions.upload()
		}
	}
	
	render(){
		return(
			<View style={styles.container}>
				<View style={cstyles.bar}>
					<TouchableOpacity style={cstyles.buttonbar} onPress={ this.moveHome }>
						<Image style={cstyles.imgbar}
							source={require('../assets/home.png')}/>
					</TouchableOpacity>
					<TouchableOpacity style={cstyles.buttonbar} onPress={ this.moveSearch }>
						<Image style={cstyles.imgbar}
							source={require('../assets/search.png')}/>
					</TouchableOpacity>
					<View style={{width:0.18*width}}/>
					<TouchableOpacity style={cstyles.buttonbar} onPress={ this.moveMessages }>
						<Image style={cstyles.imgbar}
							source={require('../assets/mail.png')}/>
					</TouchableOpacity>
					<TouchableOpacity style={cstyles.buttonbar} onPress={ this.moveProfile }>
						<Image style={cstyles.imgbar}
							source={require('../assets/user.png')}/>
					</TouchableOpacity>
				</View>
				<View style={[cstyles.buttonUpload, {backgroundColor:'#3399ff'}]}>
				</View>
				{this.state.visible && <TouchableOpacity style={[cstyles.buttonUpload, {bottom: 0.075*width}]} onPress={ this.moveUpload }>
					<Image
						style={{width:0.18*width, height: 0.18*width}}
						source={require('../assets/plus.png')}
					/>
				</TouchableOpacity>}
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
	   height: 0.08*height,
  },
});
