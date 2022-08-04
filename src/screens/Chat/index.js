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
  Alert,
  StyleSheet
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { height, width } from '../../services/helper';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';


const Chat = ({ navigation }) => {

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
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
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
      <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={{
              fontSize: 40,
              color: '#000000',
              fontWeight: "200",
            }} />
          </TouchableOpacity>
          <Image source={require('../../../assets/images/profilecircle.png')} style={{ marginLeft: '0%', width: 40, height: 40, marginBottom: '-5%' }} />
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
      <View style={{ flex: 0.9, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
        <View style={{ flex: 0.06, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.text}>March 9, 2020</Text>
        </View>
        <View style={{ flex: 0.14, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
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
        <View style={{ flex: 0.053, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.text}>March 10, 2020</Text>
        </View>
        <View style={{ flex: 0.14, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column', top: '0%' }}>
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

        <View style={{ flex: 0.6, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg3.png')}
              style={[{
                width: 89,
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
                  width: 89,
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
                }}> Djadsahk, </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 0.1, width: width, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        </View> */}
        <View style={{ flex: 0.1, width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginBottom: '2%' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
              <Image source={require('../../../assets/images/camera2.png')} style={{ height: 35, width: 50 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2.2, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: "center" }}>
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
              marginBottom: '2%',
              //marginBottom: '7%',
              marginLeft: '4%',
            }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-end', marginTop: '-20%', width: '30%', top: '60%' }}>
                {/* <TouchableOpacity>
                  <Image source={require('../../../assets/images/gifattachment.png')} />
                </TouchableOpacity>
                <View style={{ bottom: '33%' }}><Image source={require('../../../assets/images/GIF.png')} /></View> */}
                {/* <TouchableOpacity>
                  <Icon name="GIF" style={{
                    //fontSize: 50,
                    //color: '#000000',
                    //fontWeight: "200",
                    top: '0%',
                  }} />
                </TouchableOpacity> */}

              </View>
              <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-start',
                marginTop: '-25%', width: '80%', height: 37, borderRadius: 0, top: '0%', left: '5%',
              }}>
                <TextInput
                  placeholder='Aa'
                  placeholderTextColor='#BEBEBE'
                  style={{
                    //flex: 1,
                    width: '100%',
                    //height:47,
                    fontFamily: 'Inter',
                    fontSize: 20,
                    color: '#000000',
                    //fontWeight: '400',
                    //left: '2%',
                    //top: '7%',
                    height: 40,
                    lineHeight: 24,
                    letterSpacing: -0.017,
                    //backgroundColor: 'pink',
                    marginBottom: '-20%'
                  }} />
              </View>
            </Card>
          </View>
          <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('ChatQuestion') }}>
              <Image source={require('../../../assets/images/comment.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../../../assets/images/microphone.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
};
export default Chat;