import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon1 from 'react-native-vector-icons/Feather';
import {Rectangular} from '../../component/Buttons/rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";

const WednesdayLoveNight = ({ navigation }) => {
    
    return (
        <SafeAreaView >
        <ImageBackground style={styles.image_background} source={require('../../../assets/images/wednesday-night.png')}>
            <View style={styles.main_view}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" style={styles.left_arrow} />
                </TouchableOpacity>
            </View>

            <View style={styles.main_view2}>
                <Text style={styles.big_text}>Wednesday Love Night </Text>
                <Text style={styles.small_text}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard. </Text>
                <Text style={[styles.icon_text]}>
                    <Image source={require('../../../assets/images/location-icon.png')} style={{height:25,width:18}}/>    Sector-62 Noida</Text>                
                <Text style={styles.icon_text}>
                    <Image source={require('../../../assets/images/watch.png')}/>    07:00 PM</Text>                
                <Text style={[styles.icon_text]}>
                    <Image source={require('../../../assets/images/calendar.png')}/>   20 Dec. 2020</Text>
                <Text style={styles.small_text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard.</Text>  

                <View style={styles.main_view3}>
                <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('SendTicket')}>
                    <Text style={styles.buttonText}><Icon1 name="send" /> Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2}
                onPress={() => navigation.navigate('ShareLink')}>
                    <Text style={styles.buttonText}><Icon1 name="share-2" /> Share</Text>
                </TouchableOpacity>                  
                </View>       
                <Rectangular path="PaymentMethods" name="Book Now" style={styles.rectangularButton} />
                </View>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default WednesdayLoveNight;

