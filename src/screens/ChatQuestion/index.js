import React from 'react';
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
    ImageBackground,
    Alert
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { height, width } from '../../services/helper';




const ChatQuestion = ({ navigation }) => {

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
            ],
            { cancelable: false },
        );

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 0.09, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                        }} />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/profilecircle.png')} style={{ width: 40, height: 40, }} />
                    <TouchableOpacity>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'BakbakOne-Regular',
                            //fontWeight: '400',
                            fontSize: 15,
                            lineHeight: 21,
                            letterSpacing: -0.017,
                        }}>PR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}></View>
                <View style={{ flex: 1.6, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/videorecorder.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/group.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/filtericon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', }} />
            <View style={{ flex: 0.9, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
                <View style={{ flex: 0.06, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={styles.text}>March 9, 2020</Text>
                </View>
                <View style={{ flex: 0.11, width: width, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/buttonbg2.png')}
                            style={[{
                                width: 65,
                                height: 40,
                                marginLeft: '5%'
                            }]}
                            imageStyle={{
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 2,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    fontSize: 15,
                                    color: '#000000',
                                    backgroundColor: 'transparent',
                                    //top: '60%',
                                    //left: '25%',
                                    fontFamily: 'Inter',
                                    fontWeight: '400',
                                    letterSpacing: -0.017,
                                    lineHeight: 18,
                                    width: 65,
                                    height: 40,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderBottomLeftRadius: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000000',
                                    //top: '60%',
                                    //left: '25%',
                                    fontFamily: 'Inter',
                                    //fontWeight: '400',
                                    letterSpacing: -0.017,
                                    lineHeight: 18
                                }}> Hey </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.053, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={styles.text}>March 10, 2020</Text>
                </View>
                <View style={{ flex: 0.14, width: width, backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column' }}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/buttonbg4.png')}
                            style={[{
                                width: 65,
                                height: 40,
                                marginRight: '5%'
                            }]}
                            imageStyle={{
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 2,
                                borderBottomLeftRadius: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    fontSize: 15,
                                    color: '#000000',
                                    backgroundColor: 'transparent',
                                    //top: '60%',
                                    //left: '25%',
                                    fontFamily: 'Inter',
                                    fontWeight: '400',
                                    letterSpacing: -0.017,
                                    lineHeight: 18,
                                    width: 65,
                                    height: 40,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 2,
                                    borderBottomLeftRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#000000',
                                    //top: '60%',
                                    //left: '25%',
                                    fontFamily: 'Inter',
                                    //fontWeight: '400',
                                    letterSpacing: -0.017,
                                    lineHeight: 18
                                }}> Hey </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0.7, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <View style={{ flex: 0.15, width: width, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <TouchableOpacity>
                            <ImageBackground
                                source={require('../../../assets/images/buttonbg3.png')}
                                style={[{
                                    width: 89,
                                    height: 40,
                                    marginLeft: '5%'
                                }]}
                                imageStyle={{
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderBottomLeftRadius: 2,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        fontSize: 15,
                                        color: '#000000',
                                        backgroundColor: 'transparent',
                                        //top: '60%',
                                        //left: '25%',
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        letterSpacing: -0.017,
                                        lineHeight: 18,
                                        width: 89,
                                        height: 40,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderBottomLeftRadius: 2,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#000000',
                                        //top: '60%',
                                        //left: '25%',
                                        fontFamily: 'Inter',
                                        //fontWeight: '400',
                                        letterSpacing: -0.017,
                                        lineHeight: 18
                                    }}> Djadsahk, </Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 0.55, width: width, backgroundColor: 'red', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>

                        <View style={{
                            backgroundColor: '#000000',
                            width: '80%',
                            //width: 365,
                            //height: 388,
                            height: '138%',
                            left: '-3%',
                            marginTop: '5%',
                            //marginLeft: '20%',
                            paddingHorizontal: '10%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 2,
                            borderBottomLeftRadius: 2,
                            alignItems: 'stretch',
                            flexDirection: 'column'
                        }}>
                            <ImageBackground
                                source={require('../../../assets/images/questionbg3.png')}
                                style={[{
                                    width: '126%',
                                    height: '100%',
                                    bottom: '2%',
                                    left: '4%',
                                    //marginLeft: '20%',
                                    //marginRight: '-3%',
                                    //alignSelf:'center',
                                    paddingHorizontal: '10%',
                                    marginHorizontal: '-23%'
                                }]}
                                imageStyle={{
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 25,
                                    borderBottomRightRadius: 2,
                                    borderBottomLeftRadius: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#000000'
                                }}
                            >
                                <ImageBackground
                                    source={require('../../../assets/images/questionbg4.png')}
                                    style={{
                                        flex: 2.5, width: '111.5%', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', left: '-9%',
                                    }}
                                    imageStyle={{
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        //borderWidth: 1.5,
                                        //borderColor: '#000000'
                                        //borderBottomWidth:1.5,
                                        //borderBottomColor:'#000000'
                                    }}>
                                    <View style={{
                                        flex: 0.3, width: '111.5%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20, borderBottomWidth: 1,
                                        borderBottomColor: '#000000'
                                    }}>
                                        <Text style={{
                                            width: 264,
                                            height: 18,
                                            //left: 73,
                                            fontFamily: 'Inter',
                                            //fontWeight: '400',
                                            fontSize: 13,
                                            lineHeight: 18,
                                            color: '#000000',
                                            textAlign: "center",
                                            //top: '25%',

                                        }}>Ask a question for you both to answer:</Text>
                                    </View>
                                    <View style={{
                                        flex: 0.8, width: '111.5%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column',
                                    }}>
                                        <Text style={{
                                            width: 213,
                                            //height: 74,
                                            height: '20%',
                                            //left: 73,
                                            fontFamily: 'BakbakOne-Regular',
                                            //fontWeight: '400',
                                            fontSize: 22,
                                            lineHeight: 42,
                                            color: '#FFFFFF',
                                            textAlign: "center",
                                            bottom: '5%'
                                        }}>What is your </Text>
                                        <Text style={{
                                            width: 213,
                                            //height: 74,
                                            height: '20%',
                                            //left: 73,
                                            fontFamily: 'BakbakOne-Regular',
                                            //fontWeight: '400',
                                            fontSize: 22,
                                            lineHeight: 42,
                                            color: '#FFFFFF',
                                            textAlign: "center",
                                            bottom: '12%'
                                        }}>favourite color?</Text>
                                        <TouchableOpacity style={{
                                            height: '30%', width: '70%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column',
                                            borderRadius: 30
                                        }}>
                                            <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 30, bottom: '2%' }}>
                                                <TouchableOpacity>
                                                    <Image source={require('../../../assets/images/refreshicon.png')}
                                                        style={{ left: '30%' }} />
                                                </TouchableOpacity>
                                                <Text style={{
                                                    width: 162,
                                                    height: 22,
                                                    //left: 73,
                                                    fontFamily: 'Inter',
                                                    //fontWeight: '400',
                                                    fontSize: 17,
                                                    lineHeight: 22,
                                                    color: '#FFFFFF',
                                                    textAlign: "center",
                                                    //top: '25%',
                                                    left: '5%'
                                                }}>Get a new question</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <View style={{
                                    flex: 1.2, width: '127%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', left: '-9%', borderWidth: 1.5,
                                    borderColor: '#000000'
                                }}>
                                    <View style={{
                                        flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderBottomWidth: 1,
                                        borderBottomColor: '#000000'
                                    }}>
                                        <TouchableOpacity onPress={() => (navigation.navigate('ChatQNA'))}>
                                            <Text style={{
                                                width: 120,
                                                height: 22,
                                                //left: 73,
                                                fontFamily: 'Inter',
                                                //fontWeight: '400',
                                                fontSize: 17,
                                                lineHeight: 22,
                                                color: '#000000',
                                                textAlign: "center",
                                                //top: '25%',
                                            }}>Send question</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                        <TouchableOpacity onPress={() => (navigation.navigate('ChatOwnQuestion'))}>
                                            <Text style={{
                                                width: 264,
                                                height: 18,
                                                //left: 73,
                                                fontFamily: 'Inter',
                                                //fontWeight: '400',
                                                fontSize: 17,
                                                lineHeight: 18,
                                                color: '#000000',
                                                textAlign: "center",
                                                //top: '25%'
                                            }}>Type your own question</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                    {/* <View style={{ flex: 0.1, width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', top: '20%' }}>
                        <View style={{ flex: 0.8, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
                                <Image source={require('../../../assets/images/camera2.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2.2, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                            <Card style={{
                                width: '100%',
                                alignSelf: 'center',
                                //height: 47,
                                height: 37,
                                borderWidth: 1,
                                borderRadius: 100,
                                borderColor: 'rgba(142,142,142,0.3)',
                                backgroundColor: '#F7F7F7',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                flexDirection: 'row',
                                //flex: 1,
                                marginBottom: '4%',
                                marginLeft: '4%',
                            }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-end', marginTop: '-20%', width: '30%', top: '60%' }}>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-start', marginTop: '-25%', width: '80%', height: 37, borderRadius: 0, top: '0%', left: '5%' }}>
                                    <TextInput
                                        placeholder='Aa'
                                        placeholderTextColor='#BEBEBE'
                                        style={{
                                            //flex: 1,
                                            width: '100%',
                                            //height:47,
                                            fontSize: 20,
                                            color: '#000000',
                                            fontWeight: '400',
                                            //left: '2%',
                                            //top: '7%',
                                            lineHeight: 24,
                                            letterSpacing: -0.017,
                                            fontFamily: 'Inter',
                                            marginBottom: '-20%'
                                        }} />
                                </View>
                            </Card>
                        </View>
                        <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
                                <Image source={require('../../../assets/images/comment.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Image source={require('../../../assets/images/microphone.png')} />
                            </TouchableOpacity>
                        </View>
                    </View> */}

                </View>
            </View >
        </View >

    );
};
export default ChatQuestion;