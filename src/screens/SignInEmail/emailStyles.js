import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const emailStyles = {
  container: {
    flex: 1,
    // alignItems: 'stretch',
    // justifyContent: 'center'
  },
  backgroundContainer: {
    position: 'absolute',
  },
  backgroundsecondContainer: {
    position: 'absolute',
  },
  backgroundthirdContainer: {
    position: 'absolute',
    top: 635,
  },
  logo: {
    width: 110,
    height: 76,
    marginTop: 50,
    alignSelf: 'center',
  },
  mainCardView: {
    borderWidth: 1,
    top: '8%',
    //top: '3%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    height: '81%',
    //paddingBottom: '0%',
    //marginVertical: '10%',
    marginTop: '-7%',
    //height:'95%',
    //height:height/1.05,
    //marginBottom:10,
    borderRadius: 15,
    elevation: 10,
  },
  accountHeadText: {
    fontFamily: 'Bakbak one-Regular',
    fontSize: 25,
    fontWeight: '700',
    color: '#000000',
    top: 10,
    textAlign: 'center',
  },
  headBelowText: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: '#B4B4B4',
    top: 10,
    textAlign: 'center',
  },
  Touchablemail1: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    top: 240,
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    marginBottom: 10,
  },
  Touchablemail2: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    top: 330,
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
  },
  Touchablemail3: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    top: 410,
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    marginBottom: 10,
  },
  Touchablemail4: {
    top: 320,
    borderBottomWidth: 1,
    paddingBottom: 15,
    width: '90%',
    borderColor: '#C4C4C4',
    left: 22,
    flexDirection: 'row',
  },
  userNameText: {
    fontFamily: 'Inter-Medium',
    color: '#646661',
    fontSize: 18,
    marginTop: 15,
  },
  userEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    top: 2,
    color: '#B4B4B4',
    width: 218,
  },
  AddText: {
    alignSelf: 'center',
    left: 40,
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#646661'
  },
  paragraph: {
    fontFamily: 'Inter=Regular',
    fontSize: 15,
    color: '#B4B4B4',
    width: 319,
    textAlign: 'center',
    alignSelf: 'center',
    //top: 355,
    top: 340
  },

};
