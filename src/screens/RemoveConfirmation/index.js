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
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const monthdata = [
    { label: '01', value: '01' },
    { label: '02', value: '02' },
    { label: '03', value: '03' },
    { label: '04', value: '04' },
    { label: '05', value: '05' },
    { label: '06', value: '06' },
    { label: '07', value: '07' },
    { label: '08', value: '08' },
    { label: '09', value: '09' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
];

const yeardata = [
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
    { label: '32', value: '32' },
    { label: '33', value: '33' },
    { label: '34', value: '34' },
    { label: '35', value: '35' },
    { label: '36', value: '36' },
    { label: '37', value: '37' },
    { label: '38', value: '38' },
    { label: '39', value: '39' },
    { label: '40', value: '40' },
    { label: '41', value: '41' },
    { label: '42', value: '42' },
    { label: '43', value: '43' },
    { label: '44', value: '44' },
    { label: '45', value: '45' },
    { label: '46', value: '46' },
    { label: '47', value: '47' },
    { label: '48', value: '48' },
    { label: '49', value: '49' },
    { label: '50', value: '50' },
];

const RemoveConfirmation = ({ navigation }) => {

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);

    const [value, setValue] = useState(null);

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
                    }}>Remove Confirmation</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '10%', marginBottom: '0%' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 170, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 2, flexDirection: 'column', width: '95%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', alignSelf: 'center', borderRadius: 5, }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#393939',
                            lineHeight: 15,
                            marginLeft: '16%',
                            top: '5%'

                        }}> Kotak Mahindra Bank debit card***</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#857E7E',
                            lineHeight: 15,
                            marginLeft: '3%',
                            bottom: '3%'

                        }}>Remove:                                                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.text of the printing and typesetting industry. Lorem the industry's standard.Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.</Text>

                    </View>

                </View>


                <TouchableOpacity
                    style={{

                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,

                        right: '2%',
                        marginTop: '10%',
                        marginBottom: '7%'
                    }}
                    onPress={() => navigation.navigate('ProfileDisplay')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,

                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{

                            fontSize: 17,

                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',

                            top: '30.3%',
                            right: '27%',

                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Yes</Text>
                        <View style={{
                            width: width * 0.15,
                            borderWidth: 1,
                            height: '104%',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#DCC7E1',
                            position: 'absolute',
                            marginVertical: -1,
                        }}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{

                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,

                        right: '2%',
                        marginTop: '0%',
                        marginBottom: '5%'
                    }}
                    onPress={() => navigation.navigate('ProfileDisplay')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        borderRightWidth: 0,
                        height: height * 0.07,

                        alignSelf: 'center',
                        backgroundColor: '#000000',

                    }}>
                        <Text style={{

                            fontSize: 17,

                            fontFamily: 'BakbakOne-Regular',
                            color: '#FFFFFF',
                            alignSelf: 'center',
                            justifyContent: 'center',

                            top: '30.3%',
                            right: '27.5%',

                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>No</Text>
                        <View style={{
                            width: width * 0.15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            height: '104%',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#000000',
                            position: 'absolute',
                            marginVertical: -1,
                        }}><AntDesign name="arrowright" size={30} color="#FFFFFF" /></View>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: 59, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            width: 264,

                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View >

    );
};
export default RemoveConfirmation;