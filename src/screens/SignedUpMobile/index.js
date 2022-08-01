import React from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { signupStyles } from './signupStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { CircularButton } from '../../component/Buttons/circular';
import { icons } from '../../../assets/icons/icons';
import MobileNumber from '../../component/MobileNumber/index';
import { height, width } from '../../services/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';


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

      {/* <View style={{ flex: 1, marginTop: '90%' }}>
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
          </Text>
          {icons.rightcirclearrow}
          <View style={{ alignItems: "flex-end", justifyContent: 'flex-end' }}><AntDesign name="rightcircleo" size={40} color="black" /></View>
        </TouchableOpacity>
      </View> */}
      <View>
        {/* <Pressable onPress={() => navigation.navigate('MobileCode1')}>
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
                </Pressable> */}

        {/* <CircularButton path="MobileCode1" /> */}

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
