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
import Icons from "react-native-vector-icons/EvilIcons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';
import Slider from 'react-native-slider';
import Gender from '../../component/Dropdown/Gender/index';
import FilmsTV from '../../component/Dropdown/FilmsTV';
import Hobbies from '../../component/Dropdown/Hobbies';
import GoingOut from '../../component/Dropdown/GoingOut';
import Music from '../../component/Dropdown/Music';
import Food from '../../component/Dropdown/Food';
import Pets from '../../component/Dropdown/Pets';
import DatePicker from 'react-native-neat-date-picker';
import { Button } from 'react-native-paper';
import { Card } from 'react-native-paper';


const Help = ({ navigation }) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const openDatePicker = () => { setShowDatePicker(true) }
    const onCancel = () => { setShowDatePicker(false) }
    const [date, setDate] = useState(new Date());

    const [speed, setSpeed] = useState('50%');
    const [slide, setSlide] = useState('Inactive');

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
                            //padding: '5%',
                            //left: '15%',
                            marginLeft: '20%'
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '100%'
                    }}>Help Centre</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', marginTop: '-3%' }} />
            <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '15%', marginBottom: '0%' }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: "center",
                    backgroundColor: 'transparent',
                    marginTop: '0%'
                }}>
                    {/* <TouchableOpacity> */}
                    <Image source={require('../../../assets/images/helpimage.png')}
                        style={{
                            width: 311,
                            height: 288,
                        }} />
                    {/* </TouchableOpacity> */}
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: '0%', }}>
                    <View style={{
                        width: '83%',
                        alignSelf: 'center',
                        height: '80%',
                        borderBottomWidth: 1,
                        //borderRadius: 10,
                        borderBottomColor: '#000000',
                        //backgroundColor: 'lime',
                    }}>
                        <TouchableOpacity>
                            {/* <Icons name="search"
                                size={30} style={{ right: '2%', top: '105%' }}
                            ></Icons> */}
                            <Image source={require('../../../assets/images/searchicon.png')}
                                style={{ right: '0%', top: '127%' }} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Welcome. How can we help?'
                            placeholderTextColor='#000000'
                            style={{
                                flex: 1,
                                fontFamily: 'Inter',
                                fontSize: 18,
                                color: '#000000',
                                lineHeight: 22,
                                letterSpacing: -0.017,
                                left: '8%',
                                bottom: '15%',
                                height: '100%',
                                width: '92%',
                                marginBottom: '2%'
                            }} />
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        //top: '8%',
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        //alignSelf: 'center',
                        right: '2%',
                        marginTop: '10%',
                        marginBottom: '2%'
                    }}
                    onPress={() => navigation.navigate('HelpGettingStarted')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '27%',
                            //right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Getting Started</Text>
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
                        //top: '8%',
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        //alignSelf: 'center',
                        right: '2%',
                        marginTop: '5%',
                        marginBottom: '2%'
                    }}
                    onPress={() => navigation.navigate('HelpSafety')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '10%',
                            //right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Safety, Security and Privacy</Text>
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
                        //top: '8%',
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        //alignSelf: 'center',
                        right: '2%',
                        marginTop: '5%',
                        marginBottom: '25%'
                    }}
                    onPress={() => navigation.navigate('HelpSupport')}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '37%',
                            //right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Support</Text>
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
            </ScrollView >
        </View >

    );
};
export default Help;