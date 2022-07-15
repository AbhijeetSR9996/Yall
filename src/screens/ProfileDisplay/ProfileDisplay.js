import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {ProfileDisplayStyles} from './ProfileDisplay.styles';
import {Heart} from '../../../assets/svgs/heart.svg';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const ProfileDisplay = () => {
  return (
    <View style={ProfileDisplayStyles.main}>
      <View style={ProfileDisplayStyles.container}>
        <Text style={ProfileDisplayStyles.text}> Priya Sharma </Text>
      </View>

      <View style={[ProfileDisplayStyles.container2,{top:5}]}>
        <ScrollView style={ProfileDisplayStyles.container2}>
          <View style={ProfileDisplayStyles.itemcontainer}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={ProfileDisplayStyles.img}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={ProfileDisplayStyles.img2}
            />
            {/* <Heart /> */}
            <View style={[ProfileDisplayStyles.infocontainer, {bottom: 60}]}>
              <View style={ProfileDisplayStyles.infoview}>
                <Image
                  source={require('../../../assets/images/bday.png')}
                  style={ProfileDisplayStyles.img3}
                />
                <Text style={ProfileDisplayStyles.text2}>22</Text>
              </View>
              <View style={ProfileDisplayStyles.infoview2}>
                <Image
                  source={require('../../../assets/images/location.png')}
                  style={ProfileDisplayStyles.img4}
                />
                <Text style={ProfileDisplayStyles.text3}>Noida 62</Text>
              </View>
              <View style={ProfileDisplayStyles.infoview3}>
                <Image
                  source={require('../../../assets/images/user.png')}
                  style={ProfileDisplayStyles.img5}
                />
                <Text style={ProfileDisplayStyles.text4}>Women</Text>
              </View>
              <View style={ProfileDisplayStyles.infoview4}>
                <Image
                  source={require('../../../assets/images/work.png')}
                  style={ProfileDisplayStyles.img6}
                />
                <Text style={ProfileDisplayStyles.text5}>Graphic Designer</Text>
              </View>
            </View>
          </View>

          <View style={[ProfileDisplayStyles.itemcontainer, {height: 376}]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={ProfileDisplayStyles.img}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={[ProfileDisplayStyles.img2, {bottom: '67%'}]}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 136, bottom: 60},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: '100%', height: 53, borderTopRightRadius: 16},
                ]}>
                <Text style={ProfileDisplayStyles.text6}>Ask a questions</Text>

                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={ProfileDisplayStyles.img7}
                />
              </View>
              <View style={ProfileDisplayStyles.vw}>
                <Image
                  source={require('../../../assets/images/twitter.png')}
                  style={ProfileDisplayStyles.img8}
                />
                <Text style={ProfileDisplayStyles.text7}>
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
              style={ProfileDisplayStyles.img}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={[ProfileDisplayStyles.img2, {bottom: '56%'}]}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 206, bottom: 60},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: '100%', height: 53, borderTopRightRadius: 16},
                ]}>
                <Text style={ProfileDisplayStyles.text8}>Ask a questions</Text>
                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={ProfileDisplayStyles.img7}
                />
              </View>
              <View style={ProfileDisplayStyles.vw2}>
                <Image
                  source={require('../../../assets/images/spotify.png')}
                  style={ProfileDisplayStyles.img9}
                />
                <Text style={ProfileDisplayStyles.text9}>
                  Favourite Songs powered by Spotify
                </Text>
                <Image
                  source={require('../../../assets/images/album.png')}
                  style={ProfileDisplayStyles.img10}
                />
                <Text style={ProfileDisplayStyles.text10}>Cool Me Down</Text>
                <Text style={ProfileDisplayStyles.text11}>
                  Gromee - Cool Me Down
                </Text>
                <Image
                  source={require('../../../assets/images/playbtn.png')}
                  style={ProfileDisplayStyles.img11}
                />
                <Image
                  source={require('../../../assets/images/scroller.png')}
                  style={ProfileDisplayStyles.img12}
                />
              </View>
            </View>
          </View>

          <View style={[ProfileDisplayStyles.itemcontainer, {height: 376}]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={ProfileDisplayStyles.img}
            />
            <Image
              source={require('../../../assets/images/likebtn.png')}
              style={[ProfileDisplayStyles.img2, {bottom: '67%'}]}
            />
            <Image
              source={require('../../../assets/images/cross.png')}
              style={ProfileDisplayStyles.img2a}
            />
            <View
              style={[
                ProfileDisplayStyles.infocontainer,
                {height: 106, bottom: 90},
              ]}>
              <View
                style={[
                  ProfileDisplayStyles.infoview,
                  {width: '100%', height: 53, borderTopRightRadius: 16},
                ]}>
                <Text style={ProfileDisplayStyles.text6}>Ask a questions</Text>
                <Image
                  source={require('../../../assets/images/likebtn.png')}
                  style={ProfileDisplayStyles.img7}
                />
              </View>
              <View style={ProfileDisplayStyles.vw3}>
                <Text style={ProfileDisplayStyles.text12}>
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
