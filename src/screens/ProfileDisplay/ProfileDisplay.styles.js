import React from 'react';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

export const ProfileDisplayStyles = {
  main:{
    width: width, 
    height: height,
    backgroundColor:'white',
},
  container:{
    width: width, 
    height: 40, 
    top: 5, 
},
container2:{
    width: width, 
    height: height/1.2, 
    top: 10, 
    backgroundColor:'green',
    position:'relative',
    zIndex:0
},
itemcontainer:{
    width: width, 
    height: 306, 
    backgroundColor:'white',
    position:'relative'
},
infocontainer:{
    width: 315, 
    height: 66,
    left:20, 
    bottom:150,
    backgroundColor:'white',
    position:'relative',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderWidth:2,
    shadowColor:'black',
    shadowOffset:{width:-2,height:10},
    shadowOpacity:0.2,
    shadowRadius:3,
},
infoview:{
    width: 65, 
    height: 62, 
    backgroundColor:'#f9dfff',
    position:'relative',
    borderTopLeftRadius:18,
    alignItems:'space-between',
    justifyContent:'center',
    borderWidth:0.5,
},
infoview2:{
    width: 85, 
    height: 62,
    left:60, 
    backgroundColor:'#f9dfff',
    position:'absolute',
    alignItems:'space-between',
    justifyContent:'center',
    borderWidth:0.5,
},
infoview3:{
    width: 90, 
    height: 62, 
    right:80,
    backgroundColor:'#f9dfff',
    position:'absolute',
    alignItems:'space-between',
    justifyContent:'center',
    borderWidth:0.5,
},
infoview4:{
    width: 80, 
    height: 62, 
    right:0,
    backgroundColor:'#f9dfff',
    position:'absolute',
    borderTopRightRadius:18,
    alignItems:'space-between',
    justifyContent:'center',
    borderWidth:0.5,
},
  text:{
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 25,
    lineHeight: 35,
},
};
