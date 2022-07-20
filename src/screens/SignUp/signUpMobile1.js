import React from 'react';
import {View, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import {signupStyles} from './signupStyles';
import {Dropdown} from 'react-native-element-dropdown';
import {CircularButton} from '../../component/Buttons/circular';
import {icons} from '../../../assets/icons/icons';
const {height} = Dimensions.get('window');

const data = [
  {label: 'IN +91', value: '1'},
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
          placeholder="IN +91"
          placeholderStyle={signupStyles.placeholderStyle}
          selectedTextStyle={signupStyles.selectedTextStyle}
          data={data}
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />

        <TextInput
          placeholder="Enter Number"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          maxLength={10}
          style={{
            borderBottomWidth: 1.5,
            width: 165,
            left: 74,
            letterSpacing: 3,
            fontSize: 15,
            color: '#000000',
            height: 40,
            top: -10,
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
          color: '#AAAAAA',
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
          color: '#AAAAAA',
        }}>
        account.
      </Text>
      {/* <CircularButton path="VerificationCode" /> */}
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('VerificationCode')}>
        <Text
          style={{
            right: 20,
            alignSelf: 'flex-end',
            marginVertical: height / 1.6,
            position: 'absolute',
            backgroundColor: '#DCC7E1',
            borderRadius: 20,
            top: 30,
          }}>
          {icons.rightcirclearrow}
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default SignUpMobile1;
