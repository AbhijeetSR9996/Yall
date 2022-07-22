import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    image_background: {
        backgroundColor: '#E5E5E5',
        //height:height,
        width:414,
        height:332,
    },
    left_arrow: {
        fontSize: 50,
        color: '#FFFFFF',
        fontWeight: "200",
        top:'-100%',
    },
    main_view: {
        flex: 1,
        width: width,
        paddingTop: 50,
        paddingBottom: 0,
        paddingHorizontal: '6%',
        height:height,
        
    },
    main_view2: {
        //marginTop:'20%',
        marginTop:'60%',
        //flex:1,
        width: width,
        //height: height * 0.75,
        height: height * 0.95,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignSelf:'center'
    },
    main_view3: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor:'#FFFFFF',
        marginHorizontal:20
    },
    big_text: {
        color: "#000000",
        fontSize: 30,
        fontWeight: "400",
        marginTop: '5%',
        marginLeft:'5%',
        letterSpacing: -1,
        //width: width * 0.7
        width:227 
    },
    small_text: {
        color: "#000000",
        fontSize: 12,
        fontWeight: "400",
        marginTop: '5%',
        marginLeft:'5%',
        width: width * 0.7 
    },
    small_text2: {
        color: "#000000",
        fontSize: 12,
        fontWeight: "400",
        marginTop: '5%',
        marginLeft:'5%',
        width: width * 0.9 
    },
    icon_text: {
        color: "#000000",
        fontSize: 12,
        fontWeight: "400",
        marginTop: '5%',
        marginLeft:'5%'
        
    },
    buttonContainer: {    
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'#FF0000',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#000000',
        backgroundColor: '#DCC7E1',
        width:91,
        marginLeft: '20%',
        bottom:'-30%',
    },
    buttonText: {
        fontSize: 15,
        color: '#000000'
    },
    buttonContainer2: {
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'#FF0000',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#000000',
        backgroundColor: '#DCC7E1',
        marginLeft: '55%',
        bottom:'20%',
        width:91
    },
    rectangularButton: {
        width: 10,
        position: 'absolute',
        alignSelf: 'center',
        //top: '73%',
        //marginTop:'65%'
        marginTop:'60%'
      },

})