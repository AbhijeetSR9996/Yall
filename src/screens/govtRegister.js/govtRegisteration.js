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
import { Card } from 'react-native-paper';
import { govtStyles } from './govtStyles';
import { imageicon, icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';
import { CircularButton } from '../../component/Buttons/circular';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GovtRegisterID = ({ navigation }) => {
  return (
    <View style={govtStyles.container}>
      <Text style={govtStyles.text}>Govt. Register ID. </Text>
      <Text style={govtStyles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </Text>
      <Card style={govtStyles.borderBox}
        onPress={() => navigation.navigate('Upload')}>
        <View style={{ flexDirection: 'row' }}>
          <View style={govtStyles.insideBox}>
            <Text style={govtStyles.idcardIcon}>{icons.idcard}</Text>
          </View>
          <View style={govtStyles.textMain}>
            <Text style={govtStyles.textIDCard}>Driver’s License </Text>

            <Text style={govtStyles.textCard}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
            <TouchableOpacity>
              <Text style={[govtStyles.moveRight, { left: 110, marginTop: -40 }]}>{icons.right}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Card>
      <Card
        style={govtStyles.borderBox}
        onPress={() => navigation.navigate('Upload')}>
        <View style={{ flexDirection: 'row' }}>
          <View style={govtStyles.insideBox}>
            <Text style={govtStyles.idcardIcon}>{icons.idcard}</Text>
          </View>
          <View style={govtStyles.textMain}>
            <Text style={govtStyles.textIDCard}>Aadhaar Card </Text>
            <Text style={govtStyles.textCard}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={govtStyles.moveRight}>{icons.right}</Text>
          </TouchableOpacity>
        </View>
      </Card>

      <View style={{ display: 'flex', marginTop: '78%', marginRight: '10%', alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('Upload')}>
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
  );
};
export default GovtRegisterID;
