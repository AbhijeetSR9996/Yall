import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer:{
        backgroundColor:'#E5E5E5',
        flex:1,
    },
    firstContainer:{
        flex:1,
        width:width,
        paddingTop:50,
        paddingBottom:0,
        paddingHorizontal:'6%'
    },
    weekendEvent:{
        width:width*0.88
    },
    sceondContainer:{
        flex:1,
        width:width,
        // paddingTop:50,
        paddingHorizontal:'6%'
    },
    discoverDates:{
        width:width*0.88
    }
})