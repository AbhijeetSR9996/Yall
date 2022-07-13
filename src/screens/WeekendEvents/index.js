import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon1 from 'react-native-vector-icons/Feather';

const WeekendEvent = ({ navigation }) => {
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
                <View style={styles.weekend_container}>
                <ImageBackground
                        source={require('../../../assets/images/weekend.png')}
                        style={styles.image_size}
                        resizeMode="stretch"
                    >
                        
                        <Text style={styles.image_inner_text}><Icon name="calendar" /> 09 May 2022</Text>
                        <Text style={styles.image_inner_text}><Icon1 name="watch" /> 09:00 PM</Text>
                    </ImageBackground>
                    <View style={styles.right_container}>
                        <Text style={styles.right_heading}>Wensday Love Night</Text>
                        <TouchableOpacity style={styles.right_container_btn}>
                            <Text style={styles.right_btn}>Know More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeekendEvent;