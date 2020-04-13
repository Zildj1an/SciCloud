import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import cstyles from './Styles';

import {logoutUser} from "./Api.js";

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  ini : {
    backgroundColor:'#3399ff',
    width: width,
    height: 0.1*height,
    alignItems:'center',
	flexDirection: 'row',
  },
  searchbar : {
    backgroundColor:'#6ea5ee',
    width: 0.55*width,
    height: 0.07*height,
	borderRadius: 25,
    justifyContent :'center',
	marginHorizontal:0.05*width,
  },
  imgsearchbar: {
    width:0.06*width,
	height: 0.06*width,
	position: 'absolute',
	right: 0.03*width,
	top: 0.015*height,
  },
  input: {
	fontSize: 15,
	marginRight: 0.15*width,
	marginLeft: 0.03*width,
  },
  messages : {
    backgroundColor:'#3399ff',
	borderBottomWidth: 0.5,
    width: width,
    height: 0.13*height,
    alignItems:'center',
	flexDirection: 'row',
  },
  lastMsg: {
    fontSize: 18,
	fontWeight: 'bold',
	marginLeft: 0.008*width,
  },
  text: {
    width:0.72*width,
	height: 0.17*width,
    justifyContent:'center',
  },
});

class Messages extends Component<{}> {
	
	/*
		var productList = [];

		this.state.data.products.forEach(function (tmpProduct) {
			productList.push(
				<View style={styles.messages}>
					<Image style={cstyles.profilePhoto}
							source={require('../assets/user.png')}/>
					<View style={styles.text}>
						<Text style={styles.lastMsg}>Último mensaje</Text>
						<View style={{flexDirection: 'row'}}>
							<Text style={{fontWeight: 'bold'}}> Nombre - </Text>
							<Text> Descripción </Text>
						</View>
					</View>
				</View>
			);
		}.bind(this));
	*/
	render() {
		const {getUser: {userDetails}} = this.props;
		return(
			<SafeAreaView style={cstyles.container}>
				<ScrollView style={cstyles.scrollView}>
					<View style={styles.ini}>
						<Text style={{fontSize: 25, marginLeft: 0.01*width}}> Mensajes </Text>
						<View style={styles.searchbar}>
							<TouchableOpacity style={styles.imgsearchbar} onPress={ this.search }>
								<Image style={{width:0.06*width, height: 0.06*width}}
								source={require('../assets/search.png')}/>
							</TouchableOpacity>
							<TextInput style={styles.input}>
							</TextInput>
						</View>
					</View>
					{/*{productList}*/}
					<View style={styles.messages}>
						<Image style={cstyles.profilePhoto}
								source={require('../assets/user.png')}/>
						<View style={styles.text}>
							<Text style={styles.lastMsg}>Último mensaje</Text>
							<View style={{flexDirection: 'row'}}>
								<Text style={{fontWeight: 'bold'}}> Nombre - </Text>
								<Text> Ocupación </Text>
							</View>
						</View>
					</View>
					<View style={{height:0.05*height}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);