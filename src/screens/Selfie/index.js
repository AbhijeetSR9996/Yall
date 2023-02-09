import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Card } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import Styles from './styles';
import { icons } from '../../../assets/icons/icons';
import { ImagePickerModal } from '../../component/ImagePicker/image-picker-modal';

const Selfie = ({ navigation }) => {

  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../../assets/images/selfieimage.png')}
        resizeMode='stretch'
        style={{
          flex: 1,
          justifyContent: 'center',
        }} >
        <Card style={Styles.card_box}>
          <Image
            style={{
              height: 290,
              width: 290,
              borderRadius: 290 / 2,
            }}
            source={uri ? { uri } : ''}
          />
        </Card>

        <TouchableOpacity
          onPress={() => setVisible(true)}
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
        <ImagePickerModal
          isVisible={visible}
          onClose={() => setVisible(false)}
          onImageLibraryPress={onImageLibraryPress}
          onCameraPress={onCameraPress}
        />
      </ImageBackground>
    </View>
  );
};
export default Selfie;

