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

const UserEmail = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>Whats your Email ID?</Text>

      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          style={userStyles.textInput1}></TextInput>
      </View>

      <View style={{flexDirection: 'row', top: 150, left: 21}}>
        <Text style={{top: 5, color: '#AAAAAA'}}>Visit on profile</Text>
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
        <CircularButton path="UserGender" style={{top: 45}} />
      </View>
    </View>
  );
};
export default UserEmail;
