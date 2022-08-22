import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  Alert
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { height, width } from '../../services/helper';


const ChatQNA = ({ navigation }) => {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'Yall needs access to your camera ',

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //console.log('You can use the camera');
      } else {
        //console.log('Camera permission denied');
      }
    } catch (err) {
      //console.warn(err);
    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 700,
      height: 700,
      compressImageQuality: 0.7,
      compressImageMaxWidth: 700,
      compressImageMaxHeight: 700,
      includeBase64: true,
    }).catch(error => { });
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'ADD PICTURE',

      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Camera',
          onPress: () => takePhotoFromCamera(),
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '1%' }}>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={{
              fontSize: 40,
              color: '#000000',
              fontWeight: "200",
            }} />
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

      </View>
      <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '2.4%' }} />
      <ScrollView>
        {/* <View style={{ flex: 0.9, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}> */}
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '2%' }}>
          <Text style={styles.text}>March 9, 2020</Text>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg2.png')}
              style={[{
                width: 65,
                height: 40,
                marginLeft: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 2,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  //fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '1%' }}>
          <Text style={styles.text}>March 10, 2020</Text>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column' }}>

          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg.png')}
              style={[{
                width: 65,
                height: 40,
                marginRight: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  //fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '1%' }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            //borderWidth: 1.5,
            //borderColor: '#000000',
            backgroundColor: '#F6F6F6',
            width: 275,
            height: 95,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 2,
            marginRight: '13%'
          }}>
            <Text style={{
              fontSize: 15,
              color: '#000000',
              //top: '7%',
              left: '-5%',
              textAlignVertical: 'center',
              fontFamily: 'Inter',
              //fontWeight: '400',
              letterSpacing: -0.017,
              lineHeight: 18,
              width: 208
            }}> sads,bdkdsfkljdfshkl
              dsandjdjhgjhasdg\
              JHGDSAUJHDjhsadjhgdsauyg
              zscbjhmasgvjhaDFYHJ </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'column', marginTop: '1%' }}>

          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg.png')}
              style={[{
                width: 65,
                height: 40,
                marginRight: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  //top: '60%',
                  //left: '25%',
                  fontFamily: 'Inter',
                  //fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '1%', marginBottom: '2%' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Today</Text>
        </View>

        <View style={{ flex: 0.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

            <View style={{
              backgroundColor: '#000000',
              width: '80%',
              height: '100%',
              left: '-3%',
              //marginLeft: '20%',
              paddingHorizontal: '10%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 2,
            }}>
              <ImageBackground
                source={require('../../../assets/images/questionbg2.png')}
                style={[{
                  width: '126%',
                  height: '100%',
                  bottom: '2%',
                  left: '4%',
                  //marginLeft: '20%',
                  //marginRight: '-3%',
                  //alignSelf:'center',
                  paddingHorizontal: '10%',
                  marginHorizontal: '-23%'
                }]}
                imageStyle={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                }}
              >
                <TouchableOpacity style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  //marginLeft: '-12.5%',
                  // marginRight: '-3%',
                  //alignSelf:'center',
                  //paddingHorizontal:'10%',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                  backgroundColor: 'transparent',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
                  onPress={() => { navigation.navigate('ChatQNA2') }}>
                  <View style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    //marginLeft: '-12.5%',
                    // marginRight: '-3%',
                    //alignSelf:'center',
                    //paddingHorizontal:'10%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 2,
                    borderBottomLeftRadius: 2,
                    backgroundColor: 'transparent',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <View style={{
                      flex: 1.5,
                      width: '126%',
                      // height: '100%', 
                      marginLeft: '-9.5%',
                      // marginRight: '-3%',
                      //alignSelf:'center',
                      //paddingHorizontal:'10%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 2,
                      borderBottomLeftRadius: 2,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      //borderWidth: 1,
                    }}>
                      <Text style={{
                        width: 75,
                        height: 18,
                        //left: 73,
                        fontFamily: 'Inter',
                        //fontWeight: '400',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '25%'
                      }}>You asked:</Text>
                      <Text style={{
                        width: 184,
                        height: 50,
                        //left: 73,
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '30%'
                      }}>Whats your favourite </Text>
                      <Text style={{
                        width: 184,
                        height: 50,
                        //left: 73,
                        fontFamily: 'BakbakOne-Regular',
                        //fontWeight: '400',
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '5%'
                      }}>show on netflix</Text>
                    </View>

                    <View style={{
                      flex: 1,
                      width: '126%',
                      // height: '100%', 
                      marginLeft: '-9%',
                      borderBottomRightRadius: 2,
                      borderBottomLeftRadius: 2,
                      backgroundColor: 'transparent',
                      alignItems: 'stretch',
                      justifyContent: 'center',
                      flexDirection: 'row'
                    }}>
                      <View style={{
                        flex: 1,
                        borderBottomRightRadius: 2,
                        borderBottomLeftRadius: 2,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                      }}>
                        <Image source={require('../../../assets/images/bluranswer.png')}
                          style={{
                            top: '1%',
                          }} />
                      </View>
                      <View style={{
                        flex: 1,
                        borderBottomRightRadius: 2,
                        borderBottomLeftRadius: 2,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        //textAlign: 'center'
                      }}>
                        <Text style={{
                          width: 135,
                          height: 41,
                          //left: 73,
                          fontFamily: 'Inter',
                          //fontWeight: '500',
                          fontSize: 15,
                          lineHeight: 18,
                          color: '#FFFFFF',
                          textAlign: "center",
                          top: '7%'
                        }}> My answer;hsc sdv</Text>
                      </View>
                    </View>

                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>

          </View>
          <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '10%' }}>
            <Text style={{
              //width: 278,
              width: '85%',
              height: 50,
              //left: 73,
              fontFamily: 'BakbakOne-Regular',
              //fontWeight: '400',
              fontSize: 18,
              lineHeight: 25,
              color: '#000000',
              textAlign: "center",
              top: '30%'
            }}>Answered are revealed when you </Text>
            <Text style={{
              width: 168,
              height: 50,
              //left: 73,
              fontFamily: 'BakbakOne-Regular',
              //fontWeight: '400',
              fontSize: 18,
              lineHeight: 25,
              color: '#000000',
              textAlign: "center"
            }}>answer</Text>
          </View>
        </View>

        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Deliverd. 10:50 AM</Text>
        </View>
        <View style={{ width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginBottom: '2%' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
              <Image source={require('../../../assets/images/camera2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2.2, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{
              width: '100%',
              alignSelf: 'center',
              //height: 47,
              height: 37,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: 'rgba(142,142,142,0.3)',
              backgroundColor: '#F7F7F7',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              //flex: 1,
              marginBottom: '4%',
              marginLeft: '4%',
            }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-end', marginTop: '-20%', width: '30%', top: '60%' }}>
                {/* <TouchableOpacity>
                  <Image source={require('../../../assets/images/gifattachment.png')} />
                </TouchableOpacity>
                <View style={{ bottom: '35%' }}><Image source={require('../../../assets/images/GIF.png')} /></View> */}
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-start', marginTop: '-25%', width: '80%', height: 37, borderRadius: 0, top: '0%', left: '5%' }}>
                <TextInput
                  placeholder='Aa'
                  placeholderTextColor='#BEBEBE'
                  style={{
                    //flex: 1,
                    width: '100%',
                    //height:47,
                    fontSize: 20,
                    color: '#000000',
                    //fontWeight: '400',
                    //left: '2%',
                    //top: '7%',
                    lineHeight: 24,
                    letterSpacing: -0.017,
                    fontFamily: 'Inter',
                    marginBottom: '-15%'
                  }} />
              </View>
            </Card>
          </View>
          <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
              <Image source={require('../../../assets/images/comment.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../../../assets/images/microphone.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>

  );
};
export default ChatQNA;