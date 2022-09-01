import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    main_container: {
        backgroundColor: "#FFFFFF"
    },
    letf_arrow: {
        fontSize: 50,
        color: '#000000',
        marginLeft: 23,
        fontWeight: "200",
    },
    discover_second_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    main_container: {
        heigth: height
    },
    image_size: {
        width: width * 0.44,
        height: height * 0.30,
        margin: '3%'

    },
    discover_top_heading_text: {
        fontWeight: '800',
        fontSize: 30,
        lineHeight: 30,
        marginTop: "82%",
        //marginTop: "72%",
        marginLeft: "7%",
        marginRight: '10%',
        alignItems: 'center',
        letterSpacing: -1,
        color: "#FFFFFF",
        textTransform: 'uppercase',
    },
    discover_title_text: {
        color: "#FFF",
        marginLeft: "7%",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 12,
    },
    discover_sub_title_text: {
        fontWeight: "400",
        fontSize: 8,
        marginLeft: "7%",
        marginTop: "3%",
        lineHeight: 10,
        color: "#FFFFFF",
    }
})