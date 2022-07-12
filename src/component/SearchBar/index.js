import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import { s } from "react-native-size-matters";
import styles from "./styles";
import { Search } from "../../../assets/svgs";

const SearchBar = ({ title, style, props, onChangeInput, onPressSearch, inputText }) => {

    
    return (
        <View style={{...styles.container, ...style}}>

            {/* <Text style={Styles.title}>{title}</Text> */}
            <TextInput
                placeholder={title}
                style={{ ...styles.textInput }}
                {...props}
                onChangeText={onChangeInput}
                caretHidden={false}
            />
            <TouchableOpacity onPress={() => onPressSearch(inputText)}>
                <Search source={require("../../../assets/images/glass.png")} name="search-outline" size={s(20)} color="#AFAFAF" />
            </TouchableOpacity>

        </View>
    );
};

export default SearchBar;
