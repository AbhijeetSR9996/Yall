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
import { photoStyles } from './styles';
import { signupStyles } from '../SignUp/signupStyles';
import { Rectangular } from '../../component/Buttons/Rectangular';
import { height, width } from '../../services/helper';

const AddPhoto = ({ navigation }) => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <Text style={photoStyles.addPhotoText}>Add Photos </Text>
      <Text style={photoStyles.highlightText}>
        Add at least 2 photos to continue
      </Text>
      <View style={{ flexDirection: 'row', top: 200 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 50,
            height: 30,
            width: 30,
            borderRadius: 10,
            // top: 200,
          }}
          onPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 150,
            height: 30,
            width: 30,
            borderRadius: 10,
            // top: 200,
          }}
          onPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 280,
            height: 30,
            width: 30,
            borderRadius: 10,
            // top: 200,
          }}
          onPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', top: 400 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 50,
            height: 30,
            width: 30,
            borderRadius: 10,
            // top: 200,
          }}
          oonPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 150,
            height: 30,
            width: 30,
            borderRadius: 10,
            // top: 200,
          }}
          onPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCC7E1',
            left: 280,
            height: 30,
            width: 30,
            borderRadius: 10,
          }}
          onPress={() => createTwoButtonAlert()}>
          <Text>{icons.plus}</Text>
        </TouchableOpacity>
      </View>
      {/* <Rectangular
        path="Edit"
        style={{
          width: 10,
          position: 'absolute',
          alignSelf: 'center',
          top: '90%',
        }}
        name="Continue"
      /> */}
      <TouchableOpacity
        style={{
          top: '61%',
          alignSelf: 'center',
          width: width * 0.8,
          height: height * 0.07,
          borderWidth: 1,
          //alignSelf: 'center',
          right: '2%'
        }}
        onPress={() => { navigation.navigate('Edit') }}>
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
            fontWeight: '900',
            fontSize: 17,
            //fontFamily: 'Bakbak One',
            fontFamily: 'BakbakOneRegular',
            color: '#000000',
            alignSelf: 'center',
            justifyContent: 'center',
            //paddingVertical: 10,
            //paddingVertical: 13,
            top: '30.3%',
            right: '31%',
            //right: '20%',
            lineHeight: 25,
            letterSpacing: -0.017
          }}>Continue </Text>
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
  );
};
export default AddPhoto;
