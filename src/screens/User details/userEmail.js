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

import { userStyles } from './userStyles';
import { CircularButton } from '../../component/Buttons/circular';
import { height, width } from '../../services/helper';
import { icons } from '../../../assets/icons/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserEmail = ({ navigation }) => {
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

      <View style={{ flexDirection: 'row', top: 150, left: 21 }}>
        <Text style={{ top: 5, color: '#AAAAAA' }}>Visible on profile</Text>
        <Switch
          style={{ left: 10 }}
          trackColor={{ false: '#767577', true: '#008000' }}
          thumbColor={isEnabled ? '#008000' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>

        <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('UserGender')}>
            <View
              style={{

                justifyContent: 'flex-end',
                marginTop: '100%',
                borderRadius: 50,

                width: 40
              }}>

              <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};
export default UserEmail;
