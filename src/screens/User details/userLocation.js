import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Switch,
} from 'react-native';
import { signupStyles } from '../SignUp/signupStyles';
import { privacyStyles } from '../aboutPrivacy/privacyStyles';
import { imageicon, icons } from '../../../assets/icons/icons';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import { height, width } from '../../services/helper';

const UserLocation = ({ navigation }) => {
    return (
        <View style={privacyStyles.container}>
            <Text style={privacyStyles.text}>Where are you?</Text>
            <Text style={[privacyStyles.aboutPrivacy, { top: 70 }]}>
                Your location services need to be turned on
                in order for this to work.
            </Text>
            <View >
                <TouchableOpacity
                    style={{
                        //marginTop: '85%',
                        marginTop: '133%',
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        //alignSelf: 'center',
                        right: '2%'
                    }}
                    onPress={() => { navigation.navigate('AboutPrivacy') }}>
                    <View style={{
                        left: 10,
                        top: 8,
                        width: width * 0.8,
                        borderWidth: 1,
                        borderRightWidth: 0,
                        height: height * 0.07,
                        //alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1',
                        position: 'relative',
                    }}>
                        <Text style={{
                            //fontWeight: '400',
                            //fontWeight: '900',
                            fontSize: 17,
                            //fontFamily: 'Bakbak One',
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '30.3%',
                            right: '20%',
                            lineHeight: 25,
                            letterSpacing: -0.017
                        }}>Enable location</Text>
                        <View style={{
                            width: width * 0.15,
                            borderWidth: 1,
                            height: '104%',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#DCC7E1',
                            position: 'absolute',
                            marginVertical: -1,
                        }}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default UserLocation;
