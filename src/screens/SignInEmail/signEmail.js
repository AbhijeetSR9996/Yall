import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons, imageicon} from '../../../assets/icons/icons';
import {emailStyles} from '../SignInEmail/emailStyles';
const SignEmail = ({navigation}) => {
  return (
    <View style={emailStyles.container}>
      <View style={emailStyles.backgroundContainer}>
        <Image
          source={require('../../../assets/images/splashScreen1.png')}
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          style={emailStyles.backgroundsecondContainer}
          source={require('../../../assets/images/screen1.png')}
        />
      </View>
      <View>
        <Image
          style={emailStyles.backgroundthirdContainer}
          source={require('../../../assets/images/screen2.png')}
        />
      </View>
      <View style={emailStyles.mainCardView}>
        <View>
          <Image style={emailStyles.logo} source={imageicon.yallLogo} />
          <Text style={emailStyles.accountHeadText}>Choose an account</Text>
          <Text style={emailStyles.headBelowText}>To continue yall</Text>
          <TouchableOpacity
            style={emailStyles.Touchablemail1}
            onPress={() => navigation.navigate('MainBottomNavigation')}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={imageicon.profile2}
                style={{margin: 15, height: 50, width: 50}}
              />
              <View>
                <Text style={emailStyles.userNameText}>Sahil Saifi</Text>
                <Text style={emailStyles.userEmail}>sahil@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={emailStyles.Touchablemail2}
            onPress={() => navigation.navigate('MainBottomNavigation')}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={imageicon.profile3}
                style={{margin: 15, height: 50, width: 50}}
              />
              <View>
                <Text style={emailStyles.userNameText}>Sahil Saifi</Text>
                <Text style={emailStyles.userEmail}>sahil@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={emailStyles.Touchablemail3}
            onPress={() => navigation.navigate('MainBottomNavigation')}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imageicon.profile} style={{margin: 15}} />
              <View>
                <Text style={emailStyles.userNameText}>Sahil Saifi</Text>
                <Text style={emailStyles.userEmail}>sahil@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={emailStyles.Touchablemail4}>
            <Text style={{left: 20}}>{icons.user}</Text>
            <Text style={emailStyles.AddText}>Add another account</Text>
          </TouchableOpacity>
          <Text style={emailStyles.paragraph}>
            By clicking “Log in”, you agree with our Terms. learn how we process
            your data in our privacy policy and cokkies policy.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignEmail;
