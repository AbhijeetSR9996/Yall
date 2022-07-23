import {StyleSheet} from 'react-native';
import React from 'react';
//import Edit from '../../src/screens/EditProfile/edit';
import Discover from '../../src/screens/Discover';

const Screen2 = () => {
  return <Discover/>
};

export default Screen2;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000025',
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
