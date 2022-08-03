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
import { imageicon, icons } from '../../../assets/icons/icons';
import { CircularButton } from '../../component/Buttons/circular';
import { height, width } from '../../services/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserJob = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.text}>Whats your job title?</Text>

      <View style={userStyles.textInput}>
        <TextInput
          placeholder="Job title"
          placeholderTextColor="#AAAAAA"
          style={userStyles.textInput1}></TextInput>
      </View>

      <View style={{ flexDirection: 'row', top: 150, left: 21 }}>
        <Text style={{ top: 5, color: '#AAAAAA' }}>Visit on profile</Text>
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
          <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('AboutPrivacy')}>
            <View
              style={{

                justifyContent: 'flex-end',
                marginTop: '100%',
                borderRadius: 50,
                //width: width * .105
                width: 40
              }}>
              {/* {icons.rightcirclearrow} */}
              <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
            </View>
          </TouchableOpacity>
        </View>
        {/* <CircularButton path="AboutPrivacy" style={{top: 45}} /> */}
      </View>
    </View>
  );
};
export default UserJob;
