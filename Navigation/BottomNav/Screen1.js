import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileDisplay from '../../src/screens/ProfileDisplay/index';

const Screen1 = ({ navigation }) => {
  return (
    <ProfileDisplay />
  )
}

export default Screen1

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000025'
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30
  },
  button: {
    backgroundColor: '#0275d8',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  }
})
