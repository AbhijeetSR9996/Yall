import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Screen5 = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>I am Screen5</Text>
    </View>
  )
}

export default Screen5

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
