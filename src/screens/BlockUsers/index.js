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
//import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-date-picker';


const BlockUsers = ({ navigation }) => {

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
                    }}>Block Users</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '-3%', top: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%', bottom: '0%' }}>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 65, marginTop: '0%', alignSelf: 'center', }}>
                    <View style={{ flex: 0.15, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Image source={require('../../../assets/images/sendphoto.png')} style={{ height: '63.5%', width: '85%' }} />
                    </View>
                    <View style={{ flex: 0.64, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: '100%', alignSelf: 'center' }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter', lineHeight: 18, letterSpacing: -0.017, left: '0%' }}> Jhone</Text>
                        <Text style={{ color: '#808080', fontSize: 12, fontFamily: 'Inter', lineHeight: 15, letterSpacing: -0.017, left: '0%', width: '100%' }}> 05 June 2020</Text>
                    </View>
                    <View style={{
                        flex: 0.27, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '100%',
                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#020203',
                            backgroundColor: '#DCC7E1',
                            height: '40%',
                            width: '90%',
                        }}
                            onPress={() => navigation.navigate('BlockUsers')}>
                            <Text style={[{
                                //paddingVertical: '0%',
                                letterSpacing: -0.017,
                                //fontWeight: '500',
                                fontSize: 10,
                                lineHeight: 12,
                                //alignSelf: 'center',
                                color: '#000000',
                                fontFamily: 'Inter',
                                width: 324,
                                //width: '90%',
                                height: 54,
                                marginLeft: '26%',
                                marginTop: '7%'
                            }]}>Unblock</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', height: 49, marginTop: '0%', alignSelf: 'center', borderRadius: 5, marginBottom: '-5%' }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            right: '3%',
                        }}>Phone Pe</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View >

    );
};
export default BlockUsers;