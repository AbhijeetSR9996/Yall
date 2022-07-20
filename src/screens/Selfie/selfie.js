import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { ProfileDisplayStyles } from '../../screens/ProfileDisplay/ProfileDisplay.styles';
import { Card } from 'react-native-paper';
import { Rectangular } from '../../component/Buttons/rectangular';
import ImagePicker from 'react-native-image-crop-picker';
import { splashStyles } from '../splashScreen/splashStyles';
import { icons } from '../../../assets/icons/icons';

const Selfie = ({ navigation }) => {
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
    <View style={[govtStyles.container,{alignItems:'center'}]}>
      <Image
        style={splashStyles.backgroundContainer}
        source={require('../../../assets/images/selfieimage.png')}
        resizeMode="cover"
      />
      <Card
        style={[
          govtStyles.borderBox,
          {
            width: 310,
            top: '15%',
            height: 310,
            borderRadius: 150,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e8e6e6',
            borderWidth: 10,
          },
        ]}></Card>

      <TouchableOpacity
        onPress={() => createTwoButtonAlert()}
        style={[
          splashStyles.touchableStarted,
          { top: '35%', alignSelf: 'center' },
        ]}>
        <View style={splashStyles.borderView}>
          <Text style={splashStyles.buttonText}>Take a selfie</Text>
          <View style={splashStyles.borderView1}>{icons.rightarrow}</View>
        </View>
      </TouchableOpacity>
      <Rectangular
        path="UserName"
        style={{
          width: 10,
          position: 'absolute',
          alignSelf: 'center',
          top: '90%',
        }}
        name="Continue"
      />
    </View>
  );
};
export default Selfie;
