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
import {imageicon, icons} from '../../../assets/icons/icons';

const UserJob = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>Whats your job title?</Text>

      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Job title"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>

      <View style={{flexDirection: 'row', top: 150, left: 21}}>
        <Text style={{top: 5,color:'#000000'}}>Visit on profile</Text>
        <Switch
          style={{left: 10}}
          trackColor={{false: '#767577', true: '#008000'}}
          thumbColor={isEnabled ? '#008000' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('AboutPrivacy')}>
        <Text
          style={userStyles.useremailScreenArrowIcon} >
         {icons.rightcirclearrow}</Text>
     
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserJob;
