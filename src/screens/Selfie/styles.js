import { StyleSheet } from 'react-native';
import { width, height } from '../../services/helper';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        //alignItems: 'stretch',
        justifyContent: 'center'
    },
    card_box: {
        width: 310,
        top: '-10%',
        height: 310,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e8e6e6',
        borderWidth: 10,
        alignSelf: 'center',
        //marginHorizontal: '0%',
        left: 0,
        borderColor: '#C4C4C4',
        marginBottom: 30,
    },
    button: {
        width: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: '90%',
    },
    button_container: {
        top: '12%',
        alignSelf: 'center',
        width: width * 0.8,
        height: height * 0.07,
        borderWidth: 1,
        alignSelf: 'center',
        right: '2%'
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
        fontWeight: '900',
        fontSize: 18,
        //fontFamily: 'Bakbak One',
        fontFamily: 'BakbakOneRegular',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        //paddingVertical: 10,
        //paddingVertical: 13,
        top: '30.3%',
        right: '25%',
        //right: '20%',
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

})

export default Styles;

