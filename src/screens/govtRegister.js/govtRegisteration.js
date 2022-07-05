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
import {Card} from 'react-native-paper';
import {govtStyles} from './govtStyles';
import {imageicon, icons} from '../../../assets/icons/icons';

const GovtRegisterID = ({navigation}) => {
  return (
    <View style={govtStyles.container}>
      <Text style={govtStyles.text}>Govt. Register ID. </Text>
      <Text style={govtStyles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </Text>
      <Card style={govtStyles.borderBox}>
        <View style={{flexDirection: 'row'}}>
          <View style={govtStyles.insideBox}>
            <Text style={govtStyles.idcardIcon}>{icons.idcard}</Text>
          </View>
          <View
            style={govtStyles.textMain}>
            <Text style={govtStyles.textIDCard}>Driver’s License </Text>
            <Text style={govtStyles.textCard}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={govtStyles.moveRight}>{icons.right}</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <Card style={govtStyles.borderBox} 
        onPress={() => navigation.navigate('UserName')}>
        <View style={{flexDirection: 'row'}}>
          <View style={govtStyles.insideBox}>
            <Text style={govtStyles.idcardIcon}>{icons.idcard}</Text>
          </View>
          <View
            style={govtStyles.textMain}>
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

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('UserName')}>
        <Text  style={govtStyles.govtPageArrowIcon}>{icons.rightcirclearrow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GovtRegisterID;
