import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfileDisplay from '../../src/screens/ProfileDisplay/ProfileDisplay';
import Events from '../../src/screens/Events'

const Screen3 = () => {
  return (
    // <View style={styles.screen}>
    //   <Text style={styles.text}>I am Screen3</Text>
    // </View>
        // <ProfileDisplay />
        <Events />
  )
}

export default Screen3

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
