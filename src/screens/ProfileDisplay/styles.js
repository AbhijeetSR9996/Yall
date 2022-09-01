import { StyleSheet } from 'react-native';
import { height, width } from '../../services/helper';

export const Styles = StyleSheet.create({
  main: {
    width: width,
    height: height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width,

    height: 60,
    top: 5,
    backgroundColor: 'transparent',
    marginTop: '-20%',

  },
  container2: {
    height: height / 1.15,

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
    bottom: 160,
    backgroundColor: 'white',
    position: 'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
  },
  iconcontainer: {
    height: 35,
    width: 35,
    backgroundColor: 'transparent',

    bottom: '79%',
    right: '-40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17
  },
  iconcontainer2: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    right: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17
  },
  crosscontainer: {
    height: 37,
    width: 35,
    backgroundColor: 'transparent',

    bottom: '8%',
    right: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,

  },
  infoview: {
    width: '19%',
    height: 62,
    backgroundColor: '#f9dfff',

    borderTopLeftRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'

  },
  infoview2: {
    width: '27%',
    height: 62,
    left: 64,
    backgroundColor: '#f9dfff',
    position: 'absolute',

    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  infoview3: {
    width: '30%',
    height: 62,
    right: 69,

    marginLeft: '10%',
    backgroundColor: '#f9dfff',
    position: 'absolute',

    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  infoview4: {

    width: 95,
    height: 62,
    right: 0,
    backgroundColor: '#f9dfff',
    position: 'absolute',
    borderTopRightRadius: 18,

    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  text: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',

    fontSize: 22,
    justifyContent: 'center',

    top: '95%',
    letterSpacing: -0.017
  },
  text2: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',

    fontSize: 12,
    bottom: '-10%'
  },
  text3: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',

    fontSize: 12,
    bottom: '-2%'
  },
  text4: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',

    right: '29%',

    fontSize: 12,

  },
  text5: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',
    width: '60%',


    left: '20%',

    fontSize: 12,

  },
  text6: {
    fontFamily: 'BakbakOne-Regular',
    position: 'absolute',

    fontSize: 18,
    left: 20,
    color: 'black',
    letterSpacing: -0.017
  },
  text7: {
    fontFamily: 'Inter',
    position: 'absolute',

    color: '#000000',
    left: 50,
    fontSize: 12,
    right: 10,
    letterSpacing: -0.017,

    width: '85%',
  },
  text8: {
    fontFamily: 'BakbakOne-Regular',
    position: 'absolute',

    fontSize: 18,
    left: 20,
    color: 'black',
    letterSpacing: -0.017
  },
  text9: {
    fontFamily: 'BakbakOne-Regular',
    position: 'absolute',

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

    left: 20,
    fontSize: 15,

    position: 'absolute',

    letterSpacing: -0.017,
  },
  img: {
    height: 260,

    width: width,

  },
  img3: {
    height: 25,
    width: 23,

  },
  img4: {

    height: 23,

    width: 17,

  },
  img5: {
    height: 26,
    width: 21.5,
    left: '-12%',


  },
  img6: {
    height: 24,
    width: 24,

    left: 10,


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

    height: 35,

    width: 35,

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
});
