import {
  StyleSheet,
  Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window')

const cstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3399ff',
    alignItems: 'center',
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
  },
  bar : {
    backgroundColor:'#a8ccdc',
	width: width,
	height: 0.08*height,
	position: 'absolute',
    bottom: 0,
	flexDirection: 'row',
  },
  buttonbar: {
    width: 0.15*width,
	justifyContent :'center',
	marginHorizontal:0.03*width,
  },
  imgbar: {
    width:0.08*width,
	height: 0.08*width,
	marginHorizontal:0.025*width,
  },
  buttonUpload: {
	width: 0.18*width,
    height: 0.1*width,
    position: 'absolute',
    bottom: 0.033*width,
    right: 0.41*width,
	justifyContent :'center',
	borderBottomRightRadius: 50, 
    borderBottomLeftRadius: 50  
  },
  scrollView : {
    backgroundColor:'#3399ff',
  },
  pTitle: {
    width: 0.8*width,
    fontSize: 15,
	fontWeight: 'bold',
	marginHorizontal:0.02*width,
	marginVertical:0.008*width,
  },
  pText: {
    fontSize: 12,
	marginHorizontal:0.01*width,
  },
  pVal: {
    width: 0.8*width,
    fontSize: 12,
	marginHorizontal:0.04*width,
  },
  publications: {
    width: 0.88*width,
	flexDirection: 'row',
    marginHorizontal:0.06*width,
    marginBottom: 10
  },
  publication: {
    width: 0.4*width,
	height: 0.18*height,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 10,
	marginHorizontal:0.02*width,
    color:'#ffffff'
  },
  textimg: {
	flexDirection: 'row',
    marginHorizontal:0.02*width,
	marginVertical:0.01*width,
  },
  valoration: {
	width: 0.3*width,
	height: 0.04*height,
	justifyContent :'center',
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 10,
	marginHorizontal:0.04*width,
	marginVertical:0.008*width,
    color:'#ffffff'
  },
  profilePhoto: {
    width:0.17*width,
	height: 0.17*width,
	backgroundColor:'#a8ccdc',
	borderRadius: 30,
    marginHorizontal:0.04*width,
  },
})

export default cstyles
