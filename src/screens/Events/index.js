import React from "react";
import { View, Text, ImageBackground ,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles"

const Events = () => {
    return (
        // <View style={styles.mainContainer}>
        <ImageBackground style={styles.mainContainer} source={require('../../../assets/images/Gradient-Fill.png')}>
            <View style={styles.firstContainer}>
                <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/weekend-event.png')}
                  style={styles.weekendEvent}
                  resizeMode="stretch"
                />
                </TouchableOpacity>
            </View>
            <View style={styles.sceondContainer}>
            <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/discover-dates.png')}
                  style={styles.discoverDates}
                  resizeMode="stretch"
                />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        // </View>
    );
}

export default Events;