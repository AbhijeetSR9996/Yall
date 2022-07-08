import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Switch,
} from 'react-native';

import {styles} from './styles';
import {imageicon, icons} from '../../../assets/icons/icons';
import {Rectangular} from '../../component/Buttons/rectangular';

const Gender4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Gender3')}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <Text style={styles.gender1Text}>Going out</Text>
      <View style={{flexDirection: 'row', marginBottom: 10, top: 20}}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Soccer
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Running
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Cricket
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 60,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Kabbadi
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10, top: 20}}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 10,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Football
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            BasketBall
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            VolleyBall
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10, top: 20}}>
        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Table Tennis
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            top: -20,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Others (please state)
          </Text>
        </View>
      </View>

      <Rectangular
        path="AddPhoto"
        style={{
          width: 10,
          position: 'absolute',
          alignSelf: 'center',
          top: '90%',
        }}
        name="Continue [4/4]"
      />
    </View>
  );
};
export default Gender4;
