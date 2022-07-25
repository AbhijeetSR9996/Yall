import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { Rectangular } from '../../component/Buttons/rectangular';
import { StyleSheet, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';

const { width, height } = Dimensions.get('window');

const EventTicket = ({ navigation }) => {

    return (

        <View style={styles.main_view}>
            <Image
                style={styles.image_bg}
                source={require('../../../assets/images/Gradient-Fill.png')}
                resizeMode="cover" />
            <View style={styles.first_view}>
                {/* <Text style={styles.main_text} onPress={()=>navigation.navigate('EventTimer')}>My Ticket </Text> */}
            </View>

            <View style={styles.second_view}>
            <Text style={styles.main_text} onPress={()=>navigation.navigate('EventTimer')}>My Ticket </Text>
                <Card
                    style={styles.card_view}>
                    <Image
                        source={require('../../../assets/images/ticket-image.png')}  style={styles.image}/>
                    <Text style={styles.desc_text} onPress={()=>navigation.navigate('EventTimer')}>Jhone week </Text>
                    
                    <View style={styles.view1}>
                    <View style={styles.view2}>
                    <Text style={styles.text1}>21 Dec.2021 </Text>
                    <Text style={styles.text1}>Isfahkh </Text>  
                    </View>
                    <View style={styles.view3}>
                    <View style={styles.view4}>
                    <Text style={styles.text2}>Time </Text>
                    <Text style={styles.text3}>07:00 PM </Text>
                    </View>
                    <View style={[styles.view4,{justifyContent:'flex-start'}]}>
                    <Text style={styles.text2a}>Seat </Text>
                    <Text style={styles.text3a}>Ubox A, 21 </Text>
                    </View>
                    </View>
                    </View>
                </Card>
                    <Image source={require('../../../assets/images/horizontaline2.png')} style={{ width: '80%',height:'0.1%',backgroundColor:'white' }} />
                <Card style={styles.card_view2}>
                    <Image
                        style={styles.image2}
                        source={require('../../../assets/images/barcode.png')} />
                </Card>
            </View>

            {/* <View style={styles.third_view}>
            <Card
                    style={styles.card_view2}>
                    <Image
                        style={styles.image2}
                        source={require('../../../assets/images/barcode.png')} />
                </Card>
            </View> */}
        </View>
    )
}

export default EventTicket;
