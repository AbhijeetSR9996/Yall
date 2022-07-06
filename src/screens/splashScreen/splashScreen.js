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
import {Rectangular} from '../../component/Buttons/rectangular';

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
          <Text style={[splashStyles.headline, {top: '145%'}]}>
            By clicking “Log in”, you agree with our Terms. learn how we process
            your data in our privacy policy and cokkies policy.
          </Text>

          <Rectangular path="SignUp" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
