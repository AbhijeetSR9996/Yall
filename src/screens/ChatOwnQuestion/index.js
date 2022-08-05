import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height } from '../../services/helper';
import Icon1 from 'react-native-vector-icons/Feather';
import { Rectangular } from '../../component/Buttons/Rectangular';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { icons } from '../../../assets/icons/icons';

const ChatOwnQuestion = ({ navigation }) => {

    return (
        <View style={Styles.main_container}>
            <ImageBackground
                source={require('../../../assets/images/ownquestionbg.png')}
                resizeMode="stretch"
                style={Styles.image_background}>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', }}>
                    <Text style={{
                        //width: 264,
                        width: '100%',
                        height: 18,
                        fontFamily: 'Inter',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#000000',
                        textAlign: "center",
                        top: '15%',
                    }}>Ask a question for you both to answer:</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                    <TextInput
                        placeholder='Type your own quest....'
                        placeholderTextColor='#000000'
                        style={{
                            //width: '100%',
                            width: '80%',
                            fontSize: 27,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 42,
                            letterSpacing: -0.017,
                            fontFamily: 'BakbakOne-Regular',
                            textAlign: 'center'
                        }} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChatQuestion') }}>
                        <Text style={{
                            //width: 34,
                            width: '100%',
                            height: 18,
                            fontFamily: 'Inter',
                            fontSize: 15,
                            lineHeight: 18,
                            color: '#000000',
                            textAlign: "center",
                            bottom: '10%',
                            marginLeft: '8%'
                        }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
                        <Text style={{
                            //width: 34,
                            width: '100%',
                            height: 18,
                            fontFamily: 'Inter',
                            fontSize: 15,
                            lineHeight: 18,
                            color: '#000000',
                            textAlign: "center",
                            bottom: '10%',
                            marginRight: '12%'
                        }}>Send Ques</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ChatOwnQuestion;

