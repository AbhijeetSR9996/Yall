import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Rectangular } from '../../component/Buttons/rectangular';
import { icons } from '../../../assets/icons/icons';
import ImagePicker from 'react-native-image-crop-picker';

const PaymentMethods = ({ navigation }) => {

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

        <SafeAreaView >
            <View style={styles.main_view}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.left_arrow} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.big_text}>Payment </Text>
                <View style={styles.other_view}></View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview}>

                    <View style={styles.container_view}>
                    <ImageBackground
                        source={require('../../../assets/images/debitcard-bg.png')}
                        style={[styles.right_container_btn,{width:76,height:169}]}
                        imageStyle={{borderRadius:20}}>
                        <TouchableOpacity style={[styles.right_container_btn,{width:76,height:169}]}
                        onPress={() => createTwoButtonAlert()}>
                            <Icon1 name="plus" style={styles.icon} />
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={styles.container_view2}>
                    <ImageBackground
                        source={require('../../../assets/images/debitcard-bg.png')}
                        style={[styles.right_container_btn,{width:249,height:169}]}
                        imageStyle={{borderRadius:20}}> 
                        <TouchableOpacity style={styles.right_container_btn}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '59%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '18.5%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={styles.container_view3}>
                    <ImageBackground
                        source={require('../../../assets/images/debitcard-bg.png')}
                        style={[styles.right_container_btn,{width:249,height:169}]}
                        imageStyle={{borderRadius:20}}> 
                        <TouchableOpacity style={styles.right_container_btn}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '59%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '18.5%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={styles.container_view4}>
                    <ImageBackground
                        source={require('../../../assets/images/debitcard-bg.png')}
                        style={[styles.right_container_btn,{width:249,height:169}]}
                        imageStyle={{borderRadius:20}}>
                        <TouchableOpacity style={styles.right_container_btn}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '59%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '18.5%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </ScrollView>

                <View style={styles.payments_view}>
                <Text style={styles.small_text}>Other Payment Methods </Text>
                <View style={styles.text_view}>
                    <View style={styles.anothericon_view}>
                        <Image source={require('../../../assets/images/debitcard.png')}/>
                    </View>
                    <TouchableOpacity style={[styles.icon_text, {marginLeft: '35%', }]}>
                    <Text style={styles.payment_optiontext1}> Credit / Debit Card</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text_view}>
                    <View style={styles.anothericon_view}>
                        <Image source={require('../../../assets/images/bank.png')}/>
                    </View>
                    <TouchableOpacity style={[styles.icon_text, {marginLeft: '35%'}]}>
                    <Text style={styles.payment_optiontext2}> Net Banking</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text_view}>
                    <View style={styles.anothericon_view}>
                        <Image source={require('../../../assets/images/phonepe.png')}/>
                    </View>
                    <TouchableOpacity style={[styles.icon_text, {marginLeft: '35%'}]}>
                    <Text style={styles.payment_optiontext4}> PhonePe</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.text_view}>
                    <View style={styles.anothericon_view}>
                        <Image source={require('../../../assets/images/wallet.png')}/>
                    </View>
                    <TouchableOpacity style={[styles.icon_text, {marginLeft: '35%'}]}>
                    <Text style={styles.payment_optiontext3}> Other Wallets</Text>
                    </TouchableOpacity>
                </View>      
                </View> 

                <View style={styles.payment_box}>
                    <View style={styles.payment_text}>
                        <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '12%', fontSize: 25, letterSpacing: -0.017, fontWeight: '600' }]}> $ 200</Text>
                        <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '14%', fontSize: 15, marginTop: '30%', fontWeight: '600', letterSpacing: -0.017, }]}> View Details</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.payment_button}
                        onPress={() => navigation.navigate('BookingConfirm')}>
                        <View style={styles.payment_buttonview}>
                            <Text style={styles.payment_buttontext}>Pay Now</Text>
                            <View style={styles.payment_buttonicon}>{icons.rightarrow}</View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default PaymentMethods;