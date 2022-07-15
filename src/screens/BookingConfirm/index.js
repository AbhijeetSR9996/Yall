import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import {Rectangular} from '../../component/Buttons/rectangular';

const BookingConfirm = ({ navigation }) => {

    return (

        <SafeAreaView >
            <View style={styles.main_view}>
            <Image
          style={styles.image}
          source={require('../../../assets/images/Gradient-Fill.png')}
          resizeMode="cover"
        />
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/images/booking-confirm-icons.png')}
                    style={styles.icons}/>
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
