import React from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { signupStyles } from './signupStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { CircularButton } from '../../component/Buttons/circular';
import { icons } from '../../../assets/icons/icons';
import MobileNumber from '../../component/MobileNumber/index';

const { height } = Dimensions.get('window');

const data = [
  { label: 'IN +91', value: '1' },
  { label: '+92', value: '2' },
  { label: '+11', value: '3' },
  { label: '+12', value: '4' },
];

const SignedUpMobile = ({ navigation }) => {
  const [value, setValue] = React.useState(null);
  return (
    <View style={{ flex: 1 }}>

      <MobileNumber />

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('MobileCode2')}>
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
export default SignedUpMobile;
