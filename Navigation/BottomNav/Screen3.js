import { StyleSheet } from 'react-native'
import React from 'react'
import Events from '../../src/screens/Events/index'

const Screen3 = () => {
  return  <Events /> 
};

export default Screen3;

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
  },    
});
