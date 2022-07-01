import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfileDisplay from '../../src/screens/ProfileDisplay/ProfileDisplay';

const Screen2 = () => {
  return (
    // <View style={styles.screen}>
    //   <Text style={styles.text}>I am Screen2</Text>
    // </View>
        <ProfileDisplay/>
  )
}

export default Screen2

const styles = StyleSheet.create({
  screen:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000025'
  },
  text:{
    color:'#000',
    fontWeight:'700',
    fontSize:30
  }    
})
