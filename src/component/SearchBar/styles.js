import { StyleSheet, Platform} from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: s(10),
        borderWidth: s(3),
        borderColor: "#E0DFE1",
        width: "90%",
        borderRadius: s(8),
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: Platform.OS == "ios" ? ms(10) : ms(0)
    },
    title: {
        color: "#AFAFAF",
        fontSize: s(13),
    },
    textInput: {
        flex: 1,
        fontSize: s(16),
        color: "rgba(0,0,0,0.8)",
    },
});