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

const Edit = ({ navigation }) => {
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
    <View style={[styles.container, { flex: 1 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <View style={{ justifyContent: 'space-between', bottom: '17%', marginHorizontal: '8%', backgroundColor: 'transparent', width: width, height: height * 0.11, flexDirection: 'row' }}>
        <Text
          style={[
            photoStyles.addPhotoText,
            { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, },
          ]}>
          Profile
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('MainBottomNavigation') }}>
          <Text
            style={[
              photoStyles.addPhotoText,
              { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, left: '34%' },
            ]}>
            Save
          </Text>
        </TouchableOpacity>
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
            width: 60,
            //bottom: '20.5%',
            marginTop: '18%',
            marginBottom: '10%',
            //left: 150,
            left: '43%',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Image
          source={require('../../../assets/images/camera.png')}
          onPress={() => createTwoButtonAlert()}
          style={[
            {
              height: 20,
              width: 30,
              //left: '0%',
              alignSelf: 'center'
            },
          ]}
        />
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontFamily: 'Inter',
            fontSize: 15,
            //marginTop: '20%',
            top: '-20%',
            left: '7%',
            color: '#B4B4B4',

          },
        ]}>
        Full name
      </Text>
      <View style={[userStyles.textInput, { top: '-26%', left: '0%' }]}>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#000000"
          editable={false}
          style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#B4B4B4' }]}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontFamily: 'Inter',
            fontSize: 15,
            top: '-25%',
            left: '7%',
            color: '#B4B4B4',

          },
        ]}>
        Surname
      </Text>
      <View style={[userStyles.textInput, { top: '-31%', left: '0%' }]}>
        <TextInput
          placeholder="Doe"
          placeholderTextColor="#000000"
          editable={false}
          style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#B4B4B4' }]}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontFamily: 'Inter',
            fontSize: 15,
            top: '-30%',
            left: '7%',
            color: '#B4B4B4',

          },
        ]}>
        Phone
      </Text>
      <View style={[userStyles.textInput, { top: '-36%', left: '0%' }]}>
        <TextInput
          placeholder="+8511 6654 5265"
          placeholderTextColor="#000000"
          editable={false}
          style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#B4B4B4' }]}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontFamily: 'Inter',
            fontSize: 15,
            top: '-35%',
            left: '7%',
            color: '#B4B4B4',

          },
        ]}>
        Gender
      </Text>
      <View style={[userStyles.textInput, { top: '-41%', left: '0%' }]}>
        <TextInput
          placeholder="Male"
          placeholderTextColor="#000000"
          editable={false}
          style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#B4B4B4' }]}></TextInput>
      </View>

      <Text
        style={[
          photoStyles.addPhotoText,
          {
            fontFamily: 'Inter',
            fontSize: 15,
            top: '-40%',
            left: '7%',
            color: '#B4B4B4',

          },
        ]}>
        Date of birth
      </Text>
      <View style={[userStyles.textInput, { top: '-46%', left: '0%' }]}>
        <TextInput
          placeholder="01-01-2001"
          placeholderTextColor="#000000"
          editable={false}
          style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#B4B4B4' }]}></TextInput>
      </View>
    </View>
  );
};
export default Edit;
