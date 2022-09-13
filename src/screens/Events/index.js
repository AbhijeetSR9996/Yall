import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"
import { getEventTypes } from '../../api/events';

const Events = () => {
    const navigation = useNavigation();

    const [eventtype, setEventType] = useState([]);

    useEffect(() => {
        getEventTypes()
            .then(res => setEventType(res.data))
            //console.log(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);
    //console.log('data', eventtype);
    //const arrayData = res.data;

    return (
        <SafeAreaView >
            <ImageBackground style={styles.main_container} source={require('../../../assets/images/Gradient-Fill.png')}>
                <View style={styles.first_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('WeekendEvent')}>
                        <ImageBackground
                            source={require('../../../assets/images/weekend.png')}
                            style={styles.weekend_event}
                            resizeMode="stretch"
                        >
                            <Text style={styles.weekend_text}>Weekend Events</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.sceond_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
                        <ImageBackground
                            source={require('../../../assets/images/discover-event.png')}
                            style={styles.discover_dates}
                            resizeMode="stretch">
                            <Text style={styles.discover_text}>Discover Dates</Text>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </SafeAreaView>
    );
}

export default Events;