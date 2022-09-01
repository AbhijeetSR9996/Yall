import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    text: {
        color: '#848484',
        fontFamily: 'Inter',

        fontSize: 15,
        lineHeight: 18,

        letterSpacing: -0.017,
    },
    img2: {

        width: width / 1.15,
        height: height / 2.5,

        borderRadius: 20,

    },
    textInput1: {
        borderBottomWidth: 1.5,

        width: 309,
        height: 69,
        fontWeight: '500',
        color: '#000000',
        fontSize: 18,
        elevation: 5,
        backgroundColor: '#FFFEFC',
        paddingTop: 20,

        borderRadius: 20,
        paddingLeft: 20,

        borderBottomWidth: 0.1,

    },
    rect: {
        width: 10,

    },

};
