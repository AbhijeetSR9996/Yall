import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles  from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SearchBar from "../../component/SearchBar";

const Discover = ({ navigation }) => {
    // const onPressSearch = () => {
	// 	return;
	// };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {/* <Icon name="angle-left" style={styles.letfArrow} /> */}
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <View>
            {/* <SearchBar
				title="What are you looking for ?"
				onPressSearch={onPressSearch}
			/> */}
            </View>
        </View>
    )
}

export default Discover;