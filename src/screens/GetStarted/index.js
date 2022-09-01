import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';
import Styles from "./styles";


const GetStarted = ({ navigation }) => {
    return (
        <View style={Styles.main_container}>
            <ImageBackground
                source={require('../../../assets/images/core/background-signup.png')}
                resizeMode="stretch"
                style={Styles.image_background}
            >
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}></View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/logo.png')}
                        style={Styles.logo_img}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={Styles.headline}>By clicking “Log in”, you agree with our Terms. Learn, how we process
                            your data in our privacy policy and cokkies policy.</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity
                            style={{
                                top: '0%',
                                alignSelf: 'center',
                                width: width * 0.8,
                                height: height * 0.07,
                                borderWidth: 1,

                                right: '2%'
                            }}
                            onPress={() => { navigation.navigate('SignUp') }}>
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
                                    fontFamily: "BakbakOne-Regular",

                                    color: '#000000',
                                    alignSelf: 'center',
                                    justifyContent: 'center',

                                    top: '30%',

                                    right: '25.3%',
                                    lineHeight: 25,
                                    letterSpacing: -0.017
                                }}>Get Started</Text>
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
            </ImageBackground>
        </View>
    );
};
export default GetStarted;


