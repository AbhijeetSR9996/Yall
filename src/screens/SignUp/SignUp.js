import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { icons } from '../../../assets/icons/icons';
import { signupStyles } from './signupStyles';
import { height, width } from '../../services/helper';

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
              top: '70%'
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: 'transparent', flexDirection: 'column' }}>
          <View style={{
            flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'flex-end', flexDirection: 'column'
          }}>

            <Text style={[signupStyles.headline, { top: '55%', }]}>By clicking “Log in”, you agree with our Terms. Learn, how we process
              your data in our privacy policy and cokkies policy.</Text>
          </View>
          <View style={{
            flex: 2.4, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>



            <TouchableOpacity
              style={{
                bottom: '-10%',

                width: width * 0.8,
                height: height * 0.07,
                borderWidth: 1,
                right: '2%'
              }}
              onPress={() => { navigation.navigate('SignInMobile') }}>
              <View style={{
                left: 10,
                top: 8,
                width: width * 0.8,
                borderWidth: 1,
                borderRightWidth: 0,
                height: height * 0.07,

                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
                position: 'relative',
              }}>
                <Text style={{

                  fontSize: 17,

                  fontFamily: 'BakbakOne-Regular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',

                  top: '30.3%',

                  right: '30%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Sign In </Text>
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
            <TouchableOpacity
              style={{
                bottom: '-1%',

                width: width * 0.8,
                height: height * 0.07,
                borderWidth: 1,
                right: '2%'
              }}
              onPress={() => { navigation.navigate('SignUpMobile') }}>
              <View style={{
                left: 10,
                top: 8,
                width: width * 0.8,
                borderWidth: 1,
                borderRightWidth: 0,
                height: height * 0.07,

                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
                position: 'relative',
              }}>
                <Text style={{

                  fontSize: 17,

                  fontFamily: 'BakbakOne-Regular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',

                  top: '30.3%',

                  right: '30%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Sign Up</Text>
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
            <TouchableOpacity
              style={{
                bottom: '8%',

                width: width * 0.8,
                height: height * 0.07,
                borderWidth: 1,
                right: '2%'
              }}
              onPress={() => { navigation.navigate('SignEmail') }}>
              <View style={{
                left: 10,
                top: 8,
                width: width * 0.8,
                borderWidth: 1,
                borderRightWidth: 0,
                height: height * 0.07,

                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
                position: 'relative',
              }}>
                <Text style={{

                  fontSize: 17,

                  fontFamily: 'BakbakOne-Regular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',

                  top: '30.3%',

                  right: '16%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Sign In with Email</Text>
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
export default SignUp;


