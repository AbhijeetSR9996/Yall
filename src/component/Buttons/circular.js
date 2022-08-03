import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';

export const CircularButton = ({ path, style }) => {
  const navigation = useNavigation();
  return (
    // <View>
    //   <TouchableOpacity onPress={() => navigation.navigate(path)}>
    //     <Text
    //       style={{
    //         right: 20,
    //         alignSelf: 'flex-end',
    //         marginVertical: height / 1.6,
    //         position: 'absolute',
    //         backgroundColor: '#DCC7E1',
    //         borderRadius: 20,
    //         top: 30,
    //         ...style,
    //       }}>
    //       {icons.rightcirclearrow}
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{ display: 'flex', marginTop: '120%', marginRight: '10%', alignItems: 'flex-end' }}>
      <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate(path)}>
        <Text
          style={{
            backgroundColor: '#DCC7E1',
            justifyContent: 'flex-end',
            marginTop: '100%',
            borderRadius: 20,
            width: width * .110
          }}>
          {icons.rightcirclearrow}
        </Text>
      </TouchableOpacity>

    </View>
  );
};
