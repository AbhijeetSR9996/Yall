import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {signupStyles} from './signupStyles';
import {icons} from '../../../assets/icons/icons';
const SignInMobile = ({navigation}) => {
  return (
    <View style={signupStyles.container}>
      <View style={signupStyles.backgroundContainer}>
        <Image
          source={require('../../../assets/images/splashScreen1.png')}
          resizeMode="cover"
        />
      </View>
      {/* <View>
        <Image
          style={signupStyles.backgroundsecondContainer}
          source={require('../../../assets/images/screen1.png')}
        />
      </View> */}
      <View style={signupStyles.backgroundContainer}>
        <Image
          source={require('../../../assets/images/main-background.png')}
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          style={signupStyles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>

      <Text style={[signupStyles.headline, {top: '8%'}]}>
        By clicking “Log in”, you agree with our Terms. learn how we process
        your data in our privacy policy and cokkies policy.
      </Text>

      <View>
        <Image
          style={signupStyles.backgroundthirdContainer}
          source={require('../../../assets/images/screen2.png')}
        />
      </View>
      <View style={{alignItems: 'center', top: '8%'}}>
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
              position: 'relative',
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 17,
                fontWeight: '500',
                margin: 7,
                color: 'black',
                color: '#000000',
              }}>
              Sign In With Mobile Number
            </Text>
            <View
              style={{
                marginVertical: -1,
                width: '20%',
                borderWidth: 1,
                height: '105%',
                backgroundColor: '#DCC7E1',
                position: 'absolute',
                right: '0%',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                }}>
                {icons.rightarrow}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignInMobile;