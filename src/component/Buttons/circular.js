import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';

const { height } = Dimensions.get('window');

export const CircularButton = ({ path, style }) => {
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
            top: 30,
            ...style,
          }}>
          {icons.rightcirclearrow}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
