import React from 'react';
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
  },
  container2: {
    height: height / 1.2,
    top: 10,
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 0,
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
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  infoview: {
    width: '20%',
    height: 62,
    backgroundColor: '#f9dfff',
    position: 'relative',
    borderTopLeftRadius: 18,
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
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
    width: '30%',
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
    alignItems: 'space-between',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  text: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 25,
    justifyContent: 'center',
    top: '35%',
  },
  text2: {
    color: '#000000',
    position: 'absolute',
    right: 15,
    fontWeight: 'bold',
    fontSize: 11,
  },
  text3: {
    color: '#000000',
    position: 'absolute',
    right: 14,
    fontWeight: 'bold',
    fontSize: 11,
  },
  text4: {
    color: '#000000',
    position: 'absolute',
    right: 25,
    fontWeight: 'bold',
    fontSize: 11,
  },
  text5: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    fontWeight: 'bold',
    fontSize: 11,
  },
  text6: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 18,
    left: 20,
    color: 'black',
  },
  text7: {
    color: '#000000',
    position: 'absolute',
    left: 50,
    fontWeight: 'bold',
    fontSize: 11,
    position: 'absolute',
    right: 10,
  },
  text8: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 18,
    left: 20,
    color: 'black',
  },
  text9: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 16,
    left: 45,
    top: 15,
    color: 'black',
  },
  text10: {
    color: '#000000',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 13,
    left: 70,
    top: 55,
    position: 'absolute',
  },
  text11: {
    color: '#000000',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 13,
    left: 70,
    top: 70,
    position: 'absolute',
  },
  text12: {
    color: '#000000',
    position: 'absolute',
    left: 40,
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
    right: 10,
  },
  img: {
    height: 260,
    width: width,
  },
  img2: {
    height: 30,
    width: 30,
    bottom: '73%',
    alignSelf: 'flex-end',
    right: '5%',
  },
  img2a: {
    height: 30,
    width: 30,
    bottom: 100,
    right: '43%',
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
    left: 5,
    position: 'absolute',
  },
  img7: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 10,
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
