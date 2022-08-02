import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from '../../services/helper';


const SignUpEmail = ({ navigation }) => {


  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch' }}>
      <View style={{ flex: 0.2, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} />
      <View style={{ flex: 0.4, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', }}>
        <Text style={{ fontFamily: 'BakbakOne-Regular', fontSize: 25, fontWeight: '400', lineHeight: 35, width: 297, color: '#000000', marginLeft: '5%' }}>When sent a 4 digit code to your mail@12354</Text>
        {/* <Text style={{ fontFamily: 'Bakbak One', fontSize: 25, fontWeight: '400', lineHeight: 35, width: 307, color: '#000000', marginLeft: '6%' }}>your mail@12354 </Text> */}
      </View>
      {/* <View style={{ flex: 1.2, backgroundColor: 'transparent', flexDirection: 'column', alignItems: 'flex-start', marginTop: '0%', }}> */}
      <View style={{ flex: 0.6, backgroundColor: 'transparent', marginTop: '0%', }}>
        <TextInput
          placeholder="Enter code"
          placeholderTextColor="#AAAAAA"
          style={{
            marginTop: '0%',
            fontFamily: 'Inter',
            borderBottomWidth: 1.5,
            width: 314,
            left: 23,
            fontWeight: '400',
            color: '#000000',
            fontSize: 18,
            letterSpacing: -0.017
          }}></TextInput>
      </View>
      {/* </View> */}
      <View style={{
        //flex: 1.3, 
        backgroundColor: 'transparent', //justifyContent: 'space-evenly', 
        flexDirection: 'column', alignItems: 'center'
      }}>

        <TouchableOpacity
          style={[
            {
              //alignSelf: 'center',
              width: width * 0.8,
              //height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //top: '10%',
              top: '-4%',
              //marginTop: '0%',
              right: '2%'
            },
          ]}
          onPress={() => { navigation.navigate('MainBottomNavigation') }}>

          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#DCC7E1',
            //position: 'relative',

          }}>
            <Text style={{
              //fontWeight: '900',
              fontSize: 18,
              fontFamily: 'BakbakOne-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              //paddingVertical: 10,
              top: '30.3%',
              right: '30%',
              //right: '10%',
              lineHeight: 25,
              letterSpacing: -0.017
            }}>Continue</Text>
            <View style={{
              width: width * 0.15,
              borderWidth: 1,
              height: '104%',
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#DCC7E1',
              //position: 'absolute',
              marginTop: '-8.2%'
              //marginVertical: -1,
            }}>{icons.rightarrow}</View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              //alignSelf: 'center', 
              width: width * 0.8,
              //height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //top: '5%',
              //top: '6%',
              top: '4%',
              right: '2%'
            },
          ]}>
          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderColor: '#FFFFFF',
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            //backgroundColor: '#DCC7E1',
            backgroundColor: '#000000',
            //position: 'relative',
          }}>
            <Text style={{
              //fontWeight: '900',
              fontSize: 18,
              fontFamily: 'BakbakOne-Regular',
              color: "#FFFFFF",
              alignSelf: 'center',
              justifyContent: 'center',
              //paddingVertical: 10,
              //right: '10%',
              top: '30.3%',
              right: '25%',
              lineHeight: 25,
              letterSpacing: -0.017
            }}>Go to Email</Text>
            <View style={{
              width: width * 0.15,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              height: '104%',
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: '#DCC7E1',
              backgroundColor: '#000000',
              //position: 'absolute',
              marginTop: '-8.2%'
              //marginVertical: -1,
            }}><AntDesign name="arrowright" size={30} color="#FFFFFF" /></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            {
              //alignSelf: 'center', 
              width: width * 0.8,
              //height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //bottom: '25%',
              top: '12%',
              right: '2%',
              //top: '10%',
            },
          ]}>
          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderColor: '#FFFFFF',
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            //backgroundColor: '#DCC7E1',
            backgroundColor: '#000000',
            //position: 'relative',
          }}>
            <Text style={{
              //fontWeight: '900',
              fontSize: 18,
              fontFamily: 'BakbakOne-Regular',
              //color: '#000000',
              color: '#FFFFFF',
              alignSelf: 'center',
              justifyContent: 'center',
              //paddingVertical: 10,
              //right: '10%',
              top: '30.3%',
              right: '22%',
              lineHeight: 25,
              letterSpacing: -0.017
            }}>Resend Code</Text>
            <View style={{
              width: width * 0.15,
              borderWidth: 1,
              borderColor: '#FFFFFF',
              height: '104%',
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: '#DCC7E1',
              backgroundColor: '#000000',
              //position: 'absolute',
              marginTop: '-8.2%'
              //marginVertical: -1,
            }}><AntDesign name="arrowright" size={30} color="#FFFFFF" /></View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 0.2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      </View>
    </View>

  );
};
export default SignUpEmail;

