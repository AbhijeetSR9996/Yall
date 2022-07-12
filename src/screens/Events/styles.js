import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#E5E5E5',
        flex: 1,
    },
    firstContainer: {
        flex: 1,
        width: width,
        paddingTop: 50,
        paddingBottom: 0,
        paddingHorizontal: '6%'
    },
    weekendEvent: {
        width: width * 0.88,
        height: height * 0.4,
    },
    weekendText: {
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 30,
        marginTop: "68%",
        marginLeft: '6.94%',
        marginBottom:'7.5%',
        marginRight: '40%',
        // display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.017,
        color: "#FFFFFF",
        textTransform: 'uppercase',
    },
    sceondContainer: {
        flex: 1,
        width: width,
        // paddingTop:50,
        paddingHorizontal: '6%'
    },
    discoverDates: {
        width: width * 0.88,
        height: height * 0.4
    },
    discoverText: {
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 30,
        marginTop: '68%',
        marginLeft: '6.95%',
        marginBottom: '7.5%',
        marginRight: '40%',
        // display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.017,
        color: "#FFFFFF",
        textTransform: 'uppercase',
    },
})