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


const AutoplayVideo = ({ navigation }) => {

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
            <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '5%' }}>
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
                        right: '105%'
                    }}>Autoplay Videos</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%', bottom: '0%' }}>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginLeft: '8%',
                            display: 'flex'
                        }}>On Wifi and Mobile Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: '100%',
                        width: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                    }}>
                        <Image source={require('../../../assets/images/pinktickicon2.png')}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginLeft: '13%',
                            display: 'flex'
                        }}>On Wifi only</Text>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginLeft: '9%',
                            display: 'flex'
                        }}>Never Autoplay Videos</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </ScrollView>


        </View >

    );
};
export default AutoplayVideo;