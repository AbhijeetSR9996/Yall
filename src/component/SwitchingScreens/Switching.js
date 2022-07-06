import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions
  } from 'react-native';

import {icons, imageicon} from '../../../assets/icons/icons';

const {width, height} = Dimensions.get('window');


const Switching = () => {
  const navigation = useNavigation();
  return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('VerificationCode')}
          >
          <Text
            style={{
              //left: 347,
              right:20,
              //top: 570,
              //top:430,
              //marginHorizontal:-5,
              //marginHorizontal:width/2,
              alignSelf:'flex-end',
              marginVertical:height/1.6,
              position: 'absolute',
              backgroundColor: '#DCC7E1',
              borderRadius: 20,
            }}>
            {icons.rightcirclearrow}
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Switching;
