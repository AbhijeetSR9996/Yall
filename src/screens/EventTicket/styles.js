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
        //flex:1,
        flex:0.5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'transparent'
    },
    second_view: {
        flex:4,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'transparent',
        
    },
    third_view: {
        flex:1.5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'transparent',
        
    },
    card_view: {
        width: '90%',
        alignSelf: 'center',
        height: 418,
        alignItems: 'center',
        //justifyContent: 'space-around',
        color: '#e8e6e6',
        borderRadius: 20,
        // borderWidth:1,
        // borderStyle:'dashed',
        // borderColor:'#000000'
    },
    card_view2: {
        width: '90%',
        //alignSelf: 'center',
        height: 91,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e8e6e6',
        borderRadius: 20,
        // borderStyle:'dashed',
        // borderWidth:1 ,
        // borderColor:'#000000',
        //bottom:'22%'
        //marginTop:'-0.5%',
    },
    view1: {
        flex:1,
        backgroundColor:'transparent',
        alignItems:'stretch',
        justifyContent:'center',
        flexDirection:'row'
    },
    view2: {
        flex:1,
        backgroundColor:'transparent',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    view3: {
        flex:1,
        backgroundColor:'transparent',
        alignItems:'stretch',
        flexDirection:'column'
    },
    view4: {
        flex:1,
        backgroundColor:'transparent',
        flexDirection:'column',
        justifyContent:'center'
    },
    image: {
        marginVertical: '5%',
        width:300,
        borderRadius:20
    },
    image2: { 
        //width: 326,
        width: 306, 
        //width: '90%',
        height: 47, 
        marginVertical: '7%',
        marginHorizontal:'7%',
        //margin:'17%' 
    },
    main_text: { 
        fontFamily: "Bakbak One",
        color: "#000000",
        fontSize: 25,
        fontWeight: "400",
        //alignSelf: 'center',
        letterSpacing: -0.017,
        lineHeight: 35,
        bottom:'3%'
    },
    desc_text: {
        fontFamily: "Bakbak One",
        color: "#000000",
        fontSize: 20,
        fontWeight: "400",
        alignSelf: 'flex-start',
        letterSpacing: -0.017,
        lineHeight: 28,
    },
    text1: {
        fontFamily: "Inter",
        color: "#000000",
        fontSize: 20,
        fontWeight: "500",
        alignSelf: 'flex-start',
        letterSpacing: -0.017,
        lineHeight: 24,
    },
    text2: {
        fontFamily: "Inter",
        color: "#989898",
        fontSize: 15,
        fontWeight: "400",
        alignSelf: 'center',
        letterSpacing: -0.017,
        lineHeight: 18,
        //paddingLeft:'5%',
        paddingLeft:'0%',
    },
    text2a: {
        fontFamily: "Inter",
        color: "#989898",
        fontSize: 15,
        fontWeight: "400",
        alignSelf: 'center',
        letterSpacing: -0.017,
        lineHeight: 18,
        //paddingLeft:'3%',
        paddingLeft:'0%',
        bottom:'8%',
    },
    text3: {
        fontFamily: "Inter",
        color: "#000000",
        fontSize: 20,
        fontWeight: "500",
        alignSelf: 'center',
        letterSpacing: -0.017,
        lineHeight: 24,
        paddingLeft:'35%',
    },
    text3a: {
        fontFamily: "Inter",
        color: "#000000",
        fontSize: 20,
        fontWeight: "500",
        alignSelf: 'flex-end',
        letterSpacing: -0.017,
        lineHeight: 24,
        //paddingLeft:'5%',
        //paddingLeft:'35%',
        //left: '6%',
        bottom:'6%',
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