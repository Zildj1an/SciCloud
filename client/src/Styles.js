import {
  StyleSheet,
  Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3399ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    width: 0.5 * width,
    backgroundColor: '#1c313a',
    borderRadius: 8,
    marginVertical: 10,
    marginTop: 0.1 * height,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})

export default styles
