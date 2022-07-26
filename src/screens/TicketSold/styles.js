import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    image_bg: {
        position:'absolute'
    },
    main_view: {
        flex:1,
        flexDirection:'column'    
    },
    first_view: {
        flex:3,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    second_view: {
        flex:1,
        width:'90%',
        //width:width - 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'transparent',
        //marginHorizontal:'2%'
        //marginLeft:'2%',
        //marginRight:'2%',
        marginHorizontal:'3%'
    },
    third_view: {
        flex:2.5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
        
    },
    fourth_view: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'transparent',
        
    },
    image: {
        width:273.98,
        height:204.07,
    },
    main_text: { 
        fontFamily: "Bakbak One",
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "400",
        alignSelf: 'center',
        letterSpacing: -0.017,
        lineHeight: 42,
        //paddingVertical:'5%'
    },
    desc_text: {
        fontFamily:'Inter',
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "400",
        letterSpacing: -0.017,
        width: 324,
        height: 54,
        alignSelf:'center',
        textAlign:'center',
        lineHeight:18
    },
    buttonContainer: {         
        width: width * 0.8 ,
        height: height * 0.07,
        borderWidth: 1,
    },
    buttonView: {
        left: 10,
        top: 8,
        width: width * 0.8,
        borderWidth: 1,
        borderRightWidth: 0,
        height: height * 0.07,
        alignSelf: 'center',
        backgroundColor: '#DCC7E1',
        position: 'relative', 
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'Bakbak one-Regular',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        right: '10%',
    },
    buttonIcon: {
        width: width * 0.15,
        borderWidth: 1,
        height: '104%',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCC7E1',
        position: 'absolute',
        marginVertical: -1,
        },



});