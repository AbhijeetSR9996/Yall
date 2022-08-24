import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon1 from 'react-native-vector-icons/Feather';
import { getWeeklyEvents } from '../../api/events';

//const coverimage = { uri: 'https://reactjs.org/logo-og.png' };

const WeekendEvent = ({ navigation }) => {

    const event = [
        { id: '1', cover_banner_url: require('../../../assets/images/weekend.png'), date: '22 May 2022', time: '09:00 PM', bold_text: 'Wednesday Love Night', button_text: 'Know More' },
        { id: '2', cover_banner_url: require('../../../assets/images/weekend.png'), date: '22 May 2022', time: '09:00 PM', bold_text: 'Wednesday Love Night', button_text: 'Know More' },
        { id: '3', cover_banner_url: require('../../../assets/images/weekend.png'), date: '22 May 2022', time: '09:00 PM', bold_text: 'Wednesday Love Night', button_text: 'Know More' },
        { id: '4', cover_banner_url: require('../../../assets/images/weekend.png'), date: '22 May 2022', time: '09:00 PM', bold_text: 'Wednesday Love Night', button_text: 'Know More' },
    ];

    const onPressSearch = () => {
        return;
    };

    // useEffect(() => {
    // 	async function getData() {
    //         const response = await fetch(
    //         )
    //         console.log(response)
    //     }
    //     getData()
    // },[]);

    const [weekevents, setWeekEvents] = useState(null);

    useEffect(() => {
        getWeeklyEvents()
            .then(res => setWeekEvents(res.data))
            //console.log(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);

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
                        renderItem={({ item }) => <Text>{item.bold_text}</Text>}
                        keyExtractor={item => item.id} /> */}
                    <ScrollView>
                        {event.map((element) => (
                            <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                                <ImageBackground
                                    key={element.id}
                                    source={element.cover_banner_url}
                                    style={styles.image_size}
                                    imageStyle={{ borderRadius: 10 }}
                                    resizeMode="stretch">
                                    <Text style={styles.image_inner_text}><Icon name="calendar" /> {element.date}</Text>
                                    <Text style={styles.image_inner_text}><Icon1 name="watch" /> {element.time}</Text>
                                </ImageBackground>
                                <View style={styles.right_container}>
                                    <Text style={styles.right_heading}>{element.bold_text}</Text>
                                    <TouchableOpacity style={styles.right_container_btn}
                                        onPress={() => navigation.navigate('WednesdayLoveNight')}>
                                        <Text style={styles.right_btn}>{element.button_text}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}</ScrollView>
                    {/* <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch">
                        <Text style={styles.image_inner_text}><Icon name="calendar" /> 09 May 2022</Text>
                        <Text style={styles.image_inner_text}><Icon1 name="watch" /> 09:00 PM</Text>
                    </ImageBackground>
                    <View style={styles.right_container}>
                        <Text style={styles.right_heading}>Wednesday Love Night</Text>
                        <TouchableOpacity style={styles.right_container_btn}
                            onPress={() => navigation.navigate('WednesdayLoveNight')}>
                            <Text style={styles.right_btn}>Know More</Text>
                        </TouchableOpacity>
                    </View> */}
                    { }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeekendEvent;