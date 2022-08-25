import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Switch,
    Modal,
    Pressable
} from 'react-native';
import { styles } from './styles';
import { icons, imageicon } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from 'react-native-slider';
import RangeSlider from 'react-native-range-slider';

const AccountSettings = ({ navigation }) => {

    //const [modalVisible, setModalVisible] = useState(false);

    const [isActive, setIsActive] = useState(false);
    const btnClick = () => { setIsActive(current => !current); }

    //const wordSelected = "Mi"

    //const [min, setMin] = useState(0);
    //const [max, setMax] = useState(500);

    const [range, setRange] = useState('50km.');
    const [sliding, setSliding] = useState('Inactive');

    const [isEnabledDistance, setIsEnabledDistance] = useState(false);
    const [isEnabledShow, setIsEnabledShow] = useState(false);

    const toggleSwitch = () => setIsEnabledDistance(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabledShow(previousState => !previousState);
    //const [firstGender, setFirstGender] = useState("");

    //const [count, setCount] = useState(0);
    //const onClick = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                            //padding: '5%',
                            //left: '15%',
                            marginLeft: '20%',
                            //marginRight: '5%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '60%'
                    }}>Setting</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
            <ScrollView style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>


                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '-5%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Account Settings
                        </Text>
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '35%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                flexDirection: 'row'
                            }}
                            onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    //alignSelf: 'center',
                                    //justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    right: '65%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Phone Number
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('UpdatePhoneNumber') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    left: '20%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>8171830852
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            left: '5%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Verify a phone number to help secure your account.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Discovery Settings
                        </Text>
                        <TextInput
                            placeholder=' Location'
                            placeholderTextColor='#4B4B4B'
                            style={{
                                width: '100%',
                                height: '35%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'Inter',
                                //textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                //paddingLeft: '5%',

                            }} />
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            left: '0%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Change your location to see Tinder member in other cities.
                        </Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                bottom: '380%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '27%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>My current location
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>


                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                        <View style={{ flex: 1.1, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', marginTop: '0%', }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '15%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Maximum Distance
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '135%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>{range}
                            </Text>
                        </View>
                        <View style={{ flex: 0.8, flexDirection: 'row', backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginTop: '0%', }}>
                            {/* <Image source={require('../../../assets/images/scrollersettings2.png')} style={{ width: 140 }} />
                            <Image source={require('../../../assets/images/scrollersettings.png')} style={{ width: 150, left: 15 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 150 }} /> */}
                            <Slider
                                style={{ width: 325, height: 40, marginRight: '2%' }}
                                maximumValue={1}
                                minimumValue={0}
                                //step={1}
                                value={.5}
                                minimumTrackTintColor='#000000'
                                maximumTrackTintColor='rgba(110, 62, 137, 0.2)'
                                thumbColor='#000000'
                                onValueChange={(value) => setRange(parseInt(value * 100) + 'km.')}
                                onSlidingStart={() => setSliding('Sliding')}
                            />
                        </View>
                        <View style={{ flex: 1.1, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'Inter',
                                color: '#919191',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '50%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}> Only show people in the range
                            </Text>
                            <Switch
                                style={{ right: 15 }}
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledDistance ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabledDistance}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1.2, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', height: 279, marginTop: '5%', }}>
                        <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>

                            <TextInput
                                placeholder=' Show Me '
                                placeholderTextColor='#000000'
                                //onChangeText={handleFirst}
                                style={{
                                    width: '100%',
                                    height: '70%',
                                    //width: '80%',
                                    fontSize: 15,
                                    color: '#000000',
                                    //fontWeight: '400',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    fontFamily: 'Inter',
                                    //textAlign: 'left',
                                    alignSelf: 'center',
                                    backgroundColor: 'transparent',
                                    //borderWidth: 2,
                                    //borderColor: '#6B6B6B',
                                    //paddingLeft: '10%'

                                }} />
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'Inter',
                                color: '#919191',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                bottom: '10%',
                                //marginRight: '-10%',
                                //marginTop: '5%',
                                right: '2.5%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Women
                            </Text>

                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}></View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 139.5, marginTop: '-20%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B' }}>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', marginTop: '0%' }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '20%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Age Range
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '160%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>
                                18 - 31

                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '0%' }}>
                            <Image source={require('../../../assets/images/scrollersettings2.png')} style={{ width: 50, left: 20 }} />
                            <Image source={require('../../../assets/images/scrollersettings.png')} style={{ width: 285, left: 10 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 318 }} />
                            <Image source={require('../../../assets/images/scrollerellipse.png')} style={{ right: 290 }} />
                            {/* <RangeSlider
                                defaultValue={[min, max]}
                                className="slider"
                                trackClassName="tracker"
                                min={10}
                                max={500}
                                minDistance={50}
                                step={50}
                                withTracks={true}
                                pearling={true}
                                renderThumb={(props) => {
                                    return <div {...props} className="thumb"></div>;
                                }}
                                renderTrack={(props) => {
                                    return <div {...props} className="track"></div>;
                                }}
                                onChange={([min, max]) => {
                                    setMax(max);
                                    setMin(min);
                                }}
                                style={{ flex: 1, height: 70, marginTop: 20, padding: 10 }}
                            /> */}
                        </View>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '0%', }}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            //borderWidth: 0.5,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                //alignSelf: 'center',
                                bottom: '15%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '95%',
                            }}>Tinder uses these preferences to suggest matches. Some
                                match suggestion may not fall within your desired parameters.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 179, marginTop: '-13%', }}>
                    <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', marginTop: '0%', }}>
                        <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', marginTop: '0%', }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'BakbakOne-Regular',
                                //fontFamily: 'Inter',
                                color: '#000000',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //right: '140%',
                                left: '5%',
                                lineHeight: 25,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Show me on Yall
                            </Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', marginTop: '-3%' }}>
                            <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: '0%', borderWidth: 1, borderColor: '#6B6B6B', width: '90%', height: 49 }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    left: '50%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Show me on Yall
                                </Text>
                                <Switch
                                    style={{ right: 15 }}
                                    trackColor={{ false: '#767577', true: '#767577' }}
                                    thumbColor={isEnabledShow ? '#000000' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch2}
                                    value={isEnabledShow}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', marginTop: '0%', }}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            //alignSelf: 'center',
                            //bottom: '15%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            alignSelf: 'center',
                            width: '93%',
                            left: '2%',
                            marginTop: '-6%'
                        }}>While tuned off, you will  not be shown in the card stack.
                            People you have already liked amy still see your profile and
                            match with you. You can still see and chat with your matches.
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '-3%', alignSelf: 'center' }}>

                    <View style={{ flex: 0.6, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', marginTop: '0%', }}>

                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '25%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                flexDirection: 'row'
                            }} onPress={() => { navigation.navigate('BlockUsers') }}>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    //alignSelf: 'center',
                                    //justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    right: '88%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Block Contacts
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    left: '500%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>8
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            marginTop: '-5%',
                            //right: '140%',
                            left: '0%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Data Usage
                        </Text>
                        <View style={{
                            //flex: 1.3,
                            width: '100%',
                            height: '25%',
                            //width: '80%',
                            bottom: '10%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity style={{
                                marginRight: '83%',
                            }} onPress={() => { navigation.navigate('AutoplayVideo') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    //right: '60%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Autoplay Video
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', top: '0%', }}>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            top: '-3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            left: '0%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Events
                        </Text>
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '55%',
                                bottom: '23%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'flex-start',
                                justifyContent: 'space-evenly',
                                flexDirection: 'column'
                            }} onPress={() => { navigation.navigate('WednesdayEvent') }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('WednesdayEvent') }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#000000',
                                    left: '-8%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>My Events
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Setting
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', marginTop: '0%', height: 112 }}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'BakbakOne-Regular',
                        //fontFamily: 'Inter',
                        color: '#000000',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        //paddingVertical: 10,
                        //paddingVertical: 13,
                        //top: '30.3%',
                        //marginRight: '10%',
                        //marginTop: '5%',
                        //right: '140%',
                        left: '5%',
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        width: '100%',
                    }}>Activity Status
                    </Text>
                    <View
                        style={{
                            //flex: 1.3,
                            width: '90%',
                            height: '55%',
                            bottom: '-3%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'flex-start',
                            justifyContent: 'space-evenly',
                            flexDirection: 'column'
                        }} >

                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'Inter',
                            color: '#000000',
                            //alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            left: '-10%',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Recently Active Status
                        </Text>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'Inter',
                            color: '#4B4B4B',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginLeft: '50%',
                            //marginTop: '5%',
                            //left: '500%',
                            left: '-10%',
                            lineHeight: 16,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Setting
                        </Text>

                    </View>
                </View>

                <View style={{
                    flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 129.5, marginTop: '0%', marginBottom: '30%', alignSelf: 'center', borderWidth: 2,
                    borderColor: '#6B6B6B',
                }}>
                    <View
                        style={{
                            flex: 1.3,
                            flexDirection: 'row',
                            //width: '100%',
                            //height: '30%',
                            //width: '80%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }} >
                        <Text style={{
                            fontSize: 15,
                            //fontFamily: 'BakbakOne-Regular',
                            fontFamily: 'Inter',
                            color: '#000000',
                            //alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            right: '55%',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Show Distances in
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            //fontFamily: 'BakbakOne-Regular',
                            fontFamily: 'Inter',
                            color: '#000000',
                            //alignSelf: 'center',
                            //justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '40%',
                            lineHeight: 18,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2.7,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '40%',
                                height: '55%',
                                //bottom: '23%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                //backgroundColor: 'transparent',
                                backgroundColor: isActive ? '#DCC7E1' : 'transparent',
                                borderRadius: 3,
                                //borderWidth: 2,
                                //borderColor: '#6B6B6B',
                                //paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                            onPress={btnClick}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#4B4B4B',
                                //alignSelf: 'center',
                                textAlign: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //left: '-8%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                                //onValueChange:{handleDistanceUnit}
                            }}>Km.
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '40%',
                                height: '55%',
                                //bottom: '23%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                //backgroundColor: '#DCC7E1',
                                //backgroundColor: 'transparent',
                                backgroundColor: isActive ? 'transparent' : '#DCC7E1',
                                borderRadius: 3,
                                //borderWidth: 2,
                                //borderColor: '#6B6B6B',
                                //paddingLeft: '10%',
                                //marginRight: '10%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}
                            onPress={btnClick}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                textAlign: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //left: '-8%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Mi.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 229.5, marginTop: '-25%', marginBottom: '20%', alignSelf: 'center' }}>
                    <View
                        style={{
                            flex: 0.8,
                            //width: '100%',
                            //height: '30%',
                            //width: '80%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                            <Text style={{
                                fontSize: 15,
                                //fontFamily: 'BakbakOne-Regular',
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '40%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Help & Support
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 3.2,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }} >

                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'BakbakOne-Regular',
                            //fontFamily: 'Inter',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            //paddingVertical: 10,
                            //paddingVertical: 13,
                            //top: '30.3%',
                            //marginRight: '10%',
                            //marginTop: '5%',
                            //right: '140%',
                            //left: '5%',
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            width: '100%',
                        }}>Community
                        </Text>
                        <View
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '55%',
                                bottom: '-3%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'flex-start',
                                justifyContent: 'space-evenly',
                                flexDirection: 'column'
                            }} >
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    //alignSelf: 'center',
                                    //justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginRight: '10%',
                                    //marginTop: '5%',
                                    left: '-8%',
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Community Guidelines
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Safety Tips
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Safety Center
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 269.5, marginTop: '-20%', marginBottom: '20%', alignSelf: 'center' }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.6,
                            //width: '100%',
                            //height: '30%',
                            //width: '80%',
                            fontSize: 15,
                            color: '#000000',
                            //fontWeight: '400',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} //onPress={() => setModalVisible(true)}
                        onPress={() => navigation.navigate('ShareYall')}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 15,
                                //fontFamily: 'BakbakOne-Regular',
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                right: '47%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Share Yall
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 3.2,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                        }} >

                        <View
                            style={{
                                //flex: 1.3,
                                width: '100%',
                                height: '90%',
                                //bottom: '-3%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                                alignItems: 'flex-start',
                                justifyContent: 'space-evenly',
                                flexDirection: 'column'
                            }} >
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                //alignSelf: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                left: '-8%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Legal
                            </Text>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Licenses
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Privacy Preferences
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Privacy Policy
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#4B4B4B',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    //paddingVertical: 10,
                                    //paddingVertical: 13,
                                    //top: '30.3%',
                                    //marginLeft: '50%',
                                    //marginTop: '5%',
                                    //left: '500%',
                                    left: '-8%',
                                    lineHeight: 16,
                                    letterSpacing: -0.017,
                                    width: '100%',
                                }}>Terms of Service
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                        marginTop: '-10%',
                        marginBottom: '65%',
                        height: 189.86,
                        width: '90%',
                        alignSelf: 'center',
                        backgroundColor: '#DCC7E1'
                    }} >
                    <View
                        style={{
                            flex: 0.8,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            //marginTop: '-10%',
                            //marginBottom: '25%',
                            //height: 149.86,
                            //width: '90%',
                            //alignSelf: 'center'
                        }} >

                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '43%',
                                height: '55%',
                                //bottom: '23%',
                                fontSize: 15,
                                color: '#FFFFFF',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 3,
                                //borderWidth: 2,
                                //borderColor: '#6B6B6B',
                                //paddingLeft: '10%',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }} >
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'BakbakOne-Regular',
                                color: '#000000',
                                //alignSelf: 'center',
                                textAlign: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //left: '-8%',
                                lineHeight: 25,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Logout
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                //flex: 1.3,
                                width: '43%',
                                height: '55%',
                                //bottom: '23%',
                                fontSize: 15,
                                color: '#000000',
                                //fontWeight: '400',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 3,
                                //borderWidth: 2,
                                //borderColor: '#6B6B6B',
                                //paddingLeft: '10%',
                                //marginRight: '10%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }} >
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'BakbakOne-Regular',
                                color: '#FF6565',
                                textAlign: 'center',
                                //justifyContent: 'center',
                                //paddingVertical: 10,
                                //paddingVertical: 13,
                                //top: '30.3%',
                                //marginRight: '10%',
                                //marginTop: '5%',
                                //left: '-8%',
                                lineHeight: 25,
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>Delete Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1.2,
                            backgroundColor: 'transparent',
                            //paddingLeft: '10%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }} >
                        <Image style={{
                            //width: '38%',
                            width: '28%',
                            //height: '75%',
                            height: '59.5%',
                            marginBottom: 10,
                            alignSelf: 'center',
                        }} source={imageicon.yallLogo} />
                    </View>

                </View>

            </ScrollView >




        </View >

    );
};
export default AccountSettings;