import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { Rectangular } from '../../component/Buttons/rectangular';
import { StyleSheet, Dimensions } from 'react-native';
import { Icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const EventTimer = ({ navigation }) => {

    return (

        <View style={styles.main_view}>
            <Image
                style={styles.image_bg}
                source={require('../../../assets/images/Gradient-Fill.png')}
                resizeMode="cover" />
            <View style={styles.first_view}>
                <Image source={require('../../../assets/images/timer-glass.png')}
                />
            </View>

            <View style={styles.second_view}>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            //marginTop:'-0.5%',
                            textAlignVertical: 'center',
                            elevation:8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>07</Text>
                </View>
                <View
                    style={
                        {
                            width: '5%',
                            alignSelf: 'center',
                            height: '40%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'transparent',
                            // borderRadius: 5,
                            // borderWidth:1 ,
                            // borderColor:'#000000',
                            //marginTop:'-0.5%',
                            textAlignVertical: 'center'
                        }
                    }>
                    <View><Icon name="circle" style={{ color: '#FFFFFF',fontSize:10 }} /></View>
                    <View><Icon name="circle" style={{ color: '#FFFFFF',fontSize:10 }} /></View>
                </View>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            //marginTop:'-0.5%',
                            textAlignVertical: 'center',
                            elevation:8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>48</Text>
                </View>
                <View
                    style={
                        {
                            width: '5%',
                            alignSelf: 'center',
                            height: '40%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            backgroundColor: 'transparent',
                            // borderRadius: 5,
                            // borderWidth:1 ,
                            // borderColor:'#000000',
                            //marginTop:'-0.5%',
                            textAlignVertical: 'center',
                            
                        }
                    }>
                    <View><Icon name="circle" style={{ color: '#FFFFFF',fontSize:10 }} /></View>
                    <View><Icon name="circle" style={{ color: '#FFFFFF',fontSize:10 }} /></View>
                </View>
                <View
                    style={
                        {
                            width: 107,
                            alignSelf: 'center',
                            height: 107,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            //marginTop:'-0.5%',
                            textAlignVertical: 'center',
                            elevation:8
                        }
                    }>
                    <Text style={[styles.main_text, { color: '#000000', fontSize: 50, lineHeight: 70, letterSpacing: -0.017 }]}>60</Text>
                </View>


            </View>
            <View style={styles.third_view}>
                <Text style={styles.main_text}>Event in 7 days </Text>
                <Text style={[styles.desc_text]}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard. </Text>
            </View>
            <View style={styles.fourth_view}>
                <View
                    style={
                        {
                            flex: 1,
                            width: '90%',
                            alignSelf: 'center',
                            height: 91,
                            alignItems: 'stretch',
                            justifyContent: 'space-between',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#000000',
                            marginTop: '-0.5%',
                            flexDirection: 'row'
                        }
                    }>

                    <View
                        style={
                            {
                                flex: 5,
                                //width: '30%',
                                //alignSelf: 'center',
                                //height: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                backgroundColor: 'transparent',

                            }
                        }>
                        <Text style={[styles.desc_text, { color: '#000000', width: 270, height: 36, paddingTop: '5%', textAlign: 'left', paddingLeft: '6%' }]}>If you found the date we have got more </Text>
                        <Text style={[styles.desc_text, { color: '#000000', width: 274, height: 36, textAlign: 'left', paddingLeft: '6%' }]}>few option for you. </Text>
                        <TouchableOpacity style={{
                            textAlign: 'center',
                            borderRadius: 20,
                            borderWidth: 1.5,
                            borderColor: '#000000',
                            backgroundColor: '#DCC7E1',
                            height: '30%',
                            width: '30%',
                            alignSelf: 'flex-start',
                            marginLeft: '5%',
                            marginBottom: '5%'
                        }}
                            onPress={() => navigation.navigate('TicketSold')}>
                            <Text style={[styles.desc_text, { paddingVertical: '10%', letterSpacing: -0.017, fontWeight: '500', fontSize: 10, lineHeight: 12, alignSelf:'center',color:'#000000' }]}>Click Here</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={
                            {
                                flex: 1,
                                //width: '50%',
                                //alignSelf: 'center',
                                //height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                backgroundColor: 'transparent',
                                borderRadius: 15,
                                // borderWidth:1 ,
                                // borderColor:'#000000',
                            }
                        }>
                        <View style={{marginTop:'20%'}}>
                            <TouchableOpacity >
                            <Image source={require('../../../assets/images/cross-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.3,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                backgroundColor: 'transparent',
            }}></View>
        </View >
    )
}

export default EventTimer;
