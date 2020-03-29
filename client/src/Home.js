import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import Routes from './Routes';

class Home extends Component<{}> {

	render() {
    const {authData:{isLoggedIn}} = this.props;
		return(
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#3399ff"
           barStyle="light-content"
         />
        <Routes isLoggedIn={isLoggedIn} />
      </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Home)
