import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/Rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { icons } from '../../../assets/icons/icons';
import { Card } from 'react-native-paper';

const WeeklyEventMap = ({ navigation }) => {

    return (
        <View style={styles.main_view}>
            <Image
                style={{ position: 'absolute' }}
                source={require('../../../assets/images/wednesdaynight-share.png')}
                resizeMode="cover" />

            <View style={{ backgroundColor: 'transparent', flex: 1, marginBottom: '-130%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" style={styles.left_arrow} />
                </TouchableOpacity>
            </View >
            <View style={{ backgroundColor: 'transparent', alignContent: 'space-between', justifyContent: 'space-around', alignSelf: 'center', flex: 0.7, width: width, }}>
                <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'center', flex: 1, width: width }}></View >
                <View style={{ backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', alignSelf: 'center', flex: 1.5, width: width }}>
                    <Text style={styles.big_text}>Wednesday Love Night </Text>
                    <Text style={styles.small_text}>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard. </Text></View>
            </View>

            <View style={{ backgroundColor: 'transparent', flex: 0.6, alignItems: 'center', justifyContent: 'center', width: width, alignSelf: 'center' }}>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'transparent', width: width, marginTop: '5%' }}>
                    <Text style={[styles.icon_text, { marginTop: '-3%', marginLeft: '6%', color: '#FFFFFF' }]}>
                        <Image source={require('../../../assets/images/calendarwhite.png')} style={{ width: 12, height: 17, alignSelf: 'center', }} />   20 Dec. 2020</Text>
                    <Text style={[styles.icon_text, { marginTop: '-3%', marginRight: '6%', color: '#FFFFFF' }]}>
                        <Image source={require('../../../assets/images/watchwhite.png')} />   07:00 PM</Text>
                </View>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'transparent', width: width, width: width }}>
                    <Card style={{
                        width: '90%',
                        alignSelf: 'center',
                        height: '90%',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#6B6B6B',
                        backgroundColor: '#F7F7F7',
                        bottom: '5%',
                        flex: 1
                    }}>

                        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/map.png')} style={{ height: 160, width: 342, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: '0%' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, top: '0%' }}>
                            <Text style={{ fontFamily: 'BakbakOne-Regular', fontSize: 15, color: '#000000', lineHeight: 21, letterSpacing: -0.017, alignItems: 'center' }}>Mumbai rooftop cocktail </Text>
                        </View>
                    </Card>
                </View>
            </View>

            <View style={{ backgroundColor: 'transparent', flex: 0.3, alignItems: 'stretch', justifyContent: 'center', width: width, alignSelf: 'center', flexDirection: 'column', }}>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', }}>
                    <TouchableOpacity style={[styles.buttonContainer, { marginTop: '4%', left: '-5%' }]}
                        onPress={() => navigation.navigate('SendTicket')}>
                        <Text style={styles.buttonText}><Icon1 name="send" /> Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonContainer2, { marginTop: '4%', left: '10%' }]}
                        onPress={() => navigation.navigate('ShareLink')}>
                        <Text style={styles.buttonText}><Icon1 name="share-2" /> Share</Text>
                    </TouchableOpacity>
                </View>
                {/* <Rectangular path="WeeklyEventMap" name="Book Now" style={styles.rectangularButton} /> */}
                <TouchableOpacity
                    style={[
                        {
                            bottom: '15%',
                            alignSelf: 'center',
                            width: width * 0.8,
                            height: height * 0.07,
                            borderWidth: 1,
                            right: '2%'
                        },
                    ]}
                    onPress={() => { navigation.navigate('WeeklyEventMap') }}>
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
                            right: '30%',
                        }}>Book Now</Text>
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
    )
}

export default WeeklyEventMap;

