import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {images} from '../../constants/styles';
import {splashStyles} from '../splashScreen/splashStyles';
import {icons} from '../../../assets/icons/icons';
const {width, height} = Dimensions.get('window');
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

        <View //style={{top: 290}}
        style={{top: 250}}>
          <Text style={splashStyles.headline}>
            By clicking “Log in”, you agree with our Terms. learn how we process
            your data in our privacy policy and cokkies policy.
          </Text>

          <View style={splashStyles.getStartedButtonMain}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={splashStyles.touchableStarted}>
              <View style={splashStyles.borderView}> 
           
              <Text style={splashStyles.buttonText}>Get Started</Text>
             
              <View style={splashStyles.borderView1}>{icons.rightarrow}</View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
