import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');


const MatchProfile = ({ navigation }) => {

  return (
    // <KeyboardAvoidingView style={{flex:1}}>
    <View style={{ flex: 1 }}> 
      <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
        <Text style={styles.text}>Sam</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../../../assets/images/matchpic.png')}
          style={styles.img2}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder="Add a comment"
          placeholderTextColor="lightgrey"
          style={styles.textInput1}>
        </TextInput>
      </View>
      <View style={{ flex: 2, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          style={{
            width: width * 0.8,
            height: height * 0.07,
            borderWidth: 1,
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
              fontWeight: '700',
              fontSize: 18,
              fontFamily: 'Bakbak one-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              right: '10%',
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
        <TouchableOpacity
          style={{
            width: width * 0.8,
            height: height * 0.07,
            borderWidth: 1,
          }}>
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
          }}
            onPress={() => navigation.navigate('ProfileDisplay')}>
            <Text style={{
              fontWeight: '700',
              fontSize: 18,
              fontFamily: 'Bakbak one-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              right: '10%',
            }}>Cancel</Text>
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
      </View>
    {/* </KeyboardAvoidingView> */}

    </View>
    
  );
};
export default MatchProfile;