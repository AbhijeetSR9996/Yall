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
import {styles} from '../genderScreens/styles';
import {imageicon, icons} from '../../../assets/icons/icons';
import {photoStyles} from '../AddPhoto/styles';
import {signupStyles} from '../SignUp/signupStyles';
import {govtStyles} from '../../screens/govtRegister.js/govtStyles';
import {Card} from 'react-native-paper';
import {ProfileDisplayStyles} from '../../screens/ProfileDisplay/ProfileDisplay.styles';
import {userStyles} from '../../screens/User details/userStyles';

const Edit = ({navigation}) => {
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
    }).catch(error => {});
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
      {cancelable: false},
    );

  return (
    <View style={[styles.container, {flex: 1}]}>
      <TouchableOpacity onPress={() => navigation.navigate('Gender4')}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <Text
        style={[
          photoStyles.addPhotoText,
          {fontSize: 18, top: '-5%', left: '15%'},
        ]}>
        Profile
      </Text>
      <Text
        style={[
          photoStyles.addPhotoText,
          {fontSize: 18, top: '-16%', left: '80%'},
        ]}>
        Save
      </Text>
      <Card
        style={[
          govtStyles.borderBox,
          {
            width: 173,
            top: '-15%',
            height: 132,
            borderRadius: 66,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'grey',
            alignSelf: 'center',
          },
        ]}>
        <Image
          source={require('../../../assets/images/heart.png')}
          style={[
            ProfileDisplayStyles.img2,
            {
              width: 90,
              height: 90,
              top: 6,
              right: 10,
            },
          ]}
        />
      </Card>
      <View
        style={[
          ProfileDisplayStyles.infocontainer,
          {
            height: 30,
            width: 60,
            bottom: 150,
            left: 180,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Image
          source={require('../../../assets/images/camera.png')}
          style={[
            ProfileDisplayStyles.img7,
            {
              height: 20,
              width: 30,
              left: 15,
            },
          ]}
        />
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontSize: 18,
            top: '-20%',
            left: '10%',
            color: 'grey',
            fontWeight: '300',
          },
        ]}>
        Full name
      </Text>
      <View style={[userStyles.textInput, {top: '-28%', left: '3%'}]}>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontSize: 18,
            top: '-27%',
            left: '10%',
            color: 'grey',
            fontWeight: '300',
          },
        ]}>
        Surname
      </Text>
      <View style={[userStyles.textInput, {top: '-35%', left: '3%'}]}>
        <TextInput
          placeholder="Doe"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontSize: 18,
            top: '-34%',
            left: '10%',
            color: 'grey',
            fontWeight: '300',
          },
        ]}>
        Phone
      </Text>
      <View style={[userStyles.textInput, {top: '-42%', left: '3%'}]}>
        <TextInput
          placeholder="+8511 6654 5265"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontSize: 18,
            top: '-41%',
            left: '10%',
            color: 'grey',
            fontWeight: '300',
          },
        ]}>
        Gender
      </Text>
      <View style={[userStyles.textInput, {top: '-49%', left: '3%'}]}>
        <TextInput
          placeholder="Male"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontSize: 18,
            top: '-48%',
            left: '10%',
            color: 'grey',
            fontWeight: '300',
          },
        ]}>
        Date of birth
      </Text>
      <View style={[userStyles.textInput, {top: '-56%', left: '3%'}]}>
        <TextInput
          placeholder="01-01-2001"
          placeholderTextColor="#000000"
          style={userStyles.textInput1}></TextInput>
      </View>
    </View>
  );
};
export default Edit;
