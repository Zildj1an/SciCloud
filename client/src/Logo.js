import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimension
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:240, height: 170}}
          			source={require('../assets/cloud.png')}/>
          		<Text style={styles.logoText}>Welcome to SciCloud</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});
