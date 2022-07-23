import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import SearchBar from '../../component/SearchBar';
import { Card } from 'react-native-paper';

const ShareLink = ({ navigation }) => {

    return (
        <SafeAreaView >
            <ImageBackground style={styles.image_background} source={require('../../../assets/images/wednesdaynight-share.png')}>
                <View style={styles.main_view}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="angle-left" style={styles.left_arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_view2}>
                        <View style={{
                            flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'transparent', width: width,
                            height: height * 0.75,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }}>
                            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', marginTop: '-70%' }}>
                                {/* <SearchBar title={'Share via "Nearby Share"'} /> */}

                                <Card style={{
                                    width: '80%',
                                    alignSelf: 'center',
                                    height: 61,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: '#828282',
                                    backgroundColor: '#F7F7F7',
                                }}>
                                    <TouchableOpacity onPress={()=>{navigation.navigate('SendTicket')}}>
                                        <Image source={require('../../../assets/images/linkicon.png')}
                                            style={{ left: '7%', top: '100%' }} />
                                    </TouchableOpacity>
                                    <TextInput
                                        placeholder='Share via "Nearby Share"'
                                        style={{
                                            flex: 1,
                                            fontSize: 15,
                                            color: '#A9A9A9', left: '20%', bottom: '15%'
                                        }} />
                                </Card>


                            </View>

                            <View style={{ flex: 0.12, alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent', }}>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={{ left: '30%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%', }} />
                                        </TouchableOpacity>
                                        <Text style={{ color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Whatsapp</Text>
                                    </View>
                                    <View style={{ left: '75%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%', }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>
                                    <View style={{ left: '120%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '0%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Snapchat</Text>
                                    </View>
                                    <View style={{ left: '165%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '0%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> News Feed</Text>
                                    </View>
                                    <View style={{ left: '210%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>
                                    <View style={{ left: '255%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '10%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>
                                    <View style={{ left: '300%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>
                                    <View style={{ left: '345%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', top: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>

                                </ScrollView>
                            </View>
                            <View style={{ flex: 0.10, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'transparent', }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={{ left: '30%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '-10%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Your groups</Text>
                                    </View>
                                    <View style={{ left: '65%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/gmail.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '25%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chat</Text>
                                    </View>
                                    <View style={{ left: '110%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/gmail.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Gmail</Text>
                                    </View>
                                    <View style={{ left: '155%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/skype.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '20%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Skype</Text>
                                    </View>
                                    <View style={{ left: '210%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/whatsapp.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '0%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Whatsapp</Text>
                                    </View>
                                    <View style={{ left: '255%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/instagram.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Chats</Text>
                                    </View>
                                    <View style={{ left: '300%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/snapchat.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> Snapchat</Text>
                                    </View>
                                    <View style={{ left: '345%' }}>
                                        <TouchableOpacity >
                                            <Image source={require('../../../assets/images/facebook.png')} style={{ left: '5%' }} />
                                        </TouchableOpacity>
                                        <Text style={{ left: '15%', color: '#A9A9A9', fontWeight: '400', fontSize: 12, fontFamily: 'Inter', lineHeight: 15 }}> News Feed</Text>
                                    </View>

                                </ScrollView>
                            </View >
                            <View style={{ flex: 0.02, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipse1.png')} style={{ paddingRight: '3%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipse2.png')} style={{ paddingRight: '3%' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ShareLink;
