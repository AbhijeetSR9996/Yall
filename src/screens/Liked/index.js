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


const Liked = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: 'transparent' }}>
      <View style={{ flex: 0.2, width: width, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
        <Text style={[styles.text, { marginTop: '10%' }]}>Likes You</Text>
      </View>
      <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>
        <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 522, marginTop: '0%', borderRadius: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
          <View style={{ backgroundColor: 'transparent', flex: 0.3, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <TouchableOpacity style={{
              alignItems: 'center',
              backgroundColor: '#FF0000',
              borderWidth: 1.5,
              borderColor: '#000000',
              backgroundColor: '#DCC7E1',
              width: 157,
              height: 40,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              marginLeft: '7%'
            }}>
              <Text style={{
                fontFamily: 'Inter',
                fontSize: 15,
                color: '#000000',
                top: '25%',

                letterSpacing: -0.017,
                lineHeight: 18
              }}> Liked your photo</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Sam</Text>
          </View>
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <Image
              source={require('../../../assets/images/matchpic.png')}
              style={{
                width: '100%',
                height: '100%',
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20
              }}
            />
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 279, marginTop: '5%', borderRadius: 20, alignSelf: 'center' }}>

          <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <Text style={[styles.text, { fontSize: 15 }]}>Liked your photo</Text>
              <Image source={require('../../../assets/images/horizontalinegrey.png')} style={{ width: '92%', height: '1%', marginLeft: '7%' }} />
              <Text style={[styles.text, { fontSize: 22 }]}>Sam</Text>
            </View>
            <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
              <Image
                source={require('../../../assets/images/mask1.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                }}
              />
            </View>
          </View>

          <View style={{ flex: 0.1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center' }}></View>

          <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <Text style={[styles.text, { fontSize: 15 }]}>Liked your photo</Text>
              <Image source={require('../../../assets/images/horizontalinegrey.png')} style={{ width: '92%', height: '1%', marginLeft: '7%' }} />
              <Text style={[styles.text, { fontSize: 22 }]}>Sam</Text>
            </View>
            <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
              <Image
                source={require('../../../assets/images/mask2.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 279, marginTop: '5%', marginBottom: '5%', borderRadius: 20, alignSelf: 'center' }}>

          <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#FF0000',
                borderWidth: 1.5,
                borderColor: '#000000',
                backgroundColor: '#E0CCE5',
                width: 130,
                height: 36,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                marginLeft: '8%'
              }}>
                <Text style={{
                  fontSize: 14,
                  color: '#000000',
                  top: '20%',
                  fontFamily: 'Inter',

                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Liked your photo</Text>
              </TouchableOpacity>
              <Text style={[styles.text, { fontSize: 22 }]}>Sam</Text>
            </View>
            <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
              <Image
                source={require('../../../assets/images/mask1.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                }}
              />
            </View>
          </View>

          <View style={{ flex: 0.1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center' }}></View>

          <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderRadius: 20, alignSelf: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#FF0000',
                borderWidth: 1.5,
                borderColor: '#000000',
                backgroundColor: '#E0CCE5',
                width: 130,
                height: 36,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                marginLeft: '8%'
              }}>
                <Text style={{
                  fontFamily: 'Inter',
                  fontSize: 14,

                  letterSpacing: -0.017,
                  lineHeight: 18,
                  color: '#000000',
                  top: '20%'
                }}> Liked your photo</Text>
              </TouchableOpacity>
              <Text style={[styles.text, { fontSize: 22 }]}>Sam</Text>
            </View>
            <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
              <Image
                source={require('../../../assets/images/mask2.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                }}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    </View>

  );
};
export default Liked;