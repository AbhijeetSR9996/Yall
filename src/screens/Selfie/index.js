import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { ProfileDisplayStyles } from '../../screens/ProfileDisplay/ProfileDisplay.styles';
import { Card } from 'react-native-paper';
import { Rectangular } from '../../component/Buttons/Rectangular';
import ImagePicker from 'react-native-image-crop-picker';
//import { splashStyles } from '../splashScreen/splashStyles';
import Styles from './styles';
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
                // {
                //   text: 'Choose from Gallery',
                //   onPress: () => choosePhotoFromLibrary(),
                // },
            ],
            { cancelable: false },
        );

    return (
        <View style={Styles.container}>
            <ImageBackground
                source={require('../../../assets/images/selfieimage.png')}
                resizeMode='stretch'
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}
            >

                <Card
                    style={Styles.card_box}></Card>

                <TouchableOpacity
                    onPress={() => createTwoButtonAlert()}
                    style={Styles.button_container}>
                    <View style={Styles.borderView}>
                        <Text style={Styles.buttonText}>Take a selfie</Text>
                        <View style={Styles.borderView1}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('UserName') }}
                    style={[Styles.button_container, { top: '15%' }]}>
                    <View style={Styles.borderView}>
                        <Text style={[Styles.buttonText, { right: '30%' }]}>Continue</Text>
                        <View style={Styles.borderView1}>{icons.rightarrow}</View>
                    </View>
                </TouchableOpacity>
                {/* <Rectangular
                    path="UserName"
                    style={Styles.button}
                    name="Continue"
                /> */}
            </ImageBackground>
        </View>
    );
};
export default Selfie;
