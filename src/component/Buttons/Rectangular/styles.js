import { StyleSheet } from 'react-native';
import { width, height } from '../../../services/helper';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundContainer: {
        position: 'absolute',
    },

    logo: {
        // position: 'absolute',
        //top: 170,
        //top: '147%',
        marginTop: '90%',
        marginBottom: '-70%',
        alignSelf: 'center',
    },

    headline: {
        //fontFamily:'Inter',
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 15,
        //width: width * 0.8,
        width: 319,
        fontFamily: 'Inter',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        top: 130,
        lineHeight: 18,
        letterSpacing: -0.017
    },
    getStartedButtonMain: {
        alignItems: 'center',
        alignSelf: 'center',
        //top: 180,
    },
    touchableStarted: {
        width: width * 0.8,
        height: height * 0.07,
        borderWidth: 1,
        alignSelf: 'center',

    },
    borderView: {
        left: 10,
        top: 8,
        width: width * 0.8,
        borderWidth: 1,
        borderRightWidth: 0,
        height: height * 0.07,
        //alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#DCC7E1',
        position: 'relative',
    },
    buttonText: {
        fontWeight: '400',
        fontSize: 18,
        //fontFamily: 'Bakbak One',
        fontFamily: 'BakbakOneRegular',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        //paddingVertical: 10,
        paddingVertical: 13,
        right: '10%',
        lineHeight: 25,
        letterSpacing: -0.017
    },
    borderView1: {
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
    arrowIcon: {
        textAlign: 'center',
        alignSelf: 'center'
    },

});

export default Styles;
