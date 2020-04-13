import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import cstyles from './Styles';

import {logoutUser} from "./Api.js";

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  searchbar : {
    backgroundColor:'#6ea5ee',
    width: 0.85*width,
    height: 0.07*height,
	borderRadius: 25,
	position: 'absolute',
	top: 0.1*width,
    justifyContent :'center'
  },
  search : {
    width: 0.85*width,
    height: 0.7*height,
	borderRadius: 25,
	position: 'absolute',
	top: 0.1*width,
    alignItems:'center',
    justifyContent :'center',
	marginVertical: 0.1*height,
  },
  textStyle: {
    fontSize: 18,
	textAlign: 'center',
	marginVertical: 0.04*height,
  },
  input: {
	marginRight: 0.15*width,
	marginLeft: 0.05*width,
  },
  imgsearchbar: {
    width:0.07*width,
	height: 0.07*width,
	position: 'absolute',
	right: 0.04*height,
  },
  imgsearch: {
    width:0.30*width,
	height: 0.30*width,
  },
});

class Search extends Component<{}> {
	
	search = () => {
		
	}

	render() {
		return(
			<View style={cstyles.container}>
				<View style={styles.searchbar}>
					<TouchableOpacity style={styles.imgsearchbar} onPress={ this.search }>
						<Image style={{width:0.07*width, height: 0.07*width}}
						source={require('../assets/search.png')}/>
					</TouchableOpacity>
					<TextInput style={styles.input}>
					</TextInput>
				</View>
				<View style={styles.search}>
					<Image style={styles.imgsearch}
						source={require('../assets/search.png')}/>
					<Text style={styles.textStyle}>Realiza la búsqueda para encontrar publicaciones, tools y ofertas de trabajo</Text>
				</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);