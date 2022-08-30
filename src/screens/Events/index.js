import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"
import { getEventTypes } from '../../api/events';
import { S3_EVENTS_FOLDER } from '../../services/constant';
import { getS3Url } from '../../services/helper';

const Events = () => {
    const navigation = useNavigation();

    const [eventtype, setEventType] = useState([]);

    useEffect(() => {
        getEventTypes()
            .then(res => setEventType(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);
    console.log(eventtype);


    return (
        <SafeAreaView >
            <ImageBackground style={styles.main_container} source={require('../../../assets/images/Gradient-Fill.png')}>
                <View style={styles.first_container}>
                    <ScrollView>
                        {eventtype.map((arrayData) => (

                            <View key={arrayData.id} style={{ alignItems: 'stretch', flexDirection: 'row' }}>

                                <TouchableOpacity onPress={() => {
                                    if (arrayData.name == "WEEKEND EVENTS") {
                                        navigation.navigate('WeekendEvent')
                                    }
                                    else { navigation.navigate('Discover') }
                                }}>
                                    <ImageBackground
                                        source={{ uri: getS3Url(S3_EVENTS_FOLDER, arrayData.banner_url) }}
                                        style={styles.weekend_event}
                                        imageStyle={{ borderRadius: 20 }}
                                        resizeMode="stretch">
                                        <Text style={styles.weekend_text}>{arrayData.name}</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>

            </ImageBackground>
        </SafeAreaView>
    );
}

export default Events;