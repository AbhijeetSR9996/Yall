import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {splashStyles} from '../../screens/splashScreen/splashStyles';
import {icons} from '../../../assets/icons/icons';

export const Rectangular = props => {
  const {path, style, name} = props;
  const navigation = useNavigation();
  return (
    <View style={[splashStyles.getStartedButtonMain, {...style}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate(path)}
        style={splashStyles.touchableStarted}>
        <View style={splashStyles.borderView}>
          <Text style={splashStyles.buttonText}>{name}</Text>

          <View style={splashStyles.borderView1}>{icons.rightarrow}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
