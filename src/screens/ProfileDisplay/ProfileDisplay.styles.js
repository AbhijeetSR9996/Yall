import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const ProfileDisplayStyles = {
  main: {
    width: width,
    height: height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width,
    height: 50,
    top: 5,
    backgroundColor:'transparent',
    marginTop:'-20%'
  },
  container2: {
    height: height / 1.15,
    //top: 10,
    backgroundColor: 'white',
    position: 'relative',
  },
  itemcontainer: {
    width: width,
    height: 306,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infocontainer: {
    width: '95%',
    height: 66,
    bottom: 150,
    backgroundColor: 'white',
    position: 'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
  },
  iconcontainer: { 
    height: 30,
    width: 30,
    backgroundColor:'transparent',
    //bottom: '73%',
    bottom: '80%',
    right: '-40%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:17
  },
  iconcontainer2: { 
    height: 30,
    width: 30,
    backgroundColor:'transparent',
    right: '3%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:17
  },
  crosscontainer: { 
    height: 30,
    width: 30,
    backgroundColor:'transparent',
    //bottom:'27%',
    bottom: '5%',
    right: '43%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:17},
  infoview: {
    width: '20%',
    height: 62,
    backgroundColor: '#f9dfff',
    position: 'relative',
    borderTopLeftRadius: 18,
    alignItems: 'space-between',
    justifyContent: 'center',
    //borderWidth: 0.5,
  },
  infoview2: {
    width: '27%',
    height: 62,
    left: 68,
    backgroundColor: '#f9dfff',
    position: 'absolute',
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  infoview3: {
    width: '31%',
    height: 62,
    right: 85,
    backgroundColor: '#f9dfff',
    position: 'absolute',
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  infoview4: {
    width: 85,
    height: 62,
    right: 0,
    backgroundColor: '#f9dfff',
    position: 'absolute',
    borderTopRightRadius: 18,
    //alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  text: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    fontWeight: '400',
    fontSize: 22,
    justifyContent: 'center',
    //top: '35%',
    top: '85%',
    letterSpacing: -0.017
  },
  text2: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    position: 'absolute',
    right: 15,
    fontWeight: '400',
    fontSize: 12,
  },
  text3: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    position: 'absolute',
    right: 14,
    fontWeight: '400',
    fontSize: 12,
  },
  text4: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    position: 'absolute',
    right: 25,
    fontWeight: '400',
    fontSize: 12,
  },
  text5: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    position: 'absolute',
    right: 5,
    //right: '5%',
    //left: '40%',
    fontWeight: '400',
    fontSize: 12,
  },
  text6: {
    fontFamily: 'Bakbak One',
    position: 'absolute',
    fontWeight: '400',
    fontSize: 18,
    left: 20,
    color: 'black',
    letterSpacing: -0.017
  },
  text7: {
    fontFamily: 'Inter',
    position: 'absolute',
    fontWeight: '400',
    color: '#000000',
    left: 50,
    fontSize: 12,
    right: 10,
    letterSpacing: -0.017    
  },
  text8: {
    fontFamily: 'Bakbak One',
    position: 'absolute',
    fontWeight: '400',
    fontSize: 18,
    left: 20,
    color: 'black',
    letterSpacing: -0.017
  },
  text9: {
    fontFamily: 'Bakbak One',
    position: 'absolute',
    fontWeight: '400',
    fontSize: 18,
    left: 45,
    top: 15,
    color: 'black',
    letterSpacing: -0.017
  },
  text10: {
    fontFamily: 'Inter',
    color: '#000000',
    position: 'absolute',
    fontWeight: '600',
    fontSize: 12,
    left: 70,
    top: 55,
    position: 'absolute',
    letterSpacing: -0.017
  },
  text11: {
    fontFamily: 'Inter',
    color: '#000000',
    position: 'absolute',
    fontWeight: '400',
    fontSize: 12,
    left: 70,
    top: 70,
    position: 'absolute',
    letterSpacing: -0.017
  },
  text12: {
    fontFamily: 'Inter',
    color: '#000000',
    position: 'absolute',
    left: 40,
    fontSize: 15,
    fontWeight: '400',
    position: 'absolute',
    right: 10,
    letterSpacing: -0.017
  },
  img: {
    height: 260,
    //height: 366,
    width: width,
  },
  img3: {
    height: 20,
    width: 20,
    left: 10,
    position: 'absolute',
  },
  img4: {
    height: 30,
    width: 22,
    left: 5,
    position: 'absolute',
  },
  img5: {
    height: 25,
    width: 20,
    left: 10,
    position: 'absolute',
  },
  img6: {
    height: 20,
    width: 20,
    //left: 5,
    left: '5%',
    position: 'absolute',
  },
  img8: {
    height: 32,
    width: 30,
    left: 10,
    position: 'absolute',
    bottom: 30,
  },
  img9: {
    height: 30,
    width: 32,
    left: 8,
    position: 'absolute',
    bottom: 108,
  },
  img10: {
    height: 50,
    width: 50,
    left: 10,
    position: 'absolute',
    bottom: 50,
  },
  img11: {
    height: 20,
    width: 20,
    left: 10,
    top: 110,
    position: 'absolute',
    bottom: 50,
  },
  img12: {
    height: 20,
    width: 240,
    left: 40,
    top: 110,
    position: 'absolute',
    bottom: 50,
  },
  imglike: {
    height: 30,
    width: 30
  },
  vw: {
    width: '100%',
    height: 80,
    backgroundColor: '#f9dfff',
    position: 'relative',
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  vw2: {
    width: '100%',
    height: 150,
    backgroundColor: '#f9dfff',
    position: 'relative',
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  vw3: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9dfff',
    position: 'relative',
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
};
