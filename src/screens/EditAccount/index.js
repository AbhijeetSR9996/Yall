import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
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

const genderdata = [
    // { label: 'Gender', value: '' },
    { label: 'Man', value: 'Man' },
    { label: 'Woman', value: 'Woman' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Agender', value: 'Agender' },
    { label: 'Androgyne', value: 'Androgyne' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'Cisgender', value: 'Cisgender' },
    { label: 'Enby', value: 'Enby' },
    { label: 'Transgender', value: 'Transgender' },
    { label: 'Transgender Woman', value: 'Transgender Woman' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
    { label: 'Neutrois', value: 'Neutrois' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Pangender', value: 'Pangender' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'Omnigender', value: 'Omnigender' },
    { label: 'Two Spirit', value: 'Two Spirit' },
];

// const filmsdata = [
//    { label: 'Agender', value: 'Agender' },
//    { label: 'Androgyne', value: 'Androgyne' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'Cisgender', value: 'Cisgender' },
//    { label: 'Enby', value: 'Enby' },
//    { label: 'Transgender', value: 'Transgender' },
//    { label: 'Transgender Woman', value: 'Transgender Woman' },
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
//    { label: 'Neutrois', value: 'Neutrois' },
//    { label: 'Non-binary', value: 'Non-binary' },
//    { label: 'Pangender', value: 'Pangender' },
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'Omnigender', value: 'Omnigender' },
//    { label: 'Two Spirit', value: 'Two Spirit' },
//    { label: 'Others', value: 'Others' },
//];

// const hobbiesdata = [
//    { label: 'soccer', value: 'soccer' },     
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'Others', value: 'Others'},
//];

// const goingout = [
//    { label: 'Agender', value: 'Agender' },
//    { label: 'Androgyne', value: 'Androgyne' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'Cisgender', value: 'Cisgender' },
//    { label: 'Enby', value: 'Enby' },
//    { label: 'Transgender', value: 'Transgender' },
//    { label: 'Transgender Woman', value: 'Transgender Woman' },
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
//    { label: 'Neutrois', value: 'Neutrois' },
//    { label: 'Non-binary', value: 'Non-binary' },
//    { label: 'Pangender', value: 'Pangender' },
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'Omnigender', value: 'Omnigender' },
//    { label: 'Two Spirit', value: 'Two Spirit' },
//    { label: 'Others', value: 'Others' },
//];

// const musicdata = [
//    { label: 'soccer', value: 'soccer' },     
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'Enby', value: 'Enby' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'Others', value: 'Others'},
//];

// const fooddata = [
//    { label: 'Agender', value: 'Agender' },
//    { label: 'Androgyne', value: 'Androgyne' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'Cisgender', value: 'Cisgender' },
//    { label: 'Enby', value: 'Enby' },
//    { label: 'Transgender', value: 'Transgender' },
//    { label: 'Transgender Woman', value: 'Transgender Woman' },
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
//    { label: 'Neutrois', value: 'Neutrois' },
//    { label: 'Non-binary', value: 'Non-binary' },
//    { label: 'Pangender', value: 'Pangender' },
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'Omnigender', value: 'Omnigender' },
//    { label: 'Two Spirit', value: 'Two Spirit' },
//    { label: 'Others', value: 'Others' },
//];

// const petsdata = [
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//    { label: 'tennis', value: 'tennis'},
//    { label: 'baseball', value: 'baseball'},
//    { label: 'golf', value: 'golf'},
//    { label: 'running', value: 'running'},
//    { label: 'Gender Fluid', value: 'Gender Fluid' },
//    { label: 'roller skating', value: 'roller skating'},
//    { label: 'badminton', value: 'badminton'},
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'table tennis', value: 'table tennis' },
//    { label: 'cricket', value: 'cricket'},
//    { label: 'Polygender', value: 'Polygender' },
//    { label: 'soccer', value: 'soccer' },      
//    { label: 'basketball', value: 'basketball' },
//    { label: 'Bigender', value: 'Bigender' },
//];


//     { label: '', value: ''},

