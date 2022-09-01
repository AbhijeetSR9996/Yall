import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
    Switch,
    BackHandler,
    StyleSheet,
    modal
} from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular';
import { styles } from './styles';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';


const data = [
    { label: 'Gender', value: '' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
];

const ManageBookings = ({ navigation }) => {

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",

                            marginLeft: '20%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',

                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '70%'
                    }}>Manage my booking</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
            <ScrollView style={{ height: '90%', flex: 1, width: width, marginTop: '6%', marginBottom: '0%' }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <ImageBackground
                        source={require('../../../assets/images/managebookings_img.png')}
                        style={{

                            width: width * 0.50,
                            height: height * 0.20,
                            margin: '3%',
                            marginLeft: '5%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: "3%",
                            borderRadius: 10
                        }}
                        resizeMode="stretch">
                    </ImageBackground>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        flexDirection: 'column',
                        marginTop: '2%'
                    }}>
                        <Text style={{
                            fontFamily: 'BakbakOne-Regular',

                            fontSize: 17,
                            lineHeight: 28,
                            letterSpacing: -0.017,
                            flexWrap: 'wrap',
                            display: 'flex',
                            color: '#232323',
                            width: width * 0.5,

                            paddingLeft: '4%',
                            marginLeft: '-9%',
                            marginTop: '9%'
                        }}>Wednesday Event</Text>

                        <View style={{
                            flex: 0.8, justifyContent: 'center',
                            backgroundColor: 'transparent',
                            alignItems: 'stretch',
                            flexDirection: 'column'
                        }}>
                            <View style={{
                                flex: 0.7, justifyContent: 'flex-start',
                                backgroundColor: 'transparent',
                                alignItems: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontFamily: 'Inter',
                                    color: "#000000",
                                    fontSize: 12,
                                }}>
                                    <Image source={require('../../../assets/images/calendar.png')} />   09 May 2022</Text>
                            </View>
                            <View style={{
                                flex: 1.2,
                                justifyContent: 'space-around',
                                backgroundColor: 'transparent',
                                alignItems: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: '#C4C4C4',
                                    backgroundColor: '#FFFFFF',

                                    width: width * 0.17,

                                    marginLeft: '-5%',
                                    height: '50%'
                                }}
                                    onPress={() => navigation.navigate('EventTicket')}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',

                                    }}>View</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: '#C4C4C4',
                                    backgroundColor: '#FFFFFF',

                                    width: width * 0.17,

                                    left: '-6%',
                                    height: '50%'
                                }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',

                                    }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>


            </ScrollView >
        </View >

    );
};
export default ManageBookings;