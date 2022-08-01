import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { signupStyles } from './signupStyles';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';

const SignUpMobile = ({ navigation }) => {
  return (

    <View style={{
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center'
    }}>
      <ImageBackground
        source={require('../../../assets/images/core/background-signup.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'center' }}>
          <Image
            resizeMode="stretch"
            source={require('../../../assets/images/logo.png')}
            style={{
              alignSelf: 'center',
              display: 'flex',
              top: '34%'
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: 'transparent', flexDirection: 'column' }}>
          <View style={{
            flex: 0.7, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column'
          }}>
            {/* <Text style={[signupStyles.headline, { top: '40%' }]}>
              By clicking “Log in”, you agree with our Terms. learn how we process
              your data in our privacy policy and cokkies policy.
            </Text> */}
            <Text style={[signupStyles.headline, { top: '40%' }]}>By clicking “Log in”, you agree with our Terms. Learn, how we process
              your data in our privacy policy and cokkies policy.</Text>
          </View>
          <View style={{
            flex: 2, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            {/* <Rectangular path="SignedUpMobile" name="Sign Up With Mobile Number" style={{ top: '15%', marginLeft: '0%' }} /> */}
            <TouchableOpacity
              style={{
                top: '13%',
                alignSelf: 'center',
                width: width * 0.8,
                height: height * 0.07,
                borderWidth: 1,
                //alignSelf: 'center',
                right: '2%'
              }}
              onPress={() => { navigation.navigate('SignedUpMobile') }}>
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
                position: 'relative',
              }}>
                <Text style={{
                  //fontWeight: '400',
                  //fontWeight: '900',
                  fontSize: 17,
                  //fontFamily: 'Bakbak One',
                  fontFamily: 'BakbakOne-Regular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  //paddingVertical: 10,
                  //paddingVertical: 13,
                  top: '30.3%',
                  //right: '10%',
                  right: '9.5%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Sign Up with Mobile Number</Text>
                <View style={{
                  width: width * 0.15,
                  borderWidth: 1,
                  height: '104%',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#DCC7E1',
                  position: 'absolute',
                  marginVertical: -1,
                }}>{icons.rightarrow}</View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>


  );
};
export default SignUpMobile;
