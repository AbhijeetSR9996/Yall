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

const WednesdayEvent = ({ navigation }) => {

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
                    }}>Wednesday Event</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '0%', marginBottom: '0%', bottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <Text style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        color: '#000000',
                        lineHeight: 25,
                        letterSpacing: -0.017
                    }}>Upcoming Events</Text>
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '10%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <Text style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        color: '#000000',
                        lineHeight: 25,
                        letterSpacing: -0.017
                    }}>Previous Events</Text>
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: 45, marginTop: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
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

                            marginLeft: '10%'
                        }}>01/02/2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#4B4B4B',
                            lineHeight: 18,
                            letterSpacing: -0.017,

                            marginRight: '4%'
                        }}>Mumbai</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </ScrollView>


        </View >

    );
};
export default WednesdayEvent;