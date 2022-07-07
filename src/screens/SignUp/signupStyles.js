import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const signupStyles = {
  backgroundContainer: {
    position: 'absolute',
  },
  container: {
    flex: 1,
  },

  backgroundsecondContainer: {
    position: 'absolute',
  },
  logo: {
    marginTop: 172,
    alignSelf: 'center',
  },
  backgroundsecondContainer: {
    position: 'absolute',
  },

  backgroundthirdContainer: {
    position: 'absolute',
    top: 90,
  },
  headline: {
    fontWeight: '400',
    fontSize: 15,
    width: 319,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 15,
    marginTop: 90,
    color: 'white',
    paddingBottom: 10,
    top: '8%',
  },
  signinMainView: {alignItems: 'center'},
  signupMainView: {alignItems: 'center', top: '-15%'},
  signEmailMainView: {alignItems: 'center', top: '-30%'},
  touchablebuttons: {
    width: '80%',
    height: '24%',
    borderWidth: 1,
    borderColor: '#000000',
  },
  borderView: {
    left: 10,
    top: 8,
    width: '100%',
    borderWidth: 1,
    borderRightWidth: 0,
    height: '110%',
    alignSelf: 'center',
    backgroundColor: '#DCC7E1',
    position: 'relative',
  },
  loginButtonText: {
    fontWeight: '500',
    fontSize: 20,
    margin: 6,
    color: '#000000',
  },
  borderView1: {
    width: width * 0.15,
    borderWidth: 1,
    height: '105%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCC7E1',
    position: 'absolute',
    marginVertical: -1,
  },
  arrowIcon: {textAlign: 'center', paddingTop: 5},

  // styles of signupmobile1 screen
  mainView: {width: 214, height: 70, top: 85, left: 21},
  text: {
    color: '#000000',
    fontFamily: 'Bakbak One',
    fontWeight: '800',
    fontSize: 25,
    lineHeight: 35,
  },
  phoneNumber: {flexDirection: 'row', top: 120},
  dropdown: {
    left: 22,
    width: 70,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    height: 40,
    top: -10,
  },

  placeholderStyle: {
    fontSize: 15,
    alignItems: 'center',
    fontWeight: '400',
    height: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#000000',
  },
  selectedTextStyle: {
    color: '#000000',
    textAlign: 'center',
  },

  //==========================verification code styles==============================
  text1: {flexDirection: 'row', top: 100, left: 22, width: 190},
  editText: {color: '#000000', fontWeight: '500'},
  code: {
    top: 120,
  },
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    width: 280,
    left: 22,
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  textView: {
    flexDirection: 'row',
    top: 600,
    justifyContent: 'space-between',
    left: 25,
    width: '90%',
  },
  text2: {
    bottom: 80,
    color: '#6E3E89',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
  },
  imageicon: {
    right: 10,
    backgroundColor: '#DCC7E1',
    borderRadius: 20,
    bottom: 140,
  },
};
