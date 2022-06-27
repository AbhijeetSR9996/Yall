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

import {privacyStyles} from './privacyStyles';
import {imageicon, icons} from '../../../assets/icons/icons';

const AboutPrivacy = ({navigation}) => {
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
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gender')}
          style={{
            width: '80%',
            height: '24%',
            borderWidth: 1,
            borderRadius: 50,
            borderColor: '#000000',
            alignSelf: 'center',
            top: 400,
            backgroundColor: '#DCC7E1',

            elevation: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontFamily: 'Bakbak one-Regular',
              fontSize: 18,

              marginTop: 10,

              textAlign: 'center',

              color: '#000000',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserJob')}
          style={{
            width: '80%',
            height: '24%',
            // borderWidth: 1,
            borderRadius: 50,
            // borderColor: '#000000',
            alignSelf: 'center',
            top: 280,
            // backgroundColor: '#DCC7E1',

            // elevation: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontFamily: 'Bakbak one-Regular',
              fontSize: 18,

              marginTop: 10,

              textAlign: 'center',

              color: '#000000',
            }}>
            Decline
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};
export default AboutPrivacy;
