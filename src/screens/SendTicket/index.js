import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Dimensions } from 'react-native';
import { width, height } from '../../services/helper';
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import SearchBar from '../../component/SearchBar';
import { Card } from 'react-native-paper';
import { icons } from '../../../assets/icons/icons';

const SendTicket = ({ navigation }) => {

    return (
        <SafeAreaView >
            <ImageBackground style={styles.image_background} source={require('../../../assets/images/wednesdaynight-share.png')}>
                <View style={styles.main_view}>
                    <View style={{ marginRight: '95%', }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="angle-left" style={styles.left_arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_view2}>
                        <View style={{
                            flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF', width: width,
                            height: height * 0.75,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }}>

                            <View style={{
                                flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent', borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                            }}>

                                <ScrollView showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'transparent', height: '90%', top: '3%' }}>
                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontFamily: 'BakbakOne-Regular', fontSize: 15, lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontFamily: 'Inter', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontFamily: 'Inter', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>

                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>

                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>

                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>

                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>

                                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, paddingVertical: '5%' }}>
                                        <View style={{ backgroundColor: 'transparent', flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../assets/images/sendphoto.png')} style={{ left: '10%' }} />
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 2, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                                            <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'BakbakOne-Regular', lineHeight: 21, letterSpacing: -0.017, left: '5%' }}> Jhone</Text>
                                            <View>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> Lorem Ipsum is simply dummy text of</Text>
                                                <Text style={{ color: '#A9A9A9', fontSize: 10, fontFamily: 'Inter', lineHeight: 12, letterSpacing: -0.017, left: '5.5%', width: '100%' }}> printing and typesetting industry.</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity style={{
                                                borderRadius: 20,
                                                borderWidth: 1,
                                                borderColor: '#020203',
                                                backgroundColor: '#DCC7E1',
                                                height: '40%',
                                                width: '65%',
                                            }}
                                                onPress={() => navigation.navigate('Chat')}>
                                                <Text style={[{
                                                    paddingVertical: '0%',
                                                    letterSpacing: -0.017,
                                                    fontWeight: '500',
                                                    fontSize: 8,
                                                    lineHeight: 10,
                                                    alignSelf: 'center',
                                                    color: '#000000',
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: "400",
                                                    letterSpacing: -0.017,
                                                    width: 324,
                                                    //width: '90%',
                                                    height: 54,
                                                    //alignSelf:'center',
                                                    textAlign: 'center',
                                                    lineHeight: 18
                                                }]}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '90%' }} />
                                    </View>
                                </ScrollView>

                            </View>
                            <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', }}>
                                <TouchableOpacity
                                    style={[
                                        {
                                            alignSelf: 'center', width: width * 0.8,
                                            height: height * 0.07,
                                            borderWidth: 1,
                                            //bottom: '20%',
                                            bottom: '28%',
                                            right: '2%'
                                        },
                                    ]} onPress={() => { navigation.navigate('Chat') }}>
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
                                            //fontWeight: '900',
                                            fontSize: 18,
                                            fontFamily: 'BakbakOne-Regular',
                                            color: '#000000',
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            //paddingVertical: 10,
                                            top: '30.3%',
                                            right: '35%',
                                        }}>Done</Text>
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
                            </View >

                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SendTicket;

