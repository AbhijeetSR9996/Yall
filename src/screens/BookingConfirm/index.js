import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {Rectangular} from '../../component/Buttons/rectangular';

const BookingConfirm = ({ navigation }) => {

    return (

        <SafeAreaView >
            <View style={styles.main_view}>
            <Image
          style={styles.image}
          source={require('../../../assets/images/splashScreen1.png')}
          resizeMode="cover"
        />
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" style={styles.left_arrow} />
                </TouchableOpacity>
            </View>

                <Text style={styles.main_text}>Congratulations </Text>
                <Text style={styles.desc_text}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard.</Text>
                <Rectangular path="BookingConfirm" name="Back Home" style={styles.button1} />
                <Rectangular path="BookingConfirm" name="Get Ticket"  style={styles.button2}/>
                </View>
        </SafeAreaView>
    )
}

export default BookingConfirm;