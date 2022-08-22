import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    main_container: {
        backgroundColor: "#FFFFFF",
        heigth: height
    },
    letf_arrow: {
        fontSize: 50,
        color: '#000000',
        marginLeft: 23,
        fontWeight: "200",
    },
    weekend_container: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
    image_size: {
        width: width * 0.55,
        height: height * 0.20,
        margin: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: "3%",
    },
    image_inner_text: {
        fontFamily: 'Inter',
        color: "#FFFFFF",
        fontSize: 10,
        //fontWeight: "500",
        marginTop: '70%'
    },
    right_container: {
        display: 'flex',
        justifyContent: 'center',
    },
    right_heading: {
        fontFamily: 'BakbakOne-Regular',
        //fontWeight: '400',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -1,
        flexWrap: 'wrap',
        display: 'flex',
        color: '#232323',
        width: width * 0.4,
        paddingLeft: '5%',
        marginLeft: '-9%'
    },
    right_container_btn: {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#FF0000',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#000000',
        backgroundColor: '#DCC7E1',
        marginTop: '5%',
        width: width * 0.3,
        marginLeft: '10%',
        marginLeft: '5%'
    },
    right_btn: {
        fontFamily: 'Inter',
        fontSize: 15,
        color: '#000000',
        bottom: '1%'
    },
})