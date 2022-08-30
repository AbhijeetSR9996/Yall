import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Dimensions } from 'react-native';
import { width, height } from '../../services/helper';
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/Rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { icons } from '../../../assets/icons/icons';
import { getWeeklyEvents, getEventData } from '../../api/events';

const JoinParty = ({ navigation, route }) => {

    const [weekevents, setWeekEvents] = useState([]);
    //const { slugUrl } = route.params;

    useEffect(() => {
        getEventData()
            .then(res => setWeekEvents(res.data))
            //console.log(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);

    //console.log(weekevents);
    //console.log(route);

    return (
        <View style={styles.main_view}>
            <Image
                style={{ position: 'absolute' }}
                source={require('../../../assets/images/joinpartybg.png')}
                resizeMode="cover" />

            <View style={{ backgroundColor: 'transparent', flex: 2, marginRight: '95%', marginBottom: '10%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" style={styles.left_arrow} />
                </TouchableOpacity>
            </View >
            <View style={{ backgroundColor: 'transparent', alignContent: 'space-between', justifyContent: 'space-around', alignSelf: 'center', flex: 1 }}>
                <Text style={{
                    fontFamily: "BakbakOne-Regular",
                    color: "#FFFFFF",
                    fontSize: 35,
                    //fontWeight: "400",
                    alignSelf: 'center',
                    letterSpacing: -0.017,
                    lineHeight: 49,
                }}>Free Tonight? </Text>
                <Text style={{
                    fontFamily: 'Inter',
                    color: "#FFFFFF",
                    fontSize: 15,
                    //fontWeight: "400",
                    letterSpacing: -0.017,
                    width: 324,
                    //width: '90%',
                    height: 54,
                    //alignSelf:'center',
                    textAlign: 'center',
                    lineHeight: 18
                }}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard. </Text>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'flex-start' }}>

                <TouchableOpacity
                    style={[
                        {
                            top: '35%',
                            alignSelf: 'center',
                            width: width * 0.8,
                            height: height * 0.07,
                            borderWidth: 1,
                            right: '2%'
                        },
                    ]}
                    //onPress={() => { navigation.navigate('WednesdayLoveNight') }}
                    onPress={() => navigation.navigate('WednesdayLoveNight',
                        // { slugUrl: weekevents.slug_url }
                        { data: weekevents[0] }
                    )}>
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
                            right: '28%',
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
                {/* <Rectangular
                    path="WednesdayLoveNight"
                    style={{
                        width: 10,
                        position: 'absolute',
                        alignSelf: 'center',
                        top: '40%',
                    }}
                    name="Book Now"
                /> */}
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'flex-start' }}></View>
        </View>
    )
}

export default JoinParty;

