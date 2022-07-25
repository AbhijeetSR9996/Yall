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


const Match = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: 'transparent' }}>
      <View style={{ flex: 0.1, width: width, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
        <Text style={styles.text}>Matches</Text>
      </View>
      <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%' }} />

      <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '0%', marginBottom: '20%' }}>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#020203',
              backgroundColor: '#DCC7E1',
              height: 20,
              width: 72,
              marginTop:'40%',
              marginRight:'20%'
            }}>
              <Text style={[{
                paddingVertical: '0%',
                letterSpacing: -0.017,
                fontWeight: '600',
                fontSize: 10,
                lineHeight: 12,
                alignSelf: 'center',
                color: '#000000',
                fontFamily: 'Inter',
                width: 324,
                //width: '90%',
                height: 54,
                //alignSelf:'center',
                textAlign: 'center',
                margin:'4%',
              }]}>Your Turn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#020203',
              backgroundColor: '#DCC7E1',
              height: 20,
              width: 72,
              marginTop:'40%',
              marginRight:'20%'
            }}>
              <Text style={[{
                paddingVertical: '0%',
                letterSpacing: -0.017,
                fontWeight: '600',
                fontSize: 10,
                lineHeight: 12,
                alignSelf: 'center',
                color: '#000000',
                fontFamily: 'Inter',
                width: 324,
                //width: '90%',
                height: 54,
                //alignSelf:'center',
                textAlign: 'center',
                margin:'4%',
              }]}>Your Turn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#020203',
              backgroundColor: '#DCC7E1',
              height: 20,
              width: 72,
              marginTop:'40%',
              marginRight:'20%'
            }}>
              <Text style={[{
                paddingVertical: '0%',
                letterSpacing: -0.017,
                fontWeight: '600',
                fontSize: 10,
                lineHeight: 12,
                alignSelf: 'center',
                color: '#000000',
                fontFamily: 'Inter',
                width: 324,
                //width: '90%',
                height: 54,
                //alignSelf:'center',
                textAlign: 'center',
                margin:'4%',
              }]}>Your Turn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

        <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/mask3.png')} style={{marginLeft:'65%', width:80,height:80 }} />
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <Text style={{ color: '#000000', fontWeight: '400', fontSize: 18, fontFamily: 'Bakbak One', lineHeight: 25, letterSpacing: -0.017, left: '25%' }}> Jhone</Text>
            
              <Text style={{ color: '#808080', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '25%', width: '100%' }}> How are you!</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%' }} />
        </View>

      </ScrollView>
    </View>

  );
};
export default Match;