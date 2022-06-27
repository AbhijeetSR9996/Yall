import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../../constants/styles';
import {signupStyles} from './signupStyles';
import {icons} from '../../../assets/icons/icons';
const SignUpMobile = ({navigation}) => {
  return (
    <View style={signupStyles.container}>
      <View style={signupStyles.backgroundContainer}>
        <Image
          source={require('../../../assets/images/splashScreen1.png')}
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          style={signupStyles.backgroundsecondContainer}
          source={require('../../../assets/images/screen1.png')}
        />
      </View>
      <View>
        <Image
          style={signupStyles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>

      <Text style={signupStyles.headline}>
        By clicking “Log in”, you agree with our Terms. learn how we process
        your data in our privacy policy and cokkies policy.
      </Text>

     
      <View>
        <Image
          style={signupStyles.backgroundthirdContainer}
          source={require('../../../assets/images/screen2.png')}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignUpMobile1')}
          style={{
            width: '80%',
            height: '24%',
            borderWidth: 1,
            borderColor: '#000000',
          }}>
          <View
            style={{
              left: 10,
              top: 8,
              width: '100%',
              borderWidth: 1,
              borderRightWidth: 0,
              height: '110%',
              alignSelf: 'center',
              backgroundColor: '#DCC7E1',
            }}>
            <Text
              style={{
                fontWeight: '400',

                fontSize: 20,
                fontWeight: '500',

                margin: 10,
                color: 'black',
                color: '#000000',
              }}>
              Sign Up with mobile number
            </Text>
            <View
              style={{
                left: 135,
                top: -47.5,
                width: '20%',
                borderWidth: 1,
                height: '103%',
                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
              }}>
              <Text style={{textAlign: 'center', paddingTop: 10}}>
                {icons.rightarrow}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpMobile;
