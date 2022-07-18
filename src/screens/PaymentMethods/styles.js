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
        flexDirection:'column'
    },
    other_view: {
        borderBottomColor:'black',
        borderBottomWidth:0.5,
        marginTop:'5%'
    },
    scrollview: { 
        backgroundColor: 'transparent', 
        maxHeight: '35%', 
        maxWidth: '100%', 
    },
    container_view: {
        backgroundColor:'transparent',
        //height: height * 0.2,
        //width: width * 0.2,
        width:76,
        height:169,
        justifyContent:'center',
        position:'relative',
        marginVertical:'3%',
        left:'10%',
        borderRadius:20
    },
    container_view2: {
        backgroundColor:'transparent',
        //height: height * 0.2,
        //width: width * 0.6,
        width:249,
        height:169,
        justifyContent:'center',
        position:'relative',
        marginVertical:'3%',
        left:'20%'
    },
    container_view3: {
        backgroundColor:'transparent',
        // height: height * 0.2,
        // width: width * 0.6,
        width:249,
        height:169,
        justifyContent:'center',
        position:'relative',
        marginVertical:'3%',
        left:'30%'
    },
    container_view4: {
        backgroundColor:'transparent',
        // height: height * 0.2,
        // width: width * 0.6,
        width:249,
        height:169,
        justifyContent:'center',
        position:'relative',
        marginVertical:'3%',
        left:'40%'
    },
    icon_view: {
        marginLeft:'-70%',
        backgroundColor:'transparent',
        height:'20%',
        width:'15%',
        position:'relative',
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection:'column',
        bottom:'15%'
    },
    anothericon_view: {
        borderColor:'#DCC7E1',
        backgroundColor:'#F4F4F4',
        borderWidth:0.5,
        //height:'20%',
        height:45,
        //width:'10%',
        width:49,
        //borderRadius:10,
        borderRadius:18,
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'5%',
        position:'absolute'
    },
    dots_view: {
        backgroundColor:'transparent',
        height:'8%',
        width:'67%',
        position:'relative',
        marginLeft:'-16%',
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection:'column',
        bottom:'8%'
    },
    dot1: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute'
    },
    dot2: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'7%'
    },
    dot3: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'14%'
    },
    dot4: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'21%'
    },
    dot5: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'35%'
    },
    dot6: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'42%'
    },
    dot7: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'49%'
    },
    dot8: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'56%'
    },
    dot9: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'70%'
    },
    dot10: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'77%'
    },
    dot11: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'84%'
    },
    dot12: {
        backgroundColor:'#FFFFFF',
        height:6,
        width:6,
        borderRadius:3,
        position:'absolute',
        left:'91%'
    },
    payment_box: {
        marginBottom: '-32%',
        width: width,
        //height: height * 0.2,
        height: height * 0.3,
        backgroundColor:'#DCC7E1',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginHorizontal:'0%'
    },
    text_view: {
        display:"flex",
        flexDirection:'row',
        height:'8%',
        width:width * 0.7,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'7%',
        //position:'relative',
        marginTop:'10%'
    },
    payment_buttonview: {
        width: width * 0.5,
        left: 10,
        top: 8,
        borderWidth: 1,
        borderRightWidth: 0,
        height: height * 0.07,
        alignSelf: 'center',
        backgroundColor: '#DCC7E1',
        position: 'relative', 
    },
    payments_view: {
        backgroundColor:'transparent',
        display:'flex',
        top:'3%',
        width: width, 
        height: height * 0.5,
    },
    big_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '-10%',
        marginLeft:'15%',
        //letterSpacing: '-1.7%',
        letterSpacing: -0.017,
        width: width * 0.7 
    },
    small_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '0%',
        marginLeft:'10%',
        //letterSpacing: '-1.7%',
        letterSpacing: -0.017,
        width: width * 0.7 
    },
    icon_text: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginTop: '5%',
        marginLeft:'10%',
    },
    payment_optiontext1: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginVertical:'-13%',
        letterSpacing: -0.017,
    },
    payment_optiontext2: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginVertical:'-20%',
        letterSpacing: -0.017,
    },
    payment_optiontext3: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginVertical:'-15%',
        letterSpacing: -0.017,
    },
    payment_optiontext4: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "700",
        marginVertical:'-25%',
        letterSpacing: -0.017,
    },
    right_container_btn:{
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'#AD5DD7',
        backgroundColor:'transparent',
        borderRadius: 20,
        marginTop: '30%',
        //height: height * 0.2,
        //width: width * 0.2,
        width:249,
        height:169,
        position:'absolute'
    },  
    icon: {
        color:'#FFFFFF',
        fontSize:40,
        width:36,
        height:36,
        textAlign:'center'
    },
    icon1: {
        backgroundColor:'#FF001F',
        height:20,
        width:20,
        borderRadius:10,
        position:'absolute'
    },
    icon2: {
        backgroundColor:'#F9AB32',
        height:20,
        width:20,
        borderRadius:10,
        marginLeft:'0%',
        position:'absolute',
        left:'30%'
    },
    payment_buttonicon: {
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
    payment_text: {
        display:"flex",
        flexDirection:'row',
        height:'50%',
        width:width * 0.4,
        backgroundColor:'transparent',
        alignItems:'flex-start',
        justifyContent:'space-between',
        position:'relative',
        marginTop:'5%'
    },
    payment_button: { 
        //marginTop: '-18%',
        marginTop: '-28%',
        marginLeft:'43%', 
        width: width * 0.5 ,
        height: height * 0.07,
        borderWidth: 1,
    },
    payment_buttontext: {
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'Bakbak one-Regular',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        right: '10%',
    },

})