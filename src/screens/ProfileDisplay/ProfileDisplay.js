import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from 'react-native-element-dropdown/src/components/TextInput/styles';
import {ProfileDisplayStyles} from './ProfileDisplay.styles';

const {width, height} = Dimensions.get('window');

const ProfileDisplay = ({navigation}) => {
  return (
    <View style={ProfileDisplayStyles.main}>
      <View style={ProfileDisplayStyles.container}>
        <Text style={ProfileDisplayStyles.text}> Angel Priya </Text>
      </View>

      <View>
        <ScrollView style={ProfileDisplayStyles.container2}>
          <View style={ProfileDisplayStyles.itemcontainer}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={{height: 250, width: width}}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={{height: 30, width: 30, bottom: 235, left: 310}}
            />
            <View style={[ProfileDisplayStyles.infocontainer, {bottom: 60}]}>
              <View style={ProfileDisplayStyles.infoview}>
                <Image
                  source={require('../../../assets/images/bday.png')}
                  style={{
                    height: 20,
                    width: 20,
                    left: 10,
                    position: 'absolute',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    right: 15,
                    fontWeight: 'bold',
                    fontSize: 11,
                  }}>
                  22
                </Text>
              </View>
              <View style={ProfileDisplayStyles.infoview2}>
                <Image
                  source={require('../../../assets/images/location.png')}
                  style={{height: 30, width: 22, left: 5, position: 'absolute'}}
                />
                <Text
                  style={{
                    position: 'absolute',
                    right: 10,
                    fontWeight: 'bold',
                    fontSize: 11,
                  }}>
                  Noida 62
                </Text>
              </View>
              <View style={ProfileDisplayStyles.infoview3}>
                <Image
                  source={require('../../../assets/images/user.png')}
                  style={{
                    height: 25,
                    width: 20,
                    left: 10,
                    position: 'absolute',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    right: 15,
                    fontWeight: 'bold',
                    fontSize: 11,
                  }}>
                  Women
                </Text>
              </View>
              <View style={ProfileDisplayStyles.infoview4}>
                <Image
                  source={require('../../../assets/images/work.png')}
                  style={{height: 20, width: 20, left: 5, position: 'absolute'}}
                />
                <Text
                  style={{
                    position: 'absolute',
                    right: 5,
                    fontWeight: 'bold',
                    fontSize: 11,
                  }}>
                  Graphic Designer
                </Text>
              </View>
            </View>
          </View>

          <View style={[ProfileDisplayStyles.itemcontainer, {height: 376}]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={{height: 250, width: width}}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={{height: 30, width: 30, bottom: 235, left: 310}}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 136, bottom: 60},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: 311, height: 53, borderTopRightRadius: 16},
                ]}>
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 18,
                    left: 20,
                    color: 'black',
                  }}>
                  Ask a questions
                </Text>
                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={{
                    height: 40,
                    width: 40,
                    position: 'absolute',
                    right: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: 311,
                  height: 80,
                  backgroundColor: '#f9dfff',
                  position: 'relative',
                  alignItems: 'space-between',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}>
                <Image
                  source={require('../../../assets/images/twitter.png')}
                  style={{
                    height: 32,
                    width: 30,
                    left: 10,
                    position: 'absolute',
                    bottom: 30,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    left: 50,
                    fontWeight: 'bold',
                    fontSize: 11,
                    position: 'absolute',
                    right: 10,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been theLorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </Text>
              </View>
            </View>
          </View>

          <View style={[ProfileDisplayStyles.itemcontainer, {height: 450}]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={{height: 250, width: width}}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={{height: 30, width: 30, bottom: 235, left: 310}}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 206, bottom: 60},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: 311, height: 53, borderTopRightRadius: 16},
                ]}>
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 18,
                    left: 20,
                    color: 'black',
                  }}>
                  Ask a questions
                </Text>
                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={{
                    height: 40,
                    width: 40,
                    position: 'absolute',
                    right: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: 311,
                  height: 150,
                  backgroundColor: '#f9dfff',
                  position: 'relative',
                  alignItems: 'space-between',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}>
                <Image
                  source={require('../../../assets/images/spotify.png')}
                  style={{
                    height: 30,
                    width: 30,
                    left: 10,
                    position: 'absolute',
                    bottom: 105,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 16,
                    left: 45,
                    top: 15,
                    color: 'black',
                  }}>
                  Favourite Songs powered by Spotify
                </Text>
                <Image
                  source={require('../../../assets/images/album.png')}
                  style={{
                    height: 50,
                    width: 50,
                    left: 10,
                    position: 'absolute',
                    bottom: 50,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 13,
                    left: 70,
                    top: 55,
                    position: 'absolute',
                  }}>
                  Cool Me Down
                </Text>
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 13,
                    left: 70,
                    top: 70,
                    position: 'absolute',
                  }}>
                  Gromee - Cool Me Down
                </Text>
                <Image
                  source={require('../../../assets/images/playbtn.png')}
                  style={{
                    height: 20,
                    width: 20,
                    left: 10,
                    top: 110,
                    position: 'absolute',
                    bottom: 50,
                  }}
                />
                <Image
                  source={require('../../../assets/images/scroller.png')}
                  style={{
                    height: 20,
                    width: 240,
                    left: 40,
                    top: 110,
                    position: 'absolute',
                    bottom: 50,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={[ProfileDisplayStyles.itemcontainer, {height: 376}]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={{height: 250, width: width}}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={{height: 30, width: 30, bottom: 235, left: 310}}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 106, bottom: 60},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: 311, height: 53, borderTopRightRadius: 16},
                ]}>
                <Text
                  style={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    fontSize: 18,
                    left: 20,
                    color: 'black',
                  }}>
                  Ask a questions
                </Text>
                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={{
                    height: 40,
                    width: 40,
                    position: 'absolute',
                    right: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: 311,
                  height: 50,
                  backgroundColor: '#f9dfff',
                  position: 'relative',
                  alignItems: 'space-between',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}>
                <Text
                  style={{
                    position: 'absolute',
                    left: 40,
                    fontSize: 18,
                    fontWeight: '700',
                    position: 'absolute',
                    right: 10,
                  }}>
                  Ride bike on high speed
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileDisplay;
