import React, { useState } from 'react';
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
    Switch
} from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular';
import { styles } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';


const AccountSettings = ({ navigation }) => {


    const [isEnabledAge, setIsEnabledAge] = React.useState(false);
    const [isEnabledDetails, setIsEnabledDetails] = React.useState(false);
    const toggleSwitch = () => setIsEnabledAge(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabledDetails(previousState => !previousState);

    const [firstAbout, setFirstAbout] = useState("");
    const [firstGender, setFirstGender] = useState("");
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
                            left: '15%',
                            marginRight: '5%'
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                    }}>Setting</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '2.2%' }} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>


                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Account Settings
                        </Text>
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '35%',
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
                                justifyContent: 'space-evenly',
                                flexDirection: 'row'
                            }} >
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    //alignSelf: 'center',
                                    //justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    right: '60%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Phone Number
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    left: '20%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>8171830852
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            left: '5%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Verify a phone number to help secure your account.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Discovery Settings
                        </Text>
                        <TextInput
                            placeholder=' Location'
                            placeholderTextColor='#4B4B4B'
                            onChangeText={handleSecond}
                            style={{
                                width: '100%',
                                height: '35%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'Inter',
                                //textAlign: 'left',
                                //alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'
                            }} />
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            left: '0%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Change your location to see Tinder member in other cities.
                        </Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                bottom: '340%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '27%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>My current location
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>


                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'grey', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 1.1, flexDirection: 'row', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-between', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '15%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Maximum Distance
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '100%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>80km.
                            </Text>
                        </View>
                        <View style={{ flex: 0.8, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                            <Image source={require('../../../assets/images/scrollersettings2.png')} style={{ width: 140 }} />
                            <Image source={require('../../../assets/images/scrollersettings.png')} style={{ width: 150, left: 15 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 150 }} />
                        </View>
                        <View style={{ flex: 1.1, flexDirection: 'row', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'Inter',
                                color: '#919191',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '50%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Only show people in the range
                            </Text>
                            <Switch
                                style={{ right: 15 }}
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledAge ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabledAge}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-evenly', height: 279, marginTop: '5%', }}>
                        <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>

                            <TextInput
                                placeholder=' Show Me '
                                placeholderTextColor='#000000'
                                //onChangeText={handleFirst}
                                style={{
                                    width: '100%',
                                    height: '70%',
                                    //width: '80%',
                                    fontSize: 15,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    fontFamily: 'Inter',
                                    //textAlign: 'left',
                                    alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    //borderWidth: 2,
                                    //borderColor: '#6B6B6B',
                                    //paddingLeft: '10%'

                                }} />
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'Inter',
                                color: '#919191',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                bottom: '10%',
                                //marginRight: '-10%',
                                //marginTop: '5%',
                                right: '2%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Women
                            </Text>

                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}></View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'pink', alignItems: 'stretch', justifyContent: 'space-between', height: 139.5, marginTop: '-15%', marginBottom: '5%', alignSelf: 'center', borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'grey', alignItems: 'stretch', justifyContent: 'center', marginTop: '0%' }}>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-between', marginTop: '0%' }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '20%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Age Range
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '160%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>18 - 31
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', marginTop: '0%' }}>
                            <Image source={require('../../../assets/images/scrollersettings2.png')} style={{ width: 50, left: 20 }} />
                            <Image source={require('../../../assets/images/scrollersettings.png')} style={{ width: 260, left: 10 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 295 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 265 }} />
                        </View>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'center', marginTop: '0%', }}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center',
                            //borderWidth: 0.5,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //left: '0%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '95%',
                            }}>Tinder uses these preferences to suggest matches. Some
                                match suggestion may not fall within your desired parameters.
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
                        <TouchableOpacity>
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
                            }}>Help & Support
                            </Text>
                        </TouchableOpacity>
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
export default AccountSettings;