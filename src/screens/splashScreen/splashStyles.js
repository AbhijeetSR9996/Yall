import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const splashStyles = {
  container: {
    flex:1,
   
   
  },
  backgroundContainer: {
    position: 'absolute',
  },

  logo: {
    // position: 'absolute',
    top: 170,
    alignSelf: 'center',
  },

  headline: {
    fontWeight: '400',
    fontSize: 15,
    width: width * 0.8,
    fontFamily: 'Inter-Regular',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    top:130
  },
  getStartedButtonMain: {
    alignItems: 'center',
    top: 180,
    //backgroundColor:'green'
  },
  touchableStarted: {
    width: width * 0.8,
    height: height * 0.07,
    borderWidth: 1,
  },
  borderView: {
    left: 10,
    top: 8,
    width: width * 0.8,
    borderWidth: 1,
    borderRightWidth: 0,
    height: height * 0.07,
    // alignItems: 'center',
  alignSelf:'center',
    backgroundColor: '#DCC7E1',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 18,
    textAlign:'center',
    //margin: 15,
    margin:10,
    fontFamily: 'Bakbak one-Regular',
    color: '#000000',
    
  },
  borderView1: {
 
    //top: -55,
    top: -45.5,
    width: width * 0.15,
    borderWidth: 1,
    height: height * 0.07,
    alignSelf: 'flex-end',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#DCC7E1',
  },
  arrowIcon: {textAlign: 'center', alignSelf:'center', },
};
