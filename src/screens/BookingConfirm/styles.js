import { StyleSheet } from 'react-native';
import { height, width } from '../../services/helper';

export default StyleSheet.create({
    image_bg: {
        position: 'absolute'
    },
    main_view: {
        flex: 1,
        flexDirection: 'column'
    },
    first_view: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: "center",
        backgroundColor: 'transparent'
    },
    second_view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: 'transparent'
    },
    third_view: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: 'transparent'
    },
    image: {
        width: 273.98,
        height: 204.07,
    },
    main_text: {
        fontFamily: 'BakbakOne-Regular',
        color: "#000000",
        fontSize: 30,

        alignSelf: 'center',

        letterSpacing: -0.017,

    },
    desc_text: {
        fontFamily: 'Inter',
        fontSize: 15,

        letterSpacing: -0.017,

        width: '90%',
        height: 54,
        color: '#AAAAAA',
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 18
    },
    buttonContainer: {
        width: width * 0.8,
        height: height * 0.07,
        borderWidth: 1,
        right: '2%'
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

        fontSize: 18,
        fontFamily: 'BakbakOne-Regular',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',

        top: '30.3%',
        right: '27%',
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