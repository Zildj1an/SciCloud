import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {connect} from "react-redux";
import cstyles from './Styles';

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  ini : {
	backgroundColor:'rgba(255, 255,255,0.2)',
    width: width,
    height: 0.2*height,
    alignItems:'center',
	flexDirection: 'row',
  },
  profile : {
    width: 0.7*width,
    height: 0.2*height,
	justifyContent :'center',
  },
  text: {
    fontSize: 14,
	marginLeft:0.05*width,
	marginVertical:0.01*width,
  }, 
  label: {
    width: 0.8*width,
    fontSize: 25,
	marginHorizontal:0.05*width,
	marginVertical:0.03*width,
  },
});

class Profile extends Component<{}> {
	
	/*
		var productList1 = [];
		var productList2 = [];

		this.state.data.products.forEach(function (tmpProduct) {
			productList1.push(
				<View style={cstyles.publication}>
					<Text style={cstyles.pTitle}>Título</Text>
					<View style={cstyles.textimg}>
						<Image style={{width:15, height: 15}}
							source={require('../assets/user.png')}/>
						<Text style={cstyles.pText}>Autor 1</Text>
					</View>
					<View style={cstyles.textimg}>
						<Image style={{width:15, height: 15}}
							source={require('../assets/journal.png')}/>
						<Text style={cstyles.pText}>Fuente</Text>
					</View>
					<View style={cstyles.valoration}>
						<Text style={cstyles.pVal}>Valoración: </Text>
					</View>						
				</View>
			);
		}.bind(this));
		
		this.state.data.products.forEach(function (tmpProduct) {
			productList2.push(
				<View style={cstyles.publication}>
					<Text style={cstyles.pTitle}>Título</Text>
					<View style={cstyles.textimg}>
						<Image style={{width:15, height: 15}}
							source={require('../assets/user.png')}/>
						<Text style={cstyles.pText}>Autor 1</Text>
					</View>
					<View style={cstyles.textimg}>
						<Image style={{width:15, height: 15}}
							source={require('../assets/journal.png')}/>
						<Text style={cstyles.pText}>Fuente</Text>
					</View>
					<View style={cstyles.valoration}>
						<Text style={cstyles.pVal}>Valoración: </Text>
					</View>						
				</View>
			);
		}.bind(this));
	*/

	render() {
		const {getUser: {userDetails}} = this.props;
		return(
			<View style={cstyles.container}>
				<View style={styles.ini}>
					<View style={styles.profile}>
						<Text style={[styles.text, {fontWeight: 'bold', fontSize: 25}]}>{userDetails ? userDetails.name : "Nombre"} {userDetails ? userDetails.surname : ""}</Text>
						<Text style={styles.text}>{userDetails ? userDetails.occupation : "Ocupación"}</Text>
						<View style={{flexDirection: 'row'}}>
							<Text style={[styles.text, {fontWeight: 'bold'}]}>Especialidad: </Text>
							<Text style={[styles.text, {marginLeft:0}]}>{userDetails ? userDetails.field : "Especialidad"}</Text>
						</View>
					</View>
					<View style={[styles.profile, {width: 0.3*width}]}>
						<Image style={cstyles.profilePhoto}
							source={require('../assets/user.png')}/>
						<Text style={[styles.pVal, {marginTop: 0.01*height}]}>Valoración: {userDetails ? userDetails.valoration : ""}</Text>
					</View>
				</View>
				<Text style={[styles.label, {marginTop:0.08*width}]}>Tus publicaciones</Text>
				{/*{productList1}*/}
				<View style={cstyles.publications}>
					<ScrollView style={cstyles.scrollView} horizontal={true}>
						<View style={cstyles.publication}>
							<Text style={cstyles.pTitle}>Título</Text>
							<View style={cstyles.textimg}>
								<Image style={{width:15, height: 15}}
									source={require('../assets/user.png')}/>
								<Text style={cstyles.pText}>Autor 1</Text>
							</View>
							<View style={cstyles.textimg}>
								<Image style={{width:15, height: 15}}
									source={require('../assets/journal.png')}/>
								<Text style={cstyles.pText}>Fuente</Text>
							</View>
							<View style={cstyles.valoration}>
								<Text style={cstyles.pVal}>Valoración: </Text>
							</View>						
						</View>
					</ScrollView>
				</View>
				<Text style={styles.label}>De autor</Text>
				{/*{productList2}*/}
				<View style={cstyles.publications}>
					<ScrollView style={cstyles.scrollView} horizontal={true}>
						<View style={cstyles.publication}>
							<Text style={cstyles.pTitle}>Título</Text>
							<View style={cstyles.textimg}>
								<Image style={{width:15, height: 15}}
									source={require('../assets/user.png')}/>
								<Text style={cstyles.pText}>Autor 1</Text>
							</View>
							<View style={cstyles.textimg}>
								<Image style={{width:15, height: 15}}
									source={require('../assets/journal.png')}/>
								<Text style={cstyles.pText}>Fuente</Text>
							</View>
							<View style={cstyles.valoration}>
								<Text style={cstyles.pVal}>Valoración: </Text>
							</View>						
						</View>
					</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
