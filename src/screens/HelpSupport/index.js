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


const HelpSupport = ({ navigation }) => {

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
                        right: '110%'
                    }}>Help Centre</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', marginTop: '-4%' }} />
            <ScrollView style={{ backgroundColor: 'transparent', height: '90%', flex: 1, width: width, marginTop: '8%', marginBottom: '0%' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    {/* <TouchableOpacity> */}
                    <Text style={{
                        fontFamily: 'Inter',
                        fontSize: 12,
                        color: '#000000',
                        lineHeight: 15,
                        letterSpacing: -0.017,
                        left: '0.5%'
                    }}>Yall    /    Support</Text>
                    {/* </TouchableOpacity> */}
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '5%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    {/* <TouchableOpacity> */}
                    <Text style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 25,
                        color: '#000000',
                        lineHeight: 35,
                        letterSpacing: -0.017
                    }}>Support</Text>
                    {/* </TouchableOpacity> */}
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '10%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            letterSpacing: -0.017
                        }}>Yall Basics</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What is Yall?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>Is Yall free?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 39, marginTop: '3%', alignSelf: 'center', borderRadius: 5, marginBottom: '10%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpGettingStarted') }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#857E7E',
                            lineHeight: 18,
                            letterSpacing: -0.017
                        }}>What we believe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ left: 317, marginTop: -23, textAlign: 'center', color: '#000000' }}>{icons.right}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '-12%', }}>
                    <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                </View>


            </ScrollView >
        </View >

    );
};
export default HelpSupport;