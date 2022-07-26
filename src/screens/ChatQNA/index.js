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
  ImageBackground
} from 'react-native';
import { Rectangular } from '../../component/Buttons/rectangular';
import { styles } from './styles';
import { StyleSheet, Dimensions } from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

const { width, height } = Dimensions.get('window');


const ChatQNA = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={{
              fontSize: 50,
              color: '#000000',
              fontWeight: "200",
            }} />
          </TouchableOpacity>
          <Image source={require('../../../assets/images/profilecircle.png')} style={{ marginLeft: '0%', width: 40, height: 40 }} />
          <TouchableOpacity>
            <Text style={{
              color: '#000000',
              fontFamily: 'Bakbak One',
              fontWeight: '400',
              fontSize: 15,
              lineHeight: 21,
              letterSpacing: -0.017,
            }}>PR</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}></View>
        <View style={{ flex: 1.2, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/group.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/videorecorder.png')} />
          </TouchableOpacity>
        </View>

      </View>
      <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%' }} />
      <View style={{ flex: 0.9, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.text}>March 9, 2020</Text>
        </View>
        <View style={{ flex: 0.08, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            //borderWidth: 1.5,
            //borderColor: '#000000',
            backgroundColor: '#F6F6F6',
            width: 65,
            height: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 2,
            marginLeft: '5%'
          }}>
            <Text style={{
              fontSize: 15,
              color: '#000000',
              top: '20%',
              fontFamily: 'Inter',
              fontWeight: '400',
              letterSpacing: -0.017,
              lineHeight: 18
            }}> Hey </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.text}>March 9, 2020</Text>
        </View>
        <View style={{ flex: 0.08, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <ImageBackground
            source={require('../../../assets/images/buttonbg.png')}
            style={[{
              width: 65, height: 40, borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 20,
              marginRight: '5%'
            }]}
            imageStyle={{}}>
            <TouchableOpacity >
              <Text style={{
                fontSize: 15,
                color: '#000000',
                top: '60%',
                left: '25%',
                fontFamily: 'Inter',
                fontWeight: '400',
                letterSpacing: -0.017,
                lineHeight: 18
              }}> Hey </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>


        <View style={{ flex: 0.16, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            //borderWidth: 1.5,
            //borderColor: '#000000',
            backgroundColor: '#F6F6F6',
            width: 275,
            height: 95,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 2,
            marginRight: '13%'
          }}>
            <Text style={{
              fontSize: 15,
              color: '#000000',
              top: '10%',
              left: '-5%',
              textAlignVertical: 'center',
              fontFamily: 'Inter',
              fontWeight: '400',
              letterSpacing: -0.017,
              lineHeight: 18,
              width: 208
            }}> sads,bdkdsfkljdfshkl
              dsandjdjhgjhasdg\
              JHGDSAUJHDjhsadjhgdsauyg
              zscbjhmasgvjhaDFYHJ </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.08, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <ImageBackground
            source={require('../../../assets/images/buttonbg.png')}
            style={[{
              width: 65, height: 40, borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 20,
              marginRight: '5%'
            }]}
            imageStyle={{}}>
            <TouchableOpacity >
              <Text style={{
                fontSize: 15,
                color: '#000000',
                top: '60%',
                left: '25%',
                fontFamily: 'Inter',
                fontWeight: '400',
                letterSpacing: -0.017,
                lineHeight: 18
              }}> Hey </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Today</Text>
        </View>
        <View style={{ flex: 0.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

          </View>
          <View style={{ flex: 0.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{
              width: 268,
              height: 50,
              //left: 73,
              fontFamily: 'Bakbak One',
              fontWeight: '400',
              fontSize: 18,
              lineHeight: 25,
              color: '#000000'
            }}>Answered are revealed when you answer</Text>
          </View>
        </View>

        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Deliverd. 10:50 AM</Text>
        </View>
        <View style={{ flex: 0.1, width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity >
              <Image source={require('../../../assets/images/camera2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2.2, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{
              width: '100%',
              alignSelf: 'center',
              height: 47,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: 'rgba(142,142,142,0.3)',
              backgroundColor: '#F7F7F7',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flex: 1
            }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-end', marginTop: '-20%', width: '30%', top: '60%' }}>
                <TouchableOpacity>
                  <Image source={require('../../../assets/images/gifattachment.png')} />
                </TouchableOpacity>
                <View style={{ bottom: '30%' }}><Image source={require('../../../assets/images/GIF.png')} /></View>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-start', marginTop: '-25%', width: '80%', height: 47, borderRadius: 30, top: '5%' }}>
                <TextInput
                  placeholder='Aa'
                  placeholderTextColor='#BEBEBE'
                  style={{
                    //flex: 1,
                    //width:'80%',
                    //height:47,
                    fontSize: 20,
                    color: '#000000',
                    fontWeight: '400',
                    right: '35%',
                    lineHeight: 24,
                    letterSpacing: -0.017,
                  }} />
              </View>
            </Card>
          </View>
          <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
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
export default ChatQNA;