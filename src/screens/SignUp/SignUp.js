import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { icons } from '../../../assets/icons/icons';
import { signupStyles } from './signupStyles';


const SignUp = ({ navigation }) => {
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

        <View style={{ flex: 0.4, alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
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
            flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'flex-end', flexDirection: 'column'
          }}>
            <Text style={[signupStyles.headline]}>
              By clicking “Log in”, you agree with our Terms. learn how we process
              your data in our privacy policy and cokkies policy.
            </Text>
          </View>
          <View style={{
            flex: 2.4, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <Rectangular path="SignInMobile" name="Sign In" style={{ bottom: '4%' }} />
            <Rectangular path="SignUpMobile" name="Sign Up" style={{ bottom: '12%' }} />
            <Rectangular path="SignEmail" name="Sign In With Email" style={{ bottom: '20%' }} />
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};
export default SignUp;


