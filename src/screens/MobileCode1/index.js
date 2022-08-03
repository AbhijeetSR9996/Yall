import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CircularButton } from '../../component/Buttons/circular';
import { VerifyingCode } from '../../component/VerifyingCode/index';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CELL_COUNT = 4;

const MobileCode1
  = ({ navigation }) => {

    return (
      <View style={{ flex: 1 }}>

        <VerifyingCode path="SignedInMobile" />

        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            //top: 600,
            top: '143%',
            left: 25,
            width: '90%',
          }}>
          <TouchableOpacity>
            <Text style={{
              //marginTop: '45%',
              //bottom: 30,
              //top: '50%',
              color: '#6E3E89',
              fontFamily: 'Inter',
              //fontWeight: '400',
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
            }}>Didn't get a code?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('MainBottomNavigation')}>
            <View
              style={{
                //backgroundColor: '#DCC7E1',
                justifyContent: 'flex-end',
                marginTop: '100%',
                borderRadius: 50,
                width: 40
              }}>
              {/* {icons.rightcirclearrow} */}
              <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
            </View>
          </TouchableOpacity>
        </View>

        {/* <CircularButton path="MainBottomNavigation" style={{ marginTop: 480 }} /> */}

        {/* <TouchableOpacity onPress={() => navigation.navigate('MainBottomNavigation')}>
          <Text
            style={{
              right: 20,
              alignSelf: 'flex-end',
              marginVertical: height / 1.6,
              position: 'absolute',
              backgroundColor: '#DCC7E1',
              borderRadius: 20,
              top: 110,
            }}>
            {icons.rightcirclearrow}
          </Text>
        </TouchableOpacity> */}

      </View>
    );
  };
export default MobileCode1;

