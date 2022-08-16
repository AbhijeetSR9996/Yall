import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height } from '../../services/helper';
import { icons } from '../../../assets/icons/icons';

const PremiumSubscription = ({ navigation }) => {

    return (
        <View style={Styles.main_container}>
            <ImageBackground
                //source={require('../../../assets/images/ownquestionbg.png')}
                resizeMode="stretch"
                style={Styles.image_background}>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', }}>
                    <View style={{ flex: 0.7, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity style={{ right: '125%', top: '0%' }}><Image source={require('../../../assets/images/crossblack.png')}
                        /></TouchableOpacity>
                        <Text style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 25,
                            color: '#000000',
                            lineHeight: 35,
                            //textAlign: 'center',
                            letterSpacing: -0.017,
                            //bottom: '7%'
                            //marginLeft: '4.5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            justifyContent: 'center',
                            marginRight: '4%',
                            left: '5%'
                        }}>Boost </Text>
                    </View>

                    <View style={{ flex: 0.8, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent', right: '80%', height: '32%', width: '10%', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => navigation.navigate('MainBottomNavigation')}>
                            <Image source={require('../../../assets/images/userpremium.png')} />
                        </TouchableOpacity>
                        {/* <Image source={require('../../../assets/images/userpremium.png')}
                            style={{ height: '27%', width: '7.3%', right: '80%', }} /> */}
                        <Image source={require('../../../assets/images/ellipsesubscription.png')}
                            style={{ right: '-10%' }}
                        />
                        <Image source={require('../../../assets/images/loopsubscription.png')}
                            style={{ right: '57.5%' }}
                        />
                    </View>
                    <View style={{ flex: 1.5, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', }}>
                        <Text style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 25,
                            color: '#000000',
                            lineHeight: 35,
                            textAlign: 'center',
                            letterSpacing: -0.017,
                            //bottom: '7%'
                            //marginLeft: '4.5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            justifyContent: 'center'
                        }}>Unlimited Likes </Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 14,
                            color: '#000000',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            bottom: '5%',
                            //marginLeft: '4.5%',
                            //marginBottom: '-3%'
                            textAlign: 'center',
                            justifyContent: 'center',
                            width: 304
                        }}>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard. </Text>
                        <Text style={{
                            fontFamily: 'Inter',
                            fontSize: 15,
                            color: '#000000',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            textAlign: 'center',
                            //bottom: '7%'
                            //marginLeft: '4.5%',
                            //marginBottom: '-3%'
                            //textAlign: 'center',
                            justifyContent: 'center'
                        }}>Google Wallet </Text>

                    </View>

                </View>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', width: '100%', borderTopLeftRadius: 35, borderTopRightRadius: 35, marginBottom: '3%' }}>
                    <View style={{ flex: 0.75, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                        <View style={{ flex: 0.1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                            <Text style={{
                                //width: 264,
                                width: '100%',
                                height: 18,
                                fontFamily: 'BakbakOne-Regular',
                                fontSize: 15,
                                lineHeight: 21,
                                color: '#6B6B6B',
                                //textAlign: 'left',
                                left: '148%',
                                top: '2%'
                            }}>Google Play</Text>
                        </View>
                        <View style={{ flex: 0.1, borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1, bottom: '3%' }} />

                        <View style={{ flex: 0.65, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', }}>
                            <View style={{ flex: 0.6, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', }}>
                                <View style={{ flex: 0.3, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

                                    <ImageBackground source={require('../../../assets/images/ellipseyall.png')}
                                        style={{ height: '83.5%', width: '76.5%', justifyContent: 'center', top: '5%' }}
                                        imageStyle={{ marginLeft: '34%', }}
                                    ><Image source={require('../../../assets/images/yallpremium.png')}
                                        style={{ left: '48%', bottom: '5%' }}
                                        /></ImageBackground>

                                </View>
                                <View style={{ flex: 0.7, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', flexDirection: 'column', }}>
                                    <Text style={{
                                        //width: 264,
                                        width: '100%',
                                        //height: 18,
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        lineHeight: 18,
                                        color: '#010101',
                                        top: '7%',
                                        //textAlign: 'left',
                                        left: '3%',
                                    }}>1 Month - Yall Premium</Text>
                                    <Text style={{
                                        //width: 264,
                                        width: '100%',
                                        //height: 18,
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        lineHeight: 15,
                                        color: '#AAAAAA',
                                        left: '3%',
                                        bottom: '4%',
                                    }}>Yall- dating -friend -bizz</Text>
                                </View>

                            </View>
                            <View style={{ flex: 0.1, borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1, top: '36%' }} />
                            <View style={{ flex: 0.3, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <Text style={{
                                    //width: 264,
                                    width: '100%',
                                    //height: 18,
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    lineHeight: 15,
                                    color: '#000000',
                                    //top: '7%',
                                    //textAlign: 'left',
                                    left: '8%',
                                }}>Starting today</Text>
                                <Text style={{
                                    //width: 264,
                                    width: '100%',
                                    //height: 18,
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    lineHeight: 15,
                                    color: '#000000',
                                    bottom: '35%',
                                    //textAlign: 'left',
                                    left: '63%',
                                }}>INR 609.00 / month</Text>
                                <Text style={{
                                    //width: 264,
                                    width: '100%',
                                    //height: 18,
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    lineHeight: 15,
                                    color: '#000000',
                                    //top: '7%',
                                    //textAlign: 'left',
                                    left: '8%',
                                }}>Cancel anytime in subscription on Google Play</Text>

                            </View>
                        </View>
                        <View style={{ flex: 0.35, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ flex: 0.3, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', }}>
                                <Image source={require('../../../assets/images/bhimupilogo.png')}
                                    style={{ left: '20%' }}
                                />
                            </View>
                            <View style={{ flex: 0.7, backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', flexDirection: 'column', }}>
                                <Text style={{
                                    //width: 264,
                                    width: '100%',
                                    //height: 18,
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    lineHeight: 15,
                                    color: '#000000',
                                    top: '9%',
                                    left: '3%',
                                    //textAlign: 'left',
                                    //left: '45%',
                                }}>*******265415@ybl</Text>
                                <Text style={{
                                    //width: 264,
                                    width: '100%',
                                    //height: 18,
                                    fontFamily: 'Inter',
                                    fontSize: 10,
                                    lineHeight: 12,
                                    color: '#FF6161',
                                    left: '3%',
                                    top: '3%'
                                }}>Unavailable on subscription</Text>
                                <TouchableOpacity>
                                    <Text style={{ left: 200, marginTop: -40, textAlign: 'center', color: '#797979' }}>{icons.right}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.25, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', }}>
                        <TouchableOpacity
                            style={{
                                //top: '8%',
                                alignSelf: 'center',
                                width: width * 0.8,
                                height: height * 0.07,
                                borderWidth: 1,
                                //alignSelf: 'center',
                                right: '2%',
                                //marginTop: '0%',
                                //marginBottom: '18%'
                            }}
                            onPress={() => navigation.navigate('MainBottomNavigation')}>
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
                                }}>Continue</Text>
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
            </ImageBackground >
        </View >
    )
}

export default PremiumSubscription;

