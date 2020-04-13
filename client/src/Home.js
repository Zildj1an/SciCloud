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
  scrollContainer: {
	height: 0.91*height,
	marginBottom: 0.09 * height,
  },
  label: {
    width: 0.8*width,
    fontSize: 25,
	marginHorizontal:0.05*width,
	marginVertical:0.03*width,
  },
  profile: {
    width: 0.4*width,
	height: 0.12*height,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 10,
	marginHorizontal:0.02*width,
    color:'#ffffff'
  },
  profileText: {
    width: 0.26*width,
	marginHorizontal:0.01*width,
    color:'#ffffff'
  },
});

class Home extends Component<{}> {

	render() {
		const {getUser: {userDetails}} = this.props;
		return(
			<SafeAreaView style={cstyles.container}>
				<View style={styles.scrollContainer}>
					<ScrollView style={cstyles.scrollView}>
						<Text style={[styles.label, {marginTop:0.08*width}]}>Últimas publicaciones</Text>
						<View style={cstyles.publications}>
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
						</View>
						<Text style={styles.label}>Perfiles más valorados</Text>
						<View style={cstyles.publications}>
							<View style={styles.profile}>
								<View style={cstyles.textimg}>
									<Image style={{width:0.08*width, height: 0.06*height}}
										source={require('../assets/user.png')}/>
									<View style={styles.profileText}>
										<Text style={[cstyles.pText, {fontWeight: 'bold', fontSize: 14}]}>Usuario</Text>
										<Text style={cstyles.pText}>Valoración: </Text>
									</View>
								</View>
								<Text style={cstyles.pText}>Ocupación</Text>
							</View>
							<View style={styles.profile}>
								<View style={cstyles.textimg}>
									<Image style={{width:0.08*width, height: 0.06*height}}
										source={require('../assets/user.png')}/>
									<View style={styles.profileText}>
										<Text style={[cstyles.pText, {fontWeight: 'bold', fontSize: 14}]}>Usuario</Text>
										<Text style={cstyles.pText}>Valoración: </Text>
									</View>
								</View>
								<Text style={cstyles.pText}>Ocupación</Text>
							</View>
						</View>
						<View style={cstyles.publications}>
							<View style={styles.profile}>
								<View style={[cstyles.textimg, {marginVertical:0.005*width}]}>
									<Image style={{width:0.08*width, height: 0.06*height}}
										source={require('../assets/user.png')}/>
									<View style={styles.profileText}>
										<Text style={[cstyles.pText, {fontWeight: 'bold', fontSize: 14}]}>Usuario</Text>
										<Text style={cstyles.pText}>Valoración: </Text>
									</View>
								</View>
								<Text style={cstyles.pText}>Ocupación</Text>
							</View>
							<View style={styles.profile}>
								<View style={[cstyles.textimg, {marginVertical:0.005*width}]}>
									<Image style={{width:0.08*width, height: 0.06*height}}
										source={require('../assets/user.png')}/>
									<View style={styles.profileText}>
										<Text style={[cstyles.pText, {fontWeight: 'bold', fontSize: 14}]}>Usuario</Text>
										<Text style={cstyles.pText}>Valoración: </Text>
									</View>
								</View>
								<Text style={cstyles.pText}>Ocupación</Text>
							</View>
						</View>
						<Text style={styles.label}>Más valorados: {userDetails ? userDetails.field : ""}</Text>
						<View style={cstyles.publications}>
							<View style={cstyles.publication}>
								<Text style={cstyles.pTitle}>Título</Text>
								<View style={[cstyles.textimg, {marginVertical:0.005*width}]}>
									<Image  style={{width:15, height: 15}}
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
							<View style={cstyles.publication}>
								<Text style={cstyles.pTitle}>Título</Text>
								<View style={[cstyles.textimg, {marginVertical:0.005*width}]}>
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
						</View>
						<View style={cstyles.publications}>
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
						</View>
						<View style={{height:0.05*height}}/>
					</ScrollView >
				</View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
