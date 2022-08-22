import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { icons } from '../../../assets/icons/icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';


const MatchProfile = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-end', marginTop: '20%' }}>
          <Text style={styles.text}>Sam</Text>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
          <Image
            source={require('../../../assets/images/matchpic.png')}
            style={styles.img2}
          />
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
          <TextInput
            placeholder="Add a comment"
            placeholderTextColor="lightgrey"
            style={styles.textInput1}>
          </TextInput>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '15%' }}>
          <TouchableOpacity
            style={{
              width: width * 0.8,
              //height: height * 0.07,
              borderWidth: 1,
              right: '2%'
            }}
            onPress={() => navigation.navigate('Match')}>
            <View style={{
              left: 10,
              top: 8,
              width: width * 0.8,
              borderWidth: 1,
              borderRightWidth: 0,
              height: height * 0.07,
              alignSelf: 'center',
              backgroundColor: '#DCC7E1',
              position: 'relative',
            }}>
              <Text style={{
                //fontWeight: '900',
                fontSize: 18,
                fontFamily: 'BakbakOne-Regular',
                color: '#000000',
                alignSelf: 'center',
                justifyContent: 'center',
                //paddingVertical: 10,
                top: '30.3%',
                right: '30%',
                //right: '30%',
                lineHeight: 25,
                letterSpacing: -0.017
              }}>Send Like</Text>
              <View style={{
                width: width * 0.15,
                borderWidth: 1,
                height: '104%',
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DCC7E1',
                position: 'absolute',
                marginVertical: -1,
              }}>{icons.rightarrow}</View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MainBottomNavigation')}>
            <Text style={{ left: '-28%', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, color: '#000000', marginTop: '5%' }}>Cancel</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>

  );
};
export default MatchProfile;