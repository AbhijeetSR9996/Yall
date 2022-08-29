import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height } from '../../services/helper';
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/Rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { icons } from '../../../assets/icons/icons';
import { getEventData } from '../../api/events';
import { ScrollView } from 'react-native-gesture-handler';
import Moment from 'moment';
import { S3_EVENTS_FOLDER } from '../../services/constant';
import { getS3Url } from '../../services/helper';

const WednesdayLoveNight = ({ navigation, route }) => {

    //const [fetch, setFetch] = useState([]);
    //const { slugUrl } = route.params;

    // useEffect(() => {
    //     getEventData(slugUrl)
    //         .then(res => setFetch(res.data))

    //         .catch(err => console.log(err, 'Something went wrong!'));
    // }, [slugUrl]);
    //console.log('route:', route);
    //console.log('route params:', route.params);
    //console.log(slugUrl);
    //console.log(fetch);


    return (
        <SafeAreaView >
            {/* <ScrollView>
                {fetch.map((arrayData) => ( */}
            <ImageBackground style={styles.image_background} //source={{ uri: 'https://yall-app.s3.ap-south-1.amazonaws.com/event_media/logo_1661342738849.png' }}
                source={require('../../../assets/images/wednesday-night.png')}
            //source={{ uri: getS3Url(S3_EVENTS_FOLDER, arrayData.banner_url) }}
            >
                <View style={styles.main_view}>
                    <View style={{ marginRight: '95%', }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="angle-left" style={styles.left_arrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.main_view2}>
                        <Text style={styles.big_text}>
                            {/* {arrayData.title} */}
                            Wednesday Love Night
                        </Text>
                        <Text style={styles.small_text}>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard. </Text>

                        <Text style={[styles.icon_text, { marginLeft: '6%' }]}>
                            <Image source={require('../../../assets/images/location.png')} style={{ width: 12, height: 17 }} />     Sector-62 Noida</Text>
                        <Text style={styles.icon_text}>
                            <Image source={require('../../../assets/images/watch.png')} />    07:00 PM</Text>
                        <Text style={[styles.icon_text]}>
                            <Image source={require('../../../assets/images/calendar.png')} />   20 Dec. 2020</Text>
                        <Text style={styles.small_text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.</Text>

                        <View style={styles.main_view3}>
                            <TouchableOpacity style={styles.buttonContainer}
                                onPress={() => navigation.navigate('SendTicket')}>
                                <Text style={styles.buttonText}><Icon1 name="send" /> Send</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer2}
                                onPress={() => navigation.navigate('ShareLink')}>
                                <Text style={styles.buttonText}><Icon1 name="share-2" /> Share</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={[
                                {
                                    marginTop: '14%',
                                    alignSelf: 'center',
                                    width: width * 0.8,
                                    height: height * 0.07,
                                    borderWidth: 1,
                                    right: '2%'
                                },
                            ]}
                            onPress={() => { navigation.navigate('PaymentMethods') }}>
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
            </ImageBackground>
            {/* ))}
            </ScrollView> */}
        </SafeAreaView>
    )
}

export default WednesdayLoveNight;

