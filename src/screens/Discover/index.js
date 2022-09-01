import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from "../../component/SearchBar";
import Icon2 from "react-native-vector-icons/EvilIcons";
import { getWeeklyEvents } from '../../api/events';
import { S3_EVENTS_FOLDER } from '../../services/constant';
import { getS3Url } from '../../services/helper';

const Discover = ({ navigation }) => {
    const onPressSearch = () => {
        return;
    };

    const [discoverevents, setDiscoverEvents] = useState([]);

    useEffect(() => {
        getWeeklyEvents()
            .then(res => setDiscoverEvents(res.data))
            .catch(err => console.log(err, 'Something went wrong!'));
    }, []);

    console.log(discoverevents);

    return (
        <SafeAreaView style={styles.main_container}>

            <View >
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

                <FlatList data={discoverevents}
                    renderItem={({ item }) => (<TouchableOpacity key={item.id} onPress={() => navigation.navigate('JoinParty', { slugUrl: item.slug_url })}
                        style={{ marginVertical: '2%', left: '0.5%' }}>
                        <ImageBackground
                            source={{ uri: getS3Url(S3_EVENTS_FOLDER, item.cover_banner_url) }}
                            style={styles.image_size}
                            resizeMode="stretch"
                        >
                            <Text style={styles.discover_top_heading_text}>Music Mode</Text>
                            <Text style={styles.discover_title_text}>Add Your Anthem!</Text>
                            <Text style={styles.discover_sub_title_text}>Discover</Text>
                        </ImageBackground>

                    </TouchableOpacity>)}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2} />

            </View>


        </SafeAreaView>
    )
}

export default Discover;