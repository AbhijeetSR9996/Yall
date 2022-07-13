import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    left_arrow: {
        fontSize: 50,
        color: '#AD5DD7',
        fontWeight: "200",
        marginLeft:'5%'
    },
    main_view: {
        width: width,
        height: height,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    big_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '-10%',
        marginLeft:'15%',
        letterSpacing: -1,
        width: width * 0.7 
    },
    small_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '5%',
        marginLeft:'5%',
        width: width * 0.7 
    },
    icon_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '5%',
        marginLeft:'10%',
    },
    right_container_btn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#AD5DD7',
        borderRadius: 20,
        marginTop: '5%',
        height: height * 0.2,
        width: width * 0.2,
        marginLeft: '5%',         
    },
    right_btn:{
        color: '#000000',
    },  
    icon: {
        color:'#FFFFFF',
        fontSize:50
    },

})