const EditAccount = ({ navigation }) => {

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);


    //const [date, setDate] = useState(new Date());
    //const [open, setOpen] = useState(false);

    const [value, setValue] = useState(null);


    const [isEnabledAge, setIsEnabledAge] = useState(false);
    const [isEnabledDetails, setIsEnabledDetails] = useState(false);
    const toggleSwitch = () => setIsEnabledAge(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabledDetails(previousState => !previousState);

    const [firstAbout, setFirstAbout] = useState("");

    const [firstInterest, setFirstInterest] = useState("");
    const [firstFilm, setFirstFilm] = useState("");
    const [firstHobby, setFirstHobby] = useState("");
    const [firstGoingout, setFirstGoingout] = useState("");
    const [firstMusic, setFirstMusic] = useState("");
    const [firstFood, setFirstFood] = useState("");
    const [firstPet, setFirstPet] = useState("");
    const [firstDob, setFirstDob] = useState("");
    const [firstEvent, setFirstEvent] = useState("");

    const handleFirst = (value) => {
        setFirstAbout(value);
    }
    const handleSecond = (value) => {
        setFirstGender(value);
    }
    const handleThird = (value) => {
        setFirstInterest(value);
    }
    const handleFourth = (value) => {
        setFirstFilm(value);
    }
    const handleFifth = (value) => {
        setFirstHobby(value);
    }
    const handleSixth = (value) => {
        setFirstGoingout(value);
    }
    const handleSeventh = (value) => {
        setFirstMusic(value);
    }
    const handleEigth = (value) => {
        setFirstFood(value);
    }
    const handleNinth = (value) => {
        setFirstPet(value);
    }
    const handleTenth = (value) => {
        setFirstDob(value);
    }
    const handleEleventh = (value) => {
        setFirstEvent(value);
    }



    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'Yall needs access to your camera ',

                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //console.log('You can use the camera');
            } else {
                //console.log('Camera permission denied');
            }
        } catch (err) {
            //console.warn(err);
        }
    };
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 700,
            height: 700,
            compressImageQuality: 0.7,
            compressImageMaxWidth: 700,
            compressImageMaxHeight: 700,
            includeBase64: true,
        }).catch(error => { });
    };
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 700,
            height: 700,

            includeBase64: true,
            compressImageQuality: 0.5,
        });
    };
    const createTwoButtonAlert = () =>
        Alert.alert(
            '',
            'ADD PICTURE',

            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Camera',
                    onPress: () => takePhotoFromCamera(),
                },
                {
                    text: 'Choose from Gallery',
                    onPress: () => choosePhotoFromLibrary(),
                },
            ],
            { cancelable: false },
        );

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
                        right: '60%'
                    }}>Edit Profile</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 522, marginTop: '0%', borderRadius: 20, alignSelf: 'center', }}>
                    <View style={{ backgroundColor: 'transparent', flex: 0.15, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ backgroundColor: '#DCC7E1', flex: 0.3, justifyContent: 'center', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#000000', flex: 1, width: '65%', alignSelf: 'flex-start', borderRadius: 20, justifyContent: 'center' }}>
                                <Text style={{
                                    color: '#000000',
                                    fontFamily: 'BakbakOne-Regular',
                                    //fontWeight: '400',
                                    fontSize: 15,
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    left: '105%'
                                }}>65%</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{ backgroundColor: 'transparent', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', width: '100%', }}>
                        <View style={{ flex: 3.5, backgroundColor: 'transparent', justifyContent: 'center' }}>
                            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>

                                <Image
                                    source={require('../../../assets/images/editaccountpic.png')} style={{ height: '95%', width: '31%', borderRadius: 10, }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic2.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic3.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>
                                <Image
                                    source={require('../../../assets/images/editaccountpic4.png')} style={{ height: '95%', width: '31%', borderRadius: 10, }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic5.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic6.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <Image
                                        source={require('../../../assets/images/cross2.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1.5, backgroundColor: 'transparent', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                //fontWeight: '400',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                                textAlign: 'center',
                                //alignSelf: 'center'
                                //width: 333,
                                //alignSelf: 'center'
                            }}>Add a video, pic or loop to get 4% closer to
                                completing your file and you may even get more
                                Likes.</Text>
                            <TouchableOpacity
                                style={{
                                    //top: '8%',
                                    alignSelf: 'center',
                                    width: width * 0.8,
                                    height: height * 0.07,
                                    borderWidth: 1,
                                    //alignSelf: 'center',
                                    right: '2%'
                                }}
                                onPress={() => createTwoButtonAlert()}>
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
                                        right: '25%',
                                        //right: '20%',
                                        lineHeight: 25,
                                        letterSpacing: -0.017
                                    }}>Add Media</Text>
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
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                            <TextInput
                                placeholder=' About Me '
                                placeholderTextColor='#000000'
                                onChangeText={handleFirst}
                                style={{
                                    width: '100%',
                                    height: '30%',
                                    //width: '80%',
                                    fontSize: 15,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    lineHeight: 21,
                                    letterSpacing: -0.017,
                                    fontFamily: 'BakbakOne-Regular',
                                    textAlign: 'left',
                                    alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    borderWidth: 2,
                                    borderColor: '#6B6B6B',
                                    paddingLeft: '10%',
                                    //paddingBottom: '0%'
                                }} />
                            <Text style={{
                                fontSize: 13,
                                //fontFamily: 'Bakbak One',
                                fontFamily: 'Inter',
                                color: '#919191',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                marginRight: '-10%',
                                //right: '140%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '90%'
                            }}>{firstAbout}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                //fontFamily: 'Bakbak One',
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //margin: '18%',
                                left: '80%',
                                bottom: '57%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%'
                            }}>+22%
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                            <View style={{
                                width: '100%',
                                height: '30%',
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
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                //paddingLeft: '10%'

                            }}>

                                <Dropdown
                                    style={{
                                        //left: 22,
                                        //right: '52%',
                                        //width: 150,
                                        width: '100%',
                                        borderBottomColor: '#000000',
                                        borderBottomWidth: 1,
                                        //textAlign: 'center',
                                        //alignItems: 'center',
                                        color: '#000000',
                                        height: 40,
                                        backgroundColor: 'transparent'
                                        //top: -10,
                                    }}
                                    placeholder="        Gender"
                                    placeholderStyle={{
                                        fontSize: 15,
                                        //alignItems: 'center',
                                        textAlign: 'left',
                                        height: 18,
                                        fontFamily: 'BakbakOne-Regular',
                                        lineHeight: 21,
                                        letterSpacing: -0.017,
                                        color: '#000000',
                                        bottom: '1%'
                                    }}
                                    selectedTextStyle={{
                                        color: '#000000',
                                        fontFamily: 'BakbakOne-Regular',
                                        textAlign: 'left',
                                        lineHeight: 21,
                                        letterSpacing: -0.017,
                                        left: '100%'
                                    }}
                                    data={genderdata}
                                    iconColor='transparent'
                                    labelField="label"
                                    valueField="value"
                                    value={value}
                                    onChange={item => {
                                        setValue(item.value);
                                    }}
                                />

                            </View>


                            <Text style={{
                                fontSize: 13,
                                //fontFamily: 'Bakbak One',
                                fontFamily: 'Inter',
                                color: '#919191',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginRight: '-13%',
                                marginBottom: '10%',
                                //right: '140%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>{value}
                            </Text>

                        </View>
                    </View>


                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Interests'
                            placeholderTextColor='#000000'
                            onChangeText={handleThird}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstInterest}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>



                        <TextInput
                            placeholder=' Films & TV'
                            placeholderTextColor='#000000'
                            onChangeText={handleFourth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstFilm}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Hobbies'
                            placeholderTextColor='#000000'
                            onChangeText={handleFifth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstHobby}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Going out'
                            placeholderTextColor='#000000'
                            onChangeText={handleSixth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstGoingout}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Music'
                            placeholderTextColor='#000000'
                            onChangeText={handleSeventh}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstMusic}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Food'
                            placeholderTextColor='#000000'
                            onChangeText={handleEigth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstFood}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Pets'
                            placeholderTextColor='#000000'
                            onChangeText={handleNinth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstPet}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        {/* <TouchableOpacity onPress={() => setMode('date')} title="Your date of birth"><Text>Your date of birth</Text></TouchableOpacity>
                        {show && <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange} />} */}

                        {/* <DatePicker
                            mode='date'
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => { setOpen(false), setDate(value) }}
                            onCancel={() => { setOpen(false) }} /> */}


                        {/* <DateTimePickerAndroid
                            testID="dateTimePicker"
                            value={mydate}
                            mode={displaymode}
                            is24Hour={true}
                            display="default"
                            onChange={changeSelectedDate} /> */}


                        <TextInput
                            placeholder=' Your date of birth'
                            placeholderTextColor='#000000'
                            onChangeText={handleTenth}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                            }} />

                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstDob}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' My Events'
                            placeholderTextColor='#000000'
                            onChangeText={handleEleventh}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'

                            }} />
                        <Text style={{
                            fontSize: 13,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            //right: '140%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstEvent}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 0.6, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'BakbakOne-Regular',
                                //fontFamily: 'Inter',
                                color: '#000000',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                marginRight: '-10%',
                                marginTop: '5%',
                                //right: '140%',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Select a Prompt
                            </Text>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    //fontFamily: 'Bakbak One',
                                    fontFamily: 'Inter',
                                    color: '#919191',
                                    //alignSelf: 'center',
                                    //justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    marginRight: '52%',
                                    top: '10%',
                                    //right: '140%',
                                    lineHeight: 15,
                                    letterSpacing: -0.017,
                                    width: '90%',

                                }}>Add a question
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 17,
                                alignSelf: 'flex-end',
                                bottom: '85%',
                                left: '3%'
                            }}
                                onPress={() => navigation.navigate('EditAccount')}>
                                <Image
                                    source={require('../../../assets/images/crossiconwhite.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}></View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 139.5, marginTop: '-15%', marginBottom: '5%', alignSelf: 'center', borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginTop: '5%',
                            //right: '140%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Add your 2AM Tweet
                        </Text>
                        <TouchableOpacity style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 17,
                            alignSelf: 'flex-end',
                            bottom: '85%',
                            left: '3%'
                        }}
                            onPress={() => navigation.navigate('EditAccount')}>
                            <Image
                                source={require('../../../assets/images/crossiconwhite.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'space-between',
                            justifyContent: 'center',
                            //borderWidth: 0.5,
                        }}>
                            <Image
                                source={require('../../../assets/images/twitter.png')}
                                style={{
                                    height: 32,
                                    width: 30,
                                    left: 10,
                                    position: 'absolute',
                                    bottom: 40,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'Inter',
                                position: 'absolute',
                                //fontWeight: '400',
                                color: '#000000',
                                left: 50,
                                fontSize: 12,
                                right: 10,
                                letterSpacing: -0.017,
                                //width: 297
                                //width: '70%',
                                width: '85%',
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been theLorem Ipsum is
                                simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 189, marginTop: '0%', marginBottom: '5%', alignSelf: 'center', borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.2, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '-10%',
                            marginTop: '5%',
                            //right: '140%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Add a song that describe your life
                        </Text>
                        <TouchableOpacity style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 17,
                            alignSelf: 'flex-end',
                            bottom: '85%',
                            left: '3%'
                        }}
                            onPress={() => navigation.navigate('EditAccount')}>
                            <Image
                                source={require('../../../assets/images/crossiconwhite.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <View style={{
                            width: '100%',
                            height: 150,
                            //height: '100%',
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'space-between',
                            justifyContent: 'center',
                            //marginBottom: '8.5%'
                        }}>
                            <Image
                                source={require('../../../assets/images/spotify.png')}
                                style={{
                                    height: 23,
                                    width: 24,
                                    left: 8,
                                    position: 'absolute',
                                    bottom: 118,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'BakbakOne-Regular',
                                position: 'absolute',
                                //fontWeight: '400',
                                fontSize: 17,
                                left: 45,
                                top: 8,
                                color: 'black',
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>
                                Favourite Songs powered by Spotify
                            </Text>
                            <Image
                                source={require('../../../assets/images/album.png')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    left: 10,
                                    position: 'absolute',
                                    bottom: 50,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'Inter',
                                color: '#000000',
                                position: 'absolute',
                                //fontWeight: '600',
                                fontSize: 12,
                                left: 70,
                                top: 55,
                                position: 'absolute',
                                letterSpacing: -0.017,
                                lineHeight: 15
                            }}>Cool Me Down</Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                color: '#000000',
                                position: 'absolute',
                                //fontWeight: '400',
                                fontSize: 12,
                                left: 70,
                                top: 70,
                                position: 'absolute',
                                letterSpacing: -0.017
                            }}>
                                Gromee - Cool Me Down
                            </Text>
                            <Image
                                source={require('../../../assets/images/playbtn.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    left: 10,
                                    top: 110,
                                    position: 'absolute',
                                    bottom: 50,
                                }}
                            />
                            <Image
                                source={require('../../../assets/images/scroller2.png')}
                                style={{
                                    height: 20,
                                    width: 240,
                                    left: 40,
                                    top: 110,
                                    position: 'absolute',
                                    bottom: 50,
                                }}
                            />
                            <View style={{ flex: 0.05, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginTop: '35%', width: '100%', marginHorizontal: '-5%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet.png')} style={{ paddingRight: '4%', }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet2.png')} style={{ paddingRight: '4%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet2.png')} style={{ paddingRight: '4%' }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 119.5, marginTop: '0%', marginBottom: '30%', alignSelf: 'center' }}>
                    <View
                        style={{
                            flex: 1.3,
                            //width: '100%',
                            //height: '30%',
                            //width: '80%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Control your Profile
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2.7,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }} >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                //paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row'
                            }} >
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#919191',
                                right: '-100%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Don't show my age
                            </Text>
                            <Switch
                                //style={{ left: 10 }}
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledAge ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabledAge}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row'
                            }} >
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#919191',
                                left: '100%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Don't show Contact details
                            </Text>
                            <Switch
                                //style={{ left: 10 }}
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledDetails ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabledDetails}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView >
        </View >

    );
};
export default EditAccount;