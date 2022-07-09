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
import { Rectangular } from '../../component/Buttons/rectangular';
import ImagePicker from 'react-native-image-crop-picker';
import { splashStyles } from '../../screens/splashScreen/splashStyles';
import { icons } from '../../../assets/icons/icons';
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
        {
          text: 'Choose from Gallery',
          onPress: () => choosePhotoFromLibrary(),
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={govtStyles.container}>
      <Text style={govtStyles.text}>Upload Aadhaar</Text>
      <Text style={[govtStyles.text, { top: '2%', left: '49%' }]}> Card</Text>

      <Text style={[govtStyles.paragraph, { top: '0%' }]}>
        Don’t lose access to your account, verify your email 50kb.
      </Text>
      <Card
        style={[
          govtStyles.borderBox,
          {
            width: 365,
            top: '5%',
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e8e6e6',
          },
        ]}>
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={[
              govtStyles.textMain,
              { position: 'relative', justifyContent: 'center' },
            ]}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 70,
                width: 70,
                borderRadius: 10,
                top: 10,
              }}
              onPress={() => createTwoButtonAlert()}>
              <Image
                source={require('../../../assets/images/idupload.png')}
                style={[
                  ProfileDisplayStyles.img2,
                  {
                    width: 90,
                    height: 100,
                    top: 6,
                    left: '10%',
                  },
                ]}
              />
            </TouchableOpacity>
            <Text
              style={[
                govtStyles.textCard,
                { top: 115, left: '45%', fontSize: 15, position: 'absolute' },
              ]}>
              Or
            </Text>
            <TouchableOpacity
              onPress={() => createTwoButtonAlert()}
              style={[
                splashStyles.touchableStarted,
                { top: '70%', width: width * 0.5 },
              ]}>
              <View style={[splashStyles.borderView, { width: width * 0.5 }]}>
                <Text style={splashStyles.buttonText}>Upload File</Text>

                <View style={splashStyles.borderView1}>{icons.rightarrow}</View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Image
        source={require('../../../assets/images/file.png')}
        style={[
          ProfileDisplayStyles.img2,
          {
            width: 40,
            height: 50,
            top: 23,
            left: -300,
          },
        ]}
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
        style={[
          ProfileDisplayStyles.img2,
          {
            width: '73%',
            height: 30,
            top: -25,
            left: -25,
          },
        ]}
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
        path="Selfie"
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
