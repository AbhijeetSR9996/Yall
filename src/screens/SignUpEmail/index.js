import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
  TextInput
} from 'react-native';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { ProfileDisplayStyles } from '../../screens/ProfileDisplay/ProfileDisplay.styles';
import { Card } from 'react-native-paper';
import { Rectangular } from '../../component/Buttons/rectangular';
import ImagePicker from 'react-native-image-crop-picker';
import { splashStyles } from '../../screens/splashScreen/splashStyles';
import { icons } from '../../../assets/icons/icons';
import styles from './styles';

const { width, height } = Dimensions.get('window');


const SignUpEmail = ({ navigation }) => {


  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', flexDirection: 'column', alignItems: 'stretch' }}>
      <View style={{ flex: 0.2, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} />
      <View style={{ flex: 0.4, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={{ fontFamily: 'Bakbak One', fontSize: 25, fontWeight: '400', lineHeight: 35, width: 317, color: '#000000', marginLeft: '5%' }}>When sent a 4 digit code to </Text>
        <Text style={{ fontFamily: 'Bakbak One', fontSize: 25, fontWeight: '400', lineHeight: 35, width: 317, color: '#000000', marginLeft: '6%' }}>your mail@12354 </Text>
      </View>
      <View style={{ flex: 1.2, backgroundColor: 'transparent', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextInput
          placeholder="Enter code"
          placeholderTextColor="#AAAAAA"
          style={{
            borderBottomWidth: 1.5,
            width: 314,
            left: 23,
            fontWeight: '400',
            color: '#000000',
            fontSize: 18,
            letterSpacing: -0.017
          }}></TextInput>
      </View>
      <View style={{ flex: 1.3, backgroundColor: 'transparent', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}>
        <TouchableOpacity
          style={[
            {
              alignSelf: 'center', width: width * 0.8,
              height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //bottom: '25%',
            },
          ]}
          onPress={()=>{navigation.navigate('MainBottomNavigation')}}>
            
          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#DCC7E1',
            position: 'relative',
          }}>
            <Text style={{
              fontWeight: '700',
              fontSize: 18,
              fontFamily: 'Bakbak one-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              right: '10%',
            }}>Continue</Text>
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
          style={[
            {
              alignSelf: 'center', width: width * 0.8,
              height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //bottom: '25%',
            },
          ]}>
          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#DCC7E1',
            position: 'relative',
          }}>
            <Text style={{
              fontWeight: '700',
              fontSize: 18,
              fontFamily: 'Bakbak one-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              right: '10%',
            }}>Go to Email</Text>
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
          style={[
            {
              alignSelf: 'center', width: width * 0.8,
              height: height * 0.07,
              borderWidth: 1,
              //bottom: '20%',
              //bottom: '25%',
            },
          ]}>
          <View style={{
            left: 10,
            top: 8,
            width: width * 0.8,
            borderWidth: 1,
            borderRightWidth: 0,
            height: height * 0.07,
            //alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#DCC7E1',
            position: 'relative',
          }}>
            <Text style={{
              fontWeight: '700',
              fontSize: 18,
              fontFamily: 'Bakbak one-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              right: '10%',
            }}>Resend Code</Text>
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
      <View style={{ flex: 0.2, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}></View>
    </View>

  );
};
export default SignUpEmail;

