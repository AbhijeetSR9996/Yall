import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { ProfileDisplayStyles } from '../../screens/ProfileDisplay/ProfileDisplay.styles';
import { Card } from 'react-native-paper';
import { Rectangular } from '../../component/Buttons/Rectangular';
import ImagePicker from 'react-native-image-crop-picker';
//import { splashStyles } from '../../screens/splashScreen/splashStyles';
import Styles from '../GetStarted/styles';
import { icons } from '../../../assets/icons/icons';
import styles from './styles';

const { width, height } = Dimensions.get('window');


const Upload = ({ navigation }) => {
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
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 700,
      height: 700,

      includeBase64: true,
      compressImageQuality: 0.5,
    });
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

  const createOneButtonAlert = () =>
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
          text: 'Choose from Gallery',
          onPress: () => choosePhotoFromLibrary(),
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={govtStyles.container}>
      <Text style={[govtStyles.text, { width: 268 }]}>Upload Aadhaar Card</Text>
      <Text style={[govtStyles.text, { top: '2.1%', left: '55%' }]}> </Text>

      <Text style={[govtStyles.paragraph, { top: '0%' }]}>
        Don’t loose access to your account, verify your email 50kb.
      </Text>
      <Card
        style={[
          govtStyles.borderBox,
          {
            //width: 368,
            width: 330,
            top: '5%',
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e8e6e6',

            //marginHorizontal: '20%'
          },
        ]}>
        <View
          style={styles.card_view}>
          <View
            style={[
              govtStyles.textMain,
              { position: 'relative', justifyContent: 'center' },
            ]}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => createTwoButtonAlert()}>
              <Image
                source={require('../../../assets/images/idupload.png')}
                style={
                  {
                    width: 95,
                    height: 100,
                    top: 6,
                    //left: '0%',
                    alignSelf: 'center'
                  }
                }
              />
            </TouchableOpacity>
            <Text
              style={[
                govtStyles.textCard,
                { top: 120, left: '45%', fontSize: 15, position: 'absolute' },
              ]}>
              Or
            </Text>
            <TouchableOpacity
              onPress={() => createOneButtonAlert()}
              style={{
                top: '65%', width: width * 0.5, height: height * 0.07,
                borderWidth: 1,
                alignSelf: 'center',
              }}>
              <View style={{
                width: width * 0.5, left: 10,
                top: 8, borderWidth: 1,
                borderRightWidth: 0,
                height: height * 0.07,
                //alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
                position: 'relative',
              }}>
                <Text style={{
                  fontWeight: '400',
                  fontSize: 18,
                  //fontFamily: 'Bakbak One',
                  fontFamily: 'BakbakOneRegular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  //paddingVertical: 10,
                  paddingVertical: 13,
                  right: '10%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Upload File</Text>

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
      </Card>
      <Image
        source={require('../../../assets/images/file.png')}
        style={{
          width: 40,
          height: 50,
          top: 23,
          //left: -300,
          //marginLeft:'7%',
          marginLeft: '4%'
        }}
      />
      <Text
        style={[
          govtStyles.paragraph,
          { top: '-3%', left: '20%', color: '#000000' },
        ]}>
        Aadhaar card
      </Text>
      <Image
        source={require('../../../assets/images/scroller.png')}
        style={{
          width: '73%',
          height: 30,
          top: -25,
          //left: -25,
          marginLeft: '20%'
        }}
      />

      <Rectangular
        path="Selfie"
        style={{
          width: 10,
          position: 'absolute',
          alignSelf: 'center',
          top: '80%',
        }}
        name="Verify & Continue"
      />
      <Rectangular
        path="Upload"
        style={{
          width: 10,
          position: 'absolute',
          alignSelf: 'center',
          top: '90%',
        }}
        name="Back"
      />
    </View>
  );
};
export default Upload;
