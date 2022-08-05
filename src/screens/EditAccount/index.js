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
    Alert
} from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular';
import { styles } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker';


const EditAccount = ({ navigation }) => {

    const [firstAbout, setFirstAbout] = useState("");
    const [firstGender, setFirstGender] = useState("");
    const handleFirst = (value) => {
        setFirstAbout(value);
    }
    const handleSecond = (value) => {
        setFirstGender(value);
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
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
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
                    }}>Edit Profile</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '2.2%' }} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 522, marginTop: '0%', borderRadius: 20, alignSelf: 'center', }}>
                    <View style={{ backgroundColor: 'lime', flex: 0.15, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
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
                        <View style={{ flex: 3.5, backgroundColor: 'red', justifyContent: 'center' }}>
                            <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>

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
                            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>
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
                                width: '90%',
                                //width: 273,
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

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'grey', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

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
                                bottom: '58%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%'
                            }}>+22%
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                            <TextInput
                                placeholder=' Gender'
                                placeholderTextColor='#000000'
                                onChangeText={handleSecond}
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
                            }}>{firstGender}
                            </Text>

                        </View>
                    </View>


                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Interests'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Films & TV'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Hobbies'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Going out'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Music'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Food'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Pets'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Your date of birth'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'red', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' My Events'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lime', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>

                        <TextInput
                            placeholder=' Select a Prompt'
                            placeholderTextColor='#000000'
                            onChangeText={handleSecond}
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
                        }}>{firstGender}
                        </Text>

                    </View>

                </View>

            </ScrollView>
        </View>

    );
};
export default EditAccount;