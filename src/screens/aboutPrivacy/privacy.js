import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import { signupStyles } from '../SignUp/signupStyles';
import { privacyStyles } from './privacyStyles';
import { imageicon, icons } from '../../../assets/icons/icons';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { height, width } from '../../services/helper';

const AboutPrivacy = ({ navigation }) => {
  return (
    <View style={privacyStyles.container}>
      <Text style={privacyStyles.text}>We care about your privacy</Text>
      <Text style={privacyStyles.aboutPrivacy}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard.
      </Text>
      <Text style={privacyStyles.aboutPrivacy}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </Text>
      <View >
        <TouchableOpacity
          style={{
            marginTop: '85%',
            alignSelf: 'center',
            width: width * 0.8,
            height: height * 0.07,
            borderWidth: 1,
            right: '2%'
          }}
          onPress={() => { navigation.navigate('Gender') }}>
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
              //paddingVertical: 10,
              //paddingVertical: 13,
              top: '30.3%',
              right: '35%',
              //right: '20%',
              lineHeight: 25,
              letterSpacing: -0.017
            }}>Accept</Text>
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
      <View >
        <TouchableOpacity>
          <Text style={{ alignSelf: 'center', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, color: '#000000', marginTop: '7%', marginLeft: '-55%' }}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AboutPrivacy;
