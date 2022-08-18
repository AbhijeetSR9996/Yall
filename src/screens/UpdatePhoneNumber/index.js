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


const UpdatePhoneNumber = ({ navigation }) => {

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
            {/* <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}> */}
            <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '5%' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                            //padding: '5%',
                            //left: '15%',
                            //marginRight: '5%',
                            marginLeft: '20%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '105%'
                    }}>Phone Number Setting</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '0%', marginBottom: '0%', bottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    {/* <TouchableOpacity> */}
                    <Text style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        color: '#000000',
                        lineHeight: 25,
                        letterSpacing: -0.017
                    }}>Phone Number</Text>
                    {/* </TouchableOpacity> */}
                </View>

                <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 45, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.85, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', alignSelf: 'center' }}>
                        <TextInput
                            placeholder='8171830859'
                            placeholderTextColor='#4B4B4B'
                            keyboardType='numeric'
                            maxLength={10}
                            //onChangeText={handleThird}
                            style={{
                                width: '90%',
                                height: '100%',
                                fontSize: 15,
                                color: '#4B4B4B',
                                //fontWeight: '400',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                fontFamily: 'Inter',
                                //textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                //borderWidth: 1,
                                //borderRadius: 5,
                                borderColor: '#6B6B6B',
                                //paddingLeft: '-10%'
                            }} />
                    </View>
                    <View style={{
                        flex: 0.15, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', alignSelf: 'center',
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                        }}>
                            <Image source={require('../../../assets/images/pinktickicon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#4B4B4B',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            left: '0.5%'
                        }}>Verified Phone Number</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#000000',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            //left: '1%'
                        }}>Update My Phone Number</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View >

    );
};
export default UpdatePhoneNumber;