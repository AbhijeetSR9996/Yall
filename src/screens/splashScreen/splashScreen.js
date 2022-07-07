import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {splashStyles} from '../splashScreen/splashStyles';
import {Rectangular} from '../../component/Buttons/rectangular';

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={splashStyles.container}>
      <View>
        <Image
          style={splashStyles.backgroundContainer}
          source={require('../../../assets/images/splashScreen1.png')}
          resizeMode="cover"
        />

        <Image
          style={splashStyles.backgroundContainer}
          resizeMode="cover"
          source={require('../../../assets/images/screen1.png')}
        />

        <Image
          resizeMode="contain"
          style={splashStyles.logo}
          source={require('../../../assets/images/logo.png')}
        />

        <View style={{top: 250}}>
          <Text style={[splashStyles.headline, {top: '145%'}]}>
            By clicking “Log in”, you agree with our Terms. learn how we process
            your data in our privacy policy and cokkies policy.
          </Text>

          <Rectangular path="SignUp" name="Get Started" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
