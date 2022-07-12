import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const Events = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.mainContainer} source={require('../../../assets/images/Gradient-Fill.png')}>
            <View style={styles.firstContainer}>
                <TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.weekendEvent}
                        resizeMode="stretch"
                    >
                        <Text style={styles.weekendText}>Weekend Event</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.sceondContainer}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Discover')}> */}
                    <TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/discover-event.png')}
                        style={styles.discoverDates}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discoverText}>Discover Event</Text>

                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

export default Events;