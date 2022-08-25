import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon1 from 'react-native-vector-icons/Feather';
import { getWeeklyEvents } from '../../api/events';
import Moment from 'moment';

const WeekendEvent = ({ navigation }) => {

    const onPressSearch = () => {
        return;
    };

    const [weekevents, setWeekEvents] = useState([]);

    useEffect(() => {
        getWeeklyEvents()
            .then(res => setWeekEvents(res.data))
            //console.log(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);
    //console.log('data', weekevents);

    return (
        <SafeAreaView style={styles.main_container}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.letf_arrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchBar
                        title="Type location"
                        onPressSearch={onPressSearch}
                    />
                </View>
                <View style={styles.weekend_container}>
                    {/* <FlatList data={event}
                        renderItem={({ item }) => <Text>{item.event_on}</Text>}
                        keyExtractor={item => item.id} /> */}
                    <ScrollView>
                        {weekevents.map((arrayData) => (
                            <View key={arrayData.id} style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                                <ImageBackground
                                    source={{ uri: 'https://yall-app.s3.ap-south-1.amazonaws.com/event_media/logo_1661342738849.png' }}
                                    style={styles.image_size}
                                    imageStyle={{ borderRadius: 10 }}
                                    resizeMode="stretch">
                                    <Text style={styles.image_inner_text}><Icon name="calendar" /> {Moment(arrayData.event_on).format('DD MMM YYYY')}</Text>
                                    <Text style={styles.image_inner_text}><Icon1 name="watch" /> {Moment(arrayData.event_on).format('HH:MM A')}</Text>
                                </ImageBackground>
                                <View style={styles.right_container}>
                                    <Text style={styles.right_heading}>{arrayData.title}</Text>
                                    <TouchableOpacity style={styles.right_container_btn}
                                        onPress={() => navigation.navigate('WednesdayLoveNight')}>
                                        <Text style={styles.right_btn}>Know More
                                            {/* {arrayData.id} */}
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