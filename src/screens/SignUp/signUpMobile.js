import React from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { signupStyles } from './signupStyles';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { icons } from '../../../assets/icons/icons';
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
              top: '10%'
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: 'transparent', flexDirection: 'column' }}>
          <View style={{
            flex: 0.7, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column'
          }}>
            <Text style={[signupStyles.headline, { top: '40%' }]}>
              By clicking “Log in”, you agree with our Terms. learn how we process
              your data in our privacy policy and cokkies policy.
            </Text>
          </View>
          <View style={{
            flex: 2, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <Rectangular path="SignedUpMobile" name="Sign Up With Mobile Number" style={{ top: '15%' }} />
          </View>
        </View>

      </ImageBackground>
    </View>


  );
};
export default SignUpMobile;
