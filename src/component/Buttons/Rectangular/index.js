import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Styles from './styles';

import { icons } from '../../../../assets/icons/icons';
import { height, width } from '../../../services/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';



export const Rectangular = props => {
    const { path, style, name, bgcolor, bgcolor2, txtcolor, txtcolor2, rgt, rgt2txt, top } = props;
    const navigation = useNavigation();
    return (
        <View style={[Styles.getStartedButtonMain, { ...style }]}>
            <TouchableOpacity
                onPress={() => navigation.navigate(path)}
                style={{
                    width: width * 0.8,
                    height: height * 0.07,
                    borderWidth: 1,
                    alignSelf: 'center',
                    right: rgt,
                    top: top
                }}>

                <View style={{
                    left: 10,
                    top: 8,
                    width: width * 0.8,
                    borderWidth: 1,
                    borderRightWidth: 0,
                    height: height * 0.07,
                    alignSelf: 'center',
                    backgroundColor: bgcolor,
                    position: 'relative',
                }}>

                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'BakbakOne-Regular',
                        color: txtcolor,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingVertical: 13,
                        right: rgt2txt,
                        lineHeight: 25,
                        letterSpacing: -0.017
                    }}>{name}</Text>

                    <View style={{
                        width: width * 0.15,
                        borderWidth: 1,
                        height: '104%',
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bgcolor2,
                        position: 'absolute',
                        marginVertical: -1,
                    }}>

                        <AntDesign name="arrowright" size={30} color={txtcolor2} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
