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

    getPublications = async () => {
        await this.props.dispatch(getPublications());
    }

    getProfiles = async () => {
        await this.props.dispatch(getProfiles());
    }
    

    componentDidMount () {
        if (!this.props.getPubs.pubList) {
          console.log('Home: Attepmting to get publications...')
          this.getPublications()
        }
        if (!this.props.getProfs.profList) {
          console.log('Home: Attepmting to get profiles...')
          this.getProfiles()
        }
    }

    renderPubli (title, author, source, score, ...rest) {
        return (
		    <View style={cstyles.publication}>
			    <Text style={cstyles.pTitle}>{title}</Text>
			    <View style={cstyles.textimg}>
				    <Image style={{width:15, height: 15}}
					    source={require('../assets/user.png')}/>
					<Text style={cstyles.pText}>{author}</Text>
				</View>
				<View style={cstyles.textimg}>
					<Image style={{width:15, height: 15}}
						source={require('../assets/journal.png')}/>
					<Text style={cstyles.pText}>{source}</Text>
				</View>
				<View style={cstyles.valoration}>
					<Text style={cstyles.pVal}>Valoración: {score}</Text>
				</View>						
			</View>
        )
    }

    renderProf (name, surname, score, job, ...rest) {
        return(
			<View style={styles.profile}>
				<View style={cstyles.textimg}>
					<Image style={{width:0.08*width, height: 0.06*height}}
						source={require('../assets/user.png')}/>
					<View style={styles.profileText}>
						<Text style={[cstyles.pText, {fontWeight: 'bold', fontSize: 14}]}>{name + surname}</Text>
						<Text style={cstyles.pText}>Valoración: {score}</Text>
					</View>
				</View>
				<Text style={cstyles.pText}>{job}</Text>
			</View>
        )
    }


    // Order for sorting publications: by date
    sortPublis (pub1, pub2) {
        return pub1.date < pub2.date
    }

    // Order for sorting publications: by date
    sortProfs (prof1, prof2) {
        return prof1.surname < prof2.surname
    }

	render() {
        const {getPubs: {pubList, pubsLoading: isLoading},
            getProfs: {profList, profsLoading: isLoading}} = this.props;
		return(
			<SafeAreaView style={cstyles.container}>
				<View style={styles.scrollContainer}>
					<ScrollView style={cstyles.scrollView}>
						<Text style={[styles.label, {marginTop:0.08*width}]}>Últimas publicaciones</Text>
						<View style={cstyles.publications}>
                            { pubsLoading ?
                                <View style={styles.loader}>
                                    <ActivityIndicator color="#ffffff" size="small" />
					            </View> :
                                pubList.sort(sortPublis).map(this.renderPubli)
                            }
						</View>
						<Text style={styles.label}>Perfiles más valorados</Text>
						<View style={cstyles.publications}>
                            { profsLoading ?
                                <View style={styles.loader}>
                                    <ActivityIndicator color="#ffffff" size="small" />
					            </View> :
                                profList.sort(sortProfs).map(this.renderProf)
                            }
						</View>
						<Text style={styles.label}>Más valorados: {userDetails ? userDetails.field : ""}</Text>
						<View style={cstyles.publications}>
                            { pubsLoading ?
                                <View style={styles.loader}>
                                    <ActivityIndicator color="#ffffff" size="small" />
					            </View> :
                                pubList.sort(sortPublis).map(this.renderPubli)
                            }
						</View>
						<View style={{height:0.05*height}}/>
					</ScrollView >
				</View>
			</SafeAreaView>
		)
	}
}

mapStateToProps = (state) => ({
    getPubs: state.pubReducer.getPublications,
    getProfs: state.userReducer.getProfiles
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
