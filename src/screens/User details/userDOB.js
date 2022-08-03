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

const UserDOB = ({ navigation }) => {
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

      {/* <CircularButton path="UserEmail" style={{ top: 45 }} /> */}


      <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('UserEmail')}>
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
    </View>
  );
};
export default UserDOB;
