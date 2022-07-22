import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon2 from "react-native-vector-icons/EvilIcons";

const Discover = ({ navigation }) => {
    const onPressSearch = () => {
        return;
    };


    return (
        <SafeAreaView style={styles.main_container}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.letf_arrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchBar
                        title="Type location"
                        onPressSearch={onPressSearch}
                    />
                </View>
                <View style={styles.discover_second_container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('JoinParty')}>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                        <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                        <Text style={styles.discover_sub_title_text}>Discover</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover;