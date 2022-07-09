import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const splashStyles = {
  container: {
    flex: 1,
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
    top: 130,
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
    //alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DCC7E1',
    position: 'relative',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Bakbak one-Regular',
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    right: '10%',
  },
  borderView1: {
    width: width * 0.15,
    borderWidth: 1,
    height: '104%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCC7E1',
    position: 'absolute',
    marginVertical: -1,
  },
  arrowIcon: { textAlign: 'center', alignSelf: 'center' },
};
