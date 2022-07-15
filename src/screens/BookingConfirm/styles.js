import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    image: {
        position:'absolute'
    },
    left_arrow: {
        fontSize: 50,
        //color: '#AD5DD7',
        color: 'transparent',
        fontWeight: "200",
        alignSelf:'center',
        marginTop:'40%'
    },
    main_view: {
        width: width,
        height: height,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    main_text: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "700",
        marginTop: '10%',
        marginHorizontal: '20%',
        letterSpacing: -1.7,
        width: width * 0.7, 
    },
    desc_text: {        
        color: "#000000",
        fontSize: 15,
        fontWeight: "400",
        marginTop: '5%',
        marginHorizontal: '5%',
        //marginLeft:'0%',
        letterSpacing: -1.7,
        //width: width * 0.8,
        width: 324,
        height: 54,
        color:'#AAAAAA',
        //alignSelf:'center',
        textAlign:'center',
        lineHeight:18 
    },
    button1: {
        marginTop:'-40%'
    },
    button2: {
        marginTop:'10%'
    },
    icons: {
        width:273.98,
        height:204.07,
        marginHorizontal:'10%',
        marginTop:'10%',
        top:'15%'
    },
});