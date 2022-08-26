import { StyleSheet, Platform } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        backgroundColor: "#D3D3D3",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: s(10),
        width: "90%",
        borderRadius: 100,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: Platform.OS == "ios" ? ms(10) : ms(0)
    },
    title: {
        color: "#808080",
        fontSize: s(13),
    },
    text_input: {
        flex: 1,
        fontSize: s(16),
        color: "rgba(0,0,0,0.8)",

    },
});