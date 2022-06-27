import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,Switch
} from 'react-native';

import {userStyles} from './userStyles';
import {icons, imageicon} from '../../../assets/icons/icons';


const UserName = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={userStyles.container}>
     
      <Text style={userStyles.text}>My Full Name is</Text>
    
      <View style={{flexDirection: 'row', top: 70, left: 22, width: 269}}>
        <Text>Don’t lose access to your accont, verify your email.</Text>
      </View>
      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Enter Name"
          style={userStyles.textInput1}></TextInput>
      </View>
      <Text
        style={{
          top: 130,
          left: 22,
          width: 269,
        }}>
        Don’t lose access to your accont, verify your email.
      </Text>

    
      <View style={{flexDirection:'row', top:150, left:21}}>
        <Text>Only show my initials</Text>
      <Switch
      style={{left:10}}
        trackColor={{ false: "#767577", true: "green" }}
        thumbColor={isEnabled ? "green" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('UserDOB')}>
        <Text
          style={userStyles.nameScreenArrowIcon}>{icons.rightcirclearrow}</Text>
         
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserName;
