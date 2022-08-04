import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable,
    TextInput,
    Switch,
    Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from '../genderScreens/styles';
import { imageicon, icons } from '../../../assets/icons/icons';
import { photoStyles } from '../AddPhoto/styles';
import { signupStyles } from '../SignUp/signupStyles';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { Card } from 'react-native-paper';
import { Styles } from '../../screens/ProfileDisplay/styles';
import { userStyles } from '../../screens/User details/userStyles';
import { height, width } from '../../services/helper';

const ManageProfile = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.moveBack}>{icons.back}</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'stretch', justifyContent: 'center', bottom: '17%', backgroundColor: 'transparent', width: width, height: height * 0.11, flexDirection: 'row', marginLeft: '0%' }}>
                <View style={{ backgroundColor: 'transparent', flex: 1.4, }}>
                    <Text
                        style={[
                            photoStyles.addPhotoText,
                            { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, marginLeft: '10%' },
                        ]}>
                        My Account
                    </Text>
                </View>
                <View style={{ backgroundColor: 'transparent', flex: 0.6, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../assets/images/editicon.png')}
                            style={[
                                {
                                    marginTop: '65%'
                                },
                            ]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../assets/images/settingicon.png')}
                            style={[
                                {
                                    //height: 20,
                                    //width: 30,
                                    marginTop: '65%'
                                },
                            ]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.moveBack}>{icons.back}</Text>
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/profilecircle2.png')} style={{ marginLeft: '0%', width: 40, height: 40, marginBottom: '-5%' }} />
                    <TouchableOpacity>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'BakbakOne-Regular',
                            //fontWeight: '400',
                            fontSize: 15,
                            lineHeight: 21,
                            letterSpacing: -0.017,
                        }}>PR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}></View>
                <View style={{ flex: 1.2, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/videorecorder.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/group.png')} />
                    </TouchableOpacity>
                </View>
            </View> */}

            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5, bottom: '10%'
            }} />
            <Card
                style={[
                    govtStyles.borderBox,
                    {
                        width: 173,
                        top: '-5%',
                        height: 132,
                        borderRadius: 66,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'grey',
                        alignSelf: 'center',
                    },
                ]}>
                <Image
                    source={require('../../../assets/images/editprofile.png')}
                    style={[
                        {
                            width: 173,
                            height: 132,
                            top: 0,
                            right: 0,
                        },
                    ]}
                />
            </Card>
            <View
                style={[
                    Styles.infocontainer,
                    {
                        height: 30,
                        width: 60,
                        //bottom: '20.5%',
                        marginTop: '18%',
                        marginBottom: '10%',
                        //left: 150,
                        left: '43%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F9DFFF',
                        borderBottomWidth: 3.5,
                        borderBottomColor: '#000000'
                    },
                ]}>

                <Text style={{
                    fontFamily: 'BakbakOne-Regular',
                    fontSize: 20,
                    color: '#000000',
                    letterSpacing: -0.017,
                    lineHeight: 28,
                }}>60%</Text>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bottom: '50%' }}>
                <Text
                    style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 25,
                        color: '#000000',
                        letterSpacing: -0.017,
                        lineHeight: 35,
                    }}>Sahil 21</Text>
            </View>


            {/* <Text
                style={[
                    photoStyles.addPhotoText,
                    {
                        fontFamily: 'Inter',
                        fontSize: 15,
                        top: '-25%',
                        left: '10%',
                        color: '#B4B4B4',

                    },
                ]}>
                Surname
            </Text>


            <Text
                style={[
                    photoStyles.addPhotoText,
                    {
                        fontFamily: 'Inter',
                        fontSize: 15,
                        top: '-30%',
                        left: '10%',
                        color: '#B4B4B4',

                    },
                ]}>
                Phone
            </Text>

            <Text
                style={[
                    photoStyles.addPhotoText,
                    {
                        fontFamily: 'Inter',
                        fontSize: 15,
                        top: '-35%',
                        left: '10%',
                        color: '#B4B4B4',

                    },
                ]}>
                Gender
            </Text> */}



        </View>
    );
};
export default ManageProfile;
