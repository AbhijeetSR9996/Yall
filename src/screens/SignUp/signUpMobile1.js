import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import {signupStyles} from './signupStyles';
import {Dropdown} from 'react-native-element-dropdown';
import {icons, imageicon} from '../../../assets/icons/icons';
const {width, height} = Dimensions.get('window');
const data = [
  {label: '+91', value: '1'},
  {label: '+92', value: '2'},
  {label: '+11', value: '3'},
  {label: '+12', value: '4'},
];
const SignUpMobile1 = ({navigation}) => {
  const [value, setValue] = React.useState(null);
  return (
    <View style={signupStyles.container}>
      <View style={signupStyles.mainView}>
        <Text style={signupStyles.text}>Whats your phone number?</Text>
      </View>
      <View style={signupStyles.phoneNumber}>
        <Dropdown
          style={signupStyles.dropdown}
          placeholder="+91"
          placeholderStyle={signupStyles.placeholderStyle}
          selectedTextStyle={signupStyles.selectedTextStyle}
          data={data}
          // maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />

        <TextInput
          placeholder="Enter Number"
          //placeholderStyle={signupStyles.placeholderStyle}
          placeholderTextColor="#000000"
          keyboardType="numeric"
          style={{
            borderBottomWidth: 1.5,
            width: 165,
            left: 74,
            letterSpacing: 3,
            fontSize: 15,
            // textAlign:'center',
            color: '#000000',
          }}></TextInput>
      </View>
      <Text
        style={{
          width: 314,
          left: 25,
          top: 130,
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: 15,
          display: 'flex',
          alignItems: 'center',
          color: '#AAAAAA'
        }}>
        Please enter your valid phone number. We will send you 4-digital code to
        verify your
      </Text>
      <Text
        style={{
          width: 314,
          left: 25,
          top: 130,
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: 15,
          display: 'flex',
          alignItems: 'center',
          color: '#AAAAAA'
        }}>
        account.
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('VerificationCode')}>
          <Text
            style={{
              //left: 347,
              right:20,
              //top: 570,
              //top:430,
              //marginHorizontal:-5,
              //marginHorizontal:width/2,
              alignSelf:'flex-end',
              marginVertical:height/1.6,
              position: 'absolute',
              backgroundColor: '#DCC7E1',
              borderRadius: 20,
            }}>
            {icons.rightcirclearrow}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpMobile1;
