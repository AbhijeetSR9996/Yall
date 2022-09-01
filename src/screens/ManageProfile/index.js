import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    BackHandler
} from 'react-native';
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

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.moveBack}>{icons.back}</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'stretch', justifyContent: 'center', bottom: '17%', backgroundColor: 'transparent', width: width, height: height * 0.11, flexDirection: 'row', marginLeft: '10%' }}>
                <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginLeft: '0%' }}>
                    <Text
                        style={[
                            photoStyles.addPhotoText,
                            { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, marginLeft: '20%', top: 34.5 },
                        ]}>
                        My Account
                    </Text>
                </View>
                <View style={{ backgroundColor: 'transparent', flex: 1.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('EditAccount') }}>
                        <Image
                            source={require('../../../assets/images/editicon.png')}
                            style={[
                                {
                                    marginTop: '65%',
                                    left: '165%'
                                },
                            ]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('AccountSettings') }}>
                        <Image
                            source={require('../../../assets/images/settingicon.png')}
                            style={[
                                {

                                    marginTop: '65%'
                                },
                            ]}
                        />
                    </TouchableOpacity>
                </View>
            </View>


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
                        width: 70,

                        marginTop: '20%',
                        marginBottom: '10%',

                        left: '41%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F9DFFF',
                        borderBottomWidth: 3.5,
                        borderBottomColor: '#000000',

                    },
                ]}>

                <Text style={{
                    fontFamily: 'BakbakOne-Regular',
                    fontSize: 20,
                    color: '#000000',
                    letterSpacing: -0.017,
                    lineHeight: 28,
                    bottom: '8%'
                }}>60%</Text>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bottom: '50%', marginTop: '5%', marginBottom: '0%' }}>
                <Text
                    style={{
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 25,
                        color: '#000000',
                        letterSpacing: -0.017,
                        lineHeight: 35,
                    }}>Sahil 21</Text>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '0%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/staricon.png')}
                        style={[
                            {

                                right: '360%'
                            },
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('WeekendEvent') }}>
                    <Text
                        style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            letterSpacing: -0.017,
                            lineHeight: 25,

                            width: '100%',
                            right: '65%'
                        }}>Manage my events</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/usericon.png')}
                        style={[
                            {

                                right: '140%'
                            },
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('ManagePaymentMethods') }}>
                    <Text
                        style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            letterSpacing: -0.017,
                            lineHeight: 25,

                            width: '100%',
                            right: '15%'
                        }}>Manage my payment methods</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/ticketicon.png')}
                        style={[
                            {

                                right: '250%'
                            },
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('ManageBookings') }}>
                    <Text
                        style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            letterSpacing: -0.017,
                            lineHeight: 25,
                            right: '51%',

                            width: '100%',
                        }}>Manage my bookings</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }} />
            <View style={{ backgroundColor: 'transparent', flex: 0.5, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', bottom: '50%' }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/walleticon.png')}
                        style={[
                            {

                                right: '180%'
                            },
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('ManageSubscriptions') }}>
                    <Text
                        style={{
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            color: '#000000',
                            letterSpacing: -0.017,
                            lineHeight: 25,
                            right: '30%',

                            width: '100%'
                        }}>Manage my subscriptions</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../../assets/images/horizontaline3.png')} style={{ width: '90%', height: '0.1%', bottom: '48%', alignSelf: 'center' }} />
            <Image source={require('../../../assets/images/horizontaline3.png')} style={{ width: '90%', height: '0.1%', bottom: '41%', alignSelf: 'center' }} />
            <Image source={require('../../../assets/images/horizontaline3.png')} style={{ width: '90%', height: '0.1%', bottom: '34%', alignSelf: 'center' }} />
            <Image source={require('../../../assets/images/horizontaline3.png')} style={{ width: '90%', height: '0.1%', bottom: '27%', alignSelf: 'center' }} />


        </View>
    );
};
export default ManageProfile;
