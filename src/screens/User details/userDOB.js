import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';

import {userStyles} from './userStyles';
import {CircularButton} from '../../component/Buttons/circular';

const UserDOB = ({navigation}) => {
  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>What is your Date of birth?</Text>

      <View style={userStyles.mainViewDob}>
        <Text style={userStyles.textDOB1}>Month</Text>
        <Text style={userStyles.textDOB2}>Day</Text>
        <Text style={userStyles.textDOB3}>Year</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          top: 160,
          justifyContent: 'space-around',
        }}>
        <TextInput
          style={userStyles.dateInput}
          placeholder="mm"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          maxLength={2}
        />

        <TextInput
          style={userStyles.dateInput}
          placeholder="dd"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          maxLength={2}
        />

        <TextInput
          style={userStyles.yearInput}
          placeholder="yyyy"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <View>
        <CircularButton path="UserEmail" style={{top: 45}} />
      </View>
    </View>
  );
};
export default UserDOB;
