import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    main_container: {
        backgroundColor: '#E5E5E5',
        height: height,
    },
    first_container: {
        flex: 1,
        width: width,
        paddingTop: 50,
        paddingBottom: 0,
        paddingHorizontal: '6%',
        height: height,
    },
    weekend_event: {
        width: width * 0.88,
        height: height * 0.4,
        //marginBottom: '7%'
    },
    weekend_text: {
        //fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 30,
        //marginTop: "68%",
        marginTop: "66%",
        marginLeft: '6.94%',
        marginBottom: '7.5%',
        marginRight: '40%',
        // display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.017,
        color: "#FFFFFF",
        textTransform: 'uppercase',
    },
    sceond_container: {
        flex: 1,
        width: width,
        //marginTop:"-8%",
        marginTop: "-12%",
        paddingHorizontal: '6%',
    },
    discover_dates: {
        width: width * 0.88,
        height: height * 0.4
    },
    discover_text: {
        //fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 30,
        //marginTop: '68%',
        marginTop: "66%",
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