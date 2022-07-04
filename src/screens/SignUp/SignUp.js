import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {icons} from '../../../assets/icons/icons';
import {signupStyles} from './signupStyles';
const SignUp = ({navigation}) => {
  return (
    <View style={signupStyles.container}>
      <View style={signupStyles.backgroundContainer}>
        <Image source={require('../../../assets/images/splashScreen1.png')} />
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
      <View style={signupStyles.signinMainView}>
        <TouchableOpacity style={signupStyles.touchablebuttons}
        onPress={() => navigation.navigate('SignUpMobile')}>
          <View style={signupStyles.borderView}>
            <Text style={signupStyles.loginButtonText}>Sign In</Text>
            <View style={signupStyles.borderView1}>
              <Text style={signupStyles.arrowIcon}>{icons.rightarrow}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={signupStyles.signupMainView}>
        <TouchableOpacity
          style={signupStyles.touchablebuttons}
          onPress={() => navigation.navigate('SignUpMobile')}>
          <View style={signupStyles.borderView}>
            <Text style={signupStyles.loginButtonText}>Sign Up</Text>
            <View style={signupStyles.borderView1}>
              <Text style={signupStyles.arrowIcon}>{icons.rightarrow}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={signupStyles.signEmailMainView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignEmail')}
          style={signupStyles.touchablebuttons}>
          <View style={signupStyles.borderView}>
            <Text style={signupStyles.loginButtonText}>Sign In With Email</Text>
            <View style={signupStyles.borderView1}>
              <Text style={signupStyles.arrowIcon}>{icons.rightarrow}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
