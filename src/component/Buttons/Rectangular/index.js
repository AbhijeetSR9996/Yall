import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styles from './styles';
//import { icons } from '../../../assets/icons/icons';
import { icons } from '../../../../assets/icons/icons';
//import Icon1 from 'react-native-vector-icons/Feather';


export const Rectangular = props => {
    const { path, style, name } = props;
    const navigation = useNavigation();
    return (
        <View style={[Styles.getStartedButtonMain, { ...style }]}>
            <TouchableOpacity
                onPress={() => navigation.navigate(path)}
                style={Styles.touchableStarted}>
                <View style={Styles.borderView}>

                    <Text style={Styles.buttonText}>{name}</Text>
                    <View style={Styles.borderView1}>{icons.rightarrow}</View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
