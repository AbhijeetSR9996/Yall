import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { height, width } from '../../services/helper';

const ProfileDisplay = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.main}>
      <View style={Styles.container}>
        <Text style={Styles.text}> Priya Sharma </Text>
      </View>

      <View style={[Styles.container2, {
        top: 35,
        //top: 120,

      }]}>

        <ScrollView style={Styles.container2}>
          <View style={Styles.itemcontainer}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={Styles.img} />

            {/* <TouchableOpacity style={Styles.iconcontainer}
            onPress={()=> navigation.navigate('MatchProfile')}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}/>
            </TouchableOpacity> */}



            <View style={[Styles.infocontainer, { backgroundColor: '#000000', bottom: 60, height: 70, }]}>
              <View style={{ right: '1%', bottom: '2%', borderWidth: 1.5, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View style={Styles.infoview}>
                  <Image
                    source={require('../../../assets/images/bday.png')}
                    style={Styles.img3}
                  />
                  <Text style={Styles.text2}>22</Text>
                </View>
                <View style={Styles.infoview2}>
                  <Image
                    source={require('../../../assets/images/location.png')}
                    style={Styles.img4}
                  />
                  <Text style={Styles.text3}>Noida 62</Text>
                </View>
                <View style={Styles.infoview3}>
                  <Image
                    source={require('../../../assets/images/user.png')}
                    style={Styles.img5}
                  />
                  <Text style={Styles.text4}>Women</Text>
                </View>
                <View style={Styles.infoview4}>
                  <Image
                    source={require('../../../assets/images/work.png')}
                    style={Styles.img6}
                  />
                  <Text style={Styles.text5}>Graphic Designer</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[Styles.itemcontainer, { height: 376 }]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={Styles.img}
            />
            {/* <TouchableOpacity style={[Styles.iconcontainer,{bottom:'67%'}]}
            onPress={()=> navigation.navigate('MatchProfile')}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}
              />
            </TouchableOpacity> */}

            <View
              style={[
                Styles.infocontainer,
                { backgroundColor: '#000000', height: 140, bottom: 60 },
              ]}>
              <View style={{ right: '1%', bottom: '2%', borderWidth: 1.5, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View
                  style={[
                    Styles.infoview,
                    { width: '100%', height: 53, borderTopRightRadius: 16 },
                  ]}>
                  <Text style={Styles.text6}>Ask a questions</Text>

                  {/* <TouchableOpacity style={Styles.iconcontainer2}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}/>
              </TouchableOpacity>    */}
                </View>


                <View style={Styles.vw}>
                  <Image
                    source={require('../../../assets/images/twitter.png')}
                    style={Styles.img8}
                  />
                  <Text style={Styles.text7}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been theLorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[Styles.itemcontainer, { height: 450 }]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={Styles.img}
            />
            {/* <TouchableOpacity style={[Styles.iconcontainer,{bottom:'56%'}]}
            onPress={()=> navigation.navigate('MatchProfile')}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}
              />
            </TouchableOpacity> */}

            <View
              style={[
                Styles.infocontainer,
                { backgroundColor: '#000000', height: 210, bottom: 60 },
              ]}>
              <View style={{ right: '1%', bottom: '2%', borderWidth: 1.5, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View
                  style={[
                    Styles.infoview,
                    { width: '100%', height: 53, borderTopRightRadius: 16 },
                  ]}>
                  <Text style={Styles.text8}>Ask a questions</Text>
                  {/* <TouchableOpacity style={Styles.iconcontainer2}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}/>
              </TouchableOpacity> */}
                </View>
                <View style={Styles.vw2}>
                  <Image
                    source={require('../../../assets/images/spotify.png')}
                    style={Styles.img9}
                  />
                  <Text style={Styles.text9}>
                    Favourite Songs powered by Spotify
                  </Text>
                  <Image
                    source={require('../../../assets/images/album.png')}
                    style={Styles.img10}
                  />
                  <Text style={Styles.text10}>Cool Me Down</Text>
                  <Text style={Styles.text11}>
                    Gromee - Cool Me Down
                  </Text>
                  <Image
                    source={require('../../../assets/images/playbtn.png')}
                    style={Styles.img11}
                  />
                  <Image
                    source={require('../../../assets/images/scroller.png')}
                    style={Styles.img12}
                  />
                  <View style={{ flex: 0.05, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginTop: '35%', width: '100%', marginHorizontal: '-5%' }}>
                    <TouchableOpacity >
                      <Image source={require('../../../assets/images/ellipseblack.png')} style={{ paddingRight: '4%', }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Image source={require('../../../assets/images/ellipsewhite.png')} style={{ paddingRight: '4%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Image source={require('../../../assets/images/ellipsewhite.png')} style={{ paddingRight: '4%' }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[Styles.itemcontainer, { height: 376 }]}>
            <Image
              source={require('../../../assets/images/profilegirl.png')}
              style={Styles.img}
            />
            {/* <TouchableOpacity style={[Styles.iconcontainer,{bottom:'67%'}]}
            onPress={()=> navigation.navigate('MatchProfile')}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}
              />
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={Styles.crosscontainer}
            onPress={()=> navigation.navigate('MainBottomNavigation')}>
              <Image
              source={require('../../../assets/images/cross.png')}
              style={Styles.imglike}/>
              </TouchableOpacity> */}

            <View
              style={[
                Styles.infocontainer,
                { backgroundColor: '#000000', height: 110, bottom: 90 },
              ]}>
              <View style={{ right: '1%', bottom: '2%', borderWidth: 1.5, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                <View
                  style={[
                    Styles.infoview,
                    { width: '100%', height: 53, borderTopRightRadius: 16 },
                  ]}>
                  <Text style={Styles.text6}>Ask a questions</Text>
                  {/* <TouchableOpacity style={Styles.iconcontainer2}>
              <Image
              source={require('../../../assets/images/likebtn2.png')}
              style={Styles.imglike}/>
              </TouchableOpacity> */}

                </View>
                <View style={Styles.vw3}>
                  <Text style={Styles.text12}>
                    Ride bike on high speed
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>



      </View>

      <TouchableOpacity style={Styles.iconcontainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('MatchProfile')}>
        <Image
          source={require('../../../assets/images/likebtn2.png')}
          style={Styles.imglike}
          resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity style={Styles.crosscontainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('MainBottomNavigation')}>
        <Image
          source={require('../../../assets/images/cross2.png')}
          style={Styles.imglike}
          resizeMode="contain" />
      </TouchableOpacity>
    </View>


  );
};

export default ProfileDisplay;