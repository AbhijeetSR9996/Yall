import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {icons, imageicon} from '../../../assets/icons/icons';

const {width, height} = Dimensions.get('window');

export const CircularButton = ({path}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(path)}>
        <Text
          style={{
            right: 20,
            alignSelf: 'flex-end',
            marginVertical: height / 1.6,
            position: 'absolute',
            backgroundColor: '#DCC7E1',
            borderRadius: 20,
            top: 50,
          }}>
          {icons.rightcirclearrow}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
