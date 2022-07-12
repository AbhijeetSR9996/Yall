import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { s } from "react-native-size-matters";
import styles from "./styles";

const SearchBar = (props) => {

    const { title, style, onChangeInput, onPressSearch, inputText, LeftIcon , ...restProps} = props
    return (
        <View style={{...styles.container, ...style}}>
            <TouchableOpacity onPress={() => onPressSearch(inputText)}>
                <Icon name="location"
                size={s(30)}
                ></Icon>
  </TouchableOpacity>
            <TextInput
                placeholder={title}
                style={{ ...styles.text_input }}
                onChangeText={onChangeInput}
                caretHidden={false}
                {...restProps}
            />
        </View>
    );
};

export default SearchBar;
