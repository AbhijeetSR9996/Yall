import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Screen4 = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>I am Screen4</Text>
    </View>
  )
}

export default Screen4

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
