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
//import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-date-picker';

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

const EditCard = ({ navigation }) => {

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
                        right: '70%'
                    }}>Edit payment method</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />

            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '10%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 169, marginTop: '0%', marginBottom: '3%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 17,
                            color: '#000000',
                            lineHeight: 22,
                            marginLeft: '4.5%',
                            marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center',
                        }}>Kodak Mahindra Bank debit card***</Text>

                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 149, alignSelf: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 149, alignSelf: 'center' }}>
                            <TextInput
                                placeholder='  Sahil'
                                placeholderTextColor='#000000'
                                //onChangeText={handleThird}
                                style={{
                                    width: '90%',
                                    height: '70%',
                                    //width: '80%',
                                    fontSize: 12,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    lineHeight: 15,
                                    letterSpacing: -0.017,
                                    fontFamily: 'Inter',
                                    //textAlign: 'left',
                                    //alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: '#C4C4C4',
                                    //paddingLeft: '-40%'
                                }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 149, alignSelf: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <View style={{
                                    width: '85%',
                                    height: '70%',
                                    //width: '80%',
                                    fontSize: 15,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    //lineHeight: 21,
                                    //letterSpacing: -0.017,
                                    //fontFamily: 'BakbakOne-Regular',
                                    //textAlign: 'left',
                                    alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: '#C4C4C4',
                                    right: '12%'

                                }}>
                                    <Dropdown
                                        style={{
                                            width: '100%',
                                            //borderBottomColor: '#000000',
                                            //borderBottomWidth: 1,
                                            //textAlign: 'center',
                                            //alignItems: 'center',
                                            color: '#000000',
                                            height: 40,
                                            backgroundColor: 'transparent'
                                            //top: -10,
                                        }}
                                        placeholder="   01"
                                        placeholderStyle={{
                                            fontSize: 12,
                                            //alignItems: 'center',
                                            textAlign: 'left',
                                            height: 18,
                                            fontFamily: 'Inter',
                                            lineHeight: 15,
                                            letterSpacing: -0.017,
                                            color: '#000000',
                                        }}
                                        selectedTextStyle={{
                                            color: '#000000',
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            textAlign: 'left',
                                            lineHeight: 15,
                                            letterSpacing: -0.017,
                                            left: '30%'
                                        }}
                                        data={monthdata}
                                        iconColor='#000000'
                                        iconStyle={{ marginRight: '2%' }}
                                        labelField="label"
                                        valueField="value"
                                        value={value}
                                        onChange={item => {
                                            setValue(item.value);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <View style={{
                                    width: '85%',
                                    height: '70%',
                                    //width: '80%',
                                    fontSize: 15,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    //lineHeight: 21,
                                    //letterSpacing: -0.017,
                                    //fontFamily: 'BakbakOne-Regular',
                                    //textAlign: 'left',
                                    alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: '#C4C4C4',
                                    left: '15%'

                                }}>
                                    <Dropdown
                                        style={{
                                            width: '100%',
                                            //borderBottomColor: '#000000',
                                            //borderBottomWidth: 1,
                                            //textAlign: 'center',
                                            //alignItems: 'center',
                                            color: '#000000',
                                            height: 40,
                                            backgroundColor: 'transparent'
                                            //top: -10,
                                        }}
                                        placeholder="   "
                                        placeholderStyle={{
                                            fontSize: 12,
                                            //alignItems: 'center',
                                            textAlign: 'left',
                                            height: 18,
                                            fontFamily: 'Inter',
                                            lineHeight: 15,
                                            letterSpacing: -0.017,
                                            color: '#000000',
                                        }}
                                        selectedTextStyle={{
                                            color: '#000000',
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            textAlign: 'left',
                                            lineHeight: 15,
                                            letterSpacing: -0.017,
                                            left: '30%'
                                        }}
                                        data={yeardata}
                                        iconColor='#000000'
                                        iconStyle={{ marginRight: '2%' }}
                                        labelField="label"
                                        valueField="value"
                                        value={value}
                                        onChange={item => {
                                            setValue(item.value);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 199, marginTop: '0%', alignSelf: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: '#857E7E' }}>
                    <View style={{ flex: 2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', alignSelf: 'center', borderRadius: 5, }}>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            color: '#000000',
                            lineHeight: 22,
                            marginLeft: '5%',
                            top: '3%'
                            //textAlign: 'center',
                            //justifyContent:'center',
                        }}>Billing address</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            top: '1%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>Sahil</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>4645+5898+9568+85+9</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>Sec.62</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>Ghaziabad, Uttar Pradesh</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>India</Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: 15,
                            marginLeft: '5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            //justifyContent:'center'
                        }}>Phone : 79853489654</Text>
                        <TouchableOpacity>
                            <Text style={{ left: 300, marginTop: -110, }}>
                                <EvilIcons name="chevron-right" size={35} color="#000000" />
                            </Text>
                        </TouchableOpacity>
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
                        }}>Save</Text>
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
                        marginTop: '0%',
                        marginBottom: '5%'
                    }}
                >
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderColor: '#FFFFFF',
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#000000',
                        //position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#FFFFFF',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '25%',
                            //right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Cancel</Text>
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
                            //width: '60%',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's standard.</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View >

    );
};
export default EditCard;