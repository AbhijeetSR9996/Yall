import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const Events = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
        <ImageBackground style={styles.main_container} source={require('../../../assets/images/Gradient-Fill.png')}>
            <View style={styles.first_container}>
                <TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.weekend_event}
                        resizeMode="stretch"
                    >
                        <Text style={styles.weekend_text}>Weekend Event</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.sceond_container}>
                <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
                    <ImageBackground
                        source={require('../../../assets/images/discover-event.png')}
                        style={styles.discover_dates}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_text}>Discover Event</Text>

                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ImageBackground>
        </SafeAreaView>
    );
}

export default Events;