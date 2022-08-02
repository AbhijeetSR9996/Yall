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

const { height } = Dimensions.get('window');

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
            top: 600,
            left: 25,
            width: '90%',
          }}>
          <TouchableOpacity>
            <Text style={{
              //bottom: 60,
              bottom: 40,
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

        {/* <CircularButton path="MainBottomNavigation" style={{ marginTop: 480 }} /> */}

        <TouchableOpacity onPress={() => navigation.navigate('MainBottomNavigation')}>
          <Text
            style={{
              right: 20,
              alignSelf: 'flex-end',
              marginVertical: height / 1.6,
              position: 'absolute',
              backgroundColor: '#DCC7E1',
              borderRadius: 20,
              top: 100,
            }}>
            {icons.rightcirclearrow}
          </Text>
        </TouchableOpacity>

      </View>
    );
  };
export default MobileCode1;

