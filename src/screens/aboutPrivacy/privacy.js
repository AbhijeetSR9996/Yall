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
import {signupStyles} from '../SignUp/signupStyles';
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
          style={[
            signupStyles.touchablebuttons,
            {alignSelf: 'center', top: '150%'},
          ]}
          onPress={() => navigation.navigate('Gender')}>
          <View style={signupStyles.borderView}>
            <Text style={[signupStyles.loginButtonText, {textAlign: 'center'}]}>
              Accept
            </Text>
            <View style={signupStyles.borderView1}>
              <Text style={signupStyles.arrowIcon}>{icons.rightarrow}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={[
            signupStyles.touchablebuttons,
            {alignSelf: 'center', top: '90%'},
          ]}>
          <View style={signupStyles.borderView}>
            <Text style={[signupStyles.loginButtonText, {textAlign: 'center'}]}>
              Decline
            </Text>
            <View style={signupStyles.borderView1}>
              <Text style={signupStyles.arrowIcon}>{icons.rightarrow}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AboutPrivacy;
