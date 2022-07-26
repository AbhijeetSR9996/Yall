import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        //alignItems:'center',
        //justifyContent:'center',
        //flexDirection:'column',
      },
      text: {
        color: '#848484',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        //width: 207,
        //height: 70,
        //top: '10%',
        //marginBottom: '3%',
        //left:'7%',
        letterSpacing:-0.017, 
      }, 
      img2: {
        //bottom: '20%',
        //marginVertical:'30%',
        width: width/1.15, 
        height:height/2.5,
        //width: 369,
        //height: 357,
        //position:'absolute',
        borderRadius: 20,
        //marginHorizontal:'5%',
      }, 
      textInput1: {
        borderBottomWidth: 1.5,
        //width: 367,
        width: 309,
        height: 69,
        fontWeight: '500',
        color: '#000000',
        fontSize: 18,
        elevation:5,
        backgroundColor:'#FFFEFC',
        paddingTop:20,
        //bottom:'23%',
        borderRadius:20,
        paddingLeft:20,
        //paddingVertical:20,
        borderBottomWidth:0.1,
        //marginHorizontal:'10%'
      },
      rect: {
        width: 10,
        //position: 'absolute',
        //alignSelf: 'center',
        //top: '80%',
        //marginHorizontal:'10%'
      },
      rect2: {
        //width: 10,
        //position: 'absolute',
        //alignSelf: 'center',
        //top: '90%',
        //marginTop: '120%',
        //marginHorizontal:'10%'
      }
};
