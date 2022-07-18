import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {Rectangular} from '../../component/Buttons/rectangular';
import { styles } from './styles';


const MatchProfile = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sam</Text>
          <Image
          source={require('../../../assets/images/matchpic.png')}
          style={styles.img2}/>
        <TextInput
          placeholder="Add a comment"
          placeholderTextColor="lightgrey"
          style={styles.textInput1}>
        </TextInput>
      <Rectangular
        path="AddPhoto"
        style={styles.rect}
        name="Send Like"
      />
      <Rectangular
        path="AddPhoto"
        style={styles.rect2}
        name="Cancel"
      />
    </View>
    
    // <View style={[styles.container,{flexDirection:'column'}]}>
    //   <View style={{flex:1,backgroundColor:'red',alignItems:'center',
    //     justifyContent:'center',
    //     flexDirection:'column',}}><Text style={styles.text}>Sam</Text></View>
    //   <View style={{flex:2,backgroundColor:'brown',alignItems:'center',
    //     justifyContent:'center',
    //     flexDirection:'column',}}><Text style={styles.text}>Sam</Text></View>
    // </View>
  );
};
export default MatchProfile;