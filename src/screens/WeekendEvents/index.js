import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon1 from 'react-native-vector-icons/Feather';
import { getWeeklyEvents } from '../../api/events';
import { width } from '../../services/helper';
import Moment from 'moment';
import { S3_EVENTS_FOLDER } from '../../services/constant';
import { getS3Url } from '../../services/helper';

const WeekendEvent = ({ navigation }) => {

    const onPressSearch = () => {
        return;
    };

    const [weekevents, setWeekEvents] = useState([]);

    useEffect(() => {
        getWeeklyEvents()
            .then(res => setWeekEvents(res.data))

            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);
    console.log(weekevents);

    return (
        <SafeAreaView style={styles.main_container}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.letf_arrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{
                        fontFamily: 'Inter', fontSize: 16, lineHeight: 18, letterSpacing: -0.017, color: '#808080', width: width * 0.4, marginLeft: '17%', marginTop: '2%', marginBottom: '2%'
                    }}>Current Location</Text>
                    <SearchBar

                        title="Mumbai"
                        onPressSearch={onPressSearch}

                    />
                </View>
                <View style={styles.weekend_container}>
                    <ScrollView>
                        {weekevents.map((arrayData) => (
                            <View key={arrayData.id} style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                                <ImageBackground
                                    source={{ uri: getS3Url(S3_EVENTS_FOLDER, arrayData.front_banner_url) }}
                                    style={styles.image_size}
                                    imageStyle={{ borderRadius: 10 }}
                                    resizeMode="stretch">
                                    <Text style={styles.image_inner_text}><Icon name="calendar" /> {Moment(arrayData.event_on).format('DD MMM YYYY')}</Text>
                                    <Text style={styles.image_inner_text}><Icon1 name="watch" /> {Moment(arrayData.event_on).format('HH:MM A')}</Text>
                                </ImageBackground>
                                <View style={styles.right_container}>
                                    <Text style={styles.right_heading}>{arrayData.title}</Text>
                                    <TouchableOpacity style={styles.right_container_btn}
                                        onPress={() => navigation.navigate('WednesdayLoveNight', { slugUrl: arrayData.slug_url })}>
                                        <Text style={styles.right_btn}>
                                            Know More
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}</ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeekendEvent;