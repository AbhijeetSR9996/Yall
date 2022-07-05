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
import {icons, imageicon} from '../../../assets/icons/icons';
import {Directions} from 'react-native-gesture-handler';
import iconButton from 'react-native-vector-icons/dist/lib/icon-button';

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
        <TextInput style={userStyles.dateInput} placeholder="mm" keyboardType='numeric'/>

        <TextInput style={userStyles.dateInput} placeholder="dd" keyboardType='numeric'/>

        <TextInput style={userStyles.yearInput} placeholder="yyyy" keyboardType='numeric'/>
      </View>
<View>
      <TouchableOpacity onPress={() => navigation.navigate('UserEmail')}>
        <Text style={userStyles.DobarrowIcon}>{icons.rightcirclearrow}</Text> 
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserDOB;
