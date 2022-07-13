import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from "react-native-vector-icons/EvilIcons";

const PaymentMethods = ({ navigation }) => {

    return (
        <SafeAreaView >
            <View style={styles.main_view}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" style={styles.left_arrow} />
                </TouchableOpacity>
            </View>
                <Text style={styles.big_text}>Payment </Text>
                <TouchableOpacity style={styles.right_container_btn}>
                    <Text style={styles.right_btn}><Icon name="plus" style={styles.icon} /></Text>
                </TouchableOpacity>

                <Text style={styles.small_text}>Other Payment Methods </Text>
                <Text style={styles.icon_text}><Icon name="credit-card" /> Credit / Debit Card</Text>                
                <Text style={styles.icon_text}><Icon name="bank" /> Net Banking</Text>                  
                <Text style={styles.icon_text}><Icon name="google-wallet" /> Other Wallets</Text>
 
                </View>
        </SafeAreaView>
    )
}

export default PaymentMethods;