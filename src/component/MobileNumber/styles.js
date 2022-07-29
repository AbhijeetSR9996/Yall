import { StyleSheet } from 'react-native';
import { height, width } from '../../services/helper';


export const Styles = StyleSheet.create({
    mainView: { width: 214, height: 70, top: 85, left: 21 },
    text: {
        color: '#000000',
        fontFamily: 'BakbakOneRegular',
        fontWeight: '800',
        fontSize: 25,
        lineHeight: 35,
    },
    phoneNumber: { flexDirection: 'row', top: 120 },
    dropdown: {
        left: 22,
        width: 70,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        color: '#000000',
        height: 40,
        top: -10,
    },

    placeholderStyle: {
        fontSize: 15,
        alignItems: 'center',
        fontWeight: '400',
        height: 18,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: '#000000',
    },
    selectedTextStyle: {
        color: '#000000',
        textAlign: 'center',
    },

});
